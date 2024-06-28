
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
import { lazy, useEffect, Suspense } from 'react';
import toast, { Toaster } from 'react-hot-toast'

import './App.css'
const MLogin = lazy(()=>import('./components/Login/MLogin'))
const MHome = lazy(()=>import('./components/Home/MHome'))
const MUserProfile = lazy(()=>import('./components/User/MUserProfile'))


//Admin Routes
const MAdminLogin = lazy(()=>import('./Admin/MAdminLogin'))
const MDashboard = lazy(()=>import('./Admin/MDashboard'))


//manage Data
const TotalDrivers = lazy(()=>import('./Admin/ManageData/TotalDrivers'))
const Attendance = lazy(()=>import('./Admin/ManageData/Attendance'))
const DriverBranch = lazy(()=>import('./Admin/ManageData/DriverBranch'))
const AddDrivers = lazy(()=>import('./Admin/ManageData/AddDrivers'))


import { useDispatch, useSelector } from 'react-redux';
import Loader from './Layout/Loader/Loader';
import {clearError, clearMessage} from './redux/reducer/driverReducer'


function App() {
  // window.addEventListener('contextmenu', e => {
  //   e.preventDefault();
  // });

 const {isAuthenticated, user, message, error, loading} = useSelector(state=>state.driver);
const dispatch = useDispatch();

useEffect(()=>{
  if(error){
    toast.error(error);
    dispatch(clearError())
  }
  if(message){
    toast.success(message)
    dispatch(clearMessage())
  }
},[dispatch, error, message])

  return (
    <ChakraProvider>
      <Router>
         {
          loading ? (<Loader/>) : (
              <>
              <Suspense fallback={<Loader/>}>
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
              </Suspense>
              <Toaster position='top-center'/>
              </>
          )
         }
      </Router>
      </ChakraProvider>
  )
}

export default App;
