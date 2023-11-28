import config from "../../app/config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
    const userData: Partial<TUser> = {}

    userData.password = password || (config.default_password as string);
    userData.role = "student"

    // manually generated id 
    userData.id = '203010001'
    const newUser = await User.create(userData);
    //create a student
    if (Object.keys(newUser).length) {
        studentData.id = newUser.id;
        studentData.user = newUser._id;


        const newStudent = await Student.create(studentData);
        return newStudent;
    }


    return newUser;
}

export const UserServices = {
    createStudentIntoDB
}