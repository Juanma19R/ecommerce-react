import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
//Componentes
import { useCartContext } from '../context/CartContext'
import { Button } from '@mui/material'
import TextField from '@mui/material/TextField'
import Modal from '../components/Modal/Modal'
import IconButton from '@mui/material/IconButton'
import VerificadoIcon from '../assets/icons/verificacion.png'
import Tooltip from '@mui/material/Tooltip'
import DeleteIcon from '@mui/icons-material/Delete'

//Base de datos
import db from "../firebase"
import { addDoc, collection } from "firebase/firestore"

//Table 
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

//Estilos
import CartScss from './Cart.scss'

const CartWidget = () => {

    const { cartList, removeOne, emptyCart, totalAmount } = useCartContext();
    const [openModal, setOpenModal] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({});
    const [order, setOrder] = useState(
        {
            buyer : formData,
            items: cartList.map( (cartList)=> {
                return {
                    id: cartList.id,
                    name: cartList.name,
                    quantity: cartList.quantity,
                    price: cartList.price
                }
            }),
            total: totalAmount()
        }
    );
    const [successOrder, setSuccessOrder] = useState();

    const onSubmit = (e) => {
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }

    const pushOrder = async (prevOrder) => {
        const orderFirebase = collection(db, 'ordenes')
        const orderDoc = await addDoc(orderFirebase, prevOrder)
        console.log("orden generada: ", orderDoc.id)
        setSuccessOrder(orderDoc.id)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className='Checkout-container'>
                    <h1>Carrito</h1>
                {
                    (cartList.length === 0)
                    &&
                    <div className='NoItems-container'>
                        <p>¡No hay productos en el carrito!</p>
                        <Link to='/'>
                            <Button variant="outlined">Ver productos</Button>
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
                                <TableCell align="right"><Button variant="outlined" onClick={() => setOpenModal(true)}>Realizar compra</Button></TableCell>
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
            <Modal handleClose={() => setOpenModal(false)} open={openModal}>
                {successOrder ? (
                    <div>
                        <h3>Orden registrada</h3>
                        <img src={VerificadoIcon} alt='icono de verificacion'/>
                        <p>Su numero de orden es: {successOrder}</p>
                        <Link to='/'>
                            <Button variant="outlined" onClick={emptyCart}>Aceptar</Button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>Datos del usuario</h2>
                            <div className='fieldset'>
                                <TextField name='name' label='Nombre' 
                                onChange={handleChange} 
                                value={formData.name}
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Necesitas llenar este campo."
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "Ingresa tu nombre completo."
                                    }
                                })}
                                />
                                {errors.name && <span className={errors.name && CartScss.messageError}>{errors.name.message}</span>}
                            </div>
                            <div className='fieldset'>
                                <TextField type="mail" name='email' label='Email' 
                                onChange={handleChange} 
                                value={formData.email}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Necesitas llenar este campo."
                                    },
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                        message: "El formato no es el correcto."
                                    }
                                })}
                                />
                                {errors.email && <span className={errors.email && CartScss.messageError}>{errors.email.message}</span>}
                            </div>
                            <div className='fieldset'>
                                <Button variant="contained" type="submit">Finalizar</Button>
                            </div>
                        </form>
                    </>
                )}
            </Modal>
        </>
    )
}

export default CartWidget;