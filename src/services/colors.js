import httpService from "./httpService"

export const getAllColorsService = ()=>{
    return httpService("/admin/colors" , "get")
}

export const editColorsService = (colorId , data)=>{
    return httpService(`/admin/colors/${colorId}` , "put" , data)
}

export const addColorsService = (data)=>{
    return httpService('/admin/colors' , "post" , data)
}

export const deleteColorsService = (color)=>{
    return httpService(`/admin/colors/${color}` , "delete")
}