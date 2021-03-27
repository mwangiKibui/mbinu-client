
import {useEffect} from "react";
import Router from "next/router";
import NProgress from "nprogress";

import Navbar from "../_App/Navbar";
import Footer from "../_App/Footer";

function Layout({children}){

    useEffect(() => {

        Router.events.on("routeChangeStart",load);
        Router.events.on("routeChangeComplete",stop);
        Router.events.on("routeChangeError",stop);
        
    },[]);

    function load(){
        return NProgress.start();
    };

    function stop(){
        return NProgress.done();
    }

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