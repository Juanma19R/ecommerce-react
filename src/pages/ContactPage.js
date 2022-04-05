//Componentes
import Container from '@mui/material/Container'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'

//Estilos
import './ContactPage.scss'

const ContactPage = () => {
    return (
        <Container className='container-form'> 
            <h2>Contacto: </h2>
            <form>
                <TextField
                id="standard-textarea"
                label="Nombre y Apellido"
                multiline
                variant="standard"
                />
                <TextField
                id="standard-textarea"
                label="Email"
                multiline
                variant="standard"
                />
                <TextField
                id="standard-multiline-static"
                label="Mensaje"
                multiline
                rows={4}
                variant="standard"
                />
            </form>
            <Button variant="contained" endIcon={<SendIcon />}>
                Enviar
            </Button>
        </Container>
    );
}

export default ContactPage;