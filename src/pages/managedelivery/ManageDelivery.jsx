import React from 'react';
import TableManageDelivery from './TableManageDelivery';
import AddManageDelivery from './AddManageDelivery';

const ManageDelivery = () => {
    return (
        <div id="manage_deliveries_section" class="manage_deliveries_section main_section">
        <h4 class="text-center my-3">مدیریت نحوه ارسال</h4>
        <div class="row justify-content-between">
            <div class="col-10 col-md-6 col-lg-4">
                <div class="input-group mb-3 dir_ltr">
                    <input type="text" class="form-control" placeholder="قسمتی از عنوان را وارد کنید"/>
                    <span class="input-group-text" >جستجو</span>
                </div>
            </div>
            <div class="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <AddManageDelivery/>
            </div>
        </div>
        <TableManageDelivery/>
    </div>
    );
}

export default ManageDelivery;
