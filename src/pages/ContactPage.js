//Componentes
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
                <fieldset>
                    <input placeholder="Nombre" type="text"/>
                </fieldset>
                <fieldset>
                    <input placeholder="Email" type="email"/>
                </fieldset>
                <fieldset>
                    <textarea placeholder="Escriba aqui tu mensaje..."></textarea>
                </fieldset>
                <fieldset>
                    <Button variant="contained" endIcon={<SendIcon />}>
                        Enviar
                    </Button>
                </fieldset>
            </form>
        </div>
    )
}

export default ContactPage;