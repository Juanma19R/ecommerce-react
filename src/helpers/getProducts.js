import { productList } from "../data/ProductListMock";

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productList)
        }, 2000);
    })
}

export default getProducts;