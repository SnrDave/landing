import { Box, height } from "@mui/system";
import Footer from "./Footer";
import Main from "./Main";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";




function App() {
  return (
    
    <>
    <NavBar />
     <Box
     sx={{backgroundColor:"azure", height:"100%"}}
     >
    
    <Sidebar />
    <Main />
    
   
    </Box>
    <Footer />
   
   
      
    
      
  
    </>
  );
}

export default App;
