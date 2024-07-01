import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MainNavBarContainer, OrangeButton } from '../Home/MHome';
import { FaCircleArrowLeft,FaCircleArrowRight } from "react-icons/fa6";
import dayjs from 'dayjs';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAttendance, markAttendance } from '../../redux/actions/AttendanceAction';


const MUserProfile = () => {

  const dispatch = useDispatch();
  const {attendance, loading , error} = useSelector((state)=>state.Attendance);
  const { user } = useSelector((state)=>state.driver);
 
const [currentDate, setCurrentDate] = useState(dayjs());
  const daysInMonth = currentDate.daysInMonth();
  const currentMonthYear = currentDate.format('DD-MMM-YYYY');
  const startDayOfWeek = currentDate.startOf('month').day();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    dispatch(fetchAttendance())
  }, [dispatch])

  // const [presentDays, setPresentDays] = useState({});
  const handleMarkPresent = () => {
    const currentDay = currentDate.date();
    const currentMonth = currentDate.format('YYYY-MM');
    if (!attendance[currentMonth]?.includes(currentDay)) {  //!(presentDays[currentMonth]?.includes(currentDay))
      // setPresentDays({ ...presentDays, [currentMonth]: [...(presentDays[currentMonth] || []), currentDay]})
       dispatch(markAttendance({currentMonth, currentDay}));
    }
  };

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month')); 
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };
    

   // Function to check if a day is marked present
   const isDayPresent = (year, month, day) => {
    const monthStr = month.toString();
    // Ensure attendance is an array and not undefined or null
    if (Array.isArray(attendance)) {
      return attendance.some(driver => 
        driver.AttendanceRecords.some(record => 
          record.Year === year &&
          record.months.some(m => 
            m.name === monthStr && 
            m.days.some(d => 
              d.day === day && d.status === 'present'
            )
          )
        )
      );
    }
    return false; // Handle case where attendance is not yet fetched or invalid
  };

 

  const data = user.newDriver;
 
  return (
    <UserProfileConatiner>
        <div className='userinfo'>
                <h1>Driver Information</h1>
            <div>
                <p><span>Name</span>: { data ? data.name : "NA"}</p>
                <p><span>Vehicle</span>: {data ? data.vehicle : "NA"}</p>
                <p><span>Mobile</span>: {data ? data.mobileNumber : "NA"}</p>
                <p><span>Branceh </span>: {data ? data.branchName : "NA"}</p>
            </div>
        </div>
         
         <div className='ClanderConatienr'>
            <div className='Clanderheader'>
            <FaCircleArrowLeft onClick={handlePrevMonth} />
            <h1>{currentMonthYear}</h1>
            <FaCircleArrowRight onClick={handleNextMonth} />
            </div>

        <div className='Calendar'>
        <div className='CalendarGrid'>
          {dayNames.map((dayName) => (
            <div className='DayHeader' key={dayName}>{dayName}</div>
          ))}
          {Array.from({ length: startDayOfWeek }, (_, i) => (
            <div key={`empty-${i}`} />
          ))}
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
            <Day className='Day' key={day} ispresent={isDayPresent(currentDate.year(), currentDate.month() + 1, day)}>
              {day}
            </Day>
          ))}
        </div>
        <OrangeButton onClick={handleMarkPresent} disabled={loading}>
          {loading ? "Marking..." : "Mark Present"}
          </OrangeButton>
      </div>
         
         <div className='totalPersent'>
            <h1>Total Persent : {attendance[currentDate.format('YYYY-MM')]?.length || 0}</h1>
         </div>
    </div>

      {error && <ErrorMessage>{error}</ErrorMessage> }

    </UserProfileConatiner>
  )
}

export default MUserProfile;

const UserProfileConatiner = styled(MainNavBarContainer)`
    background-color: white;
    padding: 0.5rem;

    .userinfo{
        background-color: #8C5CB3;
        text-align: center;
        border-radius: 1.5rem;
        >h1{
            font-weight: bolder;
            font-size: 2rem;
        }
       >div{
           display: flex;
           flex-direction: column;
           justify-content: start;
           align-items: start;
           background-color: #FE6F23;
           margin: 0.5rem;
           padding: 1rem;
           border-radius: 1.5rem;
           >p{
            font-weight: 500;
            font-size: 1rem;

            >span{
                font-weight: bolder;
                font-size: 1.2rem;
            }
           }
        
       }
    }


    .ClanderConatienr{
        background-color: whitesmoke;
        margin-top: 1rem;
        .Clanderheader{
            display: flex;
            justify-content: space-between;
            font-weight: bolder;
            font-size: 1.5rem;
            padding: 1rem;
        }
        .Calendar{
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .CalendarGrid{
            display: grid;
            grid-template-columns: repeat(7, 1fr);
            gap: 10px;
        }
        .DayHeader{
            font-weight: bold;
            text-align: center;
        }
    }

    .totalPersent{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        font-size: 2rem;
        padding: 0.5rem;
    }
`

const Day = styled.div.attrs(props => ({
  // Filter out the ispresent prop to avoid passing it to the DOM
  ispresent: undefined,
}))`


    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(props) => (props.ispresent ? '#4caf50' : '#fff')};
    color: ${(props) => (props.ispresent ? '#fff' : '#000')};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => (props.ispresent ? '#45a045' : '#e0e0e0')};
    }
        
`