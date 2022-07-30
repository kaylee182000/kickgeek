import React from "react";
import { Outlet } from "react-router-dom";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import Related from "./Related";

export default function ShareLayout() {
  return (
    <div>
      <Header />
      <Nav />
      <Carousel />
      <section className="section">
        <Outlet />
      </section>
      <Related />
      <Footer />
    </div>
  );
}
