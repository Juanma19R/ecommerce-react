import './ItemListContainer.scss'
import ItemList from '../ItemList/ItemList';
import React, { useState, useEffect } from 'react'
import { productList } from '../../data/data'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);

        const getProducts = () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productList)
                }, 2000);
            })
        }

        useEffect( () => {
            getProducts().then( (data) => {
                setProducts(data)
            })}, []);

    return (      

        <div className="container-items">
            <ItemList products={products} />
        </div>
    );
}

export default ItemListContainer;