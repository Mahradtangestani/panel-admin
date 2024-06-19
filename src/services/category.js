import httpService from "./httpService"

export const getCategoryService = (id=null)=>{
    return httpService(`/admin/categories${id ? `?parent=${id}` : ""}` , "get")
}