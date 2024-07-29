import React from 'react';
import FormikControl from '../../../components/form/FormikControl';
import SubmitButton from '../../../components/form/SubmitButton';
import { initialValues, onSubmit, validationSchema } from './core';
import { Form, Formik } from 'formik';

const AddAttrs = ({reInitValues , location , setData , attrToEdit , setAttrToEdit}) => {
    return (
        <Formik
                        initialValues={reInitValues || initialValues}
                        onSubmit={(values , actions)=>onSubmit(values , actions , location.state.categoryData.id , setData , attrToEdit , setAttrToEdit)}
                        validationSchema={validationSchema}
                        enableReinitialize
                        >
                            <Form>
                            <div className={`row my-3 ${attrToEdit ? "alert-danger danger-shadow" : ""} justify-content-center align-items-center is_inline`}>
                            <FormikControl
                            control="input"
                            type="text"
                            name="title"
                            label="عنوان"
                            className="col-12 col-md-6 col-lg-4 my-1"
                            placeholder="عنوان ویژگی جدید"
                            />
                            <FormikControl
                            control="input"
                            type="text"
                            name="unit"
                            label="واحد"
                            className="col-12 col-md-6 col-lg-4 my-1"
                            placeholder="واحد ویژگی جدید"
                            />
                            
                            
                            <div className="col-8 col-lg-2 my-1">
                            <FormikControl
                            control="switch"
                            name="in_filter"
                            label="نمایش در فیلتر"
                            />                            
                            </div>
                            <div className="col-4 col-lg-2 d-flex justify-content-center align-items-start my-1">
                                <SubmitButton/>
                                {attrToEdit ? (
                                    <button className='btn btn-secondary btn-sm me-2' onClick={()=>setAttrToEdit(null)}>
                                        انصراف
                                    </button>
                                ) : null}
                            </div>
                        </div>
                            </Form>
                        </Formik>
    );
}

export default AddAttrs;
