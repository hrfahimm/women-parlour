/** @format */

import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Pages/Shared/Nav";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter =
        location.pathname.includes("login") ||
        location.pathname.includes("signup");

    return (
        <div>
            {noHeaderFooter || <Nav />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;
