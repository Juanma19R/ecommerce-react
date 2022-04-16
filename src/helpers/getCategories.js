//Base de datos
import db from "../firebase"
import { collection, getDocs } from "firebase/firestore"

const getCategories = async () => {
    const categoriesCollection = collection(db, 'categories');
    const categoriesSnapshot = await getDocs(categoriesCollection);
    const categoriesList = categoriesSnapshot.docs.map((doc) => {
            let category = doc.data();
            category.id = doc.id
            return category
        }
    )
    return categoriesList;
}

export default getCategories;