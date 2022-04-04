//Componentes
import { Link } from 'react-router-dom'

//Estilos
import './Category.scss'

const Category = ({ data }) => {
    const {id, title, imageUrl} = data;
    return (
        <div className="category-container">
            <Link to={`/category/${id}`}>
                <img src={imageUrl} className="category-image" alt=""></img>
            </Link>
            <div className='title-container'>
                <h3>{title}</h3>
            </div>
        </div>
    );
}

export default Category;