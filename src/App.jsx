import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/UI/Footer"
import NavHead from "./components/UI/NavHead"

const App = () => {
  return (
    <>
<NavHead />
<Outlet />
<Footer />
  </>
  );
};

export default App;