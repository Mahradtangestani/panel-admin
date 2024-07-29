import httpService from "./httpService"

export const getAllGuaranteesService = ()=>{
    return httpService('/admin/guarantees' , "get")
}


export const addNewGuaranteeService = (data) => {
    return httpService("/admin/guarantees", "post", data);
  };
  
  export const editGuaranteeService = (guaranteeId, data)=>{
    return httpService(`/admin/guarantees/${guaranteeId}`, "put", data);
  }


export const deleteGuaranteeService = (guarantee)=>{
    return httpService(`/admin/guarantees/${guarantee}` , "delete")
}