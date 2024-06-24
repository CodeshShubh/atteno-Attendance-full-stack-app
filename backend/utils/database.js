import mongoose from "mongoose";



export const connectDB = async()=>{

    await mongoose.connect("mongodb://127.0.0.1:27017" ,{
        dbName : "Atteno"
    })
    .then((c)=>console.log(`DB Connected to ${c.connection.host}`))
    .catch((e)=> console.log(e));
}