
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'



import './App.css'
import MLogin from './components/Login/MLogin';
import MHome from './components/Home/MHome';
import MUserProfile from './components/User/MUserProfile';
import Temuser from './components/User/temuser';


function App() {

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MHome/> }/>
          <Route path='/login' element={<MLogin/> }/>
          <Route path='/user' element={<MUserProfile/> }/>
          <Route path='/temuser' element={<Temuser/> }/>
        </Routes>
      </Router>
      </ChakraProvider>
  )
}

export default App
