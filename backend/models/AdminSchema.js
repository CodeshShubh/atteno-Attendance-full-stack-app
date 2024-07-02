import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { Schema, model } from "mongoose";

 const AdminSchema = new Schema({
     AdminUserId:{
        type: String,
        required: [true, "Please Enter USerId"],
     },
     Password:{
        type: String,
        required: true,
     },
     role:{
        type:String,
        enum:["admin", 'user'],
        default: 'user',
     }
 }, { timestamps: true });

 AdminSchema.pre("save", async function(next){
    if(!this.isModified("Password")) return next();
    this.Password = await bcrypt.hash(this.Password, 10);
    next();
});

// Generate JWT token for authentication
AdminSchema.methods.adminToken = function(){
    return jwt.sign({_id: this._id}, process.env.JWT_SECRET,{
        expiresIn: "15d",
    });
};


AdminSchema.methods.comparePassword = async function(Password){
    return await bcrypt.compare(Password, this.Password);
};




 const Admin = model('Admin', AdminSchema);

 export default Admin;