import mockCategories from "../data/categoriesMock";

const getCategories = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (mockCategories)
        }, 2000);
    });
}

export default getCategories;