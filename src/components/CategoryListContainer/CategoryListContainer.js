import React, { useState, useEffect } from "react"
//Componentes
import CategoryList from "../CategoryList/CategoryList"
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
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
        <>
            {categories.length === 0 ? (
                <Box className='loader'>
                    <CircularProgress />
                </Box>
            ) : (
            <div>
                <div className="title-category-container">
                    <h1>Nuestras Categorías</h1>
                </div>
                <div className="categories-container">
                    <CategoryList categories={categories}/>
                </div>
            </div>
            )}
        </>
    )
}

export default CategoryListContainer;