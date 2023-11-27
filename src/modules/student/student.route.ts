import express from "express";
import { StudentController } from "./students.controller";

const router = express.Router();

router.post("/create-student", StudentController.createStudent)
router.get("/students" , StudentController.getAllStudents)
router.get("/:id" , StudentController.getSingleStudents)




export const StudentRoutes = router;
