import React, { Children, useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddCategory from './AddCategory';
import { getCategoryService } from '../../services/category';
import { Alert } from '../../utils/Alert';
import ShowInMenu from './tableAdditions/ShowInMenu';
import Actions from './tableAdditions/Actions';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import jMoment from "jalali-moment"
import { convertdateToJalali } from '../../utils/convertDate';



const CategoryTable = () => {
    const params = useParams()
    const location = useLocation()
    const [data , setData] = useState([])

    const handleGetCategories = async ()=>{

    try {
        const res = await getCategoryService(params.categoryId)
        if(res.status == 200){
            setData(res.data.data)
        }
    } catch (error) {
        console.log(error);
    }

    }
        
    useEffect(()=>{
        console.log(params);
    handleGetCategories()
    } , [params])

    const dataInfo = [
        {field:"id" , title:"#"},
        {field:"title" , title:"عنوان محصول"},
        {field:"parent_id" , title:"والد"},
    ]



    const additionalField = [
    
    {
        title: "تاریخ",
        elements: (rowData)=> convertdateToJalali(rowData.created_at)
    },
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
        <Outlet/>
        {data.length ? (
            <PaginatedTable data={data} dataInfo={dataInfo} additionalField={additionalField} searchParams={searchParams} numOfPage={3}>
                <AddCategory/>
            </PaginatedTable>
        ) : (
            <h5 className='text-center text-danger my-5'>هیچ دسته بندی یافت نشد!</h5>
        )}
        </>  
        ) 
}

export default CategoryTable;
