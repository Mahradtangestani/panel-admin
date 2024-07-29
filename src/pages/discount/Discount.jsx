import React from 'react';
import TableDiscount from './TableDiscount';

const Discount = () => {
    return (
        <div
            id="manage_discount_section"
            className="manage_discount_section main_section"
        >
            <h4 className="text-center my-3">مدیریت تخفیف ها</h4>
            <TableDiscount/>
        </div>
    );
}

export default Discount;
