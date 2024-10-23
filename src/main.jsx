import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import { router } from "./routes/assets/Routers";
import { RouterProvider } from "react-router-dom";
import {HelmetProvider } from 'react-helmet-async';
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
 <HelmetProvider>
 <div className="max-w-screen-xl	 mx-auto">
    <RouterProvider router={router} />
    </div>
 </HelmetProvider>
  </React.StrictMode>
);

