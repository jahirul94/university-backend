/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { NextFunction, Request, Response } from "express";


// global error handler 
const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 500;
    let message = err.message || "Something went wrong!"

    return res.status(statusCode).json({
        success: false,
        message,
        error: err
    })
}

export default globalErrorHandler;
