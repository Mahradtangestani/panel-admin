import React from 'react';
import ModalContainers from '../../components/ModalsContainers';

const AddComment = () => {
    return (
        <>
            <button className="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_comment_modal">
                <i className="fas fa-plus text-light"></i>
            </button>



        <ModalContainers
        id="add_comment_modal"
        title="افزودن نظر برای محصول"
        fullScreen={false}
        >

        <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="input-group my-3 dir_ltr">
                                <textarea rows="5" class="form-control"></textarea>
                                <span class="input-group-text w_8rem justify-content-center">متن نظر</span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group my-2 dir_ltr">
                                <input type="text" class="form-control" placeholder="قسمتی از نام محصول مورد نظر را وارد کنید" list="productList"/>
                                <span class="input-group-text w_8rem justify-content-center">برای</span>
                                <datalist id="productList">
                                    <option value="محصول شماره 1"/>
                                    <option value="محصول شماره 2"/>
                                    <option value="محصول شماره 3"/>
                                </datalist>
                            </div>
                        </div>
                        <div class="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                            <button class="btn btn-primary ">ذخیره</button>
                        </div>
                    </div>
                </div>

        </ModalContainers>
        </>
    );
}

export default AddComment;
