import express from 'express';
import { 
  AddriverAttendance,
   FetchDriverAttendance,
   driverLogin,
  //  driverLogout,
    getDriverProfile } from '../Controllers/Driver.js';
import { isAuthenticated } from '../middlewares/auth.js';


const app = express.Router();



// route -  api/v1/driver/getDriver/
app.get('/getdriverprofile', isAuthenticated, getDriverProfile);

// route -  api/v1/driver/driverLogin
app.post('/driverLogin', driverLogin);

// route -  api/v1/driver/add/attendance
app.post('/add/attendance', isAuthenticated, AddriverAttendance);

// route -  api/v1/driver/fetch/attendance
app.get('/fetch/attendance', isAuthenticated, FetchDriverAttendance);


// // route -  api/v1/driver/getAllDriver
// app.get('/getalldriver', getAllDriver); //





// // route -  api/v1/driver/driverLogout
// app.delete('/driverLogout/:driverId', driverLogout);





// // route -  api/v1/driver/add/attendance/Id
// app.post('/add/attendance/:driverId', driverAttendance);

// // route -  api/v1/driver/fetch/attendance/Id
// app.get('/fetch/attendance/:driverId', driverAttendance);










export default app;