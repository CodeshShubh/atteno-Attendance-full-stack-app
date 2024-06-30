import axios from 'axios';
import { setError, setFetchAttendance, setLoading, setMarkAttendance, setMessage } from '../reducer/AttendanceReducer'
import { server } from '../store';

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
    dispatch(setMarkAttendance({ currentMonth, currentDay }));
    dispatch(setMessage('Attendance Mark'));
 }catch(error){
        dispatch(setError(error.response.data.message));
 } finally{
    dispatch(setLoading(false));
   }

};


export const fetchAttendance =()=> async(dispatch)=>{
    try{
        dispatch(setLoading(true));
        const {data} = await axios.get(
            `${server}/driver/fetch/attendance`,
            {
                withCredentials: true,
            }
        )
        dispatch(setFetchAttendance(data));
    }catch(error){
        dispatch(setError(error.response.data.message))
    }
}