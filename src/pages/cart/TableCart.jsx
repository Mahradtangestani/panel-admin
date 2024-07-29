import React from 'react';

const TableCart = () => {
    return (
        <>
                    <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                    <tr>
                        <th>#</th>
                        <th>آی دی مشتری</th>
                        <th>نام مشتری</th>
                        <th>تاریخ</th>
                        <th>مبلغ کل سبد</th>
                        <th>وضعیت</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>50</td>
                        <td>مهراد تنگستانی</td>
                        <td>1402/07/15</td>
                        <td>100هزار تومان</td>
                        <td>فعال</td>
                        <td>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip" title="ویرایش و جزئیات سبد" data-bs-toggle="modal" data-bs-placement="top" data-bs-target="#edit_cart_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip" title="حذف سبد" data-bs-toggle="tooltip" data-bs-placement="top"></i>
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

export default TableCart;
