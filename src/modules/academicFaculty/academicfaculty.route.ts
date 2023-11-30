import { AcademicFacultyController } from './academicFaculty.controller';
import express from "express";
import validateRequest from "../../app/Middlewares/validateRequest";
import { AcademicFacultyValidation } from './academicFaculty.validation';

const router = express.Router();

router.post("/create-academic-faculty", validateRequest(AcademicFacultyValidation.createAcademicFacultyValidateSchema), AcademicFacultyController.createAcademicFaculty);

router.get("/:facultyId", AcademicFacultyController.getSingleAcademicFaculty);

router.get("/", AcademicFacultyController.getAllAcademicFaculties)

router.patch("/:facultyId", AcademicFacultyController.updateAcademicFaculty);

export const AcademicFacultiesRoutes = router;
