
import {useEffect} from "react";
import Router from "next/router";
import NProgress from "nprogress";

import Navbar from "../_App/Navbar";
import Footer from "../_App/Footer";

function Layout({children}){

    useEffect(() => {

        Router.events.on("routeChangeStart",NProgress.start());
        Router.events.on("routeChangeComplete",NProgress.done());
        Router.events.on("routeChangeError",NProgress.done());
        
    },[]);

    return (
        <section className="layout">

            <Navbar />

            
            {
                children
            }
            

            <Footer />

        </section>
    )
};

export default Layout;