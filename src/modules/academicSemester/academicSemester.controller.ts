import httpStatus from "http-status";
import sendResponse from "../../app/utils/sendResponse";
import catchAsync from "../../app/utils/catchAsync";
import { AcademicSemesterServices } from "./academicSemester.service";


const createAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(req.body)
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic Semester is created successfully",
        data: result
    })
})

const getAllAcademicSemester = catchAsync(async (req, res) => {
    const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Academic Semester fetched successfully",
        data: result
    })
})



export const AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester
}