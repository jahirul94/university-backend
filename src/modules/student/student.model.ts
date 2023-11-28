import { Schema, model } from 'mongoose';
import validator from 'validator';
import { StudentModel, TGuardian, TLocalGuardian, TStudent, TUserName } from './student.interface';

const userNameSchema = new Schema<TUserName>({
    firstName: {
        type: String,
        required: true,
        validate: {
            validator: (value: string) => validator.isAlpha(value),
            message: "{VALUE} is not valid"
        }
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
        required: true,
    },
});

const guardianSchema = new Schema<TGuardian>({
    fatherName: {
        type: String,
        required: true,
    },
    fatherOccupation: {
        type: String,
        required: true,
    },
    fatherContactNo: {
        type: String,
        required: true,
    },
    motherName: {
        type: String,
        required: true,
    },
    motherOccupation: {
        type: String,
        required: true,
    },
    motherContactNo: {
        type: String,
        required: true,
    },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type: String,
        required: true,
    },
    occupation: {
        type: String,
        required: true,
    },
    contactNo: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
});

const studentSchema = new Schema<TStudent, StudentModel>({
    id: { type: String, required: true, unique: true },
    user: {
        type: Schema.Types.ObjectId,
        required: [true, "User id is required"]
    },
    name: {
        type: userNameSchema,
        required: [true, "Name id required"],
        unique: true,
        ref: "User"
    },
    gender: {
        type: String,
        enum: {
            values: ['Male', 'Female', "Other"],
            message: "{VALUE} is not valid"
        },
        required: [true, "gender is required"],
        validate: {
            validator: function (value: string) {
                const gender = value.charAt(0).toUpperCase() + value.slice(1);
                return gender === value;
            },
            message: "{VALUE} is not capitalized format"
        }
    },
    dateOfBirth: { type: String },
    email: {
        type: String, required: true, unique: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: "{VALUE} is not a email"
        }
    },
    contactNo: { type: String, required: true },
    emergencyContactNo: { type: String, required: true },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        type: guardianSchema,
        required: true
    },
    localGuardian: {
        type: localGuardianSchema,
        required: true
    },
    profileImg: { type: String }
});

// for static instance
studentSchema.statics.isUserExits = async function (id: string) {
    const existingUser = await Student.findOne({ id })
    return existingUser;
}




// custom instance

// studentSchema.methods.isUserExist = async function (id: string) {
//     const existingUser = await Student.findOne({ id })
//     return existingUser;
// }


export const Student = model<TStudent, StudentModel>('Student', studentSchema);