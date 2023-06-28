import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea, CardActions} from "@mui/material";
import { Container } from '@chakra-ui/react';
import { Button } from 'style-components';

const Sociales = () => {
  return (
    <Container>
      <Grid container Spacing={1} sx={{mt:4}}>
        <Grid item 
          xs={12}
          sm={6}
          md={4}
          lg={3}>
          <CardActionArea>
            <Card 
            sx={{ width: 350}}
            >
                <CardMedia
                component="img"
                image="https://d.ibtimes.co.uk/en/full/1566346/julian-assange-wikileaks-founder.jpg?w=400"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                JULIAN ASSANGE: Heroe Mundial
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">LEER MAS</Button>
                </CardActions>
            </Card>
            </CardActionArea>
            
        </Grid>

        <Grid item 
            xs={12}
            sm={6}
            md={4}
            lg={3}>
          
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.a2844d2a9dc9b3ee18541d7115d280cc?rik=rnavqgWfFPqthw&riu=http%3a%2f%2fwww.criticatac.ro%2flefteast%2fwp-content%2fuploads%2f2017%2f02%2felbakyan.jpg&ehk=ejDsEpBdXJiwn%2fvx9iiZ9vRS7843Rd061ugac%2f%2fuH10%3d&risl=&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                ALEXANDRA ELBAKYAN: La Robin Hood de la ciencia
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">LEER MAS</Button>
                </CardActions>
            </Card>
            </CardActionArea>

        </Grid>
        <Grid item 
        xs={12}
        sm={6}
        md={4}
        lg={3}>

            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.d76a8fe4c4b0eb8735c5b04cdf964afd?rik=mu0gCnV89zKbJw&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                JACOBO GRINBERG: Desaparecio de la faz de la tierra
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">LEER MAS</Button>
                </CardActions>
            </Card>
            </CardActionArea>

          </Grid>
        <Grid item 
            xs={12}
            sm={6}
            md={4}
            lg={3}>
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.At3dU3pXeDS8Ts8WqXMleAHaFj?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                STANLEY MEYER: Invento el carro a motor de agua
                </Typography>
                <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus soluta sed deleniti saepe voluptatum culpa unde explicabo fugiat ipsa repellendus provident quo at, ducimus eligendi, quibusdam nam suscipit a!
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small">LEER MAS</Button>
                </CardActions>
            </Card>
            </CardActionArea>
        </Grid>
        </Grid>
    </Container>
  )
}

export default Sociales