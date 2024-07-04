import express from 'express';
import { AddNewDriver, AdminLogin, AdminRegistration, getAdminProfile, getAllDrivers, getDriverById, markAttendance } from '../Controllers/Admin.js';
import { isAdminAuthenticated } from '../middlewares/auth.js';


const app = express.Router();


  //routes /api/v1/admin/Registration
  app.post('/registration', AdminRegistration);

  //routes /api/v1/admin/login
app.post('/login', AdminLogin);

// // route -  api/v1/admin/Addnewdriver
app.post('/addnewdriver', AddNewDriver);


// // route -  api/v1/admin/fetch/drivers
app.get('/fetch/drivers', isAdminAuthenticated, getAllDrivers);

// Route: /api/v1/admin/drivers/:id
app.get('/drivers/:id', getDriverById);


app.put('/drivers/:id/attendance', markAttendance);



app.get('/getadminprofile', isAdminAuthenticated, getAdminProfile)

export default  app;

