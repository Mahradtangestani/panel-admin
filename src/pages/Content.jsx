import React, { useContext } from 'react';
import Category from './category/Category';
import Dashboard from './dashboard/Dashboard';
import { AdminContext } from '../context/AdminContext';
import Product from './product/Product';
import { Route, Routes } from 'react-router-dom';
import Colors from './colors/Colors';
import Guarantee from './guarantee/Guarantee';


const Content = () => {
    
    const {showSidebar} = useContext(AdminContext)

    return (
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/categories' element={<Category/>}/>
                <Route path='/products' element={<Product/>}/>
                <Route path='/colors' element={<Colors/>}/>
                <Route path='/guarantee' element={<Guarantee/>}/>
           
                <Route path='*' element={<Dashboard/>}/>
           </Routes>
        </section>
    );
}

export default Content;
