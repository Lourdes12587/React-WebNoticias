import { Container, Grid, Card, CardMedia, CardContent,
Typography, CardActionArea} from "@mui/material";
import React from 'react'
    
export const ArticleList = ({ articles }) => {

        return (
            <div style={{ display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            gap: '20px'}}>

            {articles.map ( article => (

              <Container key={article.id}>
  
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
                      image={article.image}
                      sx={{ height: 320 }}
                      />
                      <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                      {article.titulo}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                      {article.descripcion}
                      </Typography>
                      </CardContent>
                    </CardActionArea>
                    </Card>
                </Grid>  
              </Container>
    
                ))}

            </div>
        )
    };
    
export default ArticleList
    