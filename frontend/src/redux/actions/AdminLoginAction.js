import { server } from "../store";
import {setError, setLoading, setMessage, setUser, setisAuthenticated} from '../reducer/AdminLoginReducer'
import axios from "axios";

export const AdminLogin = ({AdminUserId, Password})=> async(dispatch)=>{
    try {
       dispatch(setLoading(true))
       const {data} =  await axios.post(`${server}/admin/login`, 
        {AdminUserId, Password},
        { withCredentials:true }
       );
       dispatch(setUser(data));
       dispatch(setisAuthenticated(true));
       dispatch(setMessage("Login successfull"))
    } catch (error) {
        dispatch(setError(error.response.data.message))
    } finally{
        dispatch(setLoading(false))
    }
};