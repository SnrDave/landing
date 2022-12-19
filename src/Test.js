import { Grid, Item, Paper } from "@mui/material";

function Test() {
    return ( 
        <>
        <Grid container sx={{textAlign:"center"}} spacing={2} >
        <Grid item md={3}>
            <Paper>Unit 1</Paper>
            
        </Grid>
        <Grid item md={3}>
        <Paper>Unit 2</Paper>
        </Grid>
        
        <Grid item md={3}>
        <Paper>Unit 3</Paper>
        </Grid>

        <Grid item md={3}>
        <Paper>Unit 4</Paper>
        </Grid>

        </Grid>
        
        </>
     );
}

export default Test;