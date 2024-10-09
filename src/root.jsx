import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navebar from './components/Navebar';
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
          
        </footer>
        </>

    )
}
export default Root