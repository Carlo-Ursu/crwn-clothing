import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from "../category/category.component";

import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, Fragment } from 'react';
import { useSelector } from "react-redux";
import { fetchCategoriesStart } from '../../store/categories/category.action';
import Spinner from '../../components/spinner/spinner.component';
import {
    selectIsLoading,
} from "../../store/categories/category.selector";


const Shop = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(fetchCategoriesStart());
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            {isLoading ? (
                <Spinner />
            ) : (
                <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=':category' element={<Category />} />
            </Routes>
            )}
        </Fragment>
    )
        
};

export default Shop;