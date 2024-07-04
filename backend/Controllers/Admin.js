import { catchAsyncErrror } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import Admin from "../models/AdminSchema.js";
import Driver from "../models/DriverSchema.js";
import { AdminSendToken } from "../utils/AdminSendToken.js";
import dayjs from 'dayjs';


// Admin Registration
export const AdminRegistration = catchAsyncErrror(async(req,res,next)=>{
    const {AdminUserId, Password} = req.body;
    if(!AdminUserId || !Password)
        return next (new ErrorHandler("Please Enter All fields", 400));

     let user = await Admin.findOne({AdminUserId});
     if(user)
        return next( new ErrorHandler("User Already Exist with this User ID", 409));

     const newAdmin = await Admin.create({
        AdminUserId,
        Password
     })

     AdminSendToken(res, newAdmin, "User Created", 201);

});


// Admin Login
export const AdminLogin = catchAsyncErrror(async(req, res, next)=>{
   
    const {AdminUserId, Password} = req.body;

    if(!AdminUserId || !Password)
        return next(new ErrorHandler("Please Enter All Fild", 400) );
    const user = await Admin.findOne({AdminUserId}).select("+Password")

    if (!user) {
        return next(new ErrorHandler("User Not Found", 401));
      }
    
      const isPasswordMatch = await user.comparePassword(Password)
    
      if (!isPasswordMatch) {
        return next(new ErrorHandler("Invalid PassWord", 401));
      }

      AdminSendToken(res, user, "Welcome Back" , 200);
    });


// Get Admin Profile
    export const getAdminProfile = catchAsyncErrror(async (req, res, next) => {
        const  user  = await Admin.findById(req.user._id); // Extracting driverId from URL parameters
        if (!user) {
            return next(new ErrorHandler("Driver not found", 404));
        }
    
        AdminSendToken(res, user,  "DetaFetch" , 200)
         
    }); 


// Add New Driver
    export const AddNewDriver = catchAsyncErrror(async(req, res, next)=>{

        // const adminid = req.user._id;
                
        const {name, vehicle, mobileNumber, DLnumber, branchName   } = req.body; 
        
          if(!name || !vehicle || !mobileNumber || !DLnumber || !branchName)
            return next(new ErrorHandler("Please Enter All Fild", 400));
    
              let driver = await Driver.findOne({ mobileNumber });
    
              if(driver) return next(new ErrorHandler("Driver Already Exist", 409));
    
         const newDriver = await Driver.create({
          name, 
          vehicle, 
          mobileNumber, 
          DLnumber, 
          branchName
         })
         await newDriver.save();
         res.status(200).json({
            success: true,
            Message: "New Driver Add Succesfully",
            newDriver
         })
    });



// Get All Drivers
    export const getAllDrivers = catchAsyncErrror(async(req, res, next)=>{
    try {
        const allDrivers = await Driver.find();
        res.status(200).json({
            message: "All Drivers fetched successfully",
            getalldrivers: allDrivers
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch drivers",
            Error: error
        });
    }
    })

    // Get Driver By ID
    export const getDriverById = catchAsyncErrror(async (req, res, next) => {
        const { id } = req.params;
    
        const driver = await Driver.findById(id);
    
        if (!driver) {
            return next(new ErrorHandler("Driver not found", 404));
        }
    
        res.status(200).json({
            success: true,
            driver
        });
    });

    
    // Toggle Attendance
   
    export const markAttendance = catchAsyncErrror(async (req, res, next) => {
        const { id } = req.params;
        const { currentMonth, currentDay } = req.body;
    
        const driver = await Driver.findById(id);
    
        if (!driver) {
            return next(new ErrorHandler("Driver not found", 404));
        }
    
        const year = dayjs(currentMonth, 'YYYY-MM').year();
        const month = dayjs(currentMonth, 'YYYY-MM').month() + 1; // month is 0-indexed
        let yearRecord = driver.attendance.find(record => record.AttendanceRecords.some(r => r.Year === year));
        if (!yearRecord) {
            yearRecord = { AttendanceRecords: [{ Year: year, months: [] }] };
            driver.attendance.push(yearRecord);
        }
    
        let monthRecord = yearRecord.AttendanceRecords[0].months.find(m => m.name === month.toString());
        if (!monthRecord) {
            monthRecord = { name: month.toString(), days: [] };
            yearRecord.AttendanceRecords[0].months.push(monthRecord);
        }
    
        let dayRecord = monthRecord.days.find(d => d.day === currentDay);
        if (!dayRecord) {
            dayRecord = { day: currentDay, status: "present" };
            monthRecord.days.push(dayRecord);
        } else {
            dayRecord.status = dayRecord.status === "present" ? "absent" : "present";
        }
    
        await driver.save();
    
        res.status(200).json({
            success: true,
            message: `Attendance for ${currentMonth}-${currentDay} marked as ${dayRecord.status}`,
            driver
        });
    });
    
    

    