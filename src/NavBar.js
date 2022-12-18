import { Slideshow } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";


function NavBar() {
    return ( 
        <>
        
        <AppBar
        
       >
        <Toolbar>
            <IconButton sx={{color:"white"}} edge="start">
               <Slideshow />

            </IconButton>
            <Typography
                    mr={2}
                sx={{color:"white",marginRight:"2rem", display:"inline-flex", listStyle:"none"}}
                >
                    ENTAENA    
            </Typography>
                <Typography
                sx={{color:"white",marginRight:"2", listStyle:"none"}}>
                Services
                </Typography>
                
        </Toolbar>

        </AppBar>
        </>
     );
}

export default NavBar;