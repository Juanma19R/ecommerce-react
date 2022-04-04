//Componentes
import CategoryList from "../CategoryList/CategoryList"

//Estilos
import './CategoryListContainer.scss'

const CategoryListContainer = () => {
    return (
        <div>
            <h1 className="categories-title">Nuestras Categorías</h1>
            <CategoryList />
        </div>
    );
}

export default CategoryListContainer;