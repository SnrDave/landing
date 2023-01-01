import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import React, { Component }  from 'react';
import PopularMovies from "./PoularMovies";
import FetchMovies from "./FetchMovies";
import Player from "./Player";


function Datee() {
    const currentTime= new Date().toLocaleString();
    



     const [time, setTime]=useState(currentTime);

//     useEffect(()=>{
//  setInterval(() => {
    // window.location.reload(1)
// }, 1000);
//     },[]
// )
    
    return ( 
        <>
        <Typography 
        sx={{textAlign:"center", mt:"2rem"}}>
        <h4>{currentTime}</h4>
        </Typography>
        <Player />
       
 
        </>
     );
}

export default Datee;