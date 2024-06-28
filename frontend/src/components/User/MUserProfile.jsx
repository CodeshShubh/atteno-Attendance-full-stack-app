import React, { useState } from 'react';
import styled from 'styled-components';
import { MainNavBarContainer, OrangeButton } from '../Home/MHome';
import { FaCircleArrowLeft,FaCircleArrowRight } from "react-icons/fa6";
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';


const MUserProfile = () => {

  const user = useSelector((state)=>state.driver.user.newDriver); // this is for select user


const [currentDate, setCurrentDate] = useState(dayjs());
  const daysInMonth = currentDate.daysInMonth();
  const currentMonthYear = currentDate.format('DD-MMM-YYYY');
  const startDayOfWeek = currentDate.startOf('month').day();
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


  const [presentDays, setPresentDays] = useState({});
  const handleMarkPresent = () => {
    const currentDay = currentDate.date();
    const currentMonth = currentDate.format('YYYY-MM');
    if (!(presentDays[currentMonth]?.includes(currentDay))) {
      setPresentDays({
        ...presentDays,
        [currentMonth]: [...(presentDays[currentMonth] || []), currentDay],
      });
    }
  };
    console.log(presentDays);

  const handlePrevMonth = () => {
    setCurrentDate(currentDate.subtract(1, 'month')); 
  };

  const handleNextMonth = () => {
    setCurrentDate(currentDate.add(1, 'month'));
  };
 
  return (
    <UserProfileConatiner>
        <div className='userinfo'>
                <h1>Driver Information</h1>
            <div>
                <p><span>Name</span>: { user? user.name : "NA"}</p>
                <p><span>Vehicle</span>: {user? user.vehicle : "NA"}</p>
                <p><span>Mobile</span>: {user? user.mobileNumber : "NA"}</p>
                <p><span>Branceh </span>: {user? user.branchName : "NA"}</p>
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
            <Day className='Day' key={day} isPresent={presentDays[currentDate.format('YYYY-MM')]?.includes(day)}>
              {day}
            </Day>
          ))}
        </div>
        <OrangeButton onClick={handleMarkPresent}>Mark Present</OrangeButton>
      </div>
         
         <div className='totalPersent'>
            <h1>Total Persent : {presentDays[currentDate.format('YYYY-MM')]?.length || 0}</h1>
         </div>

    </div>



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

const Day = styled.div`

    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${(props) => (props.isPresent ? '#4caf50' : '#fff')};
    color: ${(props) => (props.isPresent ? '#fff' : '#000')};
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: ${(props) => (props.isPresent ? '#45a045' : '#e0e0e0')};
    }
        
`