import httpStatus from 'http-status';
import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import sendResponse from "../../app/utils/sendResponse";


const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "student is retrieved successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }
}

const getSingleStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const result = await StudentServices.getSingleStudentsFromDB(id);
        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "student retrieved successfully",
            data: result
        })
    } catch (error) {
        next(error);
    }
}





export const StudentController = {
    getAllStudents,
    getSingleStudents
}