import mockCategories from "../data/CategoriesMock";

const getCategories = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (mockCategories)
        }, 2000);
    });
}

export default getCategories;