import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Heading,
  Textarea} from '@chakra-ui/react'
import styled from 'styled-components'
import {useFormik} from 'formik'
import * as Yup from 'yup'


export const Contacto = () => {
  
    const {handleChange, handleSubmit}= useFormik ({

      initialValues: {
        nombre:'',
        email:'',
        mensaje:'',
      },

      validationSchema : Yup.object({
        nombre: Yup.string().required('Campo requerido'),
        email: Yup.string().required('Campo requerido'),
        mensaje: Yup.string().required('Campo requerido')
      }),
  
      onSubmit: (formdata)=>{
        console.log(formdata);
      },
   
    });
    

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledFormControl >
          <Heading as='h1'>CONTACTO</Heading>
          <FormField>
            <FormLabel>Nombre Completo</FormLabel>
            <StyledInput 
            type='text'
            name='name'
            onChange={handleChange}
            />
          </FormField>

          <FormField>
            <FormLabel>Email</FormLabel>
            <StyledInput 
            type='email'
            name='email' 
            onChange={handleChange}

            />
          </FormField>

          <FormField>
            <FormLabel>Mensaje</FormLabel>
            <StyledTextarea
            type='text'
            name='mensaje'
            onChange={handleChange}
          />
          </FormField>
          
          <StyledButton type="submit"> ENVIAR </StyledButton>

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
const StyledTextarea = styled(Textarea)`
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
  background: linear-gradient(90deg, #584c99, #0f0b8e);
  color: white;
  transition: all 0.3s ease;
  padding: 10px 20px;
  cursor: pointer;
`