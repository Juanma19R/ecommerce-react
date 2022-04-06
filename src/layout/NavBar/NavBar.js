import { Link } from 'react-router-dom' 
//Componentes
import pages from '../../data/pagesMock'
import Logo from '../../assets/images/dark-logo-transparent.svg'
import CartWidget from '../../components/CartWidget/CartWidget'
import Button from '@mui/material/Button'

//Estilos
import './NavBar.scss'

function NavBar() {
    return (
        <header className='main-header'>
            <div className='container-logo'>
                <Link to={'/'}><img src={Logo} className="img-header" alt="logo"/></Link>
            </div>
            <ul className='navbar'>
                {pages.map( (page, index) => {
                    return (
                        <li key={index}>
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