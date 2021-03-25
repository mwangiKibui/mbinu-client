
import {Fragment} from "react";

import Navbar from "../_App/Navbar";
import Footer from "../_App/Footer";

function Layout({children}){
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