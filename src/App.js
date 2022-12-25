

import Footer from "./Footer";

import NavBar from "./NavBar";

import Test from "./Test";
import app from "./App.css"
import { Box } from "@mui/system";
import React, { Component }  from 'react';



function App() {
  return (
    
    <>
    <Box sx={{backgroundColor:"#1A76D2"}}>
    <NavBar />
    <Test />
  
    
    <Footer />
    </Box>
   
   
      
    
      
  
    </>
  );
}

export default App;
