import React from 'react'
import trans from './imagenes/trainspotting.jpg'
import { Container, Box, Heading, Text} from '@chakra-ui/react'

const Trainsport = () => {
  return (
    <Container maxW='2xl' margin='30' bg='blue.600' centerContent>
    <Heading fontSize='35px'>
    El despertar es conocer tu origen
    </Heading>
    <Box margin='20'>
      <img src={trans} alt="" />
    </Box> 
    <Box padding='30' margin='5' bg='blue.400' color='white' maxW='md'>
    <Text fontSize='25px'>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, optio error suscipit beatae earum id dolore quam nulla deserunt commodi eaque, doloribus ipsam fugiat non consequatur quaerat autem ad nesciunt!
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium dicta incidunt perspiciatis distinctio magnam molestiae accusamus laboriosam atque quod, sit itaque, quas esse mollitia eaque ea illum soluta cum enim.
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius qui esse aut ex magni, dolor ad ullam maiores alias cum sint quisquam ut, quaerat neque nihil repellat quibusdam amet debitis.
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi at odio ducimus. Dolores neque non corrupti recusandae incidunt error quia ratione, nihil ad autem enim aperiam voluptatibus, perferendis similique delectus.
    </Text>
    </Box>
  </Container>
  )
}

export default Trainsport