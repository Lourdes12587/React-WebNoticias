import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading} from '@chakra-ui/react'
import styled from 'styled-components'


export const Login1 = () => {

  return (
    <>
      <form>
        <StyledFormControl >
          <Heading as='h2'style={{ fontFamily: 'Bai Jamjuree'}}>INICIAR SESION</Heading>
          <FormField>
            <FormLabel>Usuario</FormLabel>
            <StyledInput 
              
            />
          </FormField>

          <FormField>
            <FormLabel>Contraseña</FormLabel>
            <StyledInput 
            />
          </FormField>
          
          <StyledButton>
            ENVIAR
          </StyledButton>

      </StyledFormControl>
    </form>
    </>
  )
}

const StyledFormControl = styled(FormControl)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 75vh;
  font-family: 'Bai Jamjuree', sans-serif;
`

const StyledInput = styled(Input)`
  padding: 15px 35px 15px 15px;
  background-color: #2d3640;
  color: #fff;
  outline: none;
  border: none;
  width: 350px;
  font-family: 'Bai Jamjuree', sans-serif;
`

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 3px;
`

const StyledButton = styled(Button)`
  font-size: 0.9rem;
  background: linear-gradient(90deg, #1a1826, #17153c);
  color: white;
  transition: all 0.3s ease;
  padding: 10px 20px;
  cursor: pointer;
  font-family: 'Bai Jamjuree', sans-serif;
`