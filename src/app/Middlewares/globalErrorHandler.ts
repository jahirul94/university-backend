/* eslint-disable no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import { TErrorSources } from "../interface/error";
import config from "../config";
import handleZodError from "../error/handleZodError";
import handleValidationError from "../error/handleValidationError";
import handleCastError from "../error/handleCastError";
import handleDuplicateId from "../error/handleDuplicateId";
import AppError from "../error/appError";


// global error handler 
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
    let statusCode = err.statusCode ? err.statusCode : 500;
    let message = err.message || "Something went wrong!"

    let errorSources: TErrorSources = [{
        path: "",
        message: "Something went wrong!"
    }]


    // zod error
    if (err instanceof ZodError) {
        const simplifiedError = handleZodError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources
    } else if (err?.name === "ValidationError") {
        const simplifiedError = handleValidationError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources
    }
    else if (err?.name === "CastError") {
        const simplifiedError = handleCastError(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources
    }
    else if (err?.code === 11000) {
        const simplifiedError = handleDuplicateId(err);
        statusCode = simplifiedError?.statusCode;
        message = simplifiedError?.message;
        errorSources = simplifiedError?.errorSources
    }
    else if (err instanceof AppError) {
        statusCode = err.statusCode,
            message = err?.message;
        errorSources = [{
            path: "",
            message: err.message
        }]
    }
    else if (err instanceof Error) {
        statusCode = 400,
            message = err?.message;
        errorSources = [{
            path: "",
            message: err.message
        }]
    }

    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        stack: config.NODE_ENV === "development" ? err?.stack : null
    })
}

export default globalErrorHandler;
