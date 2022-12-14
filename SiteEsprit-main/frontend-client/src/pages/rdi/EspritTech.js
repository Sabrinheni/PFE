import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"

export default class QuiSommesNous extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row>
              <Col>
                <h1>Esprit-Tech</h1>
                <CustomHrRed />
              </Col>
            </Row>
            <div className="margin-top-60">
              <Row>
                <Col>
                  <p>
                    Créée en 2010, ESPRIT-Tech est la structure de Recherche-Développement-Innovation (RDI) à ESPRIT.
                  </p>
                  <p>
                    Depuis la mise en place des programmes de formation, l’activité RDI à ESPRIT est devenue une des
                    priorités dans les choix stratégiques.
                  </p>
                  <p>
                    Grâce à cette entité, les enseignants-chercheurs à ESPRIT sont interconnectés et peuvent bénéficier
                    d’opportunités de financement et de support, y compris les subventions, les formations en RDI, le
                    développement de partenariats, la négociation des contrats, ainsi que l’aide à la commercialisation.
                    ESPRIT-Tech élabore les stratégies, et les orientations futures pour les activités RDI , en étroite
                    collaboration avec les parties prenantes concernées. De plus, elle accorde une priorité particulière
                    à la recherche appliquée et à l’innovation, sans exclure la recherche fondamentale.
                  </p>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row>
                <Col>
                  <h1>Structure</h1>
                  <CustomHrRed />
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>
                    ESPRIT-Tech est une structure de recherche dirigée par un directeur qui supervise tous les aspects
                    stratégiques et opérationnels.
                  </p>
                  <p>
                    Pour mener à bien son activité, ESPRIT-Tech a mis en place une structure répondant à sa mission :
                    les équipes se créent afin de réaliser des projets RDI autour de thématiques et d’axes de recherche.
                    Des étudiants peuvent être associés à ces travaux par le biais de leurs projets de fin d’études.
                  </p>
                  <p>
                    ESPRIT-Tech a créé en décembre 2015 un comité de recherche : C-RDI (Comité de RDI), composé de tous
                    les responsables des équipes. Il est chargé de dynamiser les activités de recherche et de veiller à
                    la qualité des productions. Il se réunit en moyenne une fois par mois.
                  </p>
                  <p>
                    Pour un meilleur fonctionnement, le « Comité de RDI » s’est doté d’un secrétariat (SC-RDI) composé
                    de 5 membres qui se réunissent régulièrement. Il a pour rôle de résoudre les problèmes en appliquant
                    les décisions prises par le C-RDI.
                  </p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <h1>Notre Mission</h1>
                  <CustomHrRed />
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-flash" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">VISION</h4>
                      <div className="services-box-desc">
                        <p>
                          Afin de renforcer la vision de l’école, ESPRIT-Tech continuera de multiplier les opportunités
                          de recherche, de développement, d’innovation et de financement, de faciliter l’excellence en
                          recherche appliquée et de promouvoir la commercialisation des résultats des projets RDI.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon-right">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-flash" />
                      </div>
                    </div>
                    <div className="services-box-content-right">
                      <h4 className="services-box-title-right">MISSION</h4>
                      <div className="services-box-desc-right">
                        <p>
                          ESPRIT-Tech a pour mission d’offrir aux enseignants-chercheurs un environnement propice au
                          développement de la recherche et de l’innovation et une gamme complète de services de haute
                          qualité à l’appui de leurs projets, afin d’augmenter le financement externe des activités RDI
                          et contribuer à la construction d’un écosystème national, ouvert à l’international, et basé
                          sur une économie entrepreneuriale.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-flash" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">VALEURS</h4>
                      <div className="services-box-desc">
                        <ul>
                          <li>Rigueur et intégrité scientifique </li>
                          <li>Collaboration et partage des connaissances </li>
                          <li>Respect</li>
                          <li>Engagement et responsabilité sociale</li>
                          <li>Inclusion </li>
                          <li>Transparence </li>
                          <li>Développement durable</li>
                        </ul>
                      </div>
                    </div>
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

const breadcrumb = {
  src: "",
  Title: "Esprit-Tech",
  Subtitle: "Recherche, Développement et Innovation",
}
