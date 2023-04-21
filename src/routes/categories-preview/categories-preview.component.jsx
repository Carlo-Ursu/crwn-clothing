import {Fragment} from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/category.selector";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(selectCategoriesMap);
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