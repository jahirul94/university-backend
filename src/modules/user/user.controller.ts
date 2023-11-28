import { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service";

const createStudent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { password, student: studentData } = req.body;

        // validating using zod
        // const zodParsedData = userValidation.parse(student)

        const result = await UserServices.createStudentIntoDB(password, studentData);
        res.status(200).json({
            success: true,
            message: "student is created successfully",
            data: result
        })
    } catch (error) {
        next(error)
    }

}

export const UserControllers = {
    createStudent
}