import React, { useEffect, useState } from 'react';
import PaginatedTable from '../../components/PaginatedTable';
import { deleteBrandService, getAllBrandsService } from '../../services/brands';
import { apiPath } from '../../services/httpService';
import AddBrands from './AddBrands';
import ActionsBrand from './tableAdditions/ActionsBrand';
import { Alert, Confirm } from '../../utils/Alert';

const BrandsTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [brandToEdit , setBrandToEdit] = useState(null)
  
    const dataInfo = [
      { field: "id", title: "#" },
      { field: "original_name", title: "عنوان لاتین" },
      { field: "persian_name", title: "عنوان فارسی" },
      { field: "descriptions", title: "توضیحات" },
    ];
  
    const additionalField = [
        {
          title: "لوگو",
          elements: (rowData) =>
            rowData.logo ? <img src={apiPath+"/"+rowData.logo} width="40" /> : null,
        },
        {
          title: "عملیات",
          elements: (rowData) => <ActionsBrand rowData={rowData} setBrandToEdit={setBrandToEdit} handleDeleteBrand={handleDeleteBrand}/>,
        },
      ];
  
    const searchParams = {
      title: "جستجو",
      placeholder: "قسمتی از عنوان را وارد کنید",
      searchField: "original_name",
    };
  
    const handleGetAllBrands = async ()=>{
      setLoading(true)
      try {
        const res = await getAllBrandsService()
        if(res.status == 200){
            setData(res.data.data)
        }
    } catch (error) {
        console.log(error);
    }finally{
        setLoading(false)
    }
    }

    const handleDeleteBrand = async (brand) => {
      if (await Confirm("حذف برند",`آیا از حذف ${brand.original_name} اطمینان دارید؟`)) {
        const res = await deleteBrandService(brand.id);
        if (res.status === 200) {
          Alert("انجام شد", res.data.message, "success");
          setData((lastData) => lastData.filter((d) => d.id != brand.id));
        }
      }
    };
  
    useEffect(()=>{
      handleGetAllBrands()
    },[])
  
    return (
      <>
        <PaginatedTable
          data={data}
          dataInfo={dataInfo}
          additionalField={additionalField}
          numOfPage={4}
          searchParams={searchParams}
          loading={loading}
        >
          <AddBrands setData={setData} brandToEdit={brandToEdit} setBrandToEdit={setBrandToEdit}/>
        </PaginatedTable>
      </>
    );
  };
  
  export default BrandsTable;
