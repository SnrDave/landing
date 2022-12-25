import ReactPlayer from 'react-player'
import React, { Component }  from 'react';

const Player=()=> {
    return ( 
        <>
        <h2>Movie Name</h2>
        <ReactPlayer url='https://www.youtube.com/watch?v=421w1j87fEM' progressInterval="true" width={500} height={300} controls="true" />
        </>
     );
}

export default Player;