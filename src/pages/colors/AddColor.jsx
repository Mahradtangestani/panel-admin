import React, { useEffect, useState } from 'react';
import ModalContainers from '../../components/ModalsContainers';
import { Form, Formik } from 'formik';
import SubmitButton from '../../components/form/SubmitButton';
import { initialValues, onSubmit, validationSchema } from './core';
import FormikControl from '../../components/form/FormikControl';

const AddColor = ({setData , colorsToEdit , setColorsToEdit}) => {
    const [reInitValues , setReInitValues] = useState(null)

    useEffect(()=>{
        if(colorsToEdit) setReInitValues({
            title: colorsToEdit.title,
            code: colorsToEdit.code || '',
        })
        else setReInitValues(null)
    } , [colorsToEdit])

    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_color_modal"
            onClick={()=>setColorsToEdit(null)}>
                <i className="fas fa-plus text-light"></i>
            </button>

            <ModalContainers
            fullScreen={false}
            id="add_color_modal"
            title={colorsToEdit ? "ویرایش رنگ" : "افزودن رنگ"}
            >
            <div className="container">
                    <div className="row justify-content-center">
                    <Formik
                    initialValues={reInitValues || initialValues}
                    onSubmit={(values , actions) => onSubmit(values , actions , setData , colorsToEdit)}
                    validationSchema={validationSchema}
                    enableReinitialize
                    >
                        <Form>
                        <FormikControl
                        control="input"
                        type="text"
                        label="نام رنگ"
                        name="title"
                        />
                        <FormikControl
                        control="input"
                        type="color"
                        label="انتخاب رنگ"
                        name="code"
                        />
                        {/* <div className="col-12">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder=""/>
                                <span className="input-group-text w_8rem justify-content-center">نام رنگ</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="exampleColorInput" className="form-label">انتخاب رنگ</label>
                            <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#563d7c" title="Choose your color"/>
                        </div>                         */}
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

export default AddColor;
