import ReactPlayer from 'react-player'
import React, { Component, useState }  from 'react';
import { Button, Input, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Player=()=> {
    const [search,setSearch]=useState('');

    const handleChange=(e)=>{
        return(
            setSearch(e.target.value))
    
    }
    const handleClick=()=>{
  
    }
    return ( 
        <>
        <h3>Search Movie or Music or Trailer</h3>
        <TextField placeholder='Search Movie or Music' sx={{color:"white"}} 
        onChange={handleChange}
        ></TextField>
        <Button  variant='' sx={{marginLeft:1}}
        startIcon={<SearchIcon />}
        onClick={handleClick}
        ></Button><br/>
        {search}
        <br/>
        {/* <h2>Music</h2> */}
        <ReactPlayer url='https://www.youtube.com/watch?v=421w1j87fEM' progressInterval="true" width={500} height={300} controls="true" />
        
       
        
        </>
     );
}

export default Player;