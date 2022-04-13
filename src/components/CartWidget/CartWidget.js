import { Link } from 'react-router-dom'
//Componentes
import { useCartContext } from '../../context/CartContext'
import { FiShoppingBag } from 'react-icons/fi'

const CartWidget = () => {
    const { quantity, cartList } = useCartContext();
    return (
        <div>
            <Link to='/Cart'>          
                <FiShoppingBag size={30}/>
            </Link>
            { cartList.length > 0 && quantity() }
        </div>
    );
}

export default CartWidget;