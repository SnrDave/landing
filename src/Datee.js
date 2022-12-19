import { Typography } from "@mui/material";


function Datee() {
    const tim= new Date().toLocaleString();
    return ( 
        <>
        <Typography 
        sx={{textAlign:"center"}}>
        <h4>{tim}</h4>
        </Typography>
 
        </>
     );
}

export default Datee;