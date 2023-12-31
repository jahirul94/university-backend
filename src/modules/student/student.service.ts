import { Student } from './student.model';
import { TStudent } from "./student.interface";
import mongoose from 'mongoose';
import AppError from '../../app/error/appError';
import httpStatus from 'http-status';
import { User } from '../user/user.model';
import QueryBuilder from '../../app/builder/QueryBuilder';
import { studentSearchableFields } from './student.constants';

const createStudentIntoDB = async (studentData: TStudent) => {
    if (await Student.isUserExists(studentData.id)) {
        throw new Error("User already exists")
    }

    const result = await Student.create(studentData);
    return result;
}


const getAllStudentsFromDB = async (query: Record<string, unknown>) => {

    // let searchTerm = "";
    // if (query?.searchTerm) {
    //     searchTerm = query.searchTerm as string;
    // }

    // const excludeFields = ["searchTerm", "sort", "limit", "page", "fields"]

    // excludeFields.forEach(el => delete queryObj[el]);

    // const searchQuery = Student.find({
    //     $or: studentSearchableFields.map((field) => ({
    //         [field]: { $regex: searchTerm, $options: 'i' }
    //     }))
    // })

    // const filterQuery = searchQuery.find(queryObj)
    //     .populate("admissionSemester")
    //     .populate({
    //         path: "academicDepartment",
    //         populate: {
    //             path: "academicFaculty"
    //         }
    //     });

    // let sort = "-createdAt"

    // if (query.sort) {
    //     sort = query.sort as string
    // }
    // const sortQuery = filterQuery.sort(sort);

    // let page = 1;
    // let limit = 1;
    // let skip = 0;

    // if (query.limit) {
    //     limit = Number(query.limit)
    // }

    // if (query.page) {
    //     page = Number(query.page)
    //     skip = (page - 1) * limit;
    // }

    // const paginateQuery = sortQuery.skip(skip);
    // const limitQuery = paginateQuery.limit(limit)

    // let fields = "-__v";
    // if (query.fields) {
    //     fields = (query.fields as string).split(",").join(" ");
    // }

    // const fieldQuery = await limitQuery.select(fields)

    const studentQuery = new QueryBuilder(Student.find().populate("admissionSemester").populate({
        path: "academicDepartment",
        populate: {
            path: "academicFaculty"
        }
    }), query).search(studentSearchableFields).filter().sort().paginate().fields();

    const result = await studentQuery.modelQuery;

    return result;
}




const getSingleStudentsFromDB = async (id: string) => {
    const result = await Student.findOne({ id }).populate("admissionSemester").populate({
        path: "academicDepartment",
        populate: {
            path: "academicFaculty"
        }
    });
    return result;
}

const updateStudentFromDB = async (id: string, payload: Partial<TStudent>) => {
    const { name, guardian, localGuardian, ...remainingStudentData } = payload;
    const modifiedUpdatedData: Record<string, unknown> = { ...remainingStudentData }

    if (name && Object.keys(name).length) {
        for (const [key, value] of Object.entries(name)) {
            modifiedUpdatedData[`name.${key}`] = value;
        }
    }

    if (guardian && Object.keys(guardian).length) {
        for (const [key, value] of Object.entries(guardian)) {
            modifiedUpdatedData[`guardian.${key}`] = value;
        }
    }

    if (localGuardian && Object.keys(localGuardian).length) {
        for (const [key, value] of Object.entries(localGuardian)) {
            modifiedUpdatedData[`localGuardian.${key}`] = value;
        }
    }
    const result = await Student.findOneAndUpdate({ id },
        modifiedUpdatedData,
        { new: true, runValidators: true })
    return result;
}






// delete students
const deleteStudentFromDB = async (id: string) => {

    const session = await mongoose.startSession();

    try {
        session.startTransaction()
        const result = await Student.findOneAndUpdate({ id }, { isDeleted: true }, { new: true, session })

        if (!result) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete Student")
        }

        const deletedUser = await User.findOneAndUpdate({ id }, { isDeleted: true }, { new: true, session })

        if (!deletedUser) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete user")
        }

        await session.commitTransaction();
        await session.endSession();


        return result;

    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to delete students")
    }


}



export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentsFromDB,
    deleteStudentFromDB,
    updateStudentFromDB
}