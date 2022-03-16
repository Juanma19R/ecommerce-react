import './Item.scss'

export default function Item(props) {
    return(
        <div className="item">
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    )
}