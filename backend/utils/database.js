import mongoose from "mongoose";



export const connectDB = async()=>{

    await mongoose.connect("mongodb+srv://shubhanshusaadhiyaan:mack2010m@cluster0.ojpi4af.mongodb.net/" ,{
        dbName : "Atteno"
    })
    .then((c)=>console.log(`DB Connected to ${c.connection.host}`))
    .catch((e)=> console.log(e));
}