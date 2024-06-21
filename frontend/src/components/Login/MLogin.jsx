import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";


import loginImg from '../../assets/LoginImage.png'
import { MainNavBarContainer, OrangeButton } from "../Home/MHome";
import { Link } from "react-router-dom";

const MLogin = () => {
  return (
    <LoginPageConatiner>
     <div className="TopHeading">
        <h1>Welcome Back</h1>
        <p>Please log in to continue.</p>
     </div>
      <div className="loginImg">
        <img src={loginImg} alt="loginImg"/>
      </div>
      <form>
        <h1>Enter Your Mobile Number</h1>
        <input type="number" placeholder="Enter Number" />
         <p>Change Number?</p>
        <LoginPageButton>Send OTP</LoginPageButton>
      </form>

        <StyledHR/>
      <div className="hrtext">
        <p>Or Login with</p>
        </div>

      <LoginPageButton $primary>
      <FaGoogle /> Google
      </LoginPageButton>

    </LoginPageConatiner>
  )
}

export default MLogin;



const LoginPageConatiner = styled(MainNavBarContainer)`
background-color: whitesmoke;

.TopHeading{
  text-align: center;
  >h1{
    font-weight: bolder;
    font-size: 2rem;
  }
  >p{
     font-weight: 500;
     font-size: 1rem;
  }
}

.loginImg{
  display: flex;
  justify-content: center;
  padding: 0.5rem;
 >img{
  width: 20rem;
  height: 20rem;
 }
}
>form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  >h1{
    font-weight: bold;
    font-size: 1.1rem;
    color: #FE6F23;
  }
  >p{
    width: 100%;
    display: flex;
    justify-content: end;
  }
  >input{
    all: unset;
    width: 100%;
    padding: 1rem;
    border-radius: 10px;
    margin-top: 1.5rem;
    background-color: white;
    
    &::placeholder{
      font-weight: 700;
      
    }
  }
}

.hrtext{
 position: relative;
 left: 8rem;
 bottom: 13px;
 background-color: whitesmoke;
 width: fit-content;
}

`;
const LoginPageButton = styled(OrangeButton)`
  width: 100%;
  background-color: ${(props) => props.$primary? "whitesmoke" : "default" };
  border: ${(props) => props.$primary? "1px solid black" : "default" };
`;

const StyledHR = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid black; /* Example styling */

`;


