import axios from "axios"
import config from "./config.json"
import { Alert } from "../utils/Alert";

export const apiPath = config.onlinePath

axios.interceptors.response.use((res)=>{
    if (res.status != 200 && res.status != 201) {
        if (typeof(res.data) == 'object') {
            let message = ""
            for (const key in res.data) {
                message = message + `${key} : ${res.data[key]}`
            }
            res.data.message = message
        }
        Alert("مشکل...!", res.data.message, "warning");
    }
    return res
},(error)=>{
    Alert(error.response.status, "مشکلی رخ داده است", "error");
    return Promise.reject(error)
})




const httpService = (url , method , data=null)=>{

const tokenInfo = JSON.parse(localStorage.getItem("loginToken")) 

return axios({

    url: apiPath+"/api"+url,
    method,
    data,
    headers:{
        Authorization : tokenInfo ? `Bearer ${tokenInfo.token}` : null,
        "Content-Type" : "application/json"

    }
})

}

export default httpService