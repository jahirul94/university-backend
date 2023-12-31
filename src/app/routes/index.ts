import { Router } from "express";
import { UsersRoutes } from "../../modules/user/user.route";
import { StudentRoutes } from "../../modules/student/student.route";
import { AcademicSemesterRoutes } from "../../modules/academicSemester/academicSemester.route";
import { AcademicFacultiesRoutes } from "../../modules/academicFaculty/academicfaculty.route";
import { AcademicDepartmentRoutes } from "../../modules/academicDepartment/academicDepartment.route";
import { CourseRoutes } from "../../modules/course/course.route";

const router = Router();

const modulesRoutes = [
    {
        path: "/users",
        route: UsersRoutes
    },
    {
        path: "/students",
        route: StudentRoutes
    },
    {
        path: "/academic-semesters",
        route: AcademicSemesterRoutes
    },
    {
        path: "/academic-faculties",
        route: AcademicFacultiesRoutes
    },
    {
        path: "/academic-department",
        route: AcademicDepartmentRoutes
    },
    {
        path: "/course",
        route: CourseRoutes
    },

]


modulesRoutes.forEach(route => router.use(route.path, route.route))




export default router;
