import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import DiscountActions from './tableAddition/DiscountActions';
import { deleteDiscountsService, getAllDiscountService } from '../../services/Discount';
import Validatetion from './tableAddition/Validatetion';
import AddDiscount from './AddDiscount';
import { Alert, Confirm } from '../../utils/Alert';

const TableDiscount = () => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [discountToEdit , setDiscountToEdit] = useState(null)

    const dataInfo = [
        {field: "id" , title : "#"},
        {field: "title" , title : "عنوان"},
        {field: "code" , title : "کد"},
        {field: "percent" , title : "%درصد"},
        {field: "expire_at" , title : "تاریخ انقضا"},
    ]

    const additionalField = [
        // {
        //     title:"برای همه",
        //     elements:(rowData)=> <Validatetion rowData={rowData}/>
        // },
        {
            title:"عملیات",
            elements: (rowData)=> <DiscountActions rowData={rowData} setDiscountToEdit={setDiscountToEdit} handleDeleteDiscounts={handleDeleteDiscounts}/>
        }
        
    ]

    const searchParams = {
        title:"جستوجو",
        placeholder:"قسمتی از عنوان را وارد کنید",
        searchField: "title"
    }

    const handleGetAllDiscounts = async ()=>{
        setLoading(true)
        try {
        const res = await getAllDiscountService()
        if(res.status == 200){
            setData(res.data.data)
        }
        } catch (error) {
            console.log(error.message);
        }finally{
            setLoading(false)
        }
    }

    const handleDeleteDiscounts = async (discount)=>{
        if(await Confirm("حذف تخفیف" , `آیا از حذف ${discount.title} اطمینان دارید؟`)){
            const res = await deleteDiscountsService(discount.id)
            if(res.status == 200){
                Alert("انجام شد" , res.data.message , "success")
                setData(lastData=> lastData.filter((d)=>d.id != discount.id)) 
            }
        }
    }


    useEffect(()=>{
    handleGetAllDiscounts()
    } , [])

    return (
        <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        numOfPage={4}
        loading={loading}
        additionalField={additionalField}
        searchParams={searchParams}
        >
        <AddDiscount setData={setData} discountToEdit={discountToEdit} setDiscountToEdit={setDiscountToEdit}/>
        </PaginatedTable>
    );
}

export default TableDiscount;
