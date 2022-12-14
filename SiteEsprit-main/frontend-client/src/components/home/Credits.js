import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import OwlCarousel from "react-owl-carousel"
import CDIO from "../../assets/img/CDIO.png"
import CGE from "../../assets/img/CGE.png"
import AUF from "../../assets/img/AUF.png"
import EURACE from "../../assets/img/EURACE.png"
import UNESCO from "../../assets/img/unesco.png"
import ESB from "../../assets/img/logo-esb.png"
import PREPA from "../../assets/img/logoprepa.png"
import ESPRIT from "../../assets/img/logo-esprit-2.png"
import ESPRITEDUCATION from "../../assets/img/logo_espriteducation.png"
import LinkDuo from "../utils/LinkDuo"
import { Row, Col } from "react-bootstrap"
import { LazyImage } from "components/utils/LazyImage"

export default function Partners() {
  return (
    <>
      <section className="our-partners ptb-top-100 ptb-bot-50">
        <div className="container" style={{ paddingBottom: "20px!important" }}>
          <Row>
            <Col lg={{ size: 8 }} className="text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <br></br>
                  {/* <h2>Groupe Esprit</h2> */}
                  {/* <h2>Accréditations</h2> */}
                  <Row>
            <OwlCarousel
              className="owl-theme partners-slides"
              dots={false}
              loop={false}
              margin={100}
              autoplay={false}
              smartSpeed={1000}
              nav={false}
              navText={["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"]}
              responsive={{
                0: { items: 1, nav: true },
                768: {
                  items: 2,
                  nav: true,
                },
                1200: {
                  items: 4,
                },
              }}>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://www.esb.tn/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={ESB} alt="ESB" style={{ width: "100%" }} />
                </LinkDuo>
              </div>
             
              <div className="slider-accredit" >
                <LinkDuo
                
                  to="https://esprit.tn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={ESPRIT} alt="ESPRIT-Entreprise" />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="http://www.esprit-education.tn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={ESPRITEDUCATION} alt="ESPRITEDUCATION" />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://esprit-prepa.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={PREPA} alt="PREPA"/>
                </LinkDuo>
              </div>
            </OwlCarousel>
          </Row> 

          
        {/*   <Row style={{ textAlign: "center" }}>
          <div className="slider-accredit">
                <LinkDuo
                  to="https://www.esb.tn/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={ESB} alt="ESB" style={{ width: "100%" }} />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://www.esb.tn/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={ESB} alt="ESB" style={{ width: "100%" }} />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://www.esb.tn/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={ESB} alt="ESB" style={{ width: "100%" }} />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://www.esb.tn/fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={ESB} alt="ESB" style={{ width: "100%" }} />
                </LinkDuo>
              </div>
                  </Row> */}
                  <p>
                    En plus d’être habilitée par le Ministère de l’Enseignement Supérieur et de la Recherche
                    Scientifique tunisien, la qualité de l’enseignement Esprit a été reconnue internationalement.
                  </p>
                  {/* <span className="section-title-bg">Groupe ESPRIT</span> */}
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Col style={{ display: "flex", placeContent: "center" }}>
              <LinkDuo
                to="https://www.cti-commission.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="logo-preview">
                <LazyImage src={EURACE} style={{ width: "100%" }} alt="EURACE" />
              </LinkDuo>
            </Col>
          </Row>
          <Row style={{ marginTop: "20px", marginBottom: "40px" }}>
            <Col lg={{ size: 8 }} className="text-center">
              <div className="section-title">
                <h2 style={{ textTransform: "none" }}>Membre de ces associations</h2>
              </div>
            </Col>
          </Row>

          <Row>
            <OwlCarousel
              className="owl-theme partners-slides"
              dots={false}
              loop={false}
              margin={100}
              autoplay={false}
              smartSpeed={1000}
              nav={false}
              navText={["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"]}
              responsive={{
                0: { items: 1, nav: true },
                768: {
                  items: 2,
                  nav: true,
                },
                1200: {
                  items: 4,
                },
              }}>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://www.cge.asso.fr/ecoles/esprit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={CGE} alt="CGE" />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="http://www.cdio.org/cdio-action/school-profiles/esprit-europe-region"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={CDIO} alt="CDIO" />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://www.auf.org/les_membres/nos-membres/ecole-superieure-privee-dingenierie-et-de-technologie/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={AUF} alt="AUF" />
                </LinkDuo>
              </div>
              <div className="slider-accredit">
                <LinkDuo
                  to="https://en.unesco.org/sites/default/files/list-unesco-chairs.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-preview">
                  <LazyImage src={UNESCO} alt="UNESCO" />
                </LinkDuo>
              </div>
            </OwlCarousel>
          </Row>
        </div>
      </section>
    </>
  )
}
