import React, {useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddCategory from './AddCategory';
import { deleteCategoryService, getCategoryService } from '../../services/category';
import ShowInMenu from './tableAdditions/ShowInMenu';
import Actions from './tableAdditions/Actions';
import { Outlet, useParams } from 'react-router-dom';
import { convertdateToJalali } from '../../utils/convertDate';
import { Alert, Confirm } from '../../utils/Alert';



const CategoryTable = () => {
    const params = useParams()
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [forceRender , setForceRender] = useState(0)

    const handleGetCategories = async ()=>{
    setLoading(true)
    try {
        const res = await getCategoryService(params.categoryId)
        if(res.status == 200){
            setData(res.data.data)
        }
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false)
    }

    }

    const handleDeleteCategory = async (rowData)=>{
    if(await Confirm("حدف دسته بندی" , `آیا از حذف ${rowData.title} مطمن هستید؟`)){
        try {
        const res = await deleteCategoryService(rowData.id)
        if(res.status == 200){
            setData(data.filter(d=>d.id != rowData.id))
            Alert("انجام شد" , res.data.message , "success")
        }
        } catch (error) {
            console.log(error);
        }

    }}

        
    useEffect(()=>{
        
    handleGetCategories()

    } , [params , forceRender])

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
        elements: (rowData)=> <Actions rowData={rowData} handleDeleteCategory={handleDeleteCategory}/>
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
        
            <PaginatedTable data={data} dataInfo={dataInfo} additionalField={additionalField} searchParams={searchParams} numOfPage={5} loading={loading}>
                <AddCategory setForceRender={setForceRender}/>
            </PaginatedTable>
       
        </>  
        ) 
}

export default CategoryTable;
