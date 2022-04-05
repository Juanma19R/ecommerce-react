//Componentes
import ItemList from '../ItemList/ItemList'
import React, { useState, useEffect } from 'react'
import { productList } from '../../data/ProductListMock'
import { useParams } from "react-router-dom"

//Estilos
import './ItemListContainer.scss'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    
    const {category} = useParams();
    console.log({products})

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productList)
            }, 2000);
        })
    }

    useEffect( () => {  
        getProducts().then( (products) => {              
            category ? setProducts( products.filter( (product) => product.category === category)): 
            setProducts(products)})},[category]);

    return (
        <> 
            <div className='container-titulo'>
                <h2>Nuestros productos</h2>
            </div>
            <div className="container-items">
                <ItemList products={products} />
            </div>
        </>   
    );
}

export default ItemListContainer;