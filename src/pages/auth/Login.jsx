import { FastField, Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import AuthFormikControl from '../../components/authform/AuthFormikControl';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert } from '../../utils/Alert';
import httpService from '../../services/httpService';
import { loginService } from '../../services/auth';


const initialValues ={
    phone: "",
    password: "",
    remember: false
}
const onSubmit = async (values , submitMethods , navigate)=>{
    
    try {
        const res = await loginService(values)
        if (res.status == 200){
            localStorage.setItem("loginToken" , JSON.stringify(res.data))
            navigate("/") 
        }else{
            Alert("متاسفم...!" , res.data.message , "error")
        }
        submitMethods.setSubmitting(false)
    } catch (error) {
        submitMethods.setSubmitting(false)
        Alert("متاسفم...!" , "مشکل از سمت سرور پیش آمده" , "error")
    }

}
const validationSchema = Yup.object({
    phone:Yup.number().required('لطفا این قسمت را پر کنید'),
    password: Yup
        .string()
        .required('لطفا این قسمت را پر کنید').matches(/^[a-zA-Z\u0600-\u06FF0-9]+$/ , "فقط از حروف و اعداد استفاده شود"),
        remember: Yup.boolean()
})
    
const Login = () => {
    
    const navigate = useNavigate()

    return (
    
        <Formik
                initialValues={initialValues}
                onSubmit={(values , submitMethods)=>onSubmit(values , submitMethods , navigate)}
                validationSchema={validationSchema}
                >
                    {
                        formik=>{
                            return(                                
                                <div className="wrap-login100">
                                    <Form className="login100-form validate-form pos-relative d-flex flex-column align-items-center justify-content-center">
                                        <span className="login100-form-title">
                                            ورود اعضا
                                        </span>

                                        <AuthFormikControl
                                        formik={formik}
                                        control="input"
                                        type="text"
                                        name="phone"
                                        icon="fa fa-mobile"
                                        label="شماره موبایل"
                                        />

                                        <AuthFormikControl
                                        formik={formik}
                                        control="input"
                                        type="password"
                                        name="password"
                                        icon="fa fa-lock"
                                        label="رمز عبور"
                                        />

                                        <AuthFormikControl
                                        control="switch"
                                        name="remember"
                                        label="مرا بخاطر بسپار"
                                        />
                                        
                                        
                                        
                                        
                                        <div className="container-login100-form-btn">
                                            <button className="login100-form-btn" disabled={formik.isSubmitting}>
                                                {formik.isSubmitting ? (
                                                    <div className="spinner-border" role="status">
                                                        <span className="visually-hidden">Loading...</span>
                                                    </div>
                                                ) : "ورود"}
                                            </button>
                                        </div>
                                    </Form>
                                    <div className="login100-pic js-tilt" data-tilt>
                                        <img src="/assets/images/img-01.png" alt="IMG"/>
                                    </div>
                                </div>
                            )
                        }
                    }
        </Formik>
            
    );
}

export default Login;