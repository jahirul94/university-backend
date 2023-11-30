import { TAcademicDepartment } from "./academicDepartment.interface";
import { AcademicDepartment } from "./academicDepartment.model";

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
    const result = await AcademicDepartment.create(payload);
    return result;
}

const getAcademicDepartmentsFromDB = async () => {
    const result = await AcademicDepartment.find();
    return result;
}

const getSingleAcademicDepartmentFromDB = async (_id: string) => {
    const result = await AcademicDepartment.findById({ _id });
    return result;
}

const updateAcademicDepartmentIntoDB = async (id: string, payload: TAcademicDepartment) => {
    const result = await AcademicDepartment.findOneAndUpdate({ _id: id }, payload, { new: true });
    return result;
}


export const AcademicDepartmentServices = {
    createAcademicDepartmentIntoDB,
    updateAcademicDepartmentIntoDB,
    getAcademicDepartmentsFromDB,
    getSingleAcademicDepartmentFromDB
}