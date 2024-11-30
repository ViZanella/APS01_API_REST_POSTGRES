// Importando componentes do Material-UI
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { MovieService } from "../../sevices/movie-service";
import { IMovie } from "../../@libs/axios/types/types";

function HighlightSection(){

    const params = useParams();
    const [movie, setMovie] = useState<IMovie>({} as IMovie);
    useEffect(()=>{
      const movieId = (params.id) ? params.id : '5a420a78-8b19-42e5-9dee-1f257ebb5401'
      
      MovieService.getMoviesById(movieId)
        .then(result => {
          if (result) setMovie(result);
        })
        .catch(error => {
          console.log('PAU: ', error)
        })
    },[params]);

    return(

        <Box>
            <Container>
                <Stack
                direction = "row">
                    <img src={`assets/${movie.poster}`} />
                    <Stack
                    sx={{
                        display:'flex', 
                        direction:'colunn', 
                        justifyContent:'center' 
                    }}
                    >
                        <Typography
                        variant="h4">
                        {movie.title}
                        </Typography>
                        <Typography
                        variant="subtitle2"
                        >
                           <samp
                           style={{
                            borderWidth:'1px',
                            borderStyle:'solid', 
                            padding:'0.2rem', 
                            marginRight:'0.3rem' 
                           }}
                           >
                            {movie.ageRating} 
                            </samp>
                            Aventura, fantasia, Ação
                        </Typography>
                        <Typography
                        variant="subtitle1"
                        sx={{
                            paddingTop:'2rem', 
                        }}
                        >
                            sinopse
                        </Typography>
                        <Typography
                        variant="body2"
                        >
                         {movie.description}</Typography>
                        <Stack
                        direction="row"
                        >
                            <Button 
                            variant="outlined"
                            >Assistir</Button>
                            <Button 
                            variant="contained">Detalhes</Button>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}
export default HighlightSection;