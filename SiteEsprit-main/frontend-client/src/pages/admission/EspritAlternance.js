import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import alternance from "../../assets/img/alternance2021.png"
import advancia from "../../assets/img/alternance/advancia.png"
import advyteam from "../../assets/img/alternance/advyteam.png"
import Addinn from "../../assets/img/alternance/Addinn.png"
import besoftilys from "../../assets/img/alternance/besoftilys.png"
import faurecia from "../../assets/img/alternance/Faurecia.png"
import iliadeConsulting from "../../assets/img/alternance/iliade-consulting.png"
import Neoxam from "../../assets/img/alternance/Neoxam.jpg"
import SPG from "../../assets/img/alternance/SPG.png"
import vermeg from "../../assets/img/alternance/Vermeg.png"
import vneuron from "../../assets/img/alternance/Vneuron.png"
import medianet from "../../assets/img/alternance/medianet.png"
import pyxis from "../../assets/img/alternance/Pyxis.png"
import WinTech from "../../assets/img/alternance/Win-Tech.png"
import Avaxia from "../../assets/img/alternance/Avaxia.png"
import Bfi from "../../assets/img/alternance/BFI.png"
import digitalberry from "../../assets/img/alternance/digitalberry.png"
import Digitu from "../../assets/img/alternance/DIGTU.png"
import IGATunisie from "../../assets/img/alternance/IGATunisie.png"
import IpLabel from "../../assets/img/alternance/IpLabel.png"
import Picosoft from "../../assets/img/alternance/Picosoft.png"
import Tunav from "../../assets/img/alternance/Tunav.jpg"
import alternanceEsprit from "../../assets/files/alternance-Esprit.pdf"
import Tunifert from "../../assets/img/alternance/Tunifert.png"
import XtendPlexGroup from "../../assets/img/alternance/XtendPlexGroup.png"

import { EspritAlternance as meta } from "./AdmissionDictionary"
import { LazyImage } from "components/utils/LazyImage"
import LinkDuo from "components/utils/LinkDuo"

