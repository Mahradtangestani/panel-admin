import React from 'react';
import ModalContainers from '../../components/ModalsContainers';

const AddManageDelivery = () => {
    return (
        <>

        <button class="btn btn-success d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#add_delivery_modal">
            <i class="fas fa-plus text-light"></i>
        </button>
        
        <ModalContainers
        id="add_delivery_modal"
        title="افزودن روش ارسال"
        fullScreen={false}
        >
            
            <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="input-group my-3 dir_ltr">
                                <input type="text" class="form-control" placeholder=""/>
                                <span class="input-group-text w_8rem justify-content-center">عنوان</span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group my-3 dir_ltr">
                                <input type="number" class="form-control" placeholder="تومان (فقط عدد)"/>
                                <span class="input-group-text w_8rem justify-content-center"> هزینه </span>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="input-group my-3 dir_ltr">
                                <input type="text" class="form-control" placeholder="فقط عدد"/>
                                <span class="input-group-text w_8rem justify-content-center">مدت ارسال</span>
                            </div>
                        </div>                       
                        <div class="col-12">
                            <div class="input-group my-3 dir_ltr">
                                <input type="text" class="form-control" placeholder=""/>
                                <span class="input-group-text w_8rem justify-content-center">واحد مدت ارسال</span>
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

export default AddManageDelivery;
