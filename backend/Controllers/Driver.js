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
        const getAllDrivers = await Driver.find();
        res.status(200).json({
            message: "All Drivers fetched successfully",
            getalldrivers: getAllDrivers
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
        const getDriver = await Driver.findById(driverId); // Find the driver by ID
        if (!getDriver) {
            return res.status(404).json({
                message: "Driver not found"
            });
        }
        res.status(200).json({
            message: "Driver fetched successfully",
            getdriver: getDriver
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch driver",
            error: error
        });
    }
};



export const driverLogin = async(req,res)=>{
       const {mobileNumber, DLnumber} = req.body;

    try {
        if (!mobileNumber || !DLnumber){
            return res.status(400).json({
                message : "Mobile number and Password required"
            })
           }
    
           // Find driver by DL
           const driverLogin = await Driver.findOne({DLnumber});
    
           if(!driverLogin){
            return res.status(404).json({
                message: "Driver not found"
            })
           }

           if(DLnumber !== driverLogin.DLnumber ){
            return res.status(400).json({
                message: "Invalid credentials"
            })
           }
                // Successful login, set cookie with driverId
            res.status(200)
            .cookie('driverId', driverLogin._id.toString(), {
            httpOnly: true,   // Cookie accessible only via HTTP (not JavaScript)
            secure: true,     // Cookie sent only over HTTPS (secure connection)
            maxAge: 2 * 30 * 24 * 60 * 60 * 1000,  // Cookie expires after 2 months (in milliseconds)
            // other cookie options as needed
            })
            .json({ message: "Login successful", driverLogin });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({message:"Server error"})
    }

}


export const driverLogout = async(req,res)=>{
    const {driverId}=req.params;

    try {
     const deletedDriver = await Driver.findByIdAndDelete(driverId);

     if(!deletedDriver){
        return res.status(404).json({
            message: "Driver not found"
        })
     }
     res.status(200).json({
        message: "Driver delete Successfully",
        deletedDriver
     })    
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to delete driver",
            error : error.message
        })
    }
}


export const fetchAttendance = async (req,res)=>{
   const{driverId}= req.params;
   try {
    const driverAttendanceFetch = await Driver.findById(driverId)
    
    if(!driverAttendance){
        return res.status(404).json({message:"Driver not found"});
    }
    res.status(200).json({
        message:"Attendance fetched successfully",
        attendance:driverAttendanceFetch.attendance
    });
   } catch (error) {
     res.status(500).json({
        message: "Failed to fetch attendance",
        error: error.message
     })
   }
}



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





