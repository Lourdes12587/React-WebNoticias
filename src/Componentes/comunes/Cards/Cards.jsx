import React from 'react'
import { Container, Grid, Card, CardMedia, CardContent,
Typography, CardActionArea} from "@mui/material";


const Cards = ({noticias: {image, titulo,descripcion}}) => {
    return (
        <Container>
            <Grid container spacing={5} sx={{mt:3}}/>
              <Grid 
              item 
              xs ={12}
              sm ={6}
              md ={4}
              >
                <Card 
                sx={{ width: 350}}
                >       
                <CardActionArea>
                <CardMedia
                  content='img'
                  image={image}
                  sx={{ height: 320 }}

                  title="green iguana"
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {descripcion}
                  </Typography>
                  </CardContent>
                  </CardActionArea>
                </Card>
            </Grid>
        </Container>
  )
}

export default Cards