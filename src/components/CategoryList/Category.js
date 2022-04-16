import { Link } from 'react-router-dom'

//Estilos
import './Category.scss'

const Category = ({ data }) => {
    
    const {title, imageUrl, category} = data;

    return (
        <div className="category-container">
            <Link to={`/category/${category}`}>
                <img src={imageUrl} className="category-image" alt=""></img>
            </Link>
            <div className='title-container'>
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default Category;