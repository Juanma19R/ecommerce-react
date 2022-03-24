import './ItemCount.scss'
import React, { useState } from 'react'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'

function ItemCount({ stock, initial, onAdd }) {

    const [ count, setCount ] = useState(1)

    const addTemplates = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const removeTemplates = () => {
        if(count > initial) {
            setCount(count - 1)
        }
    }

    return(
        <>
            <div className='ContainerItemCount'>
                <div className='ButtonsGroup'>
                    <ButtonGroup variant="text" aria-label="text button group">
                        <Button onClick={removeTemplates}>-</Button>
                        <Button>{count}</Button>
                        <Button onClick={addTemplates}>+</Button>
                    </ButtonGroup>
                </div>
                <div className='ButtonAddCart'>
                    <Button variant="outlined" onClick={ () => onAdd(count)}>Agregar al carrito</Button>
                </div>
            </div>
        </>
    )
}

export default ItemCount