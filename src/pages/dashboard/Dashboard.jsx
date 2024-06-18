import Chart from 'chart.js/auto';
import React, { useEffect, useRef } from 'react';
import { setDashboardChart } from '../../utils/setDashboardChart';
import Cart from './Cart';
import ProductTable from './DashboardTable';



const Dashboard = () => {
    

    useEffect(() => {
        
        const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

        const datapoints = [0, 20, 20, 60, 60, 120, 180, 120, 125, 105, 110, 170];
        
        setDashboardChart(labels , datapoints)

    }, []);

    return (
        <div id="dashboard_section" className="dashboard_section main_section">

        <div className="row">
            <Cart
            currentValue="7"
            title="سبد خرید امروز"
            desc="سبد خرید مانده امروز"
            icon="fas fa-shopping-basket"
            lastWeekValue="13"
            lastMounthValue="18"
            />
            <Cart
            currentValue="5"
            title="سفارشات مانده امروز"
            desc="سفارشات معلق و فاقد پرداختی"
            icon="fas fa-dolly"
            lastWeekValue="9"
            lastMounthValue="16"
            />
            <Cart
            currentValue="45"
            title="سفارشات امروز"
            desc="سفارشات کامل و دارای پرداختی"
            icon="fas fa-luggage-cart"
            lastWeekValue="263"
            lastMounthValue="1038"
            />
            <Cart
            currentValue="1,500,000"
            title="درآمد امروز"
            desc="جمع مبالغ پرداختی (تومان)"      
            icon="fas fa-money-check-alt"
            lastWeekValue="266,380,000"
            lastMounthValue="22,480,000"
            />

        </div>







        <div className="row">

            <div className="col-12 col-lg-6">

                <p className="text-center mt-3 text-dark">محصولات رو به اتمام</p>

                <ProductTable/>

            </div>

            
            <div className="col-12 col-lg-6">
                <canvas id="myChart" height="195"></canvas>
            </div>

        </div>

    </div>
    );
}

export default Dashboard;
