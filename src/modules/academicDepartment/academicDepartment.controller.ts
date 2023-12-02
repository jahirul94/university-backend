import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicDepartmentServices } from "./academicDepartment.service";
import sendResponse from "../../app/utils/sendResponse";

const createAcademicDepartment = catchAsync(async (req, res) => {
    const data = req.body;
    const result = AcademicDepartmentServices.createAcademicDepartmentIntoDB(data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic Department created successfully",
        data: result
    })
})

const getAllAcademicDepartments = catchAsync(async (req, res) => {
    const result = await AcademicDepartmentServices.getAcademicDepartmentsFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic Departments fetch successfully",
        data: result
    })
})

const getSingleAcademicDepartment = catchAsync(async (req, res) => {
    const id = req.params.departmentId;
    const result = await AcademicDepartmentServices.getSingleAcademicDepartmentFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic Department fetch successfully",
        data: result
    })
})

const updateAcademicDepartment = catchAsync(async (req, res) => {
    const id = req.params.departmentId;
    const data = req.body;
    const result = await AcademicDepartmentServices.updateAcademicDepartmentIntoDB(id, data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "update department successfully",
        data: result
    })
})
 

export const AcademicFacultyController = {
    createAcademicDepartment,
    getAllAcademicDepartments,
    getSingleAcademicDepartment,
    updateAcademicDepartment
}