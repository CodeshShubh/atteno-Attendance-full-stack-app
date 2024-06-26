import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import loginImg from '../../assets/LoginImage.png';
import { MainNavBarContainer, OrangeButton } from "../Home/MHome";
import { useState } from "react";


const MLogin = () => {
  const [UserId, setUserId] = useState("");
  const [Password, setPassword] = useState("");

 

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
        <input onChange={(e) => setUserId(e.target.value)}
              value={UserId}
              type="txt"
              placeholder="User Id"
            />
            <input onChange={(e) => setPassword(e.target.value)}
              value={Password}
              type="password"
              placeholder="Enter Password"
            />
        <LoginPageButton type="submit">Login</LoginPageButton>
      </form>
      <StyledHR />
      <div className="hrtext">
        <p>Or Login with</p>
      </div>
      <LoginPageButton $primary>
        <FaGoogle/> Gmail
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
    margin-top: 2rem;
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
   margin-top: 2rem;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    > img {
      width: 17rem;
      height: 17rem;
      
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
      margin-top: 1rem;
      background-color: white;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
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
  width: 96%;
  background-color: ${(props) => props.$primary ? "whitesmoke" : "default"};
  border: ${(props) => props.$primary ? "1px solid black" : "default"};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
`;

const StyledHR = styled.hr`
  width: 95%;
  border: none;
  border-top: 1px solid black; /* Example styling */
`;
