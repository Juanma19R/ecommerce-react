import React, { useState, useEffect } from 'react'
import './ItemList.scss'
import { productList } from '../data/data'
import Item from './Item';

const ItemList = () => {
    
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
        })}, [])

    return (
        <div className="product-list-container">
                {products.map((product) => {
                    return (
                        <div key={product.id}>
                            <Item
                                name={product.name}
                                pictureUrl={product.pictureUrl}
                                price={product.price}
                                stock={product.stock}
                                id={product.id}
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default ItemList;