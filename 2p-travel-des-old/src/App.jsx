import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Recommend from "./components/Recommend";
import ScrollToTop from "./components/ScrollToTop";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Modal from "./components/ModalSearch";
import ScrollReveal from "scrollreveal";
import "./index.css";

export default function App() {
  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(
      `
      nav,
      #hero,
      #services,
      #recommend,
      #testimonials,
      footer
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Hero id="hero" />
      <Recommend id="recommend" />
      <Testimonials id="testimonials" />
      <Footer />
    </div>
  );
}
