import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

// Define schema for driver attendance
const attendanceSchema = new Schema({
    AttendanceRecords: [{
          Year:  {type: Number, required: true},
          months: [{
            name: {
                type: String,
                required: true
            },
            days: [{
                day: {
                    type: Number,
                    required: true
                },
                status: {
                    type: String,
                    enum: ['present', 'absent'],
                    default: 'absent'
                }
            }]
        }]
    }]
});

// Define the User schema
const driverSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
        trim: true
    },
    vehicle: {
        type: String,
        required: true,
        trim: true
    },
    mobileNumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    DLnumber: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    branchName: {
        type: String,
        required: true,
        trim: true
    },
    attendance: {
        type: [attendanceSchema],
        default: []
    }
}, { timestamps: true });

// Hash DLnumber before saving
driverSchema.pre("save", async function(next){
    if(!this.isModified("DLnumber")) return next();
    this.DLnumber = await bcrypt.hash(this.DLnumber, 10);
    next();
});

// Generate JWT token for authentication
driverSchema.methods.getJWTToken = function(){
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET,{
        expiresIn: "15d",
    });
};

// Compare hashed DLnumber for authentication
driverSchema.methods.compareDLnumber = async function(DLnumber){
    return await bcrypt.compare(DLnumber, this.DLnumber);
};

// Create the Driver model
const Driver = model('Driver', driverSchema);

export default Driver;
