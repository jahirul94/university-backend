import express from "express";
import { AcademicFacultyController } from "./academicDepartment.controller";
import validateRequest from "../../app/Middlewares/validateRequest";
import { AcademicDepartmentValidation } from "./academicDepartment.validation";

const router = express.Router();

router.post("/create-academic-department", validateRequest(AcademicDepartmentValidation.createAcademicDepartmentValidateSchema), AcademicFacultyController.createAcademicDepartment);

router.patch("/:departmentId", validateRequest(AcademicDepartmentValidation.updateAcademicDepartmentValidateSchema), AcademicFacultyController.updateAcademicDepartment);

router.get("/", AcademicFacultyController.getAllAcademicDepartments);
router.get("/:departmentId", AcademicFacultyController.getSingleAcademicDepartment);

export const AcademicDepartmentRoutes = router;
