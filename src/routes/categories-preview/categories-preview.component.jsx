import {Fragment, useContext} from "react";
import './categories-preview.styles.scss';

import {CategoriesContext} from "../../contexts/categories.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {

    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {
                Object.keys(categoriesMap).map((section) => {
                    const category = categoriesMap[section];
                    return <CategoryPreview key={section} items={category} title={section}/>

                })
            }

        </Fragment>
    );
};

export default CategoriesPreview;