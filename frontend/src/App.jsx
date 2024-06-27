
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import { useEffect, useState } from 'react';

import './App.css'
import MLogin from './components/Login/MLogin';
import MHome from './components/Home/MHome';
import MUserProfile from './components/User/MUserProfile';

//Admin Routes
import MAdminLogin from './Admin/MAdminLogin';
import MDashboard from './Admin/MDashboard';

//manage Data
import TotalDrivers from './Admin/ManageData/TotalDrivers';
import Attendance from './Admin/ManageData/Attendance';
import DriverBranch from './Admin/ManageData/DriverBranch';
import AddDrivers from './Admin/ManageData/AddDrivers';
import { useSelector } from 'react-redux';


function App() {

  const [isDriverLogin, setIsDriverLogin] = useState(false);
     const user =(useSelector(state=>state.driver.user) || null)
    
     useEffect(() => {
      if (user._id !==null) {
        setIsDriverLogin(true);
      } else {
        setIsDriverLogin(false);
      }
    }, [user]);

    console.log(isDriverLogin);
  

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MHome/> }/>
          <Route path='/login' element={<MLogin/> }/>
          <Route path='/user' element={<MUserProfile/> }/>


                 {/* for Admin dashboard */}
          <Route path='/adminlogin' element={<MAdminLogin/> }/>
          <Route path='/admindashboard' element={<MDashboard/> }/>
          {/* Manage Data */}
          <Route path='/totaldrivers' element={<TotalDrivers/> }/>
          <Route path='/DriverAttendance' element={<Attendance/> }/>
          <Route path='/DriverBranch' element={<DriverBranch/> }/>
          <Route path='/AddDrivers' element={<AddDrivers/> }/>

        </Routes>
      </Router>
      </ChakraProvider>
  )
}

export default App;
