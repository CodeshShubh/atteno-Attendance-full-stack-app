import React from 'react';
import styled from 'styled-components';
import { BackwardArrow } from '../admincomponents/btns';
import { useNavigate } from 'react-router-dom';
import { OrangeButton } from '../../components/Home/MHome';

const Attendance = () => {
    const Drivers = [
        {
            id: 1,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 2,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 3,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 4,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 5,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 6,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 7,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 8,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 9,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 10,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 11,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
        {
            id: 12,
            name: "Ramesh",
            vehicle: "DL1MD2975",
            persent: 25,
            Absent: 5,
            TotalTrip: 25,
        },
    ];

      const navigation = useNavigate();
    const BackwordArrowHandler =(e)=>{
      e.preventDefault()
        navigation('/admindashboard')
    }

    return (
        <Container>
            <div className='backwordArrow'>
               <BackwardArrow onClick={BackwordArrowHandler} />
            </div>
            <DriverAttendanceContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Vehicle</th>
                            <th>Present</th>
                            <th>Absent</th>
                            <th>Total Trip</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Drivers.map((driver) => (
                            <tr key={driver.id}>
                                <td>{driver.name}</td>
                                <td>{driver.vehicle}</td>
                                <td style={{ backgroundColor: "green", color: "white" }}>{driver.persent}</td>
                                <td style={{ backgroundColor: "red", color: "white" }}>{driver.Absent}</td>
                                <td style={{ backgroundColor: "blue", color: "white" }}>{driver.TotalTrip}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </DriverAttendanceContainer>
            <OrangeButton>Download</OrangeButton>
        </Container>
    );
};

export default Attendance;

const Container = styled.div`
    max-width: 390px;
    margin: 0 auto;
    .backwordArrow{
        font-weight: bolder;
        font-size: 2rem;
        margin: 1rem;
    }
`;

const DriverAttendanceContainer = styled.div`
    margin-top: 2rem;
    padding: 0.2rem;
    table {
        width: 100%;
        border-collapse: collapse;

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: center;
            font-size: 0.9rem;
        }

        th {
            background-color: #FE6F23;
            color: white;
            font-weight: bolder;
            font-size: 1rem;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }
    }
`;


