import React, { Component }  from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Player from "./Player";
import FetchMovies from './FetchMovies';




function Main( {
  
}) {

    return ( 
        <>
        
        <Box
        sx={{align:"center",mt:"2rem"}}>
           
       <FetchMovies />
      
       
        </Box>
        </>

     );
}

export default Main;