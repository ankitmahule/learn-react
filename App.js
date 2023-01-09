import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const elements = ReactDOM.createRoot(document.getElementById("app"));
elements.render(<AppLayout />);
