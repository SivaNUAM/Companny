// App.jsx
import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Land from "./Landingpage/Land";
import Aland from "./Aland/Aland"; // About Page
import Philo from "./About/Philo"; // Specific Philosophy Page
import Services from "./Service/Services";
import Sland from "./Services/Sland";
import Contact from "./Contact/Contact"; // Contact Page
import Load from "./Components/Load"; // NEW loader import
import Journey from "./About/Journey";
import Culture from "./About/Culture";
import Pro from "./Product/Pro";
import ProductDetail from "./Components/ProductDetails";
import Heading from "./Head/Heading";
import NuamAgrotechPage from "./Components/NuamAgrotechPage";
import NuamStoryBoxPage from "./Components/NuamStoryBoxPage";
import NuamMediaPage from "./Components/NuamMediaPage";
function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setLoading(false), 11000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   // return <Load />;
  // }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/nuam-tech" element={<Heading />} />
        <Route path="/nuam-agrotech" element={<NuamAgrotechPage />} />
        <Route path="/nuam-storybox" element={<NuamStoryBoxPage />} />
        <Route path="/nuam-media" element={<NuamMediaPage />} />
        <Route path="/about" element={<Aland />} />
        <Route path="/about/philosophy" element={<Philo />} />
        <Route path="/about/Journey" element={<Journey />} />
        <Route path="/about/Culture" element={<Culture />} />
        <Route path="/services" element={<Sland />} />
       <Route path="/product-details" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
