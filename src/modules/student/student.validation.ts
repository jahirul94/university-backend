import { z } from 'zod';


const userNameValidationSchema = z.object({
    firstName: z.string().max(30),
    middleName: z.string().optional(),
    lastName: z.string().max(20),
});

const guardianValidationSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContactNo: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContactNo: z.string(),
});

const localGuardianValidationSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
});

const createStudentValidationSchema = z.object({
    body: z.object({
        password: z.string().max(20),
        student: z.object({
            name: userNameValidationSchema,
            gender: z.enum(['Male', 'Female', 'Other']),
            dateOfBirth: z.string(),
            email: z.string(),
            contactNo: z.string(),
            emergencyContactNo: z.string(),
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            presentAddress: z.string(),
            admissionSemester: z.string(),
            academicDepartment: z.string(),
            permanentAddress: z.string(),
            guardian: guardianValidationSchema,
            localGuardian: localGuardianValidationSchema,
            profileImg: z.string(),
        })
    })
})


// for update data 
const updateUserNameValidationSchema = z.object({
    firstName: z.string().max(30).optional(),
    middleName: z.string().optional(),
    lastName: z.string().max(20).optional(),
});

const updateGuardianValidationSchema = z.object({
    fatherName: z.string().optional(),
    fatherOccupation: z.string().optional(),
    fatherContactNo: z.string().optional(),
    motherName: z.string().optional(),
    motherOccupation: z.string().optional(),
    motherContactNo: z.string().optional(),
});

const updateLocalGuardianValidationSchema = z.object({
    name: z.string().optional(),
    occupation: z.string().optional(),
    contactNo: z.string().optional(),
    address: z.string().optional(),
});

const updateStudentValidationSchema = z.object({
    body: z.object({
        student: z.object({
            name: updateUserNameValidationSchema.optional(),
            gender: z.enum(['Male', 'Female', 'Other']).optional(),
            dateOfBirth: z.string().optional(),
            email: z.string().optional(),
            contactNo: z.string().optional(),
            emergencyContactNo: z.string().optional(),
            bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).optional(),
            presentAddress: z.string().optional(),
            admissionSemester: z.string().optional(),
            academicDepartment: z.string().optional(),
            permanentAddress: z.string().optional(),
            guardian: updateGuardianValidationSchema.optional(),
            localGuardian: updateLocalGuardianValidationSchema.optional(),
            profileImg: z.string().optional(),
        })
    })
})

export const studentValidationSchemas = {
    createStudentValidationSchema,
    updateStudentValidationSchema
}
