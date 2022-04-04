//Componentes
import ItemCount from '../ItemCount/ItemCount'
import HalfRating from '../HalfRating/HalfRating'
import FloatingActionButtonSize from '../FavButton/FavButton'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'

//Estilos
import './ItemDetail.scss'

const ItemDetail = ({item}) => {
    const {name, pictureUrl, price, detail, stock} = item;
    return (
        <div className="ItemDetail-container">
            <div className="Item-container">
                <div className='img-container'>
                    <img src={pictureUrl} alt=''></img>
                </div>
                <div className='ItemDetail-details'>
                    <h2 className='ItemDetail-title'>{name}</h2>             
                    <span className='ItemDetail-price'><b>$ {price}</b></span>
                    <div className='Rating-Fav-container'>
                        <HalfRating /> 
                        <FloatingActionButtonSize />
                    </div>
                    <p>{detail}</p>
                    <ItemCount stock={stock} initial={1} />
                    <div className='send-container'>
                        <p><LocalShippingIcon color='primary'/> ¡Envios a todo el país!</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;