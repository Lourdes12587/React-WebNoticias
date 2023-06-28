import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea} from "@mui/material";
import { Container } from '@chakra-ui/react';

const Musica = () => {
  return (
    <Container>
      <Grid container Spacing={1} sx={{mt:4}}>
        <Grid 
        item 
        xs ={12}
        sm ={6}
        md ={4}
        lg ={3}
        >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.xilMkTUqPseFA3pk4H-2ywHaLH?w=197&h=296&c=7&r=0&o=5&dpr=1.1&pid=1.7"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                LANA DEL REY: Reina vintage o Bad girl
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.64f7861cd0c65c80b3e7c44831617c92?rik=ci9NaSi9%2bAO2Wg&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                ROBERT SMITH: Logra que le devuelven a sus fans los cargos extras en la venta de entradas de su proxima gira
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
            </Card>
            </CardActionArea>
            </Grid>

            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg ={3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.58f5422b85d0d02cd5492f56f73d0f2a?rik=XUg396zl4iEGjg&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Los Fundamentalistas: Cuanto sale una entrada del Dj Hernan Cattaneo
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
            </Card>
            </CardActionArea>
            </Grid>
        </Grid>
    </Container>
  )
}

export default Musica