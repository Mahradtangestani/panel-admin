import { convertDataToFormData } from "../utils/convertData";
import httpService from "./httpService";

export const getProductsService = (page, countOnPage, searchChar) => {
  return httpService(`/admin/products?page=${page}&count=${countOnPage}&searchChar=${searchChar}`, "get");
};

export const createNewProductServices = (data)=>{
  return httpService("/admin/products" , "post" , data.image ? convertDataToFormData(data) : data)
}

export const deleteProductService = (productId)=>{
  return httpService(`/admin/products/${productId}`, "delete");
}