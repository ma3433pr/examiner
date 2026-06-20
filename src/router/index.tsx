import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import About from "../pages/About/About";
import Home from "../pages/Home/Home";
import Course from "../pages/Course/Course";
import Study from "../pages/Study/Study";
import Exam from "../pages/Exam/Exam";
import Result from "../pages/Result/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "course/:id",
        element: <Course />,
      },
      {
        path: "study/:id",
        element: <Study />,
      },
      {
        path: "exam/:id",
        element: <Exam />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);