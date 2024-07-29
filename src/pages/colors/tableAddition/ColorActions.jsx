import React from 'react';

const ColorActions = ({rowData , setColorsToEdit , handleDeleteColors}) => {
    return (
        <>
        <i
          className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
          title="ویرایش رنگ ها"
          data-bs-placement="top"
          data-bs-toggle="modal"
          data-bs-target="#add_color_modal"
          onClick={()=>setColorsToEdit(rowData)}
        ></i>
  
        <i
          className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
          title="حذف رنگ ها"
          data-bs-toggle="tooltip"
          data-bs-placement="top"
          onClick={()=>handleDeleteColors(rowData)}
        ></i>
      </>
    );
}

export default ColorActions;
