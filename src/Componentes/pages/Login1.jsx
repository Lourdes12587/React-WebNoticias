import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading} from '@chakra-ui/react'
import styled from 'styled-components'
import {useFormik} from 'formik'
import * as Yup from 'yup'


export const Login1 = () => {

  const {handleChange, handleSubmit}= useFormik ({

    initialValues: {
      email:'',
      password:'',
    },

    validationSchema : Yup.object({
      nombre: Yup.string().required('Campo requerido'),
      email: Yup.string().required('Campo requerido'),
    }),

    onSubmit: (formdata)=>{
      console.log(formdata);
    },
 
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledFormControl >
          <Heading as='h2'style={{ fontFamily: 'Bai Jamjuree'}}>INICIAR SESION</Heading>
          <FormField>
            <FormLabel>Usuario</FormLabel>
            <StyledInput 
              type='text'
              name='email'
              onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Contraseña</FormLabel>
            <StyledInput 
            type='text'
            name='password'
            onChange={handleChange}
            />
          </FormField>
          
          <StyledButton type="submit">
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