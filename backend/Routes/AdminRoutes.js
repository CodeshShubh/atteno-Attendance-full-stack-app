import express from 'express';
import { AddNewDriver, AdminLogin, AdminRegistration, getAllDrivers } from '../Controllers/Admin.js';
import { isAdminAuthenticated } from '../middlewares/auth.js';


const app = express.Router();


  //routes /api/v1/admin/Registration
  app.post('/registration', AdminRegistration);

  //routes /api/v1/admin/login
app.post('/login', AdminLogin);

// // route -  api/v1/admin/Addnewdriver
app.post('/addnewdriver', isAdminAuthenticated, AddNewDriver);


// // route -  api/v1/admin/fetch/drivers
app.get('/fetch/drivers', isAdminAuthenticated, getAllDrivers);

export default  app;

