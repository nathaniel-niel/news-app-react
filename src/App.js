import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../src/containers/Home'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router basename='/news'>
        <Routes>
          <Route  path='/'  element={<Home />}></Route>
        </Routes>

      </Router>
     

      
    </ChakraProvider>
  );
}

export default App;
