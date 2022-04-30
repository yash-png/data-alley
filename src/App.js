import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Features from "./pages/features/Features";
import Services from "./pages/services/Services";
import Process from "./pages/process/Process";
import Testimonials from "./pages/testimonials/Testimonials";
import Blogs from "./pages/blog/Blogs";
import Partners from "./pages/partner/Partner";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import Hamburger from "./pages/home/Hamburger";
import "bootstrap/dist/css/bootstrap.min.css";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/process" element={<Process />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/hamburger" element={<Hamburger />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
