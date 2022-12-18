import { AccountCircle, AssignmentInd, BatchPrediction, Person, RememberMe, ViewCompact, ViewTimeline, Workspaces } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";

function Sidebar() {
    return ( 
        <>
        
        <Box
    marginTop="3.5rem"
        sx={{height:"70rem", width:"15rem",color:"white",backgroundColor:"#1A76D2" , textAlign:"center",display:"flex", flexDirection:"column"}}
        >
            <Button sx={{color:"white"}} variant="text" startIcon={<Person />}> Users</Button>
            <Button sx={{color:"white"}} variant="text" startIcon={<AccountCircle />}> Admins</Button>
            <Button sx={{color:"white"}} variant="text" startIcon={<RememberMe />}> Pattern</Button>
            <Button sx={{color:"white"}} variant="text" startIcon={<BatchPrediction />}> Players</Button>
            <Button sx={{color:"white"}} variant="text" startIcon={<AssignmentInd />}> Access</Button>
            <Button sx={{color:"white"}} variant="text" startIcon={<Workspaces />}> Outdoor</Button>
            <Button sx={{color:"white"}} variant="text" startIcon={<ViewCompact />}> Indoor</Button>
            <Button sx={{color:"white"}} variant="text" startIcon={<ViewTimeline />}> Places</Button>


        </Box>
        </>
     );
}

export default Sidebar;