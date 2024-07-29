
import * as Yup from "yup";
import { Alert } from "../../utils/Alert";
import { addColorsService, editColorsService } from "../../services/colors";

export const initialValues = {
  title: "",
  code: ""
};


export const onSubmit = async (values , actions , setData , colorsToEdit)=>{
if(colorsToEdit){
const res = await editColorsService(colorsToEdit.id , values)
if(res.status == 200){
    Alert("انجام شد" , res.data.message , "success")
    setData((lastData)=>{
        let newData = [...lastData]
        let index = newData.findIndex((d)=>d.id == colorsToEdit.id)
        newData[index] = res.data.data
        return newData
    })
}
}else{
    const res = await addColorsService(values)
    if(res.status == 201){
        Alert("انجام شد" , res.data.message , "success")
        setData((lastData) => [...lastData , res.data.data])
    }
}
} 


export const validationSchema = Yup.object({
    title: Yup.string()
      .required("لطفا این قسمت را پر کنید"),
    code: Yup.string().required(" رنگ را انتخاب کنید"),
  });