//Componentes
import Button from '@mui/material/Button'
import Logo from '../../assets/images/dark-logo-transparent.svg'
import CartWidget from '../../components/CartWidget/CartWidget'
import pages from '../../data/PagesMock'
import { Link } from 'react-router-dom' 

//Estilos
import './NavBar.scss'

function NavBar() {
    return (
        <header className='main-header'>
            <div className='container-logo'>
                <img src={Logo} className="img-header" alt="logo"/>
            </div>
            <ul className='navbar'>
                {pages.map( (page) => {
                    return (
                        <li>
                            <Button>
                                <Link to={page.url}>{page.title}</Link>
                            </Button>
                        </li>
                    );
                })}
            </ul>
            <CartWidget />
        </header>
    );
}

export default NavBar;