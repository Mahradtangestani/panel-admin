import React from 'react';
import TableRole from './TableRole';
import AddRole from './AddRole';

const Role = () => {
    return (
        <>
        <div id="manage_role_section" className="manage_role_section main_section">
            <h4 className="text-center my-3">مدیریت نقش ها</h4>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input type="text" className="form-control" placeholder="قسمتی از نام نقش را وارد کنید"/>
                        <span className="input-group-text" >جستجو</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                <AddRole/>
                </div>
            </div>
            <TableRole/>
        </div>
        </>
    );
}

export default Role;
