import React from 'react';
import RightContent from './RightContent';
import LeftContent from './LeftContent';

const Navbar = () => {
    return (
        
        <nav className="navbar fixed-top navbar-dark bg-secondary top_navbar py-0">
            <div className="container-fluid h-100 pe-0">
    
                <RightContent/>
    
                <LeftContent/>
    
            </div>
        </nav>
       
    );
}

export default Navbar;
