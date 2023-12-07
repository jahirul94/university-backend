/* eslint-disable @typescript-eslint/no-explicit-any */
import QueryBuilder from "../../app/builder/QueryBuilder";
import { CourseSearchableFields } from "./course.constans";
import { TCourse } from "./course.interface";
import { Course } from "./course.model"

const createCourseIntoDB = async (course: TCourse) => {
    const result = await Course.create(course);
    return result
}

const getAllCourseFromDB = async (query: Record<string, unknown>) => {
    const courseQuery = new QueryBuilder(Course.find().populate("preRequisiteCourses.course"), query).search(CourseSearchableFields).filter().sort().paginate().fields();
    const result = await courseQuery.modelQuery;
    return result
}

const getSingleCourseFromDB = async (id: string) => {
    const result = await Course.findById(id).populate("preRequisiteCourses.course");
    return result
}

const deleteCourseFromDB = async (id: string) => {
    const result = await Course.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result
}

const updateCourseIntoDB = async (id: string , payload:any) => {
    console.log(payload);
    const result = await Course.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
    return result
}




export const CourseServices = {
    createCourseIntoDB,
    getAllCourseFromDB,
    getSingleCourseFromDB,
    deleteCourseFromDB,
    updateCourseIntoDB
}