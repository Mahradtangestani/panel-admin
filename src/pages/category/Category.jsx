import React from 'react';
import CategoryTable from './CategoryTable';
import CategoryContextContainer from '../../context/CategoryContext';



const Category = () => {
    return (
        <CategoryContextContainer>
        <div id="manage_product_category" className="manage_product_category main_section ">
            <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>

            <CategoryTable/>
        </div>
        </CategoryContextContainer>
    );
}

export default Category;
