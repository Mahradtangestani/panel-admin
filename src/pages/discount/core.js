import { addDiscountsService, editDiscountsService } from "../../services/Discount";
import { Alert } from "../../utils/Alert";
import * as Yup from "yup"

export const initialValues = {
    title: "",
    code:"",
    percent:"",
    expire_at: "",
    for_all: true,
}

export const onSubmit = async (values , actions  , setData , discountToEdit)=>{
    try {
        values = {
            ...values , 
            for_all: values.for_all ? 1 : 0
        };
        if(discountToEdit){
            const res = await editDiscountsService(discountToEdit.id , values)
            if(res.status == 200){
                Alert("انجام شد" , res.data.message , "success")
                setData((lastData)=>{
                    let newData = [...lastData]
                    let index = newData.findIndex((d)=>d.id == discountToEdit.id)
                    newData[index] = res.data.data
                    return newData
                })
            }
        }else{
            const res = await addDiscountsService(values)
            if(res.status == 201){
                Alert("انجام شد" , res.data.message , "success")
                setData((lastData)=>[...lastData , res.data.data])
            }
        }    
    } catch (error) {
        console.log(error.message);
    }
    
    
}


export const validationSchema = Yup.object({
    title: Yup.string().required("عنوان را وارد کنید"),
    code: Yup.string().required("کد را وارد کنید"),
    percent: Yup.string().required("درصد را وارد کنید"),
    expire_at: Yup.string().required("تاریخ انقضا را وارد کنید"),
    for_all: Yup.boolean()
})