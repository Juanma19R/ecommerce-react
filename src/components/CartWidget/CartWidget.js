import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
//Componentes
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

const CartWidget = () => {
    const { quantity, cartList } = useCartContext();
    return (
        <div>
            <Link to='/Cart'>          
                <ShoppingBagOutlinedIcon fontSize="large" color="primary"/>
            </Link>
            { cartList.length > 0 && quantity() }
        </div>
    )
}

export default CartWidget;