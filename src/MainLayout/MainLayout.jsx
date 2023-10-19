import React from 'react';
import Nav from '../Component/Header/Nav';
import { Outlet } from "react-router-dom";


const MainLayout = () => {
    return (
        <div className='max-w-screen-xl m-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
        
        </div>
    );
};

export default MainLayout;