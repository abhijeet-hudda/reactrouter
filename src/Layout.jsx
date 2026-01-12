import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout(){
    //yha header footer fixed rahenge or beech ka content change hota rahega
    //yhi Outlet ka kam hai
    return (
        <>
            
            <Header/>
            <Outlet/>
            <Footer/>
            
        </>
    )
}
export default Layout;