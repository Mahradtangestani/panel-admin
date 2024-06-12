import React from 'react';
import CategoryTable from './CategoryTable';
import AddAttributes from './AddAttributes';


const Category = () => {
    return (
        <div id="manage_product_category" className="manage_product_category main_section ">
            <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>

            <CategoryTable/>
            <AddAttributes/>
        </div>
    );
}

export default Category;
