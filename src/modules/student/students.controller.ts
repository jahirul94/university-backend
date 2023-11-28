import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";


const getAllStudents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "student are retrieved successfully",
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
        res.status(200).json({
            success: true,
            message: "student are retrieved successfully",
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