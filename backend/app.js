import express from 'express';
import { connectDB } from './utils/database.js';



import driverRoute from './Routes/DriverRoutes.js'


const PORT = 4000;



connectDB();



const app = express();

app.use(express.json());

app.use('/api/v1/driver', driverRoute);



app.get("/", (req, res)=>{
   res.send("You can Create an API")
})

app.listen(PORT, ()=>{
    console.log(`Server is Working on PORT : ${PORT}`)
})