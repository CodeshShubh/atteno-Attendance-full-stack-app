
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'



import './App.css'
import MLogin from './components/Login/MLogin';
import MHome from './components/Home/MHome';

function App() {

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path='/' element={<MHome/> }/>
          <Route path='login' element={<MLogin/> }/>
        </Routes>
      </Router>
      </ChakraProvider>
  )
}

export default App
