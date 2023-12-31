import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../app/Middlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post("/create-academic-semester",
    validateRequest(AcademicSemesterValidation.createAcademicSemesterValidations),
    AcademicSemesterControllers.createAcademicSemester)

router.get("/academic-semester", AcademicSemesterControllers.getAllAcademicSemester)




export const AcademicSemesterRoutes = router;
