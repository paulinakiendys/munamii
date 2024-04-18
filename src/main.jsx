import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/scss/app.scss";
import "bootstrap";

import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import Layout from "./routes/Layout";
import NotFound from "./routes/NotFound";
import Index from "./routes/Index";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Products from "./routes/Products";
import Cupcakes from "./routes/Cupcakes";
import Cakes from "./routes/Cakes";
import Product from "./routes/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "products",
        element: <Products />,
        children: [
          { index: true, loader: () => redirect("/products/cupcakes") },
          {
            path: "cupcakes",
            element: <Cupcakes />,
          },
          {
            path: "cakes",
            element: <Cakes />,
          },
        ],
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
