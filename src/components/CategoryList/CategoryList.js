//Componentes
import React, { useState, useEffect } from "react"
import Category from './Category';
import CategoriesMock from '../../data/CategoriesMock'

//Estilos
import './CategoryList.scss'

const CategoryList = () => {

    const [categories, setCategories] = useState([]);
    
    const getCatergories = () => {
        let promise = new Promise ((resolve, reject)=>{
            setTimeout(() => {resolve (CategoriesMock)}, 2000);
        });
        let result = promise;
        return (result);
    }
    
    useEffect( () => {
        getCatergories().then( (datacategories) => {
            setCategories(datacategories)
        })},[]);
    
    return(
        <div className="categories-container">
            {categories.map((category)=>{
                return(
                    <Category data={category} key={category.id}/>
                );
            })}
        </div>
    );
}

export default CategoryList;