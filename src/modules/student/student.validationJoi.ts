import Joi from "joi"

// create schema using joi 
const userNameSchemaJoi = Joi.object({
    firstName: Joi.string().required().regex(/^[A-Za-z]+$/).message('{VALUE} is not valid'),
    middleName: Joi.string(),
    lastName: Joi.string().required(),
});

const guardianSchemaJoi = Joi.object({
    fatherName: Joi.string().required(),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required(),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
});

const localGuardianSchemaJoi = Joi.object({
    name: Joi.string().required(),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
});

// Define Joi schema for the main document
const studentSchemaJoi = Joi.object({
    id: Joi.string().required(),
    name: userNameSchemaJoi.required().messages({ 'any.required': 'Name is required' }),
    gender: Joi.string().valid('Male', 'Female', 'Other').required().uppercase().message('{VALUE} is not capitalized format'),
    dateOfBirth: Joi.string(),
    email: Joi.string().required().email().message('{VALUE} is not a valid email'),
    contactNo: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string().valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianSchemaJoi.required(),
    localGuardian: localGuardianSchemaJoi.required(),
    profileImg: Joi.string(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
});

export default studentSchemaJoi;
