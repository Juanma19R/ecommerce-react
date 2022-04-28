import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import React, { useState } from 'react'
//Componentes
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'
import Check from '../assets/images/check.gif'

//Estilos
import ContactPageScss from './ContactPage.scss'

const ContactPage = () => {

    const [successMessage, setSuccessMessage] = useState();

    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data) => {
        setSuccessMessage({...data})
    }

    return (
        <>
            {successMessage ? (
                <div className='container-successMessage'>
                    <h3>¡Mensaje enviado!</h3>
                    <img src={Check} alt='icono de verificacion'/>
                    <Link to='/'>
                        <Button variant="outlined">Aceptar</Button>
                    </Link>
                </div>
            ) : (
            <div className="container">  
                <form id="contact" onSubmit={handleSubmit(onSubmit)}>
                    <h3>¡Contactanos!</h3>
                    <h4>Contáctenos hoy y obtenga una respuesta en 24 horas</h4>
                    <div className='fieldset'>
                        <TextField 
                        id="outlined-basic" 
                        label="Nombre" 
                        variant="outlined"
                        name="name" 
                        {...register("name", {
                            required: {
                                value: true,
                                message: "Necesitas llenar este campo."
                            },
                            minLength: {
                                value: 6,
                                message: "Ingresa tu nombre completo."
                            }
                        })}
                        />
                        {errors.name && <span className={errors.name && ContactPageScss.messageError}>{errors.name.message}</span>}
                    </div>
                    <div className='fieldset'>
                        <TextField id="outlined-basic" label="Email" 
                        variant="outlined"
                        type="email"
                        name='email'
                        {...register("email", {
                            required: {
                                value: true,
                                message: "Necesitas llenar este campo."
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "El formato no es el correcto."
                            }
                        })}
                        />
                        {errors.email && <span className={errors.email && ContactPageScss.messageError}>{errors.email.message}</span>}
                    </div>
                    <div className='fieldset'>
                        <TextField
                            id="outlined-multiline-static"
                            label="Escriba aqui su mensaje..."
                            multiline
                            rows={4}
                            name='messageUser'
                            {...register("messageUser", {
                                required: {
                                    value: true,
                                    message: "Necesitas llenar este campo."
                                }
                            })}
                        />
                        {errors.messageUser && <span className={errors.messageUser && ContactPageScss.messageError}>{errors.messageUser.message}</span>}
                    </div>
                    <div className='fieldset'>
                        <Button variant="contained" type="submit" endIcon={<SendIcon />}>
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
            )}
        </>
    )
}

export default ContactPage;