import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import loginImg from '../../assets/LoginImage.png';
import { MainNavBarContainer, OrangeButton } from "../Home/MHome";
import { useState } from "react";


const MLogin = () => {
  const [Drivername, setDrivername] = useState("");
  const [DriverMobileNumber, setDriverMobileNumber] = useState("");
  const [vehicleNumber, vehicleNumberset] = useState("");
  const [Driveremail, setDriveremail] = useState("");



 

  const LoginHandler = async (e) => {
    e.preventDefault();

  };



  return (
    <LoginPageContainer>
      <div className="TopHeading">
        <h1>Welcome Back</h1>
        <p>Please log in to continue.</p>
      </div>
      <div className="loginImg">
        <img src={loginImg} alt="loginImg" />
      </div>
      <form onSubmit={LoginHandler}>
        <input onChange={(e) => setDrivername(e.target.value)}
              value={Drivername}
              type="tel"
              placeholder="Enter Name"
            />
            <input onChange={(e) => setDriverMobileNumber(e.target.value)}
              value={DriverMobileNumber}
              type="tel"
              placeholder="Enter Number"
            />
            <input onChange={(e) => vehicleNumberset(e.target.value)}
              value={vehicleNumber}
              type="text"
              placeholder="Vehicle Number"
            />
            <input onChange={(e) => setDriveremail(e.target.value)}
              value={Driveremail}
              type="tel"
              placeholder="Enter Email"
            />
        <LoginPageButton type="submit">Login</LoginPageButton>
      </form>
      <StyledHR />
      <div className="hrtext">
        <p>Or Login with</p>
      </div>
      <LoginPageButton $primary>
        <FaGoogle /> Google
      </LoginPageButton>
    </LoginPageContainer>
  );
};

export default MLogin;

const LoginPageContainer = styled(MainNavBarContainer)`
  background-color: whitesmoke;
  max-width: 100%; /* Adjust to fit within the viewport */
  overflow: hidden;
  .TopHeading {
    text-align: center;
    > h1 {
      font-weight: bolder;
      font-size: 2rem;
    }
    > p {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .loginImg {

    display: flex;
    justify-content: center;
    padding: 0.5rem;
    > img {
      width: 13rem;
      height: 13rem;
    }
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    > input {
      all: unset;
      width: 95%;
      padding: 0.5rem;
      border-radius: 10px;
      margin-top: 1.5rem;
      background-color: white;
      &::placeholder {
        font-weight: 700;
      }
    }
  }

  .hrtext {
    position: relative;
    left: 8rem;
    bottom: 13px;
    background-color: whitesmoke;
    width: fit-content;
  }
`;

const LoginPageButton = styled(OrangeButton)`
  width: 95%;
  background-color: ${(props) => props.$primary ? "whitesmoke" : "default"};
  border: ${(props) => props.$primary ? "1px solid black" : "default"};
`;

const StyledHR = styled.hr`
  width: 95%;
  border: none;
  border-top: 1px solid black; /* Example styling */
`;
