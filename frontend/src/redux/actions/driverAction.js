import {server} from '../store';
import axios from 'axios';
import { loginRequest, loginSuccess, loginFail } from '../reducer/driverReducer';
export const login = ({mobileNumber: UserId, DLnumber: Password})=>async dispatch=>{
       try {
        dispatch(loginRequest());
        const {data}= await axios.post(
            `${server}/driver/driverLogin`,
            {mobileNumber: UserId, DLnumber: Password},
            {
                headers:{
                    'Content-Type': 'application/json',
                },
                withCredentials:true,
            }
        );
        dispatch(loginSuccess({data, message: 'Login Successfull'}));
       } catch (error) {
        dispatch(loginFail({message: error.response.data.message}));
       }
}