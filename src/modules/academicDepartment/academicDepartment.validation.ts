import { z } from "zod"

const createAcademicDepartmentValidateSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic department name must be string"
        }),
        academicFaculty: z.string({
            invalid_type_error: "academic faculty must be string",
            required_error: "Faculty is required"
        })
    })
})

const updateAcademicDepartmentValidateSchema = z.object({
    body: z.object({
        name: z.string({
            invalid_type_error: "Academic faculty name must be string"
        }).optional(),
        academicFaculty: z.string({
            invalid_type_error: "academic faculty must be string",
            required_error: "Faculty is required"
        }).optional(),
    })
})

export const AcademicDepartmentValidation = {
    createAcademicDepartmentValidateSchema,
    updateAcademicDepartmentValidateSchema
}