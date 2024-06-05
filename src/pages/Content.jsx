import React, { useContext } from 'react';
import Category from './category/Category';
import Dashboard from './dashboard/Dashboard';
import { AdminContext } from '../context/AdminContext';
import Product from './product/Product';

const Content = () => {
    
    const {showSidebar} = useContext(AdminContext)

    return (
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
           {/* <Dashboard/> */}
           {/* <Category/> */}
           <Product/>
        </section>
    );
}

export default Content;
