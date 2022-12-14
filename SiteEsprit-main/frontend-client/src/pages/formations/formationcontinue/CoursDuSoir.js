import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import IconList from "components/IconList"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { CoursDuSoir as meta } from "../FormationsDictionary"

export default class CoursDuSoir extends Component {
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
                  <h1>Cours du soir</h1>
                  <CustomHrRed />
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    ESPRIT- Cours du soir offre des formations d’ingénieur destinées aux professionnels, académiques et
                    demandeurs d’emploi, titulaires d’un diplôme de licence ou plus.
                  </p>
                  <p>
                    La conception des formations vise le développement et l’opérationnalisation de compétences
                    conformément aux référentiels métiers de l’ingénieur nationaux et internationaux. L'objectif de la
                    formation est de structurer et approfondir les compétences, afin d'aider à l’évolution de carrière
                    ainsi que l'accès à de nouvelles opportunités professionnelles.
                  </p>
                  <p>
                    La formation en cours du soir s’aligne aux mêmes objectifs du cours du jour, avec une pédagogie et
                    un rythme adaptés au public professionnel, soit 4 années d'études pour un accès avec une licence et
                    3 années pour un accès avec un master.
                  </p>
                  <p>
                    Le programme de formation est destiné aussi aux entreprises qui visent le développement et la
                    consolidation des compétences à travers leurs structures.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <IconList data={statistics} />
                </Col>
                <Col md={4} style={{ textAlign: "center" }}>
                  <div className="service-item">
                    <div className="glyph">
                      <i className="icofont-ui-calendar" />
                    </div>
                    <h3>Durée</h3>
                    <p>
                      Les études durent quatre ans (3 ans si le candidat est détenteur d’une maîtrise ou d’un master).
                    </p>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={4} xs={12} style={{ textAlign: "center" }}>
                  <div className="service-item">
                    <div className="glyph">
                      <i className="icofont-clock-time" />
                    </div>
                    <h3>Timing</h3>
                    <p>Les cours ont lieu sur 10 mois tous les soirs de 18h30 à 20h30 et le samedi de 14h à 18h.</p>
                  </div>
                </Col>
                <Col md={4} xs={12} style={{ textAlign: "center" }}>
                  <div className="service-item">
                    <div className="glyph">
                      <i className="icofont-login" />
                    </div>
                    <h3>Conditions</h3>
                    <p>
                      Les conditions d’admission sont les mêmes que pour le cycle en cours du jour, donc il s’agit d’une
                      admission sur concours : dossier, tests et entretien de motivation.
                    </p>
                  </div>
                </Col>
                <Col md={4} xs={12} style={{ textAlign: "center" }}>
                  <div className="service-item">
                    <div className="glyph">
                      <i className="icofont-dollar" />
                    </div>
                    <h3>Frais de scolarité </h3>
                    <p>
                      les Frais de scolarité sont de 6500 D.T. avec TVA par an, avec une possibilité d’un financement
                      par la ristourne de la TFP pour les entreprises.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const statistics = {
  icon: "icofont-hat",
  title: "Les formations",
  description: "Esprit cours du soir propose 4 formations diplômantes :",
  list: [
    "Informatique (avec trois Options de spécialisation : Business Intelligence, Génie Logiciel, Cloud computing)",
    "Télécommunication",
    "Génie Civil",
    "Génie électro-mécanique (avec deux Options de spécialisation : Option OGI (Organisation Et Gestion Industrielles) , Option Mécatronique).",
  ],
}

const breadcrumb = {
  Title: "Cours du soir",
  Subtitle: "La formation continue",
}
