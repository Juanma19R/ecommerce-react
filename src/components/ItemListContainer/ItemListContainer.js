import './ItemListContainer.scss'
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = () => {

    const onAdd = (count) => { 
        console.log(`Agregaste ${count} plantillas al carrito.`) 
    }

    return(
        <div className="container-items">
            <ItemCount stock="3" initial="1" onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;