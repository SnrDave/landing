import { Slideshow } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography,Link } from "@mui/material";


function NavBar() {
    return ( 
        <>
        
        <AppBar  sx={{boxShadow:"0px 0px 0px 0px"}}
        
       >
        <Toolbar>
            <IconButton sx={{color:"white"}} edge="start">
               <Slideshow />

            </IconButton>
            <Typography
                    mr={2}
                sx={{color:"white",marginRight:"2rem", display:"inline-flex", listStyle:"none"}}
                >
                    <Link href="#" underline="none" sx={{color:"white"}}>
                        
                    ENTAENA   
  
            </Link> 
            </Typography>
                <Typography
                sx={{color:"white",marginRight:"2", listStyle:"none"}}>
               <Link href="#" underline="none" sx={{color:"white"}}>
               Services
               </Link>
               
                </Typography>
                
        </Toolbar>

        </AppBar>
        </>
     );
}

export default NavBar;