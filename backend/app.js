import express from 'express';
import { connectDB } from './utils/database.js';






const PORT = 4000;



connectDB();



const app = express();



app.get("/", (req, res)=>{
   res.send("You can Create an API")
})

app.listen(PORT, ()=>{
    console.log(`Server is Working on PORT : ${PORT}`)
})