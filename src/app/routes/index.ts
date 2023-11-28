import { Router } from "express";
import { UsersRoutes } from "../../modules/user/user.route";
import { StudentRoutes } from "../../modules/student/student.route";

const router = Router();

const modulesRoutes = [
    {
        path: "/users",
        route: UsersRoutes
    },
    {
        path: "/students",
        route: StudentRoutes
    }
]


modulesRoutes.forEach(route => router.use(route.path, route.route))




export default router;
