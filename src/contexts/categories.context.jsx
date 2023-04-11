import {createContext} from "react";

import PRODUCTS from '../shop-data.js';

export const CategoriesContext = createContext({
    categoriesMap: {},
});

export const CategoriesProvider = ({children}) => {
    const categoriesMap = PRODUCTS.reduce((acc, PRODUCTS) => {
        const {title, items} = PRODUCTS;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

    const value = {categoriesMap};


    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}