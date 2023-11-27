import { Request, Response } from "express";
import { StudentServices } from "./student.service";
import studentValidationSchema from "./student.validation";


const createStudent = async (req: Request, res: Response) => {
    try {
        const student = req.body.student;
        // validating using zod
        const zodParsedData = studentValidationSchema.parse(student)
        console.log(zodParsedData);


        // validation using Joi 
        // const { error } = studentSchemaJoi.validate(student);

        //    will call service function to send this data 
        const result = await StudentServices.createStudentIntoDB(student);
        res.status(200).json({
            success: true,
            message: "student is created successfully",
            data: result
        })
    } catch (error) {
        console.log(error);
    }

}


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
    createStudent,
    getAllStudents,
    getSingleStudents
}