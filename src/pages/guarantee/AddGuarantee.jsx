import React, { useEffect, useState } from 'react';
import ModalContainers from '../../components/ModalsContainers';
import { Form, Formik } from 'formik';
import { initialValues, onSubmit, validationSchema } from './core';
import FormikControl from '../../components/form/FormikControl';
import SubmitButton from '../../components/form/SubmitButton';

const AddGuarantee = ({setData , guaranteeToEdit , setGuaranteeToEdit}) => {
    const [reInitValues , setReInitValues] = useState(null)
    
    useEffect(()=>{
    if(guaranteeToEdit) setReInitValues({
        title: guaranteeToEdit.title,
        descriptions: guaranteeToEdit.descriptions || '',
        length: guaranteeToEdit.length || "",
        length_unit: guaranteeToEdit.length_unit || ''
    })
    else setReInitValues(null)
    } , [guaranteeToEdit])


    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_guarantee_modal"
            onClick={()=>setGuaranteeToEdit(null)}>
                <i className="fas fa-plus text-light"></i>
            </button>   

        <ModalContainers
        id="add_guarantee_modal"
        title={guaranteeToEdit ? "ویرایش گارانتی" : "افزودن گارانتی"}
        fullScreen={false}
      >
        <div className="container">
          <div className="row justify-content-center">
            <Formik
              initialValues={reInitValues || initialValues}
              onSubmit={(values, actions) =>
                onSubmit(values, actions, setData, guaranteeToEdit)
              }
              validationSchema={validationSchema}
              enableReinitialize
            >
              <Form>
                <FormikControl
                  control="input"
                  type="text"
                  name="title"
                  label="عنوان"
                  placeholder="فقط حروف و اعداد"
                />
                <FormikControl
                  control="textarea"
                  type="text"
                  name="descriptions"
                  label="توضیحات"
                  placeholder="فقط حروف و اعداد"
                />
                <FormikControl
                  control="input"
                  type="number"
                  name="length"
                  label="مدت گارانتی"
                  placeholder="فقط اعداد"
                />
                <FormikControl
                  control="input"
                  type="text"
                  name="length_unit"
                  label="واحد"
                  placeholder="فقط حروف "
                />
                <div className="btn_box text-center col-12">
                  <SubmitButton />
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </ModalContainers>
        </>
    );
}

export default AddGuarantee;
