import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Pages/Shared/Routes/routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import AnimCursor from "./components/AnimCursor.jsx";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <div>
        <AnimCursor></AnimCursor>
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </React.StrictMode>
);
