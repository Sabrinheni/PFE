import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import DownloadButton from "components/DownloadButton"
import NavBar from "components/layout/NavBar"
import LinkDuo from "components/utils/LinkDuo"
import React, { createElement, useEffect } from "react"
import ImageBox from "components/ImageBox"
import { Col, Row } from "react-bootstrap"  
import file1 from "../../assets/files/grille tarifaire 2022-2023 Ecole d'ingenieurs Tunisiens(sans foyer).pdf"
import file2 from "../../assets/files/24-05-2023_grille tarifaire 2021-2022 Ecole d'ingeenieurs_International(sans foyer).pdf"
import file3 from "../../assets/files/calendrier_admission.pdf"
import file4 from "../../assets/files/Reglement du concours d'admission 22-23.pdf"
import admission from "../../assets/img/admissionathome.png"
import { LazyImage } from "components/utils/LazyImage"
import arrowsrc from "../../assets/img/arrow.ico"
import Calendrier from "../../assets/img/Calendrier-dadmission-2022-2023_V2.jpg"
import { useApi } from "hooks/useApi"
import {EspritIngenieur as meta } from "./AdmissionDictionary"
const PresentationIngenieur = () => {

 

  // useEffect(() => {
  //   window.unibuddySettings = {
  //     uni_id: "esprit",
  //     colour: "E20019",
  //     domain: "https://popcard.unibuddy.co/",
  //     title: "Unibuddy Popcard",
  //     align: "right",
  //     ubLang: "en-GB",
  //     ubCookieConsent: "necessary",
  //   }
  //   console.log(window.unibuddySettings)
  //   const scriptTag = document.createElement("script")
  //   scriptTag.id = "unibuddy-popcard"
  //   scriptTag.src = "https://cdn.unibuddy.co/unibuddy-popcard.js"
  //   document.body.appendChild(scriptTag)
  //   console.log(document.getElementById("unibuddy-popcard"))
  //   return () => {
  //     const scriptTag = document.getElementById("unibuddy-popcard-iframe")
  //     scriptTag.remove()
  //   }
  // }, [])
  return (
    <>
    <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container">
          {/* <Row className="admission-banner" style={{ display: "flex", placeContent: "center" }}>
              <Col md={12} xs={12} style={{ backgroundColor: "#cd2122", borderRadius: "15px", padding: "30px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    margin: "0",
                    textTransform: "uppercase",
                  }}>
                  La page d'admission sera disponible très bientôt.
                </p>
              </Col>
            </Row> */}
          <Row>
          <Col md={12} xs={12}>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <h2>Calendrier d'admission pour l'année universitaire 2022-2023</h2>
                  <CustomHrRed float={"none"} />
                </Col>
              </Row>
              </Col>
              
            <Col>
            <Row className="margin-top-60" style={{ justifyContent: "center" }}>
                <LazyImage src={Calendrier}  style={{ width: "80%" }} />
              </Row>
              <h1>Admission</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <Row>
            <Col md={4} xs={12}>
              <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/accueil.aspx"}>
                <span>Cours du jour (Tunisiens)</span>
              </LinkDuo>
            </Col>
            <Col md={4} xs={12}>
              <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/info.aspx"}>
                <span>Cours du jour (internationaux)</span>
              </LinkDuo>
            </Col>
            <Col md={4} xs={12}>
              <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/INFOCS.aspx"}>
                <span>Cours du soir (Tunisiens)</span>
              </LinkDuo>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3 className="text-esprit">Informations et réclamations:</h3>
                <LinkDuo target="_blank" rel="noopener noreferrer" to={"mailto:reclamation.admission2223@esprit.tn"}>
                reclamation.admission2223@esprit.tn
                </LinkDuo>
                {/* <h5 style={{ color: "#1E90FF" }}>Contact: 70 250 068</h5> */}
              </div>
            </Col>
          </Row>
          {/* <Row style={{ display: "flex", placeContent: "center" }}>
            <Col md={6} xs={12} style={{ display: "flex", placeContent: "center", alignItems: "center" }}>
              <p
                style={{
                  padding: "30px",
                  borderRadius: "15px",
                  backgroundColor: "#cd2122",
                  textAlign: "center",
                  fontWeight: "600",
                  color: "white",
                  margin: "0",
                  textTransform: "uppercase",
                }}>
                Pour assurer la sécurité et la santé de chaque candidat,
                <br /> le concours d'admission se déroulera entièrement en ligne
              </p>
            </Col>
            <Col md={6} xs={12} style={{ display: "flex", placeContent: "center" }}>
              <img src={admission} alt="ESPRIT altérnance" style={{ width: "100%" }}></img>
            </Col>
          </Row> */}
          <Row style={{ marginBottom: "60px" }}>
            <Col md={8} className="pad-right-desk-100">
              <div style={{ display: "flow-root" }}>
                <h3 className="text-esprit">Pour s'inscrire au concours :</h3>
                <CustomHrGray />
              </div>
              <br />
              <h3>En 1ère année :</h3>
              <p>Être titulaire d'un baccalauréat scientifique, économique, technique.</p>
              <h3>En 2ème année :</h3>
              <p>
                Être titulaire d'une attestation de réussite en 1ère année prépa ou d'une attestation de réussite en
                1ère année d'école d'ingénieur (prépa intégrée)
              </p>
              <h3>En 3ème année :</h3>
              <p>Être titulaire d'une licence scientifique ou admis au concours national d'ingénieur.</p>
              <h3>En 4ème année :</h3>
              <p>Être titulaire d'un master (M1) scientifique ou technique dans la spécialité.</p>
              <h3>En cours du soir :</h3>
              <p>Être titulaire d'une licence scientifique ou technique (durée des études : 4 ans)</p>

              <Row>
                <Col style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
                  <h3 style={{ marginRight: "35px" }}>Formation en Alternance :</h3>
                  <LinkDuo className="custom-button btn " to={"/admission/esprit-alternance"}>
                    <span>Cliquez ici </span>
                  </LinkDuo>
                </Col>
              </Row>

              <p>Être titulaire d'une licence en infromatique ou dans une spécialité apparentée</p>
            </Col>
            <Col className="gris">
              <div style={{ display: "flow-root" }}>
                <h3 className="text-esprit">Liens Utiles</h3>
                <CustomHrGray />
              </div>
              <br />
              <style
                dangerouslySetInnerHTML={{
                  __html: [
                    " .gris .custom-button {",
                    "  background-color:#848484;",
                    "}",
                    " .gris .custom-button:hover {",
                    "  background-color:#a41a1b;",
                    "}",
                  ].join("\n"),
                }}></style>
              {/* <Row>
                <Col>
                  <LinkDuo className="custom-button btn width100" rel="noopener noreferrer" target="_blank" to={file3}>
                    <span>Calendrier d'admission</span>
                  </LinkDuo>
                </Col>
             </Row>*/}
              <Row>
                <Col>
                  <LinkDuo className="custom-button btn width100" rel="noopener noreferrer" target="_blank" to={file1}>
                    <span>Grille tarifaire pour Tunisiens</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinkDuo className="custom-button btn width100" rel="noopener noreferrer" target="_blank" to={file2}>
                    <span>Grille tarifaire pour internationaux</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinkDuo className="custom-button btn width100" to={"/admission/contact-et-info"}>
                    <span>Informations pour les internationaux</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinkDuo className="custom-button btn width100" to={"/admission/procedure"}>
                    <span>Financement des Études</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinkDuo
                    className="custom-button btn width100"
                    to={"/vie-etudiante/rentree-scolaire/logement-restauration"}>
                    <span>Restauration et Logement</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col>
                  <LinkDuo className="custom-button btn width100" to={"/admission/faq"}>
                    <span>FAQ</span>
                  </LinkDuo>
                </Col>
              </Row>

              <Row>
                <Col>
                  <LinkDuo className="custom-button btn width100" to={"/admission/resultat-cameroun-2022"}>
                    <span style={{ fontSize: "13px" }}>Résultat Admissibles internationaux</span>
                  </LinkDuo>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row style={{ marginBottom: "60px" }}>
            <Col md={8} xs={12}>
              <Row>
                <Col md={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Déroulement</h3>
                    <CustomHrGray />
                  </div>
                  <p style={{ fontSize: "16px" }}>Les épreuves se déroulent selon le planning suivant :</p>
                  <ul style={{ fontSize: "16px" }} className="services-box-list">
                    <li> Étude de dossier.</li>
                    <li> Entretien avec le jury.</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col md={4} xs={12}>
              <Row>
                <Col md={9}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Règlement concours</h3>
                    <CustomHrGray />
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: [
                        "   .download-button {",
                        "  height: 50px!important;",
                        "   font-size:14px!important;",
                        "   float:left!important;",
                        "}",
                      ].join("\n"),
                    }}></style>
                  <DownloadButton data={reglement} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md={9}>
              <div style={{ display: "flow-root" }}>
                <h3 className="text-esprit">Inscription</h3>
                <CustomHrGray />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={4} xs={12}>
              <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/accueil.aspx"}>
                <span>Cours du jour (Tunisiens)</span>
              </LinkDuo>
            </Col>
            <Col md={4} xs={12}>
              <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/info.aspx"}>
                <span>Cours du jour (internationaux)</span>
              </LinkDuo>
            </Col>
            <Col md={4} xs={12}>
              <LinkDuo className="custom-button btn width100" to={"https://esprit-tn.com/admission/INFOCS.aspx"}>
                <span>Cours du soir (Tunisiens)</span>
              </LinkDuo>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3 className="text-esprit">Informations et réclamations:</h3>
                <LinkDuo target="_blank" rel="noopener noreferrer" to={"mailto:reclamation.admission2223@esprit.tn"}>
                reclamation.admission2223@esprit.tn
                </LinkDuo>
                {/* <h5 style={{ color: "#1E90FF" }}>Contact: 70 250 068</h5> */}
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

const reglement = {
  link: file4,
  text: "Télécharger",
  src: arrowsrc,
}
const breadcrumb = {
  src: "",
  Title: "ESPRIT INGÉNIEUR",
  Subtitle: "Modalités d’Admission",
}
export default PresentationIngenieur
