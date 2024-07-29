import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import AddColor from './AddColor';
import ColorActions from './tableAddition/ColorActions';
import { deleteColorsService, getAllColorsService } from '../../services/colors';
import { Alert, Confirm } from '../../utils/Alert';


const ColorsTable = () => {
    const [data , setData] = useState([])
    const [loading , setLoading] = useState(false)
    const [colorsToEdit , setColorsToEdit] = useState(null)

    const dataInfo = [
        {field: "id" , title: "#"},
        {field: "title" , title: "عنوان"},
        {field: "code" , title: "کد رنگ"},
    ]

    const additionalField = [
        {
            title:"رنگ",
            elements:(rowData)=> <div className='w-100 h-100 d-block' style={{background: rowData.code, color: rowData.code}}>...</div>
        },
        {
            title: "عملیات",
            elements:(rowData)=> <ColorActions rowData={rowData} setColorsToEdit={setColorsToEdit} handleDeleteColors={handleDeleteColors}/>
        }
    ]

    const searchParams = {
        title:"جستوجو",
        placeholder:"قسمتی از عنوان را وارد کنید",
        searchField: "title"
    }  


    const handleGetAllColors = async ()=>{
        setLoading(true)
        const res = await getAllColorsService()
        res && setLoading(false)
        if(res.status == 200){
        setData(res.data.data)
        }
    }

    const handleDeleteColors = async(color)=>{
        if(await Confirm("حذف رنگ" , `آیا از حدف ${color.title} اطمینان دارید؟`)){
            const res = await deleteColorsService(color.id)
            if(res.status == 200){
                Alert("انجام شد" , res.data.message , "success")
                setData(lastData=>lastData.filter(d=>d.id != color.id))
            }
        }
    }


    useEffect(()=>{
        handleGetAllColors()
    } , [])

    return (
        
        <PaginatedTable
        data={data}
        dataInfo={dataInfo}
        additionalField={additionalField}
        numOfPage={4}
        searchParams={searchParams}
        loading={loading}
        >
        <AddColor setData={setData} setColorsToEdit={setColorsToEdit} colorsToEdit={colorsToEdit}/>
        </PaginatedTable>
    );
}

export default ColorsTable;
