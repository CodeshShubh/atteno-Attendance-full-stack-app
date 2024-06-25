import express from 'express';
import { newDriver } from '../Controllers/Driver.js';


const app = express.Router();



  // route -  api/v1/driver/newdriver
app.post('/newdriver', newDriver);


export default app;