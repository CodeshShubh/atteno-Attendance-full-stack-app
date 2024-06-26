import Driver from "../models/DriverSchema.js";

export const newDriver = async(req, res)=>{
      const {name, vehicle, mobileNumber, DLnumber, branchName   } = req.body; 
      try {
        if(!name || !vehicle || !mobileNumber || !DLnumber || !branchName){
            return res.status(400).json({
                message : "Please Enter All Fild"
            })
        }
       const newDriver = new Driver({
        name, 
        vehicle, 
        mobileNumber, 
        DLnumber, 
        branchName
       })
       await newDriver.save();
       res.status(201).json({
          message : "New Driver Register Successfully",
          driver : newDriver
       })
      } catch (error) {
         res.status(500).json({
          message : "New Driver not Register ",
          Error : error
         })
      }
}

export const getAllDriver = async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.status(200).json({
            message: "All Drivers fetched successfully",
            drivers: drivers
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch drivers",
            Error: error
        });
    }
};



export const getDriver = async (req, res) => {
    const { driverId } = req.params; // Extracting driverId from URL parameters
    try {
        const driver = await Driver.findById(driverId); // Find the driver by ID
        if (!driver) {
            return res.status(404).json({
                message: "Driver not found"
            });
        }
        res.status(200).json({
            message: "Driver fetched successfully",
            driver: driver
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch driver",
            error: error
        });
    }
};



export const driverAttendance = async (req, res) => {
    const { driverId } = req.params; // Extract driverId from URL parameters
    const { currentMonth, currentDay } = req.body; // Extract currentMonth and currentDay from request body

    try {
        // Find the driver by ID
        const driver = await Driver.findById(driverId);
        if (!driver) {
            return res.status(404).json({
                message: "Driver not found"
            });
        }

        // Find the attendance record for the current month
        let attendanceRecord = driver.attendance.find(record => record.monthYear === currentMonth);
        
        if (attendanceRecord) {
            // If the record exists, add the current day to presentDays if it's not already there
            if (!attendanceRecord.presentDays.includes(currentDay)) {
                attendanceRecord.presentDays.push(currentDay);
            }
        } else {
            // If the record doesn't exist, create a new one
            driver.attendance.push({
                monthYear: currentMonth,
                presentDays: [currentDay]
            });
        }

        // Save the updated driver document
        await driver.save();

        res.status(200).json({
            message: "Attendance updated successfully",
            driver: driver
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update attendance",
            error: error.message
        });
    }
};


