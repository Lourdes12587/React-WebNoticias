import React from 'react'
import { Grid, Card, CardMedia, CardContent, Typography, CardActionArea} from "@mui/material";
import { Container } from '@chakra-ui/react';

const Holisticas = () => {
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
                image="https://th.bing.com/th/id/R.c7ad6a3b12d29f5510a192f3d85c2a89?rik=tSkPAjsFqjAfTA&riu=http%3a%2f%2fwww.damientech.com%2fwp-content%2fuploads%2f2019%2f03%2fTesla.jpeg&ehk=XWgicB2VrVs60gTC1hawhioyIJ1gGMvmktFHtKT75s4%3d&risl=&pid=ImgRaw&r=0"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Nicolas Tesla: Entrevista al periodista llamado John Smith en 1899
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
                image="https://i.ytimg.com/vi/qHqK_1qDkA0/maxresdefault.jpg"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Como activar el Tercer Ojo: 5 Tecnicas
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
                image="https://th.bing.com/th/id/OIP.EVByZp_6WiHFSMIcdYnWTQHaEK?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Inteligencia Akashica: Sadhguru
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
                image="https://th.bing.com/th/id/OIP.3b8HE7_cZAvx6qSf4klMlQHaHa?pid=ImgDet&rs=1"
                title=""
                height="300"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                El despertar es conocer tu origen
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

export default Holisticas