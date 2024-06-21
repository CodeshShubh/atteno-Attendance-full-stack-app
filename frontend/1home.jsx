// // using media quarry


// // import styled from 'styled-components';
// // import VectorTruck from '../../assets/VectorTruck.jpg'
// // import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// // import { Link } from 'react-router-dom'

// // const MHome = () => {
// //   return (
// //     <MainNavBarContainer>
// //       <div className='logo'>
// //         <h1>ATT<span>ENO</span> </h1>
// //       </div>
// //       <div className='homeImg'>
// //         <img src={VectorTruck} alt='TruckIMG'/>
// //       </div>
// //       <div className='content'>
// //          <h1>Drivers Attendance</h1>
// //          <h3>Easy & Safe</h3>
// //          <p>Welcome to our logistics app, where you can track, contract, manage your shipments easily and efficiently!</p>
// //       </div>
// //       <OrangeButton>Get started <MdKeyboardDoubleArrowRight/> </OrangeButton>

// //       <div className='BottonContent'>
// //         <p>If you are Admin Click Here</p>
// //         <Link to={'/'}>Login Here</Link>
// //       </div>
// //     </MainNavBarContainer>
// //   )
// // }

// // export default MHome;

// // const MainNavBarContainer = styled.div`
// //   max-width: 1440px;
// //   max-height: 844px;
// //   margin: 0 auto;
// //   background-color: #8C5CB3;
// //   padding: 1rem;
// //   display: flex;
// //   justify-content: center;
// //   flex-direction: column;

// //   @media (max-width: 768px) {
// //     padding: 0.5rem;
// //   }

// //   @media (max-width: 480px) {
// //     padding: 0.2rem;
// //   }

// //   .logo {
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     padding: 0.8rem;
// //     color: white;
// //     min-width: 200px;
// //     font-weight: 900;
// //     font-size: 2rem;
// //     border-radius: 20px 5px 5px 20px;
// //     margin-top: 3rem;

// //     > h1 > span {
// //       background-color: #FE6F23;
// //       padding: 0.5rem;
// //       border-radius: 5px 20px 20px 5px;
// //     }

// //     @media (max-width: 768px) {
// //       font-size: 1.5rem;
// //     }

// //     @media (max-width: 480px) {
// //       font-size: 1.2rem;
// //     }
// //   }

// //   .homeImg {
// //     max-width: 376px;
// //     min-height: 256px;
// //     margin: 1rem auto;

// //     > img {
// //       border-radius: 200px;
// //       width: 100%;
// //     }

// //     @media (max-width: 768px) {
// //       max-width: 300px;
// //       min-height: 200px;
// //     }

// //     @media (max-width: 480px) {
// //       max-width: 200px;
// //       min-height: 150px;
// //     }
// //   }

// //   .content {
// //     text-align: center;

// //     > h1 {
// //       font-weight: bolder;
// //       font-size: 2rem;

// //       @media (max-width: 768px) {
// //         font-size: 1.5rem;
// //       }

// //       @media (max-width: 480px) {
// //         font-size: 1.2rem;
// //       }
// //     }

// //     > h3 {
// //       font-weight: bold;
// //       font-size: 1.5rem;

// //       @media (max-width: 768px) {
// //         font-size: 1.2rem;
// //       }

// //       @media (max-width: 480px) {
// //         font-size: 1rem;
// //       }
// //     }

// //     > p {
// //       font-weight: bold;
// //       margin-top: 1rem;

// //       @media (max-width: 768px) {
// //         font-size: 1rem;
// //       }

// //       @media (max-width: 480px) {
// //         font-size: 0.8rem;
// //       }
// //     }
// //   }

// //   .BottonContent {
// //     display: flex;
// //     justify-content: center;
// //     align-items: center;
// //     gap: 0.6rem;

// //     > p {
// //       font-weight: 500;
// //     }

// //     > a {
// //       color: #FE6F23;
// //       font-weight: bolder;
// //     }

// //     @media (max-width: 768px) {
// //       flex-direction: column;
// //       gap: 0.4rem;
// //     }

// //     @media (max-width: 480px) {
// //       flex-direction: column;
// //       gap: 0.2rem;
// //     }
// //   }
// // `

