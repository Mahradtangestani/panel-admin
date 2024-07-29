import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import AdminContextContainer from '../../context/AdminContext';
import Content from '../../pages/Content';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import { useIsLogin } from '../../hook/authHook';


const AdminLayout = () => {
    
    const [loading , isLogin] = useIsLogin()

    return (
        <AdminContextContainer>
            {
                loading ? (
                    <h1 className='text-center text-waiting'>لطفا صبر کنید...</h1>
                ) : isLogin ? (
                    <div>
                    <Content/>
                    <Navbar/>
                    <Sidebar/>
                </div>
                ) : (
                    <Navigate to={"/login"}/>
                )
            }

        </AdminContextContainer>
    );
}

export default AdminLayout;
