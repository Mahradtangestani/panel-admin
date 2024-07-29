import httpService from "./httpService"

export const getAllDiscountService = ()=>{
    return httpService("/admin/discounts" , "get")
}

export const editDiscountsService = (discountId , data)=>{
    return httpService(`/admin/discounts/${discountId}` , "put" , data)
}

export const addDiscountsService = (data)=>{
    return httpService("/admin/discounts" , "post" , data)
}

export const deleteDiscountsService = (discount)=>{
    return httpService(`/admin/discounts/${discount}` , "delete")
} 