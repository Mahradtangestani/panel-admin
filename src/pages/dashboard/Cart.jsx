import React from 'react';

const Cart = ({currentValue , title , desc , icon , lastWeekValue , lastMounthValue}) => {
    return (
        <div class="col-12 col-md-6 col-lg-3 dashboard_card_parent">
            <div class="card text-dark bg-info mb-3 dashboard_card" >
                <div class="card-body row">
                    <div class="col-9">
                        <h4>{currentValue}</h4>
                        <h6 class="card-title text_truncate">{title}</h6>
                        <small class="card-title text_truncate">{desc}</small>
                    </div>
                        <div class="col-3 d-flex justify-content-center align-items-center">
                          <i class={`${icon} card_icon`}></i>
                        </div>
                </div>
            </div>
        <div class="card text-dark bg-info mb-3 dashboard_card d-flex flex-row" >
            <div class="card-body py-1 row">
                <small class="m-0 d-block text_truncate">  <b>{lastWeekValue}</b> در هفته گذشته</small>
                <small class="m-0 d-block text_truncate">  <b>{lastMounthValue}</b> در ماه گذشته</small>
            </div>
        </div>
    </div>
    );
}

export default Cart;
