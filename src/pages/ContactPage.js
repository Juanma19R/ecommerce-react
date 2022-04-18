//Componentes
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

//Estilos
import './ContactPage.scss'

const ContactPage = () => {
    return (
        <div className="container">  
            <form id="contact" action="" method="post">
                <h3>¡Contactanos!</h3>
                <h4>Contáctenos hoy y obtenga una respuesta en 24 horas</h4>
                <div className='fieldset'>
                    <TextField id="outlined-basic" label="Nombre" variant="outlined" />
                </div>
                <div className='fieldset'>
                <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
                </div>
                <div className='fieldset'>
                    <TextField
                        id="outlined-multiline-static"
                        label="Escriba aqui su mensaje..."
                        multiline
                        rows={4}
                    />
                </div>
                <div className='fieldset'>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default ContactPage;