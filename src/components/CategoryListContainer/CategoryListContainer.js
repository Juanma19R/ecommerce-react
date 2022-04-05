import React, { useState, useEffect } from "react"
//Componentes
import CategoryList from "../CategoryList/CategoryList"
import getCategories from "../../helpers/getCategories"

//Estilos
import './CategoryListContainer.scss'

const CategoryListContainer = () => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        getCategories().then( (datacategories) => {
            setCategories(datacategories)
        })
        return () => {
            setCategories({});
        }},[]);
        
    return (
        <div>
            <h1 className="categories-title">Nuestras Categorías</h1>
            <CategoryList categories={categories}/>
        </div>
    );
}

export default CategoryListContainer;