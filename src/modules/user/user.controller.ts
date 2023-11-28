import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";
import sendResponse from "../../app/utils/sendResponse";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;

        // validating using zod
        // const zodParsedData = userValidation.parse(student)

        const result = await UserServices.createStudentIntoDB(password, studentData);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "student created successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }

}

export const UserControllers = {
    createStudent
}