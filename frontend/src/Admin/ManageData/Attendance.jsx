import React from 'react'
import styled from 'styled-components';

const Attendance = () => {

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
    ]



  return (
    <DriverAttendanceContainer>
        <div>
            <h1>Raju - DL1MB0295</h1>
            <div> 
                <p>20</p> 
            </div>
            <div>
                <p>5</p>        
           </div>
            <div>
                <p>19</p> 
            </div>
            
        </div>
    </DriverAttendanceContainer>
  )
}

export default Attendance;


const DriverAttendanceContainer = styled.div`
    max-width: 1440px;
    min-height: 100vh;
`