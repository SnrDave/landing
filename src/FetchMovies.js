import { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  CardActions,
  CardMedia,
  Grid,
  CardContent,
  Card,
  Button,
} from "@mui/material";
import PopularMovies from "./PoularMovies";

const FetchMovies = () => {
  const movieLinks = [];
  const [populars, setPopulars] = useState([]);
  const imgUl = "https://image.tmdb.org/t/p/w500/";
  const movUl =
    "https://api.themoviedb.org/3/movie/popular?api_key=c44ffb50b12043b2127d30227f2c39f4&language=en-US&page=1";
  const fetchPopular = async () => {
    const { data } = await axios.get(movUl);
    setPopulars(data.results);
  };
  useEffect(() => {
    fetchPopular();
  }, []);
  return (
    <>
      <Typography sx={{ marginTop: "2rem" }}>
        <h2>Popular Movies</h2>
      </Typography>

      {populars &&
        populars.map((popular) => {
          return (
            <>
              
                <Grid item marginBottom={2}>
                  <Card>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      img
                      src={`${imgUl}${popular.backdrop_path}`}
                    />
                    <CardContent >
                      <Typography gutterBottom variant="h6" component="div">
                        {popular.original_title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {popular.overview}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" variant="contained">
                        Movie
                      </Button>
                      <Button
                        size="small"
                        color="secondary"
                        variant="contained"
                        sx={{ textAlign: "right", color: "secondary" }}
                      >
                        Trailer
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
             
              

              {/* <PopularMovies id={popular.id} overview={popular.overview} title={popular.original_title} poster_path={popular.backdrop_path}  /> */}
            </>
          );
        })}
    </>
  );
};

export default FetchMovies;
