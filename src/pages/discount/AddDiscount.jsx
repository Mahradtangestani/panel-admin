import React, { useEffect, useState } from 'react';
import ModalContainers from '../../components/ModalsContainers';
import { Form, Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from './core';
import SubmitButton from '../../components/form/SubmitButton';
import FormikControl from '../../components/form/FormikControl';

const AddDiscount = ({setData , discountToEdit , setDiscountToEdit}) => {
    const [reInitValues , setReInitValues] = useState(null)
    useEffect(()=>{
    if(discountToEdit) setReInitValues({
        title: discountToEdit.title,
        code: discountToEdit.code || "",
        percent: discountToEdit.percent || "",
        expire_at: discountToEdit.expire_at || "",
        for_all: discountToEdit.for_all ? true : false
    })
    else setReInitValues(null)    

    } , [discountToEdit])
    return (
        <>
        <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_discount_modal"
        onClick={()=>setDiscountToEdit(null)}
        >
            <i className="fas fa-plus text-light"></i>
        </button>
    
        <ModalContainers
        id="add_discount_modal"
        title={discountToEdit ? "ویرایش نخفیف" : "اضافه کردن تخفیف"}
        fullScreen={false}
        >
        <div className="container">
                    <div className="row justify-content-center">
                        <Formik
                        initialValues={reInitValues || initialValues}
                        onSubmit={(values , actions)=> onSubmit(values , actions , setData , discountToEdit)}
                        validationSchema={validationSchema}
                        enableReinitialize
                        >
                    <Form>
                        <FormikControl
                        control="input"
                        type="text"
                        label="عنوان تخفیف"
                        name="title"
                        placeholder="کیبرد در حالت فارسی"
                        />        
                        <FormikControl
                        control="input"
                        type="text"
                        label="کد تخفیف"
                        name="code"
                        placeholder="کیبرد در حالت لاتین"
                        />        
                        <FormikControl
                        control="input"
                        type="number"
                        label="درصد تخفیف"
                        name="percent"
                        placeholder="کیبرد در حالت لاتین"
                        />        
                        <FormikControl
                        control="input"
                        type="text"
                        label="تاریخ اعتبار"
                        name="expire_at"
                        
                        />        
                        <FormikControl
                        control="switch"
                        label="برای همه"
                        name="for_all"
                        
                        />        
                        
                        
                        <div className="col-12 col-md-6 col-lg-8 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltrt">
                                <input type="text" className="form-control" placeholder="قسمتی از نام محصول را وارد کنید" list="brandLists"/>
                                <span className="input-group-text w_8rem justify-content-center">برای</span>
                                <datalist id="brandLists">
                                    <option value="محصول شماره 1"/>
                                    <option value="محصول شماره 2"/>
                                    <option value="محصول شماره 3"/>
                                </datalist>
                            </div>
                            <div className="col-12 col-md-6 col-lg-8">
                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    محصول 1
                                </span>
                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    محصول 2
                                </span>
                            </div>
                        </div>                                             
                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <SubmitButton/>
                        </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
        </ModalContainers>

            
        </>
    );
}

export default AddDiscount;
