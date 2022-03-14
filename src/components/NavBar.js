import Button from '@mui/material/Button';

function NavBar() {
    return(
        <header className='main-header'>
            <div className='container-logo'>
                <img src="dark-logo-transparent.png" className="img-header" alt="logo"/>
            </div>
            <ul className='navbar'>
                <li><Button>Home</Button></li>
                <li><Button>Plantillas</Button></li>
                <li><Button>Nosotros</Button></li>
                <li><Button>Contacto</Button></li>
            </ul>
        </header>
    )
}

export default NavBar;