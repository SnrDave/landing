import { Box } from "@mui/system";

function Sidebar() {
    return ( 
        <>
        
        <Box
    marginTop="3.5rem"
        sx={{height:"30rem", width:"15rem",color:"white",backgroundColor:"#1A76D2" , textAlign:"center",display:"flex", flexDirection:"column"}}
        >

            <p>Users</p>
            <p>Admins</p>
            <p>Pattern</p>
            <p>Players</p>
            <p>Access</p>
            <p>Outdoor</p>
            <p>Indoor</p>
            <p>Places</p>


        </Box>
        </>
     );
}

export default Sidebar;