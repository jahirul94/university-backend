import express from "express";
import { StudentController } from "./students.controller";

const router = express.Router();

router.get("/students" , StudentController.getAllStudents)
router.get("/:id" , StudentController.getSingleStudents)




export const StudentRoutes = router;
