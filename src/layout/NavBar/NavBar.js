import Button from '@mui/material/Button';
import Logo from '../../assets/images/dark-logo-transparent.svg'
import CartWidget from '../../components/CartWidget/CartWidget'

function NavBar() {
    return(
        <header className='main-header'>
            <div className='container-logo'>
                <img src={Logo} className="img-header" alt="logo"/>
            </div>
            <ul className='navbar'>
                <li><Button>Inicio</Button></li>
                <li><Button>Plantillas</Button></li>
                <li><Button>Nosotros</Button></li>
                <li><Button>Contacto</Button></li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar;