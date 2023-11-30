import { z } from "zod"

const createAcademicFacultyValidateSchema = z.object({
    body: z.object({
        name: z.string({ invalid_type_error: "Academic faculty name must be string" })
    })
})

const updateAcademicFacultyValidateSchema = z.object({
    body: z.object({
        name: z.string({ invalid_type_error: "Academic faculty name must be string" })
    })
})

export const AcademicFacultyValidation = {
    createAcademicFacultyValidateSchema,
    updateAcademicFacultyValidateSchema
}