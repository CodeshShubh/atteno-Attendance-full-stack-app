import {server} from '../store';
import axios from 'axios';
import { setAuthenticated, setError, setFetchAttendance, setLoading, setMarkAttendance, setMessage, setUser } from '../reducer/driverReducer';


export const login = ({mobileNumber, DLnumber})=>async (dispatch)=>{
       try {
        dispatch(setLoading(true));
        const {data}= await axios.post(
            `${server}/driver/driverLogin`,
            {mobileNumber, DLnumber}, 
            { withCredentials:true }
        );
        dispatch(setUser(data));
        dispatch(setAuthenticated(true));
        dispatch(setMessage('Login Successful'))
       } catch (error) {
        dispatch(setError(error.response.data.message));
       } finally{
        dispatch(setLoading(false));
       }
};


export const loadUser = ()=>async (dispatch)=>{
    try {
     dispatch(setLoading(true));
     const {data}= await axios.get(
         `${server}/driver/getdriverprofile`,
         {
             withCredentials:true,
         });

     dispatch(setUser(data));
     dispatch(setAuthenticated(true));
    } catch (error) {
     dispatch(setError(error.response.data.message));
    } finally{
     dispatch(setLoading(false));
    }
};

export const markAttendance = ({currentMonth, currentDay})=>async (dispatch) =>{

    try{
   
       dispatch(setLoading(true));
       const {data} = await axios.post(
           `${server}/driver/add/attendance`,
           {currentMonth, currentDay},
           {
               headers:{
                   'Content-Type': 'application/json',
               },
               withCredentials: true,
           }
       );
       dispatch(setMarkAttendance(data));
       dispatch(setMessage('Attendance Mark'));
    }catch(error){
           dispatch(setError(error.response.data.message));
    } finally{
       dispatch(setLoading(false));
      }
   
   };


//    export const fetchAttendance =()=> async(dispatch)=>{
//     try{
//         dispatch(setLoading(true));
//         const {data} = await axios.get(
//             `${server}/driver/fetch/attendance`,
//             {
//                 withCredentials: true,
//             }
//         )
//         dispatch(setFetchAttendance(data));
//     }catch(error){
//         dispatch(setError(error.response.data.message))
//     }finally{
//         dispatch(setLoading(false));
//        }
// }

