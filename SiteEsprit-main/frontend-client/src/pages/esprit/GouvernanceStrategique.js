import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import ImageBox from "components/ImageBox"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import conseil from "../../assets/img/gouv.jpg"
import { GouvernanceStrategique as meta } from "./EspritDictionary"

export default class GouvernanceStrategique extends Component {
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
                  <h1>Gouvernance Stratégique</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>
            <Row style={{ placeContent: "center" }}>
              <ImageBox data={corps} />
            </Row>

            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div>
                    <span className="rectangle-span">
                      <span>LE CONSEIL D'ADMINISTRATION</span>
                    </span>
                    <h4 className="circle-title">Président : Naceur Ammar</h4>
                  </div>
                  <p>
                    Le Conseil d’Administration d’ESPRIT représente les actionnaires de la Société. Ses membres sont
                    élus par l’assemblée générale. Il trace la politique générale de l’entreprise et donne son avis sur
                    les différentes actions entreprises par la direction générale : budget, investissement, recrutement,
                    extension d’activité et toutes sortes d’engagement…
                  </p>
                </Col>
                <Col md={6} xs={12}>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-people" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Composition</h4>
                      <div className="services-box-desc">
                        <p>
                          Le conseil d'administration est composé de 9 membres actionnaires élus répartis comme suit :
                        </p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">4 représentants universitaires</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">3 représentants d’entreprises</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">2 représentants d’institutions financières</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div>
                    <span className="rectangle-span">
                      <span>LE CONSEIL SCIENTIFIQUE</span>
                    </span>
                    <h4 className="circle-title">Président : Tahar Ben Lakhdar</h4>
                  </div>
                  <p>
                    Ce conseil est créé conformément à l’article 3 du cahier des charges régissant l’organisation et le
                    fonctionnement des établissements privés d’enseignement supérieur du 28 septembre 2000. Il réunit
                    autour du Directeur général de l’entreprise, le directeur des études, les responsables des
                    différentes spécialités et options ainsi qu’un représentant d’entreprise.
                  </p>
                </Col>
                <Col md={6} xs={12}>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-people" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Composition</h4>
                      <div className="services-box-desc">
                        <p>Le conseil scientifique est composé de 11 membres désignés répartis comme suit :</p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">3 Professeurs d’enseignement supérieur</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">1 Technologue principal</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">6 Technologues</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">1 Chef d’entreprise</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div>
                    <span className="rectangle-span">
                      <span>LE CONSEIL D’ORIENTATION STRATEGIQUE</span>
                    </span>
                    <h4 className="circle-title">Président: Badreddine Ouali</h4>
                  </div>
                  <p>
                    Le Conseil d’Orientation Stratégique (COS) est une instance de réflexion sur les orientations
                    générales de l’école pour le moyen et le long terme. Les orientations retenues contribuent à la mise
                    en place de la stratégie de l’institution tant au niveau de la formation que de la RDI. Le COS
                    regroupe des chefs d’entreprises ainsi que des spécialistes travaillant dans différents domaines
                    d’activités. Il se réunit au moins une fois par an.
                  </p>
                </Col>
                <Col md={6} xs={12}>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-people" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Composition</h4>
                      <div className="services-box-desc">
                        <p>Le conseil d'orientation est composé de 21 membres désignés répartis comme suit :</p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">8 Chefs d’entreprise</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">6 Universitaires</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">7 Cadres d’ESPRIT</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div>
                    <span className="rectangle-span">
                      <span>LE CONSEIL DE DIRECTION</span>
                    </span>
                    <h4 className="circle-title">Président : Tahar Ben Lakhdar</h4>
                  </div>
                  <p>
                    Le conseil de direction réunit autour du PDG de l’entreprise les directeurs des différentes
                    structures de l’école : directeur des études, directeur d’ESPRIT Entreprise et de la formation
                    continue, directeur d’ESPRIT Prépa, directeur des affaires administratives et financières,
                    directeurs des structures spécifiques (ESPRIT-Tech, S.I, Stages, Centre des Langues..), les
                    responsables des spécialités et les conseillers.
                  </p>
                </Col>
                <Col md={6} xs={12}>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-people" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Composition</h4>
                      <div className="services-box-desc">
                        <p>Le conseil de direction est composé de 17 membres répartis comme suit :</p>
                      </div>

                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">6 Directeurs</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">4 Conseillers</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">7 Responsable de structures spécifiques</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div>
                    <span className="rectangle-span">
                      <span>LE COMITE DES ETUDES</span>
                    </span>
                    <h4 className="circle-title">Président : Lamjed Bettaieb</h4>
                  </div>
                  <p>
                    Ce comité arrête l’organisation générale des études, les programmes des différentes spécialités,
                    aussi bien pour la formation initiale que la formation continue, les programmes de recherche
                    développement et innovation, l’organisation des stages et surtout des PFE.
                  </p>
                </Col>
                <Col md={6} xs={12}>
                  <div className="services-box">
                    <div className="services-box-icon">
                      <div className="services-box-icon-inner">
                        <i className="services-box-fonticon icofont-people" />
                      </div>
                    </div>
                    <div className="services-box-content">
                      <h4 className="services-box-title">Composition</h4>
                      <div className="services-box-desc">
                        <p>Le comité des études est composé de 13 membres répartis comme suit :</p>
                      </div>
                      <ul className="services-box-list">
                        <li className="">
                          <span className="services-box-list-text">3 Directeurs</span>
                        </li>
                        <li className="">
                          <span className="services-box-list-text">10 Responsables de filière</span>
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
const corps = {
  src: conseil,
  alt: "Conseil d'administration",
  title: "Conseil d'administration",
  text: "",
}
