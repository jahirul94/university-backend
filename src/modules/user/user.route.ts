import express from "express";
import { UserControllers } from "./user.controller";
import { studentValidationSchemas } from "../student/student.validation";
import validateRequest from "../../app/Middlewares/validateRequest";


const router = express.Router();


router.post("/create-student",
    validateRequest(studentValidationSchemas.createStudentValidationSchema),
    UserControllers.createStudent);

export const UsersRoutes = router;
