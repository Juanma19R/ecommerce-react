//Base de datos
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore"

const getProducts = async () => {
    const productosCollection = collection(db, 'productos');
    const productosSnapshot = await getDocs(productosCollection);
    const productosList = productosSnapshot.docs.map((doc) => {
            let product = doc.data();
            product.id = doc.id
            return product
        }
    )
    return productosList;
}

export default getProducts;