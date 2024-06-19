import React, { Children, useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddCategory from './AddCategory';
import { getCategoryService } from '../../services/category';
import { Alert } from '../../utils/Alert';
import ShowInMenu from './tableAdditions/ShowInMenu';
import Actions from './tableAdditions/Actions';

const CategoryTable = () => {
    
    const [data , setData] = useState([])

    const handleGetCategories = async ()=>{

    try {
        const res = await getCategoryService()
        if(res.status == 200){
            setData(res.data.data)
        }else{
            Alert("متاسفم...!" , res.data.message , "error")
        }
    } catch (error) {
        Alert("مشکل" , "مشکل از سمت سرور" , "error")
    }

    }
        
    useEffect(()=>{
    handleGetCategories()
    } , [])

    const dataInfo = [
        {field:"id" , title:"#"},
        {field:"title" , title:"عنوان محصول"},
        {field:"parent_id" , title:"والد"},
        {field:"created_at" , title:"تاریخ"},
    ]



    const additionalField = [
    
    {
        title: "نمایش در منو",
        elements: (rowData)=> <ShowInMenu rowData={rowData}/>
    },
    {
        title: "عملیات",
        elements: (rowData)=> <Actions rowData={rowData}/>
    }
]

    const searchParams = {
        title: "جستوجو",
        placeholder:"قسمتی از عنوان را وارد کنید",
        searchField: "title"
    }

    return (
        <>  
        <PaginatedTable data={data} dataInfo={dataInfo} additionalField={additionalField} searchParams={searchParams} numOfPage={3}>
            <AddCategory/>
        </PaginatedTable>
            {/* <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>عنوان</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>دسته شماره فلان</td>
                        <td>فعال</td>
                        <td>
                            <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_product_category_modal"></i>
                            <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>دسته شماره فلان</td>
                        <td>فعال</td>
                        <td>
                            <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-placement="top" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>دسته شماره فلان</td>
                        <td>فعال</td>
                        <td>
                            <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-placement="top" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>دسته شماره فلان</td>
                        <td>فعال</td>
                        <td>
                            <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip" title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip" title="افزودن ویژگی" data-bs-placement="top" data-bs-toggle="modal" data-bs-target="#add_product_category_attr_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>    */}
        </>
    );
}

export default CategoryTable;
