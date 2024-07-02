import styled from "styled-components";
import MultpleCards from "../admincomponents/MultpleCards";
import {useSelector} from 'react-redux';

const TotalDrivers = () => {

    const {AdminUser} = useSelector(state=>state.AdminLogin);
    const Drivers  = AdminUser.getalldrivers



  return (
    <TotalDriversContainer>
           <div className="topInfo">
             <h1>Toral Drivers - {Drivers.length}</h1>
             <p>Persent - 25</p>
             <p>Absent - 5</p>
           </div>
           {
            Drivers.map((value)=>(
                <MultpleCards key={value._id} name={value.name} vehicle={value.vehicle}  />
            ))
           }
    </TotalDriversContainer>
  )
}

export default TotalDrivers;



export const TotalDriversContainer = styled.div`
    max-width: 1440px;
    min-height: 100vh;
    background-color: white;
    padding: 0.5rem;

 .topInfo{
    background-color: whitesmoke;
    margin: 0.5rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >h1{
        font-size: 2rem;
        font-weight: bolder;
    }
    >p{
        font-size: 1rem;
        font-weight: bolder;
    }
 }
`