import { catchAsyncErrror } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import Driver from "../models/DriverSchema.js";
import { sendToken } from "../utils/sendToken.js";

export const newDriver = catchAsyncErrror(async(req, res, next)=>{
    const {name, vehicle, mobileNumber, DLnumber, branchName   } = req.body; 
    
      if(!name || !vehicle || !mobileNumber || !DLnumber || !branchName)
        return next(new ErrorHandler("Please Enter All Fild", 400));

          let user = await Driver.findOne({mobileNumber});

          if(user) return next(new ErrorHandler("Driver Already Exist", 409));

     const newDriver = await Driver.create({
      name, 
      vehicle, 
      mobileNumber, 
      DLnumber, 
      branchName
     })
     await newDriver.save();
     sendToken(res, newDriver , "New Driver Created", 201); 
});

export const getDriverProfile = catchAsyncErrror(async (req, res, next) => {
    const  driver  = await Driver.findById(req.user._id); // Extracting driverId from URL parameters
    if (!driver) {
        return next(new ErrorHandler("Driver not found", 404));
    }
    res.status(200).json({
        success:true,
        driver,
    })
     
});



export const driverLogin = catchAsyncErrror(async(req,res,next)=>{
    const {mobileNumber, DLnumber} = req.body;

     if (!mobileNumber || !DLnumber)
         return next(new ErrorHandler("Mobile number and Password required",400))
         
        // Find driver by DL
        const user = await Driver.findOne({mobileNumber}).select("+DLnumber");
 
        if(!user) return next(new ErrorHandler("Incorrect UserId or Password", 401))
         
        const isMatch = await user.compareDLnumber(DLnumber);

        if(!isMatch)
            return next(new ErrorHandler("Incorrect UserId or Password", 401))
      sendToken(res, user, `Welcome back, ${user.name}`, 200);
});




// export const getAllDriver = async (req, res) => {
//     try {
//         const getAllDrivers = await Driver.find();
//         res.status(200).json({
//             message: "All Drivers fetched successfully",
//             getalldrivers: getAllDrivers
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Failed to fetch drivers",
//             Error: error
//         });
//     }
// };


// export const driverLogout = async(req,res)=>{
//     const {driverId}=req.params;

//     try {
//      const deletedDriver = await Driver.findByIdAndDelete(driverId);

//      if(!deletedDriver){
//         return res.status(404).json({
//             message: "Driver not found"
//         })
//      }
//      res.status(200).json({
//         message: "Driver delete Successfully",
//         deletedDriver
//      })    
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             message: "Failed to delete driver",
//             error : error.message
//         })
//     }
// }


// export const fetchAttendance = async (req,res)=>{
//    const{driverId}= req.params;
//    try {
//     const driverAttendanceFetch = await Driver.findById(driverId)
    
//     if(!driverAttendance){
//         return res.status(404).json({message:"Driver not found"});
//     }
//     res.status(200).json({
//         message:"Attendance fetched successfully",
//         attendance:driverAttendanceFetch.attendance
//     });
//    } catch (error) {
//      res.status(500).json({
//         message: "Failed to fetch attendance",
//         error: error.message
//      })
//    }
// }



// export const driverAttendance = async (req, res) => {
//     const { driverId } = req.params; // Extract driverId from URL parameters
//     const { currentMonth, currentDay } = req.body; // Extract currentMonth and currentDay from request body

//     try {
//         // Find the driver by ID
//         const driver = await Driver.findById(driverId);
//         if (!driver) {
//             return res.status(404).json({
//                 message: "Driver not found"
//             });
//         }

//         // Find the attendance record for the current month
//         let attendanceRecord = driver.attendance.find(record => record.monthYear === currentMonth);
        
//         if (attendanceRecord) {
//             // If the record exists, add the current day to presentDays if it's not already there
//             if (!attendanceRecord.presentDays.includes(currentDay)) {
//                 attendanceRecord.presentDays.push(currentDay);
//             }
//         } else {
//             // If the record doesn't exist, create a new one
//             driver.attendance.push({
//                 monthYear: currentMonth,
//                 presentDays: [currentDay]
//             });
//         }

//         // Save the updated driver document
//         await driver.save();

//         res.status(200).json({
//             message: "Attendance updated successfully",
//             driver: driver
//         });
//     } catch (error) {
//         res.status(500).json({
//             message: "Failed to update attendance",
//             error: error.message
//         });
//     }
// };





