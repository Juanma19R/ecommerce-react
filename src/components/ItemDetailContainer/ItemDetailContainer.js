//Componentes
import React, { useState, useEffect } from 'react'
import { productList } from '../../data/ProductListMock'
import ItemDetail from './ItemDetail'

//Estilos
import './ItemDetailContainer.scss'

const ItemDetailContainer = ({id}) => {

    const [item, setItem] = useState([]);

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productList)
            }, 2000);
        })
    }

    useEffect( () => {
        getProducts().then( (data) => {
            const itemFound = data.find(element => element.id == id)
            setItem(itemFound)
        })});

    return (      
        <div className='ItemDetailContainer-container'>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;