import mongoose from "mongoose";



export const connectDB = async()=>{

    await mongoose.connect(process.env.MONGO_URI ,{
        dbName : "Atteno"
    })
    .then((c)=>console.log(`DB Connected to ${c.connection.host}`))
    .catch((e)=> console.log(e));
}