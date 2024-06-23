import styled from 'styled-components'
import { OrangeButton } from '../../components/Home/MHome'
import { IoIosArrowDropright } from "react-icons/io";
import { FaCircleArrowLeft } from "react-icons/fa6";




export const Navigationbtns =({btn, btncolor, icons, onclick})=>{
    return(
        <Navbtns onClick={onclick} btncolor={btncolor}>
             <div className='icons'>
            {icons}  
           <div className='namesvg'>     
            {btn}
           <IoIosArrowDropright /> 
           </div>
             </div>  
            </Navbtns>
    )
}


const  Navbtns = styled(OrangeButton)`
background-color: ${(props) => props.btncolor || "default"};

svg{
    font-weight: bold;
    font-size: 4rem;
}

.icons{
    display: flex;
    flex-direction: column;
    gap: 1rem;

}
.namesvg{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

}

`


// for arrows

// export const ForwardArrow =()=>{
    
// }

// export const BackwardArrow =()=>{
//     <FaCircleArrowLeft />
// }