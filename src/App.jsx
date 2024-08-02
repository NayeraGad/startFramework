import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio.jsx/Portfolio";
import Contact from "./Components/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import NotFound from "./Components/NotFound/NotFound";

const x = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={x}></RouterProvider>;
}

export default App;
