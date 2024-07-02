import { catchAsyncErrror } from "../middlewares/catchAsyncError.js";
import ErrorHandler from "../middlewares/errorHandler.js";
import Admin from "../models/AdminSchema.js";
import Driver from "../models/DriverSchema.js";
import { AdminSendToken } from "../utils/AdminSendToken.js";



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



    export const getAdminProfile = catchAsyncErrror(async (req, res, next) => {
        const  user  = await Admin.findById(req.user._id); // Extracting driverId from URL parameters
        if (!user) {
            return next(new ErrorHandler("Driver not found", 404));
        }
    
        AdminSendToken(res, user,  "DetaFetch" , 200)
         
    }); 



    export const AddNewDriver = catchAsyncErrror(async(req, res, next)=>{

        const adminid = req.user._id;
                
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