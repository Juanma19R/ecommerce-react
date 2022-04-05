//Componentes
import { FiShoppingBag } from 'react-icons/fi'
import Badge from '@mui/material/Badge'

const CartWidget = () => {
    return (
        <Badge badgeContent={2} color="primary">          
            <FiShoppingBag size={30}/>
        </Badge>
    );
}

export default CartWidget;