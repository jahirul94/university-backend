import { Student } from './student.model';
import { TStudent } from "./student.interface";

const createStudentIntoDB = async (studentData: TStudent) => {
    // for creating instance 

    // const student = new Student(studentData); // instance for check is available
    // if (await student.isUserExist(student.id)) {
    //     throw new Error("user already exists")
    // }

    // const result = await student.save();   //built in method from mongoes

    // for creating static 
    if(await Student.isUserExists(studentData.id)){
        throw new Error("User already exists")
    }

    const result = await Student.create(studentData);
    return result;
}



















const getAllStudentsFromDB = async () => {
    const result = await Student.find();
    return result;
}

const getSingleStudentsFromDB = async (id: string) => {
    const result = await Student.findOne({ id });
    return result;
}



export const StudentServices = {
    createStudentIntoDB,
    getAllStudentsFromDB,
    getSingleStudentsFromDB
}