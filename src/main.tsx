import App from "@/App";
import "@/lib/i18n";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

const router = createBrowserRouter([
  {
    path: `${import.meta.env.VITE_BASE_ROUTE}/:cardname/*`,
    element: <App />,
  },
  {
    path: `/en${import.meta.env.VITE_BASE_ROUTE}/:cardname/*`,
    element: <App />,
  },
  {
    path: import.meta.env.VITE_BASE_ROUTE,
    element: <App />,
  },
  {
    path: `/en${import.meta.env.VITE_BASE_ROUTE}`,
    element: <App />,
  },
  {
    path: "*", // จัดการเส้นทางที่ไม่ตรงกับที่กำหนด
    element: <App />,
  },
]);

window.onload = function () {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
