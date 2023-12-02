import config from "../../app/config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { generatedStudentId } from "./user.utils";
import mongoose from "mongoose";
import AppError from "../../app/error/appError";
import httpStatus from "http-status";


const createStudentIntoDB = async (password: string, payload: TStudent) => {
    const userData: Partial<TUser> = {};

    userData.password = password || (config.default_password as string);
    userData.role = "student"



    // automatically generated id 
    const admissionSemester = await AcademicSemester.findById(
        payload.admissionSemester,
    );

    const session = await mongoose.startSession();

    try {
        session.startTransaction();

        //set  generated id
        userData.id = await generatedStudentId(admissionSemester);

        const newUser = await User.create([userData], { session });
        //create a student
        if (!newUser.length) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user")
        }


        payload.id = newUser[0].id;
        payload.user = newUser[0]._id;

        const newStudent = await Student.create([payload], { session });
        if (!newStudent) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user")
        }
        await session.commitTransaction();
        await session.endSession();

        return newStudent;

    } catch (error) {
        await session.abortTransaction();
        await session.endSession()
    }
}

export const UserServices = {
    createStudentIntoDB
}