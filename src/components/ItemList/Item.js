import { Link } from 'react-router-dom'
//Componentes
import Button from '@mui/material/Button'
import HalfRating from '../HalfRating/HalfRating'
import FavoriteIcon from '../FavButton/FavButton'

//Estilos
import './Item.scss'

const Item = ({ name, pictureUrl, price, id, category }) => {
    
    return (
        <div className="p-box">
            <div className="p-top">
                <FavoriteIcon />
                <span className="p-price">${price}</span>
            </div>
            <img src={pictureUrl} alt=""/>
            <div className="p-desc">
                <h1 className="p-product">{name}</h1>
                <h3 className="p-category">{category}</h3>
                <HalfRating />
                <Link to={`/item/${id}`} className="p-btn"><Button variant="outlined">Detalle</Button></Link>
            </div>
        </div>
    )
}

export default Item;