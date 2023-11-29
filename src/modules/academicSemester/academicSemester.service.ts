import { academicSemesterNameCodeMapper } from "./academicSemester.constants";
import { AcademicSemester } from "./academicSemester.model";
import { TAcademicSemester } from "./academicsemester.interface";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new Error("Invalid semester Code")
    }
    const result = await AcademicSemester.create(payload);
    return result;
}



export const AcademicSemesterServices = {
    createAcademicSemesterIntoDB
}