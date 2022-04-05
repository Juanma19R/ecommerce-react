import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
//Componentes
import ItemList from '../ItemList/ItemList'
import getProducts from '../../helpers/getProducts'

//Estilos
import './ItemListContainer.scss'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    
    const {category} = useParams();

    useEffect( () => {
        getProducts().then( (products) => {
            category ? setProducts( products.filter( (product) => product.category === category)):
            setProducts(products)
        })
        return () => {
            setProducts({});
        }},[category]);

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