import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Router, RouterProvider, createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Components/Home/home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import User from "./Components/User/User";
import Github, { GithubInfoLoader } from "./Components/Github/Github";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path="" element={<Home></Home>}/>
      <Route path="about" element={<About></About>}/>
      <Route path="contact" element={<Contact></Contact>}/>
      <Route path="user/:userid" element={<User></User>}/>
      <Route 
      loader={GithubInfoLoader}
      path="github" 
      element={<Github></Github>}/>
    </Route>

  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
