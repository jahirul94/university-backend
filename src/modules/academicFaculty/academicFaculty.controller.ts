import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { AcademicFacultyServices } from "./academicFaculty.service";

const createAcademicFaculty = catchAsync(async (req, res) => {
    const data = req.body;
    const result = AcademicFacultyServices.createAcademicFacultyIntoDB(data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "academic faculty created successfully",
        data: result
    })
})

const getAllAcademicFaculties = catchAsync(async (req, res) => {
    const result = await AcademicFacultyServices.getAcademicFacultiesFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "academic faculties fetch successfully",
        data: result
    })
})

const getSingleAcademicFaculty = catchAsync(async (req, res) => {
    const id = req.params.facultyId;
    console.log(id);
    const result = await AcademicFacultyServices.getSingleAcademicFacultyFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "academic faculty fetch successfully",
        data: result
    })
})

const updateAcademicFaculty = catchAsync(async (req, res) => {
    const id = req.params.facultyId;
    const data = req.body;
    const result = await AcademicFacultyServices.updateAcademicFacultyIntoDB(id, data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "update faculty successfully",
        data: result
    })
})


export const AcademicFacultyController = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateAcademicFaculty
}