import { Request, Response } from "express";
import { StudentServices } from "./student.service";


const getAllStudents = async (req: Request, res: Response) => {
    try {
        const result = await StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: "student are retrieved successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}

const getSingleStudents = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const result = await StudentServices.getSingleStudentsFromDB(id);
        res.status(200).json({
            success: true,
            message: "student are retrieved successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }
}





export const StudentController = {
    getAllStudents,
    getSingleStudents
}