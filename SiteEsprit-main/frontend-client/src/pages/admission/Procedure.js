import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Card, Col, Row } from "react-bootstrap"
import photobg from "../../assets/img/etudiants_etrangers.png"
import photo3 from "../../assets/img/fondation-logo.png"
import photo2 from "../../assets/img/logo-banque.png"
import photo1 from "../../assets/img/zitouna.gif"
import { Procedure as meta } from "./AdmissionDictionary"
import LinkDuo from "components/utils/LinkDuo"
import file1 from "../../assets/files/grille tarifaire 2022-2023 Ecole d'ingenieurs Tunisiens(sans foyer).pdf"
export default class Procedure extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Financement</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col md={8}>
                  <Row>
                    <div style={{ display: "flow-root" }}>
                      <h3 className="text-esprit">Frais d'inscription :</h3>
                      <CustomHrGray />
                    </div>
                  </Row>
                  <Row>
                    <h3>
                      Les frais d'inscription pour les nouveaux étudiants sont fixés chaque année par la direction
                      d'ESPRIT.
                    </h3>
                    
                  </Row>
                  <br></br>
                  <Row>
                    
                <Col style={{ textAlign: "center" }}>
                  <LinkDuo className="custom-button btn" rel="noopener noreferrer" target="_blank" to={file1}>
                    <span>Consulter la grille tarifaire</span>
                  </LinkDuo>
                </Col>
              </Row>
                  <Row>
                    <div style={{ display: "flow-root", width: "100%" }}>
                      <h3 className="text-esprit">Avantages</h3>
                      <CustomHrGray />
                    </div>
                    <br />
                    <p>
                      Les parents ayant plusieurs enfants inscrits à ESPRIT bénéficient d'une remise de: <br />
                      - 30% pour le deuxième enfant <br />- 40 % pour le troisième enfant
                    </p>
                  </Row>
                  <Row>
                    <div style={{ display: "flow-root", width: "100%" }}>
                      <h3 className="text-esprit">Tranches</h3>
                      <CustomHrGray />
                    </div>
                  </Row>
                </Col>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Financement par :</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <Row style={{ marginBottom: "20px" }}>
                    <Card style={{ width: "14rem" }}>
                      <Card.Img variant="top" src={photo1} />
                    </Card>
                  </Row>
                  <Row style={{ marginBottom: "20px" }}>
                    <Card style={{ width: "14rem" }}>
                      <Card.Img variant="top" src={photo2} />
                    </Card>
                  </Row>
                  <Row style={{ marginBottom: "20px" }}>
                    <Card style={{ width: "14rem" }}>
                      <LinkDuo to={"http://esprit-fondation.tn/"} target="_blank" rel="noopener noreferrer">
                        <Card.Img variant="top" src={photo3} />
                      </LinkDuo>
                    </Card>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Row style={{ placeContent: "center" }}>
                  <Col md={4}>
                    <div className="gobox gobox-first ">
                      <div className="gobox-content ">
                        <h4 className="gobox-title">1ère Tranche</h4>
                        <div>Dans les limites indiquées dans la confirmation d'admission.</div>
                      </div>
                    </div>
                  </Col>
                  <Col style={{ marginLeft: "30px" }} md={4}>
                    <div className="gobox gobox-last">
                      <div className="gobox-content">
                        <h4 className="gobox-title">2ème Tranche</h4>
                        <div>Avant le 15 Janvier de l'année scolaire en cours.</div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <h3>Le paiement des frais d'inscription fait suite aux résultats d’admission notifiés par e-mail.</h3>
                </Row>
              </Row>
              {/* <Row style={{ marginBottom: "60px" }}>
                <div className="services_box">
                  <span className="services_box_list_bg"></span>
                  <div className="services_box_inner">
                    <h4 className="services_box_title" style={{ marginTop: "60px" }}>
                      Compte en Dinars
                    </h4>
                    <div className="services_box_desc">
                      <p>Banque : AMEN BANK</p>
                    </div>
                    <div className="services_box_list_wrapper">
                      <ul className="services_box_list">
                        <li>Relevé d’identité bancaire</li>
                        <li>Rib : 070350020101101366 91</li>
                        <li>IBAN : TN 59 070350020101101366 91</li>
                        <li>CODE BIC : CFCTTNTTXXX</li>
                        <li>Nom/Raison : ESPRIT</li>
                        <li>
                          Domiciliation : AMEN BANK AGENCE RAOUED Res.Mariem Il Angle Rue Fathi ZOUHIR Km 2 Ariana
                        </li>
                        <li>Téléphone : 71858470</li>
                      </ul>
                    </div>
                  </div>
                </div>
    </Row>*/}
            </div>
          </div>
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: photobg,
  Title: "PROCÉDURE",
  Subtitle: "Procédure d'inscription",
}
