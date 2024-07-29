import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Alert } from '../../utils/Alert';
import { logoutService } from '../../services/auth';


const Logout = () => {
    const [loading , setLoading] = useState(true)

    const hanleLogout = async ()=>{
        
        try {
            const res = await logoutService()
            if(res.status == 200){
            localStorage.removeItem("loginToken")
            setLoading(false)
        }else{
            Alert("متاسفم...!" , res.data.message , "error")
        }
        } catch (error) {
            setLoading(false)
            Alert("متاسفم...!" , "مشکل از سمت سرور پیش آمده" , "error")
        }
    }
    
    useEffect(()=>{

    hanleLogout()

    } , [])
    return (
        <>
            {
                loading ? (
                    <h1 className='text-center text-waiting'>لطفا صبر کنید...</h1>
                ) : (
                    <Navigate to={"/login"}/>
                )
            }
        </>
    );
}

export default Logout;
