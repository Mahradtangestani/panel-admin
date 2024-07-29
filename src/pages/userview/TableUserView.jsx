import React from 'react';

const TableUserView = () => {
    return (
        <>
                    <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>نام و نام خانوادگی</th>
                        <th>موبایل</th>
                        <th>ایمیل</th>
                        <th>نقش </th>
                        <th>تاریخ ثبت نام</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>مهراد تنگستانی</td>
                        <td>09356902177</td>
                        <td>mahradti@gmail.com</td>
                        <td>کاربر</td>
                        <td>1402/10/12</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="جزئیات و ویرایش کاربر" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_user_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف کاربر" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default TableUserView;
