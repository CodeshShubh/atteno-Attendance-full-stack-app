import styled from "styled-components";
import MultpleCards from "../admincomponents/MultpleCards";
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import { useMemo } from "react";


const TotalDrivers = () => {

    const {AdminUser} = useSelector(state=>state.AdminLogin);
    const Drivers  = AdminUser.getalldrivers

    const today = dayjs().date(); // Today's date
    const currentMonth = dayjs().month() + 1; // Month is 0-indexed
    const currentYear = dayjs().year();

   
    // Count present and absent drivers
    const { presentCount, absentCount, driversWithStatus } = useMemo(() => {
      let presentCount = 0;
      let absentCount = 0;
  
      const driversWithStatus = Drivers.map(driver => {
        const attendanceRecords = driver.attendance.find(record => record.AttendanceRecords.some(r => r.Year === currentYear));
        const monthRecord = attendanceRecords?.AttendanceRecords.find(r => r.Year === currentYear)?.months.find(month => parseInt(month.name) === currentMonth);
        const dayStatus = monthRecord?.days.find(day => day.day === today)?.status;
  
        if (dayStatus === "present") {
          presentCount += 1;
        } else {
          absentCount += 1;
        }
  
        return {
          ...driver,
          isPresentToday: dayStatus === "present",
        };
      });
  
      return { presentCount, absentCount, driversWithStatus };
    }, [Drivers, today, currentMonth, currentYear]);

  return (
    <TotalDriversContainer>
           <div className="topInfo">
             <h1>Toral Drivers - {Drivers.length}</h1>
             <p>Persent - {presentCount}</p>
             <p>Absent - {absentCount}</p>
           </div>
           {
            driversWithStatus.map((driver)=>(
                <MultpleCards key={driver._id} name={driver.name} vehicle={driver.vehicle} isPresentToday={driver.isPresentToday}
                />
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