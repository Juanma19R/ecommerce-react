//Componentes
import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

//Estilos
import './ItemCount.scss'

function ItemCount({ stock, initial, onAdd, id }) {

    const [ count, setCount ] = useState(1)

    const addProduct = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const removeProduct = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <>
            <div className='ContainerItemCount'>
                <div className='ButtonsGroup'>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={removeProduct}>-</Button>
                        <Button>{count}</Button>
                        <Button onClick={addProduct}>+</Button>
                    </ButtonGroup>
                </div>
                <div className='ButtonAddCart'>
                    <Button variant="outlined" onClick={ () => onAdd(count)}>Agregar al carrito</Button>
                </div>
            </div>
        </>
    );
}

export default ItemCount