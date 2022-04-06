import React, { useState, useEffect } from 'react'
//Componentes
import ItemDetail from './ItemDetail'
import getProducts from '../../helpers/getProducts'

//Estilos
import './ItemDetailContainer.scss'

const ItemDetailContainer = ({id}) => {

    const [item, setItem] = useState([]);

    useEffect( () => {
        getProducts().then( (data) => {
            const itemFound = data.find(element => element.id == id)
            setItem(itemFound)
        })
        return () => {
            setItem({});
        }}, [id]);

    return (      
        <div className='ItemDetailContainer-container'>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;