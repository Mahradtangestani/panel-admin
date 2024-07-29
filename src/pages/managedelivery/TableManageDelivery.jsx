import React from 'react';

const TableManageDelivery = () => {
    return (
        <>
                <table className="table table-responsive text-center table-hover table-bordered">
            <thead className="table-secondary">
                <tr>
                    <th>#</th>
                    <th>عنوان</th>
                    <th>هزینه</th>
                    <th>زمان ارسال</th>
                    <th>واحد زمان</th>
                    <th>عملیات</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>پست پیشتاز</td>
                    <td>25,000 تومان</td>
                    <td> 10</td>
                    <td> روز</td>
                    <td>
                        <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#add_delivery_modal"></i>
                        <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف " data-bs-toggle="tooltip" data-bs-placement="top"></i>
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

export default TableManageDelivery;
