import express from 'express';
import { connectDB } from './utils/database.js';
import cors from 'cors'
import ErrorMiddleware from './middlewares/Error.js';


import driverRoute from './Routes/DriverRoutes.js';
import adminRoute from './Routes/AdminRoutes.js';

import cookieParser from 'cookie-parser';
import { config } from 'dotenv';

config({
  path: "./config/config.env",
})
const app = express();

const PORT = process.env.PORT || 4000;

// call MongoDb function for main app
connectDB();





app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend URL
  credentials: true,
}));
app.use(express.urlencoded({
  extended: true,
  })
);
app.use(cookieParser());



app.use('/api/v1/driver', driverRoute);
app.use('/api/v1/admin', adminRoute)


app.get("/", (req, res)=>{
   res.send("You can Create an API")
})

app.listen(PORT, ()=>{
    console.log(`Server is Working on PORT : ${PORT}`)
})

app.use(ErrorMiddleware);
