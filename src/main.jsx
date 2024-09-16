import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import { router } from "./routes/Routers";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-screen-xl	 mx-auto">
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

