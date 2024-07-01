import express from 'express';
import { AddNewDriver, AdminLogin, AdminRegistration } from '../Controllers/Admin.js';
import { isAdminAuthenticated } from '../middlewares/auth.js';


const app = express.Router();


  //routes /api/v1/admin/Registration
  app.post('/registration', AdminRegistration);

  //routes /api/v1/admin/login
app.post('/login', AdminLogin);

app.post('/Addnewdriver', isAdminAuthenticated, AddNewDriver);


export default  app;

