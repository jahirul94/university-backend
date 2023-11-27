import { z } from 'zod';


const userNameSchema = z.object({
    firstName: z.string().max(30),
    middleName: z.string().optional(),
    lastName: z.string().max(20),
});

const guardianSchema = z.object({
    fatherName: z.string(),
    fatherOccupation: z.string(),
    fatherContactNo: z.string(),
    motherName: z.string(),
    motherOccupation: z.string(),
    motherContactNo: z.string(),
});

const localGuardianSchema = z.object({
    name: z.string(),
    occupation: z.string(),
    contactNo: z.string(),
    address: z.string(),
});

const studentValidationSchema = z.object({
    id: z.string(),
    name: userNameSchema,
    gender: z.enum(['Male', 'Female', 'Other']),
    dateOfBirth: z.string().optional(),
    email: z.string(),
    contactNo: z.string(),
    emergencyContactNo: z.string(),
    bloodGroup: z.string().optional(),
    presentAddress: z.string(),
    permanentAddress: z.string(),
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
    profileImg: z.string().optional(),
    isActive: z.enum(['active', 'blocked']).default('active'),
});

export default studentValidationSchema;
