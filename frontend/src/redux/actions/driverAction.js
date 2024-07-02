import {server} from '../store';
import axios from 'axios';
import { setAuthenticated, setError, setLoading, setMessage, setUser } from '../reducer/driverReducer';


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