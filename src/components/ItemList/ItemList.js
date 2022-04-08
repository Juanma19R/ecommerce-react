//Componentes
import Item from './Item'

//Estilos
import './ItemList.scss'

const ItemList = ({products}) => {
    return (
        <div className="product-list-container">
            {products.map((product) => {
                return (
                    <div key={product.id}>
                        <Item
                            name={product.name}
                            pictureUrl={product.pictureUrl}
                            price={product.price}
                            stock={product.stock}
                            id={product.id}
                            category={product.category}
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default ItemList;