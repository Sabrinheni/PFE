import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import arrowsrc from "../../assets/img/arrow.ico"
import NavBar from "components/layout/NavBar"
import PropTypes from "prop-types"
import React from "react"
import MetaHelmet from "components/MetaHelmet"
import { useApi } from "../../hooks/useApi"
import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import DownloadButton from "components/DownloadButton"
import LinkDuo from "components/utils/LinkDuo"
import { Col, Row } from "react-bootstrap"  
import file1 from "../../assets/files/grille tarifaire 2022-2023 Ecole d'ingenieurs Tunisiens(sans foyer).pdf"
import file2 from "../../assets/files/24-05-2023_grille tarifaire 2021-2022 Ecole d'ingeenieurs_International(sans foyer).pdf"

import file4 from "../../assets/files/Reglement du concours d'admission 22-23.pdf"
import {EspritIngenieur as meta } from "./AdmissionDictionary"
export default function EspritIngenieurs() {
  const [EspritIngenieurs] = useApi( "EspritIngenieurs" )
 // eslint-disable-next-line
 const titre =
 EspritIngenieurs &&
 EspritIngenieurs.map(function (EspritIngenieur, idx) {
   if (EspritIngenieur.type === "titre") {
     return (
      <Col key={idx + "titre"} >

             <><p style={{ wordBreak: "break-word" }}>{EspritIngenieur.title}</p><div className="image-boxes-text">{EspritIngenieur.description && EspritIngenieur.description}</div></>
         
       </Col>
     )
   }
   return null
 })
  // eslint-disable-next-line
  const admission =
    EspritIngenieurs &&
    EspritIngenieurs.map(function (EspritIngenieur, idx) {
      if (EspritIngenieur.type === "admission") {
        return (
          <Col key={idx + "admission"} lg={3} md={4} sm={6} xs={12}>
            <div className="EspritIngenieur-box">
            
                <p style={{ wordBreak: "break-word" }}>{EspritIngenieur.title}</p>
              
              <div className="image-boxes-text">{EspritIngenieur.description && EspritIngenieur.description}</div>
            </div>
          </Col>
        )
      }
      return null
    })
     // eslint-disable-next-line
  const email =
  EspritIngenieurs &&
  EspritIngenieurs.map(function (EspritIngenieur, idx) {
    if (EspritIngenieur.type === "email") {
      return (
        <Col key={idx + "email"} >
          <div className="EspritIngenieur-box">
              <p style={{ wordBreak: "break-word" }}>{EspritIngenieur.title}</p>
            
            <div className="image-boxes-text">{EspritIngenieur.description && EspritIngenieur.description}</div>
          </div>
        </Col>
      )
    }
    return null
  })
   // eslint-disable-next-line
   const conditions =
   EspritIngenieurs &&
   EspritIngenieurs.map(function (EspritIngenieur, idx) {
     if (EspritIngenieur.type === "conditions") {
       return (
         <Col key={idx + "conditions"}>
           <div >
            <h3 >
               {EspritIngenieur.title}
             </h3>
             <div >{EspritIngenieur.description && EspritIngenieur.description}</div>
           </div>
         </Col>
       )
     }
     return null
   })
    // eslint-disable-next-line
  const contenu1 =
  EspritIngenieurs &&
  EspritIngenieurs.map(function (EspritIngenieur, idx) {
    if (EspritIngenieur.type === "contenu1") {
      return (
        <Col key={idx + "contenu1"} >

            <h3>
              {EspritIngenieur.title}
            </h3>
            <div>{EspritIngenieur.description && EspritIngenieur.description}</div>
          
        </Col>
      )
    }
    return null
  })
   // eslint-disable-next-line
   const contenu2 =
   EspritIngenieurs &&
   EspritIngenieurs.map(function (EspritIngenieur, idx) {
     if (EspritIngenieur.type === "contenu2") {
       return (
         <Col key={idx + "contenu2"} >
          
   <h3 >
          {EspritIngenieur.title}
             </h3>
             <div >{EspritIngenieur.description && EspritIngenieur.description}</div>
        
         </Col>
       )
     }
     return null
   })
    // eslint-disable-next-line
  const contenu3 =
  EspritIngenieurs &&
  EspritIngenieurs.map(function (EspritIngenieur, idx) {
    if (EspritIngenieur.type === "contenu3") {
      return (
        <Col key={idx + "contenu3"} >

            <h3 >
              {EspritIngenieur.title}
            </h3>
            <div>{EspritIngenieur.description && EspritIngenieur.description}</div>
          
        </Col>
      )
    }
    return null
  })
   // eslint-disable-next-line
   const contenu4 =
   EspritIngenieurs &&
   EspritIngenieurs.map(function (EspritIngenieur, idx) {
     if (EspritIngenieur.type === "contenu4") {
       return (
         <Col key={idx + "contenu4"} lg={3} md={4} sm={6} xs={12}>
           
             <h3>
              {EspritIngenieur.title}
             </h3>
             <div >{EspritIngenieur.description && EspritIngenieur.description}</div>
          
         </Col>
       )
     }
     return null
   })
    // eslint-disable-next-line
  const contenuSoir =
  EspritIngenieurs &&
  EspritIngenieurs.map(function (EspritIngenieur, idx) {
    if (EspritIngenieur.type === "contenuSoir") {
      return (
        <Col key={idx + "contenuSoir"} >
          

            <h3 >
              {EspritIngenieur.title}
            </h3>
            <div >{EspritIngenieur.description && EspritIngenieur.description}</div>
          
        </Col>
      )
    }
    return null
  })
   // eslint-disable-next-line
   const contenuAlternance =
   EspritIngenieurs &&
   EspritIngenieurs.map(function (EspritIngenieur, idx) {
     if (EspritIngenieur.type === "contenuAlternance") {
       return (
         <Col key={idx + "contenuAlternance"} >
          
             <h3 >
               {EspritIngenieur.title}
             </h3>
             <div >{EspritIngenieur.description && EspritIngenieur.description}</div>
         
         </Col>
       )
     }
     return null
   })
   // eslint-disable-next-line
   const deroulement=
   EspritIngenieurs &&
   EspritIngenieurs.map(function (EspritIngenieur, idx) {
     if (EspritIngenieur.type === "deroulement") {
       return (
         <Col key={idx + "deroulement"}>
           <div >
            <h3 >
               {EspritIngenieur.title}
             </h3>
             <div >{EspritIngenieur.description && EspritIngenieur.description}</div>
           </div>
         </Col>
       )
     }
     return null
   })
    // eslint-disable-next-line
  const contenuDeroulement =
  EspritIngenieurs &&
  EspritIngenieurs.map(function (EspritIngenieur, idx) {
    if (EspritIngenieur.type === "contenuDeroulement") {
      return (
        <Col key={idx + "contenuDeroulement"} >
         <p style={{ fontSize: "16px" }}> {EspritIngenieur.title} </p>
         <ul style={{ fontSize: "16px" }} className="services-box-list">
          <li>{EspritIngenieur.description && EspritIngenieur.description}
          </li>
         </ul>
        </Col>
      )
    }
    return null
  })

return (
  <>
  <MetaHelmet meta={meta} />
    <NavBar breadcrumb={breadcrumb} />
    <section className="our-blog extract main-blog dynamic-margin-no-bg">
      <div className="container">
        <Row>
        <Col md={12} xs={12}>
        <Row>
                <Col style={{ textAlign: "center"}}>
               <h2> {titre} </h2>
                  <CustomHrRed float={"none"} />
                </Col>
              </Row>
              </Col>
            
        <Col>

 <h1> {admission}</h1>
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
              <LinkDuo target="_blank" rel="noopener noreferrer" to={"mailto:email"}>
              <div id="email" className="anchor"></div>   
             {email}
              </LinkDuo>
            </div>
          </Col>
        </Row>
  
        <Row style={{ marginBottom: "60px" }}>
          <Col >
            <div style={{ display: "flow-root" }}>
        <h3 className="text-esprit">{conditions}</h3>
              <CustomHrGray />
            </div>
         
{contenu1}
 {contenu2}
 {contenu3}
 {contenu4}
  {contenuSoir}         
            <Row>
              <Col style={{ display: "flex", flexDirection: "row", alignItems: "baseline" }}>
              {contenuAlternance}
                <LinkDuo className="custom-button btn " to={"/admission/esprit-alternance"}>
                  <span>Cliquez ici </span>
                </LinkDuo>
              </Col>
            </Row>

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
                  <h3 className="text-esprit">{deroulement}</h3>
                  <CustomHrGray />
                </div>
                <p style={{ fontSize: "16px" }}>{contenuDeroulement}</p>
                
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
              <LinkDuo target="_blank" rel="noopener noreferrer" to={"mailto:email"}>
              <div id="email" className="anchor"></div>   
                <Row className="margin-top-60" style={{ display: "flex", flexWrap: "wrap" }}>
                  {email}
                </Row>
              
              </LinkDuo>
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
//Props Types
EspritIngenieurs.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}
