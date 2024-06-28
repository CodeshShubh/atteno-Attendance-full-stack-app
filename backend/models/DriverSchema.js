import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const { Schema, model } = mongoose;

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
  branchName:{
    type: String,
    required: true,
    trim: true
  },
    // Add an array field to store attendance data
    attendance: [{
      monthYear: { type: String, required: true },
      presentDays: [{ type: Number, required: true }]
    }]
  

}, { timestamps: true });


driverSchema.pre("save", async function(next){
  if(!this.isModified("DLnumber")) return next();
  this.DLnumber = await bcrypt.hash(this.DLnumber, 10);
  next();
});

driverSchema.methods.getJWTToken = function(){
  return jwt.sign({_id: this._id}, process.env.JWT_SECRET,{
    expiresIn: "15d",
  });
};

driverSchema.methods.compareDLnumber = async function(DLnumber){
  return await bcrypt.compare(DLnumber, this.DLnumber);
}

// schema.methods.getResetToken = function () {
//   const resetToken = crypto.randomBytes(20).toString("hex");

//   this.resetPasswordToken = crypto
//     .createHash("sha256")
//     .update(resetToken)
//     .digest("hex");

//   this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

//   return resetToken;
// };


// Create the User model
const Driver = model('Driver', driverSchema);

export default Driver;
