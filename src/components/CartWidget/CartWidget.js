import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'
//Componentes
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

//Estilos
import './CartWidget.scss'

const CartWidget = () => {
    const { quantity, cartList } = useCartContext();
    return (
        <div className='cart-style'>
            <Link to='/Cart' className='link-cart'>          
                <ShoppingBagOutlinedIcon fontSize="large"/>
            </Link>
            { cartList.length > 0 && quantity() }
        </div>
    )
}

export default CartWidget;