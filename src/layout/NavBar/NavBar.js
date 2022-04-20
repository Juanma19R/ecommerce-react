import { Link } from 'react-router-dom' 
import React, { useState, useEffect } from 'react'
//Componentes
import Logo from '../../assets/images/dark-logo-transparent.svg'
import CartWidget from '../../components/CartWidget/CartWidget'
import Button from '@mui/material/Button'

//Base de datos
import db from "../../firebase"
import { collection, getDocs } from "firebase/firestore"

//Estilos
import './NavBar.scss'

function NavBar() {

    const [ pages, setPages ] = useState([]);

    useEffect( () => {
        getPages();
    }, []);

    const getPages = async () => {
        const pagesCollection = collection(db, 'pages');
        const pagesSnapshot = await getDocs(pagesCollection);
        const pagesList = pagesSnapshot.docs.map((doc) => {
                return doc.data();
            }
        )
        setPages(pagesList);
    }

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
    )
}

export default NavBar;