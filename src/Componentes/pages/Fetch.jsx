import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Card, CardMedia, CardContent,
Typography, CardActionArea} from "@mui/material";
import { StepDescription } from '@chakra-ui/react';

const Fetch = () => {

    const [data, setData] = useState([]);

    useEffect (() => {
        axios.get ('https://rickandmortyapi.com/api/character')
        .then (res => setData (res.data.results))
    }, [])

  return (
    <>
        <h1 style={{display: 'flex', justifyContent: 'center', margin:'30px'}}>NOTICIAS DE HOY</h1>

        <div style={{ width: '100%', border:'2px solid block', display: 'flex',
        justifyContent: 'center', flexWrap:'wrap',
        alignItems: 'center',gap:'30px'}}>
         
        { data.map ( (element) => {
            
            return (  

                <Card 
                 sx={{ width: 300}}
                 >       
                 <CardActionArea>
                 <CardMedia
                   content='img'
                   image={element.image}
                   sx={{ height: 340 }}
                   />
                   <CardContent>
                   <Typography gutterBottom variant="h5" component="div">
                   {element.name}
                   </Typography>
                   <Typography variant="body2" color="text.secondary">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, odit ipsam. Illum adipisci eius provident sint, autem magnam delectus? Quod, reprehenderit architecto laboriosam atque voluptates porro itaque quas voluptas vero?
                   </Typography>
                   </CardContent>
                 </CardActionArea>
                 </Card>
                );
            })}
         </div>    
    </>
  );
};

export default Fetch