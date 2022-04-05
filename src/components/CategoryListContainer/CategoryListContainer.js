//Componentes
import React, { useState, useEffect } from "react"
import CategoryList from "../CategoryList/CategoryList"
import CategoriesMock from '../../data/CategoriesMock'

//Estilos
import './CategoryListContainer.scss'

const CategoryListContainer = () => {

    const [categories, setCategories] = useState([]);
    
    const getCatergories = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve (CategoriesMock)
            }, 2000);
        });
    }
    
    useEffect( () => {
        getCatergories().then( (datacategories) => {
            setCategories(datacategories)
        })},[]);

    return (
        <div>
            <h1 className="categories-title">Nuestras Categorías</h1>
            <CategoryList categories={categories}/>
        </div>
    );
}

export default CategoryListContainer;