import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea} from "@mui/material";
import { Container } from '@chakra-ui/react';

const Cine = () => {
  return (
    <Container>
      <Grid container Spacing={1} sx={{mt:4}}>
            <Grid 
            item 
            xs ={12}
            sm ={6}
            md ={4}
            lg= {3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/OIP.h_FXdHZXOp25bHJ6fZR1igHaLH?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Irreversible: Monica Belucci sufrio por 9 minutos esto hizo que 200 personas abadonar la sala del Festiva Cannes en 2002
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
            lg= {3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.9d57d148f586b3f3ac6006f1cf6d1481?rik=7pSti%2bb3ki3xjw&riu=http%3a%2f%2fstatic.t13.cl%2fimages%2foriginal%2f2017%2f06%2f1496339440-sense8-067.jpg&ehk=uK25BuqWnP1U0tmxRnuVhy%2bInxUyj8v4KMOifLiV92o%3d&risl=&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                SENSE 8: La serie de Netflix que cuenta la historia de Seres sensoriales, conectados telepaticamente
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
            lg= {3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://assets.cdn.moviepilot.de/files/b2f99344d53d09194463c5838374647c7d01e7fe4b3b8010429ebdab8caa/fill/992/477/mp1.jpg"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                ¿Quiénes eran los ‘Peaky Blinders’? La historia real detrás de la serie
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
            lg= {3}
            >
            <CardActionArea>
            <Card sx={{ width: 350 }}>
                <CardMedia
                component="img"
                image="https://th.bing.com/th/id/R.0ba6c5f72bce2acfb17ef387a3aa002b?rik=BjgUgT7Nf0CIRQ&riu=http%3a%2f%2fes.web.img3.acsta.net%2fr_1280_720%2fmedias%2fnmedia%2f18%2f65%2f54%2f67%2f19816086.jpg&ehk=pTyJGiCJ5uEA0t0HN4kJFi7H7KrvqISyHiCBxZK67Ws%3d&risl=&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Elije la Vida..Trainsportting 02
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

export default Cine