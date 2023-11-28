
export type TUser = {
    id: string;
    password: string;
    isPasswordChange: boolean;
    role: "admin" | "student" | "faculty";
    isDeleted: boolean;
    status: "in-progress" | "blocked"
}
