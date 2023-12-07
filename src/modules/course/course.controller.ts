import httpStatus from "http-status";
import catchAsync from "../../app/utils/catchAsync";
import sendResponse from "../../app/utils/sendResponse";
import { CourseServices } from "./course.service";


const createCourse = catchAsync(async (req, res) => {
    const data = req.body;
    const result = CourseServices.createCourseIntoDB(data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "course is created successfully",
        data: result
    })
})

const getAllCourses = catchAsync(async (req, res) => {
    const result = await CourseServices.getAllCourseFromDB(req?.query);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Courses are fetched successfully",
        data: result
    })
})

const getSingleCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CourseServices.getSingleCourseFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "course fetched successfully",
        data: result
    })
})

const updateCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const result = await CourseServices.updateCourseIntoDB(id, data);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "update faculty successfully",
        data: result
    })
})


const deleteCourse = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await CourseServices.deleteCourseFromDB(id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "course delete successfully",
        data: result
    })
})

export const CourseController = {
    createCourse,
    getAllCourses,
    getSingleCourse,
    deleteCourse,
    updateCourse
}