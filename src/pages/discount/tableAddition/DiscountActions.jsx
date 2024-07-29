import React from 'react';

const DiscountActions = ({rowData , setDiscountToEdit , handleDeleteDiscounts}) => {
    return (
        <div className='text-center'>
            <i
                className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                title="ویرایش تخفیف ها"
                data-bs-placement="top"
                data-bs-toggle="modal"
                data-bs-target="#add_discount_modal"
                onClick={()=>setDiscountToEdit(rowData)}
                
        ></i>
        <i
            className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
            title="حذف تخفیف ها"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            onClick={()=>handleDeleteDiscounts(rowData)}
        ></i>
        </div>
    );
}

export default DiscountActions;
