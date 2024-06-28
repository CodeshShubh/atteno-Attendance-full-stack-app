import jwt from "jsonwebtoken";
import { catchAsyncErrror } from "./catchAsyncError";
import ErrorHandler from "./errorHandler";


export const isAuthenticated = catchAsyncErrror(async(req, res, next)=>{
   const {token} = req.cookies;

   if(!token) return next(new ErrorHandler("Not Logged In", 401));

   const decoded = jwt.verify(token, process.env.JWT_SECRET);

   req.user = await User.findById(decoded._id);
   next();
})