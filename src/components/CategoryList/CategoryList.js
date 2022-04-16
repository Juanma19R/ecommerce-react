//Componentes
import Category from './Category'

//Estilos
import './CategoryList.scss'

const CategoryList = ({categories}) => {    
    return (
        <div className="categories-container">
            {categories.map((category)=>{
                return (
                    <Category data={category} key={category.id}/>
                );
            })}
        </div>
    )
}

export default CategoryList;