// // const OrangeButton = styled.button`
// //   display: flex;
// //   justify-content: center;
// //   align-items: center;
// //   min-width: 290px;
// //   background-color: #FE6F23;
// //   border-radius: 20px;
// //   margin: 2rem auto;
// //   gap: 0.5rem;
// //   font-size: larger;
// //   font-weight: bolder;
// //   padding: 0.5rem;

// //   @media (max-width: 768px) {
// //     min-width: 250px;
// //   }

// //   @media (max-width: 480px) {
// //     min-width: 200px;
// //     font-size: medium;
// //   }
// // `








// // Using (react-responsive) package

// import styled from 'styled-components';
// import VectorTruck from '../../assets/VectorTruck.jpg'
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";
// import { Link } from 'react-router-dom'
// import { useMediaQuery } from 'react-responsive'

// const MHome = () => {
//   const isMobile = useMediaQuery({ query: '(max-width: 480px)' })
//   const isTablet = useMediaQuery({ query: '(max-width: 768px)' })

//   return (
//     <MainNavBarContainer isMobile={isMobile} isTablet={isTablet}>
//       <div className='logo'>
//         <h1>ATT<span>ENO</span> </h1>
//       </div>
//       <div className='homeImg'>
//         <img src={VectorTruck} alt='TruckIMG'/>
//       </div>
//       <div className='content'>
//          <h1>Drivers Attendance</h1>
//          <h3>Easy & Safe</h3>
//          <p>Welcome to our logistics app, where you can track, contract, manage your shipments easily and efficiently!</p>
//       </div>
//       <OrangeButton>Get started <MdKeyboardDoubleArrowRight/> </OrangeButton>

//       <div className='BottonContent'>
//         <p>If you are Admin Click Here</p>
//         <Link to={'/'}>Login Here</Link>
//       </div>
//     </MainNavBarContainer>
//   )
// }

// export default MHome;

// const MainNavBarContainer = styled.div`
//   display: grid;
//   grid-template-rows: auto 1fr auto;
//   align-items: center;
//   justify-items: center;
//   max-width: 1440px;
//   margin: 0 auto;
//   background-color: #8C5CB3;
//   padding: ${({ isMobile }) => (isMobile ? '0.2rem' : isTablet ? '0.5rem' : '1rem')};

//   .logo {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0.8rem;
//     color: white;
//     font-weight: 900;
//     font-size: ${({ isMobile }) => (isMobile ? '1.2rem' : isTablet ? '1.5rem' : '2rem')};
//     border-radius: 20px 5px 5px 20px;
//     margin-top: 3rem;

//     > h1 > span {
//       background-color: #FE6F23;
//       padding: 0.5rem;
//       border-radius: 5px 20px 20px 5px;
//     }
//   }

//   .homeImg {
//     max-width: 100%;
//     margin: 1rem auto;

//     > img {
//       width: 100%;
//       border-radius: 200px;
//     }

//     @media (max-width: 768px) {
//       max-width: 300px;
//     }

//     @media (max-width: 480px) {
//       max-width: 200px;
//     }
//   }

//   .content {
//     text-align: center;

//     > h1 {
//       font-weight: bolder;
//       font-size: ${({ isMobile }) => (isMobile ? '1.2rem' : isTablet ? '1.5rem' : '2rem')};
//     }

//     > h3 {
//       font-weight: bold;
//       font-size: ${({ isMobile }) => (isMobile ? '1rem' : isTablet ? '1.2rem' : '1.5rem')};
//     }

//     > p {
//       font-weight: bold;
//       margin-top: 1rem;
//       font-size: ${({ isMobile }) => (isMobile ? '0.8rem' : isTablet ? '1rem' : '1.2rem')};
//     }
//   }

//   .BottonContent {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: ${({ isMobile }) => (isMobile ? '0.2rem' : isTablet ? '0.4rem' : '0.6rem')};

//     > p {
//       font-weight: 500;
//     }

//     > a {
//       color: #FE6F23;
//       font-weight: bolder;
//     }
//   }
// `

// const OrangeButton = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 80%;
//   max-width: 290px;
//   background-color: #FE6F23;
//   border-radius: 20px;
//   margin: 2rem auto;
//   gap: 0.5rem;
//   font-size: ${({ isMobile }) => (isMobile ? 'small' : 'larger')};
//   font-weight: bolder;
//   padding: 0.5rem;

//   @media (max-width: 768px) {
//     width: 70%;
//   }

//   @media (max-width: 480px) {
//     width: 60%;
//   }
// `
