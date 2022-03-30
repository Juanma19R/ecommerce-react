import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    const {name, pictureUrl, price, detail, stock} = item;
    return (
        <div className="ItemDetail-container">
            <div className="Item-container">
                <div>
                    <img src={pictureUrl} alt=''></img>
                </div>
                <div className='ItemDetail-details'>
                    <h2 className='ItemDetail-title'>{name}</h2>
                    <span className='ItemDetail-price'><b>$ {price}</b></span>
                    <p>{detail}</p>
                    <ItemCount stock={stock} initial={1} />
                </div>
        </div>
        </div>
    );
};

export default ItemDetail;