/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import { StudentServices } from "./student.service";
import sendResponse from "../../app/utils/sendResponse";
import catchAsync from '../../app/utils/catchAsync';


// for catch error using promise

const getAllStudents = catchAsync(async (req, res) => {
    const result = await StudentServices.getAllStudentsFromDB(req?.query);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "student is retrieved successfully",
        data: result
    })
})


const getSingleStudents = catchAsync(async (req, res) => {
    const id = req.params.studentId;
    const result = await StudentServices.getSingleStudentsFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "student retrieved successfully",
        data: result
    })
})

const deleteStudent = catchAsync(async (req, res) => {
    const id = req.params.studentId;
    const result = await StudentServices.deleteStudentFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "student delete successfully",
        data: result
    })
});


const updateStudent = catchAsync(async (req, res) => {
    const id = req.params.studentId;
    const { student } = req.body;
    const result = await StudentServices.updateStudentFromDB(id, student);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "student data updated successfully",
        data: result
    })
})






export const StudentController = {
    getAllStudents,
    getSingleStudents,
    deleteStudent,
    updateStudent
}