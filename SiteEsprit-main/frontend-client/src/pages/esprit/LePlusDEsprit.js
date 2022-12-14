import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, ProgressBar, Row } from "react-bootstrap"
import { LePlusDEsprit as meta } from "./EspritDictionary"

export default class LePlusDEsprit extends Component {
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
                  <h1>Les Plus D'Esprit</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-hat-alt" />

                        <span className="services-box-fonticon fa-university"></span>
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Les qualités d'ingénieur et de manager</h4>
                      <div className="services-box-desc">
                        <p>La touche Esprit pour les formations d’ingénieurs :</p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">Créativité et compétences opérationnelles,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Qualités humaines : esprit d’équipe, communication, leadership, créativité, rigueur,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Répondre aux besoins de l’entreprise dans des filières d’avenir,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Reconnaissance internationale à travers l’accréditation EUR- ACE (délivrée par la CTI) Et
                            par l’adhésion à la conférence des grandes école (CGE) et l’initiative CDIO.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} xs={12}>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-book-alt" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">La formation</h4>
                      <div className="services-box-desc">
                        <p>
                          Des synergies fortes entre les différentes formations (ingénieur, management, classes
                          préparatoires) :
                        </p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">
                            Une équipe pédagogique de 250 enseignants permanents qualifiés (1 pour 18 étudiants),
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            L’accompagnement personnalisé des étudiants, en particulier les étudiants étrangers qui
                            bénéficient d’un service spécial pour suivre leur dossier,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">L’enseignement en petits groupes de 30,</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            La forte culture numérique qui imprègne toutes les formations.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-briefcase-2" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">La vie étudiante</h4>
                      <div className="services-box-desc">
                        <p>Une vie étudiante riche et variée qui complète pleinement la formation académique :</p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">
                            Plus de 40 clubs dans des domaines très divers (Junior entreprise, Enactus, club santé, club
                            théâtre, club google ou Mozilla ...),
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Possibilité de participer à des compétitions sportive de haut niveau : les étudiants
                            d’Esprit se retrouvent régulièrement en finale des championnats universitaires en différents
                            sports,
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            Participation à des challenges nationaux ou internationaux.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col md={6} xs={12}>
                  <div>
                    <h4 style={{ color: "#ed1c24" }}>L'insertion professionnelle</h4>
                    <CustomHrRed />
                    <p>Etudiants qui trouvent un travail dans les 6 mois qui suivent l’obtention du diplôme</p>
                    <ProgressBar variant="danger" now={85} label={"85%"} />
                    <p>Etudiant qui trouvent un travail à l’international</p>
                    <ProgressBar variant="info" now={35} label={"35%"} />
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-rocket" />
                        <span className="services-box-fonticon fa-university"></span>
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">
                        Des classes préparatoires aux grandes écoles très performantes
                      </h4>
                      <div className="services-box-desc">
                        <p>
                          89% des élèves d’Esprit Prépa intègrent une grande école française ou tunisienne en 2015 :
                        </p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">1 au concours des écoles normales supérieures</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">1 à l’école polytechnique (X)</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            4 au concours commun Mines Pont, 3 au concours commun Centrale Supelec
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">
                            25 au concours commun polytechnique, 24 au concours INT- Telecom
                          </span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">38 au concours national.</span>
                        </li>
                      </ul>
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
