//Componentes
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import { useParams } from "react-router-dom"

const DetailPage = () => {
    
    const {id} = useParams();
    
    return (
        <div className='container-general'> 
            <ItemDetailContainer id={id}/>
        </div>
    );
}

export default DetailPage;