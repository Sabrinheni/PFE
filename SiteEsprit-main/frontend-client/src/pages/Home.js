import React, { createElement, useEffect } from "react"
import Contact from "components/home/ContactSection"
import Calendar from "components/sections/Calendar"
// import About from "components/About"
import News from "components/home/News"
// import FAQ from "components/FAQ"
import Partner from "components/home/Partner"
import Services from "components/home/Services"
import Slider from "components/home/Slider"
import Credits from "components/home/Credits"
// import FunFacts from "components/home/FunFacts"
import SocialMedia from "components/home/SocialMedia"
import Video from "components/home/Video"
import Testimonials from "components/home/Testimonials"
// import VideoArea from "components/home/VideoArea"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"  
import Groupe from "components/home/Groupe"

const HomeOne = () => {
  /* useEffect(() => {
    window.unibuddySettings = {
      uni_id: "esprit",
      colour: "E20019",
      domain: "https://popcard.unibuddy.co/",
      title: "Unibuddy Popcard",
      align: "right",
      ubLang: "en-GB",
      ubCookieConsent: "necessary",
    }
    console.log(window.unibuddySettings)
    const scriptTag = document.createElement("script")
    scriptTag.id = "unibuddy-popcard"
    scriptTag.src = "https://cdn.unibuddy.co/unibuddy-popcard.js"
    document.body.appendChild(scriptTag)
    console.log(document.getElementById("unibuddy-popcard"))
    return () => {
      const scriptTag = document.getElementById("unibuddy-popcard-iframe")
      scriptTag.remove()
    }
  }, []) */
  return (
    <>
      <MetaHelmet
        meta={{
          title: "Esprit - Se former autrement",
          description:
            "ESPRIT propose un cycle ingénieur en informatique agréé par l'état la seule école en tunisie associé à CGE, CDIO, AUF et UNESCO et acrédité EUR-ACE.",
          keywords:
            "esprit, université, université tunisie, ingénieurie, cycle ingénieur, privé, université privé, école ingénieur privée tunisie, tunis, école ingénieur tunis",
        }}
      />
      <NavBar pageName="home" />
      <div className="extract">
    
   <Slider/>
   {/* <Credits /> */}
   
   <Groupe/>
        {/* <Credits /> */}

        {/* <Video /> */}
        {/* <FunFacts /> */}
      
        <News />
        <Partner />
       
        <Services />
        <Calendar />
        {/* <About /> */}
        {/* <VideoArea /> */}
        <Testimonials />
        <SocialMedia />
        {/* <FAQ /> */}

        <Contact />
      </div>
    </>
  )
}
export default HomeOne
