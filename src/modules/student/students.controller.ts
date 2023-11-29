/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import { StudentServices } from "./student.service";
import sendResponse from "../../app/utils/sendResponse";
import catchAsync from '../../app/utils/catchAsync';


// for catch error using promise

const getAllStudents = catchAsync(async (req, res) => {
    const result = await StudentServices.getAllStudentsFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "student is retrieved successfully",
        data: result
    })
})


const getSingleStudents = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await StudentServices.getSingleStudentsFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "student retrieved successfully",
        data: result
    })
})




export const StudentController = {
    getAllStudents,
    getSingleStudents
}