import styled from "styled-components";
import { OrangeButton } from '../../components/Home/MHome';

const AddDrivers = () => {
  return (
    <AddDriversConatiner>
      <div className="top_heading">
        <h1>Add Drivers</h1>
        <p>Add Drivers Branch,Name,Vehicle Number</p>
      </div>
      
     <div className="form_Container">
      <form>
          <input type="text" name="branch" placeholder="Branch Name" />
          <input type="text" name="driver" placeholder="Driver Name" />
          <input type="text" name="vehicle" placeholder="Vehicle Number" />
          <OrangeButton>Add Drivers</OrangeButton>
      </form>
     </div>
    </AddDriversConatiner>
  )
}

export default AddDrivers;

const AddDriversConatiner = styled.div`
 max-width: 1440px;
 min-height: 844px;
 padding: 0.5rem;
 background-color: white;
 .top_heading{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 6rem 0;
  >h1{
    font-weight: bolder;
    font-size: 2rem;
  }
  >p{
    font-weight: 800;
  }
 }

 .form_Container{
  background-color: whitesmoke;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >form{
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    gap: 1rem;
    margin-top:2rem ;
    >input{
      padding: 1rem;
    }
  }
 }
`