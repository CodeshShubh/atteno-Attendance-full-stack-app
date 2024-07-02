import jwt from "jsonwebtoken";
import { catchAsyncErrror } from "./catchAsyncError.js";
import ErrorHandler from "./errorHandler.js";
import Driver from "../models/DriverSchema.js";
import Admin from "../models/AdminSchema.js";


export const isAuthenticated = catchAsyncErrror(async(req, res, next)=>{
   const {token} = req.cookies;

   if(!token) return next(new ErrorHandler("Not Logged In", 401));

   const decoded = jwt.verify(token, process.env.JWT_SECRET);

   req.user = await Driver.findById(decoded._id);
   next();
});


export const isAdminAuthenticated = catchAsyncErrror(async (req, res, next) => {
   const { AdminToken } = req.cookies;

   if (!AdminToken) {
       console.log("No AdminToken found in cookies");
       return next(new ErrorHandler("Not Logged In", 401));
   }

   try {
       const decode = jwt.verify(AdminToken, process.env.JWT_SECRET);
       req.user = await Admin.findById(decode._id);

       if (!req.user) {
           console.log("Admin not found with provided token");
           return next(new ErrorHandler("Not Logged In", 401));
       }

       next();
   } catch (error) {
       return next(new ErrorHandler("Invalid Token", 401));
   }
});