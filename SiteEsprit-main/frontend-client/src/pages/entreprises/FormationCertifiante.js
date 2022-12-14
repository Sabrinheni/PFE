import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Card, Col, Row } from "react-bootstrap"
import photo1 from "../../assets/img/fondation-Tunisie.png"
import photo2 from "../../assets/img/tact.png"
import { FormationCertifiante as meta } from "./EntreprisesDictionary"

export default class FormationCertifiante extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Formation Certifiante</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <p>
                    Dans le cadre d’un partenariat avec la Fondation Tunisie pour le développement et l’association TACT
                    « Tunisian Association for Communication and Technology », le groupe ESPRIT a entrepris depuis le
                    mois de février 2018, des actions d’ingénierie de formation consistant en : - Un programme de
                    formation pour la requalification des diplômés des ISET en TIC, qui sont en quête d’un premier
                    emploi, afin de les doter des compétences scientifiques, techniques et communicationnelles
                    nécessaires à leur insertion professionnelle ; - Une orientation compétences-métier de ce programme
                    en phase avec la demande des entreprises de TACT, mettant l’accent, dans un premier temps, sur les
                    métiers liés au développement, à l’intelligence des affaires (Business Intelligence) et à
                    l’informatique embarquée ; - L’accréditation de ce programme par la Conférence des Grandes Ecoles
                    CGE via un certificat de qualification et de compétences CQC baptisé « Services du numérique : TIC &
                    TACT » qui sera délivré par ESPRIT aux apprenants au terme de la formation. Ces actions s’insèrent
                    par ailleurs dans le cadre du programme de la Fondation Tunisie pour le Développement, consistant en
                    l’édification de 10 centres ELIFE à proximité des ISET, dans les régions les plus défavorisées, pour
                    la requalification, la professionnalisation et l’insertion des diplômés des ISET, d’une part, et
                    pour le renforcement des capacités des enseignants en termes d’amélioration continue de la formation
                    initiale d’autre part.
                  </p>
                </Col>
              </Row>
              <Row className="margin-top-60" style={{ justifyContent: "center" }}>
                <Col style={{ textAlign: "-webkit-center" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={photo1} />
                  </Card>
                </Col>
                <Col style={{ textAlign: "-webkit-center" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={photo2} />
                  </Card>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}
const breadcrumb = {
  Title: "Formation Certifiante",
  Subtitle: "Formation Certifiante",
}
