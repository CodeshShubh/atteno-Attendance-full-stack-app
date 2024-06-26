import express from 'express';
import {  driverAttendance, driverLogin, driverLogout, getAllDriver, getDriver, newDriver } from '../Controllers/Driver.js';


const app = express.Router();



  // route -  api/v1/driver/newdriver
app.post('/newdriver', newDriver); //

// route -  api/v1/driver/getAllDriver
app.get('/getalldriver', getAllDriver); //

// route -  api/v1/driver/getDriver/Id
app.get('/getdriver/:driverId', getDriver);

// route -  api/v1/driver/driverLogin
app.post('/driverLogin', driverLogin);

// route -  api/v1/driver/driverLogout
app.delete('/driverLogout/:driverId', driverLogout);





// route -  api/v1/driver/add/attendance/Id
app.post('/add/attendance/:driverId', driverAttendance);

// route -  api/v1/driver/fetch/attendance/Id
app.get('/fetch/attendance/:driverId', driverAttendance);










export default app;