import { catchAsyncErrror } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import Driver from "../models/DriverSchema.js";
import { sendToken } from "../utils/sendToken.js";


export const getDriverProfile = catchAsyncErrror(async (req, res, next) => {
    const  driver  = await Driver.findById(req.user._id); // Extracting driverId from URL parameters
    if (!driver) {
        return next(new ErrorHandler("Driver not found", 404));
    }

   sendToken(res, driver, `${driver.name} DetaFetch`, 200)
     
}); 


export const driverLogin = catchAsyncErrror(async(req,res,next)=>{
    const {mobileNumber, DLnumber} = req.body;

     if (!mobileNumber || !DLnumber)
         return next(new ErrorHandler("Mobile number and Password required",400))
         
        // Find driver by DL
        const user = await Driver.findOne({mobileNumber}).select("+DLnumber");
 
        if(!user) return next(new ErrorHandler("User Not found", 401))
         
        const isMatch = await user.compareDLnumber(DLnumber);

        if(!isMatch)
            return next(new ErrorHandler("Incorrect UserId or Password", 401))
      sendToken(res, user, `Welcome back, ${user.name}`, 200);
});



export const AddriverAttendance = catchAsyncErrror(async (req, res, next) => {
    const { currentMonth, currentDay } = req.body;

    // Validate and parse the incoming month and day
    const [year, month] = currentMonth.split('-').map(Number);
    const day = parseInt(currentDay);

    // Find the driver by their ID
    const driver = await Driver.findById(req.user._id);

    if (!driver) {
        return next(new ErrorHandler("User Not Authorized", 401));
    }

    // Ensure driver.attendance is initialized if empty
    if (!driver.attendance) {
        driver.attendance = [];
    }

    // Check if the year record exists
    let yearRecord = driver.attendance.find(record =>
        record.AttendanceRecords.some(ar => ar.Year === year)
    );

    if (yearRecord) {
        // Year record exists, find the month within the year
        let yearIndex = driver.attendance.findIndex(record =>
            record.AttendanceRecords.some(ar => ar.Year === year)
        );

        let monthRecord = yearRecord.AttendanceRecords.find(ar => ar.Year === year).months.find(m => m.name === month.toString());

        if (monthRecord) {
            // Month record already exists, find the day within the month
            let dayIndex = monthRecord.days.findIndex(d => d.day === day);

            if (dayIndex !== -1) {
                // Day record already exists, update status if needed
                monthRecord.days[dayIndex].status = 'present';
            } else {
                // Day record does not exist, add the day
                monthRecord.days.push({
                    day,
                    status: 'present'
                });
            }
        } else {
            // Month record does not exist, add the month and day
            driver.attendance[yearIndex].AttendanceRecords.find(ar => ar.Year === year).months.push({
                name: month.toString(),
                days: [{
                    day,
                    status: 'present'
                }]
            });
        }
    } else {
        // Year record does not exist, add the year, month, and day
        driver.attendance.push({
            AttendanceRecords: [{
                Year: year,
                months: [{
                    name: month.toString(),
                    days: [{
                        day,
                        status: 'present'
                    }]
                }]
            }]
        });
    }

    // Save the updated driver document
    await driver.save();

    // Prepare and send response
    const formattedAttendance = driver.attendance.map(record => ({
        _id: record._id, // Assuming _id is available in each record, adjust as per your schema
        AttendanceRecords: record.AttendanceRecords.map(ar => ({
            Year: ar.Year,
            months: ar.months.map(m => ({
                name: m.name,
                days: m.days.map(d => ({
                    day: d.day,
                    status: d.status,
                    _id: d._id // Adjust as per your schema
                }))
            }))
        }))
    }));

    res.status(200).json({
        success: true,
        message: "Attendance Marked Successfully",
        attendance: formattedAttendance,
    });
});



export const FetchDriverAttendance = catchAsyncErrror(async(req,res,next)=>{
    const driver = await Driver.findById(req.user._id);

    if(!driver)
        return next(new ErrorHandler('User Not Authorized', 401));
    res.status(200).json({
        attendance: driver.attendance
    });
});






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


