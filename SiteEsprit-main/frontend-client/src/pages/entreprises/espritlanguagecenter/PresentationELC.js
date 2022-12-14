import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import IconList from "components/IconList"
import InformationBox from "components/InformationBox"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Card, Col, Row } from "react-bootstrap"
import photo1 from "../../../assets/img/espritELC.jpg"
import { PresentationELC as meta } from "../EntreprisesDictionary"

export default class PresentationELC extends Component {
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
                  <h1>ESPRIT LANGUAGE CENTER</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ justifyContent: "center", marginBottom: "60px" }}>
                <Col style={{ textAlign: "-webkit-center" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={photo1} />
                  </Card>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={4} xs={12}>
                  <div>
                    <div className="circle-headline">
                      <span className="circle-span">
                        <span>ELC</span>
                      </span>
                      <h4 className="circle-title">Mission</h4>
                    </div>
                    <p>
                      Depuis sa création en 2012, Esprit Language Center (ELC) s’est fixé pour mission d’améliorer les
                      compétences langagières de ses candidats en mettant à leur disposition différents dispositifs
                      d’évaluation, de consolidation et/ ou de certifications dans les deux langues anglaise et
                      française.
                    </p>
                  </div>
                </Col>
                <Col md={4} xs={12}>
                  <div>
                    <div className="circle-headline">
                      <span className="circle-span">
                        <span>ELC</span>
                      </span>
                      <h4 className="circle-title">Cursus</h4>
                    </div>
                    <p>
                      Le cursus proposé par le Centre de langue prend en compte le niveau de maîtrise de la langue
                      française et anglaise, évalué selon les critères du
                      <a
                        href="https://www.coe.int/en/web/language-policy/home"
                        target="_blank"
                        rel="noopener noreferrer">
                        Cadre Européen Commun de Référence pour les Langues (CECRL)
                      </a>
                      . Les cours sont dispensés par niveau sous forme de sessions intensives ou semi intensives selon
                      la demande.
                    </p>
                  </div>
                </Col>
                <Col md={4} xs={12}>
                  <div>
                    <div className="circle-headline">
                      <span className="circle-span">
                        <span>ELC</span>
                      </span>
                      <h4 className="circle-title">Alignement</h4>
                    </div>
                    <p>
                      Le programme mis en œuvre par ELC s’aligne ainsi sur les objectifs fixés par l’ESPRIT en tant
                      qu’établissement accrédité par la CTI et la CDIO et dont la politique linguistique exige la
                      validation du niveau B2 pour la délivrance de son diplôme.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={4} xs={12}>
                  <IconList data={agrement} />
                </Col>
                <Col md={4} xs={12}>
                  <IconList data={cible} />
                </Col>
                <Col md={4} xs={12}>
                  <IconList data={ressources} />
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={4} xs={12}>
                  <InformationBox data={first}></InformationBox>
                </Col>
                <Col md={4} xs={12}>
                  <InformationBox data={second}></InformationBox>
                </Col>
                <Col md={4} xs={12}>
                  <InformationBox data={third}></InformationBox>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={4} xs={12}>
                  <div className="address-area">
                    <div className="addess">
                      <i className="icofont-google-map" />
                      <h4>Adresse</h4>
                      <p>18 Rue de l'Usine, Tunis 2035</p>
                    </div>
                  </div>
                </Col>
                <Col md={4} xs={12}>
                  <div className="address-area">
                    <div className="email">
                      <i className="icofont-email" />
                      <h4>Email</h4>
                      <p>
                        Pour toutes demandes d’information : <br />
                        elc@esprit.tn (tef&tefaq) <br />
                        elc2@esprit.tn (Test de niveau & cours de consolidation)
                      </p>
                    </div>
                  </div>
                </Col>
                <Col md={4} xs={12}>
                  <div className="address-area">
                    <div className="phone">
                      <i className="icofont-phone" />
                      <h4>Téléphone et Fax</h4>
                      <p>
                        Tél : +216 70 250 064 <br /> Fax: +216 71 941889
                      </p>
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
  Title: "ESPRIT LANGUAGE CENTER",
  Subtitle: "ELC",
}
const first = {
  title: "Horaires de réception",
  subtitle: "",
  description: ["Du lundi au vendredi de 9h à 12h et de 14h à 16h00 – le samedi de 9h à 12h."],
}
const second = {
  title: "Directrice du Centre",
  subtitle: "",
  description: ["Nadia GHELALA"],
}
const third = {
  title: "Assistante administrative",
  subtitle: "",
  description: [<strong>Tél : 70 250 064</strong>],
}
const cible = {
  icon: "icofont-bullseye",
  title: "Public cible",
  description: "Le public concerné :",
  list: [
    "Elèves ingénieurs",
    "Candidats à l’émigration",
    "Cadres d’entreprise",
    "Jeunes diplômés à la recherche d’emploi.",
    "Elèves du secondaire (collèges et lycées)",
  ],
}
const ressources = {
  icon: "icofont-layers",
  title: "Ressources",
  description: "Le Centre dispose de moyens humains et matériels lui permettant de remplir pleinement sa mission :",
  list: [
    "Des formateurs permanents habilités examinateurs-correcteurs (DELF B2, TOEIC, TEF&TEFAQ),",
    "Des superviseurs APTIS qualifiés,",
    "Des techniciens qualifiés,",
    "Un laboratoire équipé (PC, casques, connexion internet haut débit),",
    "Des salles adaptées et climatisées,",
    "Des logiciels d’aide à la formation,",
    "Du matériel audio visuel performant.",
  ],
}
const agrement = {
  icon: "icofont-book-mark",
  title: "Agrément",
  description: "Esprit Language Center est agréé par deux organismes internationaux :",
  list: [
    "La Chambre de Commerce et d’Industrie de Paris (CCIP) pour la planification et certification TEF&TEFAQ,",
    "Le British Council pour la passation du test APTIS.",
  ],
}
