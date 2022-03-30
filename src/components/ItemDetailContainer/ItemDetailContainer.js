import React, { useState, useEffect } from 'react'
import { productList } from '../../data/data'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.scss'

const ItemDetailContainer = () => {

    const itemID = 3;

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
            const itemFound = data.find(element => element.id === itemID)
            setItem(itemFound)
        })}, []);

    return (      
        <div className='ItemDetailContainer-container'>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;