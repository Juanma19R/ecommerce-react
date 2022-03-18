import './ItemListContainer.scss'

const ItemListContainer = (props) => {
    return(
        <div className="container-items">
            <div>
                <h2>{props.greeting}</h2>
            </div>
        </div>
    )
}

export default ItemListContainer;