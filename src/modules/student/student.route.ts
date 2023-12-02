import express from "express";
import { StudentController } from "./students.controller";
import validateRequest from "../../app/Middlewares/validateRequest";
import { studentValidationSchemas } from "./student.validation";

const router = express.Router();

router.get("/", StudentController.getAllStudents)
router.patch("/:studentId",
    validateRequest(studentValidationSchemas.updateStudentValidationSchema),
    StudentController.updateStudent)
    
router.delete("/:studentId", StudentController.deleteStudent)
router.get("/:studentId", StudentController.getSingleStudents)




export const StudentRoutes = router;
