import { Link } from 'react-router-dom';
import React,{ useEffect, useState } from "react"
//Componentes
import ItemCount from '../ItemCount/ItemCount'
import Button from '@mui/material/Button';

//Estilos
import './Item.scss'

const Item = ({ name, pictureUrl, price, id, stock }) => {

    const [counter, setCounter] = useState(0);
    const [showItemCount, setShowItemCount] = useState(true);

    const onAdd = (e, count) => {
        if(!!e & counter<1){
            setCounter(count);
        }
    }

    useEffect( () => {
        if(counter>0) {
            setShowItemCount(false);
            console.log("Productos agregados al carrito: ", counter);
        }
    },[counter]);
    
    return (

        <div className="item-container">
            <img className="item-image" src={pictureUrl} alt="" />
            <h3 className="item-data">{name}</h3>
            <p className="item-data">usd ${price}</p>
            <div>
                {   
                    showItemCount ? (
                        <div>
                            <ItemCount stock={stock} action={onAdd} initial={1} />
                        </div>
                        ) : (
                        <div className='btnIrAlCarrito'>
                            <Link to={'/Cart'}><Button variant="outlined">Ir al carrito</Button></Link>
                        </div>
                        )
                }
            </div>
            <div className='container-btnDetail'>
                <Link to={`/item/${id}`}><Button variant="outlined">Detalle</Button></Link>
            </div>
        </div>
    );
}

export default Item;