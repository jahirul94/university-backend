import { Schema, model } from 'mongoose';
import { AcademicSemesterCode, AcademicSemesterName, Months } from './academicSemester.constants';
import AppError from '../../app/error/appError';
import { TAcademicSemester } from './academicSemesterr.interface';


const AcademicSemesterSchema = new Schema<TAcademicSemester>({
    name: {
        type: String,
        required: [true, "semester name is required"],
        enum: AcademicSemesterName
    },
    code: {
        type: String,
        required: true,
        enum: AcademicSemesterCode
    },
    year: {
        type: String,
        required: true,
    },
    startMonth: {
        type: String,
        required: true,
        enum: Months
    },
    endMonth: {
        type: String,
        required: true,
        enum: Months
    },
})


AcademicSemesterSchema.pre("save", async function (next) {
    const isSemesterExists = await AcademicSemester.findOne({
        year: this.year,
        name: this.name
    })
    if (isSemesterExists) {
        throw new AppError(500, "semester is already exist ! ")
    }
    next();
})





export const AcademicSemester = model<TAcademicSemester>("AcademicSemester", AcademicSemesterSchema)