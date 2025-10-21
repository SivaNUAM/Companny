import React from 'react'
import NuamTechHeroSection from '../Components/NuamTechHeroSection'
import About from "../Components/About";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import Tool from "../Components/Tool";
import Product from "../Components/Product";
function Heading() {
  return (
    <div>

        <NuamTechHeroSection/>
        <About/>
        <Services/>
        <Product/>
        <Tool/>
        <Contact/>
    </div>
  )
}

export default Heading