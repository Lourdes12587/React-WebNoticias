import React from 'react'
import { Container, Box, Heading, Text} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'

const News = () => {

    const {id} = useParams

  return (
    <>
      <div maxW='2xl' margin='30' bg='blue.600' centerContent>
      
      <Container >
          <Heading fontSize='35px'>
            titulo={id.titulo}
          </Heading>
          <Box margin='20'>
            image={id.image}
          </Box> 
          <Box padding='30' margin='5' bg='blue.400' color='white' maxW='md'>
          <Text fontSize='25px'>
            descripcion={id.descripcion}
          </Text>
          </Box>  
      </Container>
            
      </div>

    </>
    
  )
}

export default News