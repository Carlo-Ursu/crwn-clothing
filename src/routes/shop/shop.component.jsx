import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from "../category/category.component";

import {Route, Routes} from "react-router-dom";
import PRODUCTS from "../../shop-data";
import {useDispatch} from "react-redux";
import {setCategories} from "../../store/categories/category.action";


const Shop = () => {
    const dispatch = useDispatch();

    const categoryArray = PRODUCTS.map(category => category);


    dispatch(setCategories(categoryArray));


    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=':category' element={<Category/>}/>
        </Routes>
    );
};

export default Shop;