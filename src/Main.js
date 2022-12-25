import React, { Component }  from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Player from "./Player";


function Main() {
    return ( 
        <>
        
        <Box
        sx={{align:"center",mt:"2rem"}}>
            <Grid container spacing={2}>
                <Grid item md={4} >
        <Card>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://assets.pikiran-rakyat.com/crop/123x34:1227x676/x/photo/2022/12/16/589414955.jpg"
      />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
          Big Four
        </Typography>
            <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles.
        </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Movie</Button>
                <Button size="small" color="secondary" variant="contained" sx={{textAlign:"right", color:"secondary"}}>Trailer</Button>
            </CardActions>
        </Card>
        </Grid>
        <Grid item md={4}>
        <Card>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://www.deccanherald.com/sites/dh/files/p2-1173714-1671605998.png"
      />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
          Wakanda
        </Typography>
            <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles.
        </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Movie</Button>
                <Button size="small" color="secondary" variant="contained" sx={{textAlign:"right"}}>Trailer</Button>
            </CardActions>
        </Card>
        </Grid>
        <Grid item md={4}>
        <Card>
        <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://images.thedirect.com/media/article_full/black-adam-ss.jpg?imgeng=cmpr_75/"
      />
            <CardContent>
            <Typography gutterBottom variant="h6" component="div">
          Black Adam
        </Typography>
            <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles.
        </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant="contained"><Link to='/Player'>Movie</Link></Button>
                
                <Button size="small" color="secondary" variant="contained" sx={{textAlign:"right"}}>Trailer</Button>
        
            </CardActions>
        </Card>
        </Grid>
        </Grid>
        </Box>
        </>

     );
}

export default Main;