export default class EspritIngenieur extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row>
              <Col>
                <h1>Formation en alternance</h1>
                <CustomHrRed />
              </Col>
            </Row>
            <Row style={{ display: "block", textAlign: "center" }}>
              <Col>
                <LazyImage
                  src={alternance}
                  alt="ESPRIT altérnance"
                  style={{ width: "100%", margin: "20px 0" }}></LazyImage>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Présentation du parcours : </h3>
                <CustomHrRed />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  ESPRIT offre en plus des filières classiques en cours de jour ou cours du soir, la possibilité
                  d’intégrer une formation par alternance avec l’une des entreprises partenaires. Les candidats retenus
                  dans ce cadre bénéficieront :
                </p>
                <p style={{ width: "100%" }}>Les candidats retenus dans ce cadre bénéficieront :</p>
                <br />
                <ul style={{ listStyle: "circle", marginLeft: "60px", marginBottom: "30px" }}>
                  <li>D’une formation de 4 années, alternée entre ESPRIT et l’entreprise partenaire</li>
                  <li>D’un contrat d’embauche avec l’entreprise partenaire et des avantages conséquents</li>
                  <li>D’une prise en charge des frais de formation par l’entreprise partenaire</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Conditions d'inscription : </h3>
                <CustomHrRed />
              </Col>
            </Row>
            <Row>
              <Col>
                <ul style={{ listStyle: "circle", marginLeft: "60px", marginBottom: "30px" }}>
                  <li>être retenu par l'une des entreprises partenaires.</li>
                  <li>titulaire d'une licence dans la spécialité choisie.</li>
                </ul>
                <p style={{ width: "100%" }}>
                  Le candidat sera contacté par Esprit pour la finalisation de la procédure d'inscription.
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3> Procédure :</h3>
                <CustomHrRed />
              </Col>
            </Row>

            <Row>
              <Col>
                <ul style={{ listStyle: "circle", marginLeft: "60px", marginBottom: "30px" }}>
                  <li>
                    <strong>Je veux candidater uniquement pour le cycle ingénieur en formation par alternance :</strong>
                    <CustomHrRed />
                  </li>
                  <p style={{ width: "100%" }}>
                    En enregistrant votre candidature via cette démarche, votre admission au cycle d’ingénieur ESPRIT
                    dépend de la décision de l’entreprise : Si vous êtes retenu, vous allez être contacté par l’école
                    pour poursuivre les étapes d’admission et éventuellement votre inscription au parcours de la
                    formation par alternance.
                  </p>
                  <li>
                    <strong>
                      Je veux candidater pour le cycle ingénieur en formation par alternance et au concours d’admission
                      en cours du jour et en cours du soir :
                    </strong>
                    <CustomHrRed />
                  </li>
                  <p style={{ width: "100%" }}>
                    Cette seconde formule intéresse un candidat souhaitant intégrer le cycle ingénieur quelque soit la
                    décision de l’entreprise. En enregistrant votre candidature, vous recevrez un email vous indiquant,
                    en plus de la démarche d’intégration au parcours alternance, la démarche de votre convocation au
                    concours d’admission en cours du jour ou bien en cours du soir.
                  </p>
                </ul>
              </Col>
            </Row>

            <Row>
              <Col>
                <p style={{ width: "100%" }}>
                  <strong>
                    [1] : il est à signaler que le candidat ne peut signer un contrat qu’avec une et une seule
                    entreprise partenaire au risque d’être exclu du programme en alternance. En particulier, tout
                    désistement d’une entreprise au profit d’une autre après la signature du contrat d’embauche n’est
                    pas autorisé.
                  </strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p style={{ width: "100%" }}>
                  <strong>
                    [2] : Si le candidat n'est pas retenu par l'une des entreprises partenaires, il doit suivre les
                    étapes du concours d'admission s'il désire s'inscrire au cycle ingénieur en cours du jour ou bien en
                    cours soir.
                  </strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <h3 className="text-esprit">Pour plus d'informations:</h3>
                  <LinkDuo target="_blank" rel="noopener noreferrer" to={"mailto:cdepart-alternance@esprit.tn "}>
                    cdepart-alternance@esprit.tn
                  </LinkDuo>
                </div>
              </Col>
            </Row>
            <br></br>
            <Row className="flex-content-center">
              <Col md={4} xs={12}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <LinkDuo
                    className="custom-button btn width100"
                    to={"https://esprit-tn.com/admission/admission_alt.aspx"}>
                    <span>Postuler ICI</span>
                  </LinkDuo>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <h3> Entreprises partenaires :</h3>
                <CustomHrRed />
              </Col>
            </Row>

            <Row>
              <Col md={12} xs={12}>
                <Row className="flex-content-center">
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={vermeg} alt="vermeg" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={Neoxam} alt="Neoxam" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={SPG} alt="SPG" />
                  </Col>
                </Row>
                <br></br>
                <Row className="flex-content-center">
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={advancia} alt="advancia" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={advyteam} alt="advyteam" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={besoftilys} alt="besoftilys" />
                  </Col>
                </Row>
                <br></br>
                <Row className="flex-content-center">
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={Tunifert} alt="Tunifert" />
                  </Col>

                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={pyxis} alt="pyxis" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={vneuron} alt="Vneuron" />
                  </Col>
                </Row>
                <br></br>
                <Row className="flex-content-center">
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={Avaxia} alt="Avaxia" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={IpLabel} alt="IpLabel" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={Picosoft} alt="Picosoft" />
                  </Col>
                </Row>
                <br></br>
                <Row className="flex-content-center">
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={faurecia} alt="faurecia" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={iliadeConsulting} alt="iliade consulting" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={medianet} alt="medianet" />
                  </Col>
                </Row>
                <br></br>
                <Row className="flex-content-center">
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={WinTech} alt="WinTech" />
                  </Col>

                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={Bfi} alt="BFI" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={digitalberry} alt="digitalberry" />
                  </Col>
                </Row>
                <br></br>
                <Row className="flex-content-center">
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={Digitu} alt="DIGTU" />
                  </Col>
                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={IGATunisie} alt="IGATunisie" />
                  </Col>

                  <Col className="flex-content-center" md={3}>
                    <LazyImage className="" src={Tunav} alt="Tunav" />
                  </Col>
                </Row>
                <br></br>
                <Row className="flex-content-center">
                  <Col className="flex-content-center" md={2}>
                    <LazyImage className="" src={Addinn} alt="Addinn" />
                  </Col>
                  <Col className="flex-content-center" md={2}>
                    <LazyImage className="" src={XtendPlexGroup} alt="XtendPlexGroup" />
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="flex-content-center">
              <Col md={4} xs={12}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <LinkDuo
                    className="custom-button btn width100"
                    to={"https://esprit-tn.com/admission/admission_alt.aspx"}>
                    <span>Postuler ICI</span>
                  </LinkDuo>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <LinkDuo
                  className="custom-button btn width100"
                  rel="noopener noreferrer"
                  target="_blank"
                  to={alternanceEsprit}>
                  <span>Consulter la brochure entreprise</span>
                </LinkDuo>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: "",
  Title: "ESPRIT INGÉNIEUR",
  Subtitle: "Esprit Altérnance",
}
