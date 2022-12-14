import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import LinkDuo from "components/utils/LinkDuo"
import React, { Component } from "react"
import { Card, Col, Row } from "react-bootstrap"
import photo1 from "../../assets/img/vie-etudiant1.jpg"
import photo2 from "../../assets/img/vie-etudiant2.jpg"
import { PresentationVieEtudiante as meta } from "./VieEtudianteDictionary"

export default class PresentationVieEtudiante extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar />
        <section className="our-blog extract main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Présentation</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>

            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <h4 style={{ color: "#ed1c24" }}>PRÉSENTATION</h4>
                  <p>
                    Le rôle du département est d'accompagner les étudiants dans leurs projets, de favoriser leurs
                    engagements au sein de l'école et faciliter leur vie quotidienne.
                  </p>
                  <h4 style={{ color: "#ed1c24" }}>ACTIVITÉS</h4>
                  <p>Le département de la vie étudiante:</p>
                  <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                    <li>
                      Contribue à dynamiser la vie de tous les sites et à améliorer la qualité de vie des étudiants à
                      l’école ;
                    </li>
                    <li>Conseille sur la constitution et la gestion des clubs des étudiants ;</li>
                    <li>
                      Aide aux projets associatifs, depuis leur conception jusqu'à leur financement et réalisation ;
                    </li>
                    <li>
                      Travaille en étroite collaboration avec les structures intermédiaires et leurs services mais
                      également avec les différents services de la vie universitaire.
                    </li>
                  </ul>
                  <p>
                    C’est à travers ces activités que le département rythme au quotidien la vie étudiante de l’école
                    afin d’en faire plus qu’un simple lieu de travail scolaire.
                  </p>
                </Col>
                <Col md={3}>
                  <Row>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={photo1} />
                    </Card>
                  </Row>
                  <Row>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={photo2} />
                    </Card>
                  </Row>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <strong>Téléphone: 00216 92234330</strong>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <strong>
                    E-mail :
                    <LinkDuo to={"mailto:vie.etudiante@esprit.tn"} rel="noopener noreferrer" target="_blank">
                      vie.etudiante@esprit.tn
                    </LinkDuo>
                  </strong>
                </Col>
              </Row>
              <Row className="text-center">
                <Col>
                  <strong>Adresse : cellule d’écoute. RDC bloc A. ESPRIT el GHAZELA </strong>
                </Col>
              </Row>
              <script></script>
              <script src="https://cdn.unibuddy.co/unibuddy-popcard.js" type="text/javascript"></script>
            </div>
          </div>
        </section>
      </>
    )
  }
}
