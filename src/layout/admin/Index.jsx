import React from 'react';
import Navbar from './Navbar/Navbar';
import Sidebar from './Sidebar/Sidebar';
import AdminContextContainer from '../../context/AdminContext';
import Content from '../../pages/Content';


const Index = () => {
    

    return (
        <AdminContextContainer>
        <div>
            <Content/>
            <Navbar/>
            <Sidebar/>
        </div>
        </AdminContextContainer>
    );
}

export default Index;
