import config from "../../app/config";
import { TStudent } from "../student/student.interface";
import { Student } from "../student/student.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { generatedStudentId } from "./user.utils";

const createStudentIntoDB = async (password: string, payload: TStudent) => {
    const userData: Partial<TUser> = {};

    userData.password = password || (config.default_password as string);
    userData.role = "student"



    // automatically generated id 
    const admissionSemester = await AcademicSemester.findById(
        payload.admissionSemester,
      );
    //set  generated id
    userData.id = await generatedStudentId(admissionSemester);

    const newUser = await User.create(userData);
    //create a student
    if (Object.keys(newUser).length) {
        payload.id = newUser.id;
        payload.user = newUser._id;


        const newStudent = await Student.create(payload);
        return newStudent;
    }


    return newUser;
}

export const UserServices = {
    createStudentIntoDB
}