import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'


export const Contacto = () => {
  
    const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting, isValid}= useFormik ({

      initialValues: {
        nombre:'',
        email:'',
        mensaje:'',
      },

      validationSchema : Yup.object({
        nombre: Yup.string().min(3, 'Escribi al menos 3 caracteres').required('Campo requerido'),
        email: Yup.string().email('Email invalido').required('Campo requerido'),
        mensaje: Yup.string().min(10, 'Contanos un poco mas').required('Campo requerido')
      }),
  
      onSubmit: (formdata, { resetForm })=>{
        console.log('Mensaje enviado', formdata);
        resetForm();
      },
   
    });
    

  return (
    <main className="page-shell contact-page">
      <section className="section-heading">
        <span>Comunidad</span>
        <h1>Contacto</h1>
        <p>Envianos pistas, ideas o comentarios editoriales. Respondemos desde la redaccion.</p>
      </section>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <label>
          Nombre completo
          <input 
            type='text'
            name='nombre'
            value={values.nombre}
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={Boolean(touched.nombre && errors.nombre)}
            aria-describedby="nombre-error"
          />
          {touched.nombre && errors.nombre && <small id="nombre-error">{errors.nombre}</small>}
        </label>

        <label>
          Email
          <input 
            type='email'
            name='email' 
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={Boolean(touched.email && errors.email)}
            aria-describedby="email-error"
          />
          {touched.email && errors.email && <small id="email-error">{errors.email}</small>}
        </label>

        <label>
          Mensaje
          <textarea
            name='mensaje'
            value={values.mensaje}
            onBlur={handleBlur}
            onChange={handleChange}
            aria-invalid={Boolean(touched.mensaje && errors.mensaje)}
            aria-describedby="mensaje-error"
          />
          {touched.mensaje && errors.mensaje && <small id="mensaje-error">{errors.mensaje}</small>}
        </label>
        
        <button type="submit" disabled={isSubmitting || !isValid}>Enviar mensaje</button>
      </form>
    </main>
  )
}
