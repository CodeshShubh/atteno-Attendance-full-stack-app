import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

const UserCard = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

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
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Temuser = () => {
  const [presentDays, setPresentDays] = useState([]);
  const currentDate = dayjs().date();
  const daysInMonth = dayjs().daysInMonth();

  const handleMarkPresent = () => {
    setPresentDays([...presentDays, currentDate]);
  };

  return (
    <div>
      <UserCard>
        <h2>User Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john.doe@example.com</p>
      </UserCard>
      <Calendar>
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
          <Day key={day} isPresent={presentDays.includes(day)}>
            {day}
          </Day>
        ))}
      </Calendar>
      <Button onClick={handleMarkPresent}>Mark Present</Button>
    </div>
  );
};

export default Temuser;
