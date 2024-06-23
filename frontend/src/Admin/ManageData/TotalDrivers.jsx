import styled from "styled-components";
import MultpleCards from "../admincomponents/MultpleCards";

const TotalDrivers = () => {

   const Drivers = [
    {
        id:1,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:2,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:3,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:4,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:6,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:7,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:8,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:9,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:10,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:11,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:12,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:13,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:14,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:15,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:16,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:17,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:18,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:19,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:20,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:21,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:22,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },
    {
        id:23,
        name:"Ramesh",
        vehicle: "DL1MD2975"
    },

   ]

  return (
    <TotalDriversContainer>
           <div className="topInfo">
             <h1>Toral Drivers - 30</h1>
             <p>Persent - 25</p>
             <p>Absent - 5</p>
           </div>
           {
            Drivers.map((value)=>(
                <MultpleCards id={value.id} name={value.name} vehicle={value.vehicle}  />
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