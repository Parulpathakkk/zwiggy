import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Error from "./components/Error";
import Body from "./components/Body";

import About from "./components/About";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RestroMenu from "./components/RestroMenu";
// const element = document.getElementById("root");
// const root =ReactDOM.createRoot(element);
// or

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Body />},
      {path: "/about", element: <About />},
      {path: "/restaurants/:resId", element: <RestroMenu />},
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
