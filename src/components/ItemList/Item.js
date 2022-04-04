//Componentes
import ItemCount from '../ItemCount/ItemCount'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

//Estilos
import './Item.scss'

const Item = ({ name, pictureUrl, price, id, stock }) => {
    const onAdd = (count) => {
        console.log(`Agregaste ${count} productos al  carrito`);
    };

    return (
        <div className="item-container">
            <img className="item-image" src={pictureUrl} alt="" />
            <h3 className="item-data">{name}</h3>
            <p className="item-data">${price}</p>
            <ItemCount stock={stock} onAdd={onAdd} initial={1} />
            <div className='container-btnDetail'>
                <Link to={`/item/${id}`}><Button variant="outlined">Detalle</Button></Link>
            </div>
        </div>
    );
}

export default Item;