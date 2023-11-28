/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";


// global error handler 
const notFound = (req: Request, res: Response, next: NextFunction) => {
    return res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message:"api not found",
        error: ""
    })
}

export default notFound;
