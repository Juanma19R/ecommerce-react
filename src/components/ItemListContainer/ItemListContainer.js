//Componentes
import ItemList from '../ItemList/ItemList'
import React, { useState, useEffect } from 'react'
import { productList } from '../../data/ProductListMock'
import { useParams } from "react-router-dom";

//Estilos
import './ItemListContainer.scss'

const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    const {id} = useParams();

    const getProducts = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productList)
            }, 2000);
        })
    }

    useEffect( () => {
        setProducts([])
        getProducts().then( (data) => {
            id ? filterCategory(data, id) : setProducts(data)
        })},[id]);

    const filterCategory = (array, category) =>{
        return array.map( (product, i) => {
            if(product.type == category) {
                return setProducts(products => [...products, product])
            }
        });
    }

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