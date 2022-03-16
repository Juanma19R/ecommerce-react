import Item from '../Items/Item'

const ItemListContainer = () => {
    return(
        <div className="container-items">
            <Item title='Creamos tu página web' />
            <Item subtitle='Nuestra misión es ayudarte a modernizar tu negocio, emprendimiento o empresa.' />
        </div>
    )
}

export default ItemListContainer;