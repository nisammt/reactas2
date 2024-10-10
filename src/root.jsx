import React from "react";
import { Outlet } from "react-router-dom";
import Navebar from './components/Navebar';
import Footer from "./components/Footer";
function Root()
{
    return(
        <>
        <header>
          <Navebar/>
        </header>
        <main>
          <Outlet/>
        </main>
        <footer>
          
           <Footer/>
        </footer>
        </>

    )
}
export default Root