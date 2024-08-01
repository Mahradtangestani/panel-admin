import { ErrorMessage, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { initialValues, Onsubmit, validationSchema } from './core';
import FormikControl from '../../components/form/FormikControl';
import { getCategoryService } from '../../services/category';
import SpinnerLoad from '../../components/SpinnerLoad';
import FormikError from '../../components/form/FormikError';

const AddProduct = () => {
    const [parentCategories , setParentCategories] = useState([])
    const [mainCategories , setMainCategories] = useState(null)
    const [selectedCategory , setSelectedCategory] = useState([])

    const getAllParentCategories = async ()=>{
        const res = await getCategoryService();
        if (res.status === 200) {
            setParentCategories(res.data.data.map(d=>{
            return {id:d.id, value:d.title}
          }));
        }
      }
      useEffect(()=>{
        getAllParentCategories();
      },[])

      const handleSetMainCategories = async (value)=>{
        setMainCategories("waiting")
        if(value > 0){
        const res = await getCategoryService(value)
        console.log(res);
        if(res.status === 200){
            setMainCategories(res.data.data.map(d=>{
                return {id:d.id, value:d.title}
            }))
        }
        }else{
            setMainCategories(null)
        }
      }

      const handleSelectCategory = (value , formik)=>{
          setSelectedCategory(oldData=>{
            if(oldData.findIndex(d=>d.id == value) == -1){

                const newData = [...oldData , mainCategories.filter(c=>c.id == value)[0]]

                const selectedIds = newData.map(nd => nd.id)
                formik.setFieldValue("category_id" , selectedIds.join("-"))

                return newData;

            }else{
                return oldData;
            }
            
            
          })
      }

    return (
        <Formik 
        initialValues={initialValues}
        onSubmit={(values , actions) => Onsubmit(values , actions)}
        validationSchema={validationSchema}
        >
            <Form>
            <div className="container">
                <h4 className='text-center my-3'>افزودن محصول جدید</h4>
                    <div className="row justify-content-center">
                        
                        {
                            parentCategories.length > 0 ? (
                                <FormikControl
                                className="col-12 col-md-6 col-lg-8"
                                control="select"
                                options={parentCategories}
                                name="parentsCats"
                                label="دسته والد"
                                firstItem="دسته مورد نظر را وارد کتید"
                                handleOnChange={handleSetMainCategories}
                                />
                            ) : null
                        }

                        <div className="col-12 col-md-6 col-lg-8">
                        {mainCategories === "waiting" ? (
                             <SpinnerLoad isSmall={true} colorClass="text-primary"/>
                           ) : mainCategories != null ? (
                             <FormikControl
                               control="select"
                               options={mainCategories}
                               name="mainCats"
                               label="دسته اصلی"
                               firstItem = "دسته مورد نظر را انتخاب کنبد..."
                               handleOnChange={handleSelectCategory}
                             />
                             ): null}
                              
                            <ErrorMessage name={"category_id"} component={FormikError}/>  

                            <div className="col-12 col-md-6 col-lg-8">
                               {selectedCategory.map(c=>(
                                <span className='chips_elem' key={c.id}>
                                     <i className='fas fa-time text-danger'></i>
                                     {c.value}
                                </span>
                               ))}
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group my-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="عنوان محصول"/>
                                <span className="input-group-text w_6rem justify-content-center">عنوان</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="قیمت محصول"/>
                                <span className="input-group-text w_6rem justify-content-center">قیمت</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="وزن محصول (کیلوگرم)"/>
                                <span className="input-group-text w_6rem justify-content-center">وزن</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <span className="input-group-text justify-content-center">
                                    <i className="fas fa-plus text-success hoverable_text pointer"></i>
                                </span>
                                <input type="text" className="form-control" placeholder="قسمتی از نام برند را وارد کنید" list="brandLists"/>
                                <span className="input-group-text w_6rem justify-content-center">برند</span>
                                <datalist id="brandLists">
                                    <option value="سامسونگ"/>
                                    <option value="سونی"/>
                                    <option value="اپل"/>
                                </datalist>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-2 dir_ltr">
                                <input type="text" className="form-control" placeholder="قسمتی از نام رنگ را وارد کنید" list="colorList"/>
                                <datalist id="colorList">
                                    <option value="مشکی"/>
                                    <option value="سفید"/>
                                    <option value="قرمز"/>
                                </datalist>
                                <span className="input-group-text w_6rem justify-content-center">رنگ</span>
                            </div>
                            <div className="col-12 col-md-6 col-lg-8 mb-3 d-flex">
                                <span className="color_tag chips_elem d-flex justify-content-center align-items-center pb-2 colorBlack">
                                    <i className="fas fa-times text-danger hoverable_text"></i>
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-2 dir_ltr">
                                <input type="text" className="form-control" placeholder="قسمتی از نام گارانتی را وارد کنید" list="guarantiList"/>
                                <datalist id="guarantiList">
                                    <option value="گارانتی فلان 1"/>
                                    <option value="گارانتی فلان 2"/>
                                    <option value="گارانتی فلان 3"/>
                                </datalist>
                                <span className="input-group-text w_6rem justify-content-center">گارانتی</span>
                            </div>
                            <div className="col-12 col-md-6 col-lg-8 mb-3">
                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    گارانتی فلان
                                </span>
                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    گارانتی فلان
                                </span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <textarea type="text" className="form-control" placeholder="توضیحات" rows="5"></textarea>
                                <span className="input-group-text w_6rem justify-content-center">توضیحات</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="file" className="form-control" placeholder="تصویر"/>
                                <span className="input-group-text w_6rem justify-content-center">تصویر</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="یک کلمه در مورد تصویر"/>
                                <span className="input-group-text w_6rem justify-content-center">توضیح تصویر</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="text" className="form-control" placeholder="با - از هم جدا شوند"/>
                                <span className="input-group-text w_6rem justify-content-center">تگ ها</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="number" className="form-control" placeholder="فقط عدد"/>
                                <span className="input-group-text w_6rem justify-content-center">موجودی</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8">
                            <div className="input-group mb-3 dir_ltr">
                                <input type="number" className="form-control" placeholder="فقط عدد "/>
                                <span className="input-group-text w_6rem justify-content-center">درصد تخفیف</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 row justify-content-center">
                            <div className="form-check form-switch col-5 col-md-2">
                                <input className="form-check-input pointer" type="checkbox" id="flexSwitchCheckDefault"/>
                                <label className="form-check-label pointer" htmlFor="flexSwitchCheckDefault">وضعیت فعال</label>
                            </div>
                        </div>
                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button className="btn btn-primary ">ذخیره</button>
                        </div>

                    </div>
            </div>
            </Form>
        </Formik>
    )
}

export default AddProduct;
