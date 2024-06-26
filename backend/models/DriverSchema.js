import mongoose from 'mongoose';

const { Schema, model } = mongoose;

// Define the User schema
const driverSchema = new Schema({
  name: {
    type: String,
    required: true,
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

// Create the User model
const Driver = model('Driver', driverSchema);

export default Driver;
