import { Typography } from "@mui/material";
import { useEffect, useState } from "react";


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
 
        </>
     );
}

export default Datee;