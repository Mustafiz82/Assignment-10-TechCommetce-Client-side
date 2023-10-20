import React from 'react';
import Nav from '../Component/Header/Nav';
import { Outlet } from "react-router-dom";
import Footer from '../Component/Footer/Footer';


const MainLayout = () => {
    return (
        <div className='max-w-screen-xl m-auto'>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        
        </div>
    );
};

export default MainLayout;