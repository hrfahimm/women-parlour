/** @format */

import ReactDOM from "react-dom/client";
import "./index.css";
import { route } from "./Routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
            <div className='max-w-screen-xl mx-auto'>
                <RouterProvider router={route} />
            </div>
        </HelmetProvider>
    </React.StrictMode>
);
