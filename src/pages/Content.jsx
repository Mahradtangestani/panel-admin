import React, { useContext } from 'react';
import Category from './category/Category';
import Dashboard from './dashboard/Dashboard';
import { AdminContext } from '../context/AdminContext';
import Product from './product/Product';
import { Route, Routes } from 'react-router-dom';
import Colors from './colors/Colors';
import Guarantee from './guarantee/Guarantee';
import Brands from './brands/Brands';
import Discount from './discount/Discount';
import Cart from './cart/Cart';
import Questions from './questions/Questions';
import Comment from './comment/Comment';
import Permissions from './permissions/Permissions';
import Role from './role/Role';
import UserView from './userview/UserView';
import ManageDelivery from './managedelivery/ManageDelivery';
import ManageOrders from './manageorders/ManageOrders';
import Logout from './auth/Logout';
import Categorychildren from './category/Categorychildren';
import Attributes from './category/attrs/Attributes';


const Content = () => {
    
    const {showSidebar} = useContext(AdminContext)

    return (
        <section id="content_section" className={`bg-light py-2 px-3 ${showSidebar ? "with_sidebar" : null}`}>
            <Routes>
                <Route path='/' element={<Dashboard/>}/>
                <Route path='/categories' element={<Category/>}>
                    <Route path=':categoryId' element={<Categorychildren/>}/>
                </Route>
                <Route path='/categories/:categoryId/attributes' element={<Attributes/>}/>
                <Route path='/products' element={<Product/>}/>
                <Route path='/colors' element={<Colors/>}/>
                <Route path='/guarantee' element={<Guarantee/>}/>
                <Route path='/brands' element={<Brands/>}/>
                <Route path='/discount' element={<Discount/>}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/manageorders' element={<ManageOrders/>}/>
                <Route path='/managedelivery' element={<ManageDelivery/>}/>
                <Route path='/userview' element={<UserView/>}/>
                <Route path='/role' element={<Role/>}/>
                <Route path='/permissions' element={<Permissions/>}/>
                <Route path='/questions' element={<Questions/>}/>
                <Route path='/comment' element={<Comment/>}/>
                <Route path='/logout' element={<Logout/>}/>
           
                <Route path='*' element={<Dashboard/>}/>
           </Routes>
        </section>
    );
}

export default Content;
