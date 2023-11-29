import httpStatus from "http-status";
import { UserServices } from "./user.service";
import sendResponse from "../../app/utils/sendResponse";
import catchAsync from "../../app/utils/catchAsync";


const createStudent = catchAsync(async (req, res) => {
    const { password, student: studentData } = req.body;
    
    const result = await UserServices.createStudentIntoDB(password, studentData);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "student created successfully",
        data: result
    })
})



export const UserControllers = {
    createStudent
}