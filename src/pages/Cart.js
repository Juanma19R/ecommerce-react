import { Link } from 'react-router-dom'
//Componentes
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'
import { useCartContext } from '../context/CartContext'

//Table 
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

//Estilos
import './Cart.scss'

const CartWidget = () => {

    const { cartList, removeOne, emptyCart, totalAmount } = useCartContext();
    
    return (
        <div className='Checkout-container'>
                <h1>Carrito</h1>
            {
                (cartList.length === 0)
                &&
                <div className='NoItems-container'>
                    <p>¡No hay productos en el carrito!</p>
                    <Link to='/'>
                        <Button variant="outlined">Continuar comprando</Button>
                    </Link>
                </div>
            }
            {
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Descripcion</TableCell>
                                <TableCell align="right">Cantidad</TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {cartList.map((prod) => (
                            <TableRow key={prod.id}>
                                <TableCell>{prod.name}</TableCell>
                                <TableCell align="right">{prod.quantity}</TableCell>
                                <TableCell align="right">$ {prod.price}</TableCell>
                                <TableCell align="right">
                                    <Tooltip title="Eliminar">
                                        <IconButton onClick={() => removeOne(prod.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </Tooltip>
                                </TableCell>
                            </TableRow>
                        ))}
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">$ {totalAmount()}</TableCell>
                        </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            {
                (cartList.length >= 1)
                &&
                <div className='btnVolver-container'>
                    <Button variant="outlined" onClick={emptyCart}>Vaciar carrito</Button>
                </div>
            }
        </div>
    )
}

export default CartWidget;