import React from 'react';
import BrandsTable from './BrandsTable';


const Brands = () => {
    return (
<div
      id="manage_brand_section"
      className="manage_brand_section main_section"
    >
      <h4 className="text-center my-3">مدیریت برند ها</h4>
      <BrandsTable />
    </div>
    );
}

export default Brands;
