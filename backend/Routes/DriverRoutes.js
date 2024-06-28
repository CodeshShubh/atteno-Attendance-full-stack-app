import express from 'express';
import {  //driverAttendance,
   driverLogin,
  //  driverLogout, getAllDriver, 
    getDriverProfile,  newDriver } from '../Controllers/Driver.js';
import { isAuthenticated } from '../middlewares/auth.js';


const app = express.Router();



  // route -  api/v1/driver/newdriver
app.post('/newdriver', newDriver); //

// route -  api/v1/driver/getDriver/Id
app.get('/getdriverprofile', isAuthenticated, getDriverProfile);

// route -  api/v1/driver/driverLogin
app.post('/driverLogin', driverLogin);

// // route -  api/v1/driver/getAllDriver
// app.get('/getalldriver', getAllDriver); //





// // route -  api/v1/driver/driverLogout
// app.delete('/driverLogout/:driverId', driverLogout);





// // route -  api/v1/driver/add/attendance/Id
// app.post('/add/attendance/:driverId', driverAttendance);

// // route -  api/v1/driver/fetch/attendance/Id
// app.get('/fetch/attendance/:driverId', driverAttendance);










export default app;