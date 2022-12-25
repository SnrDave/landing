import {Grid} from "@mui/material";
import Datee from "./Datee";
import Main from "./Main";
import Sidebar from "./Sidebar";

function Test() {
    return ( 
        <>
        
        <Grid container mt="1rem"sx={{textAlign:"center", position:"fixed"}} >
        <Grid item md={4} xs={4}  sx={{backgroundColor:"#1A76D2",color:"white" }}>
            <Sidebar />
            
        </Grid>
        <Grid item md={4} xs={4}  sx={{backgroundColor:"#1A76D2",color:"white" }}>
        <Main />
        </Grid>
        
        <Grid item md={4} xs={4} sx={{backgroundColor:"#1A76D2",color:"white" }}>
        <Datee />
        </Grid>


        </Grid>
        
        </>
     );
}

export default Test;