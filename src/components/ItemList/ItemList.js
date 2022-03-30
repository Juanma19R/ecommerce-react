import './ItemList.scss'
import Item from './Item';

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
                            />
                        </div>
                    );
                })}
        </div>
    );
};

export default ItemList;