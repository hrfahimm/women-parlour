/** @format */

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import About from "../Pages/Home/About";
import Contact from "../Pages/Home/Contact";
import Review from "../Pages/DashBoard/Review";
import Services from "../Pages/Home/Services";
import Login from "../Pages/Shared/Login";
import Signup from "../Pages/Shared/Signup";
import UserHome from "../Pages/DashBoard/UserHome";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Pay from "../Pages/DashBoard/Pay";
import Reviews from "../Pages/Home/Reviews";
import ServiceList from "../Pages/DashBoard/ServiceList";
import AdminHome from "../Pages/DashBoard/AdminHome";
import AddService from "../Pages/DashBoard/AddService";
import MakeAdmin from "../Pages/DashBoard/MakeAdmin";
import PNF from "../Pages/Shared/PNF";
import Home from "../Pages/Home/Home";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/reviews",
                element: <Reviews />,
            },
            {
                path: "/services",
                element: <Services />,
            },
            {
                path: "/pnf",
                element: <PNF />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
    {
        path: "dashboard",
        element: <DashBoard />,
        children: [
            //------user----
            {
                path: "userhome",
                element: <UserHome />,
            },
            {
                path: "pay",
                element: <Pay />,
            },
            {
                path: "review",
                element: <Review />,
            },
            {
                path: "servicelist",
                element: <ServiceList />,
            },
            //admin
            {
                path: "adminhome",
                element: <AdminHome />,
            },
            {
                path: "addservice",
                element: <AddService />,
            },
            {
                path: "makeadmin",
                element: <MakeAdmin />,
            },
        ],
    },
]);
