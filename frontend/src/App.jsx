
import {ChakraProvider} from '@chakra-ui/react';
import Home from './components/Home/Home';


import './App.css'
function App() {

  return (
    <ChakraProvider>
      <Home/>
    </ChakraProvider>
  )
}

export default App
