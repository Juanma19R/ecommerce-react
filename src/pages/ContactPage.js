import React, { useState } from 'react'
import { useForm } from "react-hook-form"
//Componentes
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

//Estilos
import ContactPageScss from './ContactPage.scss'

const ContactPage = () => {

    const [ form, setForm ] = useState({});

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        console.log(e);
    }

    return (
        <div className="container">  
            <form id="contact" onSubmit={handleSubmit(onSubmit)}>
                <h3>¡Contactanos!</h3>
                <h4>Contáctenos hoy y obtenga una respuesta en 24 horas</h4>
                <div className='fieldset'>
                    <TextField id="outlined-basic" label="Nombre" variant="outlined"
                    onChange={handleChange}
                    value={form.name}
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
                    <TextField id="outlined-basic" label="Email" variant="outlined" type="email"
                    onChange={handleChange}
                    value={form.email}
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
                        onChange={handleChange}
                        value={form.messageUser}
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
    )
}

export default ContactPage;