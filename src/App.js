import React, { useState } from "react";
import "./app.css";
import Header from "./components/header/header";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import NotePage from "./pages/Note-page";
import AboutPage from "./pages/About-page";
import ContactPage from "./pages/Contact-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/notes",
    element: <NotePage />,
  },
  {
    path: "/about-us",
    element: <AboutPage />,
  },
  {
    path: "/contact-us",
    element: <ContactPage />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
