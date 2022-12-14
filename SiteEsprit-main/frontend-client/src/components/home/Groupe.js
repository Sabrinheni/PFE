import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import OwlCarousel from "react-owl-carousel"
import { useApi } from "../../hooks/useApi"
import LinkDuo from "../utils/LinkDuo"
import ContentLoader from "react-content-loader"
import { LazyImage } from "components/utils/LazyImage"
import ESB from "../../assets/img/logo-esb.png"
import PREPA from "../../assets/img/Esprit-prepa.png"
import ESPRIT_Entreprise from "../../assets/img/Esprit-entreprise.png"
import ESPRITEDUCATION from "../../assets/img/Esprit-education.png"
import ESPRIT from "../../assets/img/logo-esprit-2.png"
export default function Groupe() {
  //const [partnerships] = useApi("partnershipsHome")
    const slides = [
        {
            id: 0,
          content: ESPRIT ,
          alt :"logo-Esprit",
          url: "https://esprit.tn/",
        },
        {
            id: 3,
          content: ESPRIT_Entreprise ,
          alt :"logo-Esprit-Entreprise",
          url: "/entreprise/esprit-entreprise",
        },
    {
        id: 1,
        content: ESB ,
        alt :"logo-ESB",
        url: "https://www.esb.tn/fr/",

      },
    
    {
        id: 2,
      content: PREPA ,
        alt :"logo-Esprit-Prepa",
        url:  "https://esprit-prepa.com/",
    },
    
    {
        id: 4,
      content: ESPRITEDUCATION ,
      alt :"logo-EspritEducation",
      url: "http://www.esprit-education.tn",
    }
  ];
 

  //Partner loop start
  const GroupeData = slides.map(s => (
    <div className="single-partner-logo" key={s.id}>
      <LinkDuo to={s.url} target="_blank" rel="noopener noreferrer" className="logo-preview">
        <LazyImage src={s.content} alt={s.alt} />
      </LinkDuo>
    </div>
  ))
  //Partner loop END
  return (
    <>
      <section className="our-partners ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>Groupe ESPRIT</h2>
                  {/* <p>
                    Nos partenaires académiques, technologiques et industriels sont toujours présents pour nos
                    étudiants.
                  </p> */}
                  <span className="section-title-bg">ESPRIT</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row">
            <OwlCarousel
              className="owl-theme partners-slides"
              dots={false}
              loop={false}
              rewind={true}
              margin={100}
              autoplay={true}
              smartSpeed={1000}
              nav={true}
              navText={["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"]}
              responsive={{
                0: { items: 1 },
                768: {
                  items: 2,
                },
                1200: {
                  items: 2,
                },
              }}>
              {GroupeData}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
}
