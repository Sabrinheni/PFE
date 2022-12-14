import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import LinkDuo from "components/utils/LinkDuo"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import fondation from "../../../assets/img/fondation.jpg"
import { EspritFondation as meta } from "../VieEtudianteDictionary"

export default class EspritFondation extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar />
        <section className="our-blog extract main-blog dynamic-margin-simple">
          <div className="container space-items">
            <Row>
              <Col>
                <h1>FONDATION ESPRIT</h1>
                <CustomHrRed />
              </Col>
            </Row>
            <Row style={{ textAlign: "center", placeContent: "center" }}>
              <Col md={6}>
                <LinkDuo to={"http://esprit-fondation.tn/"} target="_blank" rel="noopener noreferrer">
                  <img style={{ width: "100%" }} src={fondation} alt="ESPRIT Fondation"></img>
                </LinkDuo>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={12}>
                <h3 className="text-esprit">
                  La fondation œuvre à réduire la barrière financière pour des étudiants méritants
                </h3>
                <p>
                  Notre vision consiste à offrir de nouvelles perspectives de formation et d’embauche à des étudiants
                  issus de milieux modestes et méritants.
                </p>
                <p>Notre mission est :</p>
                <ul className="qualite-ul">
                  <li>
                    <b className="text-esprit">Orienter</b> les étudiants méritants issus de milieux modestes vers un
                    programme de formation supérieure de qualité.
                  </li>
                  <li>
                    <b className="text-esprit">Assurer</b> l’ascension socioprofessionnelle des jeunes défavorisés en
                    encourageant leur intégration dans un programme d’éducation supérieure à forte employabilité.
                  </li>
                  <li>
                    <b className="text-esprit">Renforcer</b> la démocratisation des études supérieures et du recrutement
                    dans les environnements les plus modestes.
                  </li>
                  <li>
                    <b className="text-esprit">Favoriser</b> la générosité au-delà des frontières sociales et
                    économiques en facilitant l’accès des étudiants démunis et méritants à un enseignement supérieur
                    leur offrant des débouchés.
                  </li>
                </ul>
              </Col>
              <Col md={6} xs={12}>
                <h3 className="text-esprit">
                  2400 étudiants les plus méritants pourront bénéficier d’une aide financière bonifiée au cours des 5
                  ans à venir
                </h3>
                <p>Une qualité et une rigueur dans la sélection</p>
                <p>
                  Une sélection basée sur <span className="text-esprit">2 critères majeurs :</span>
                </p>
                <ul className="qualite-ul">
                  <li>
                    <b className="text-esprit">Académique:</b> un score minimal après l’admission à ESPRIT est exigé
                    pour bénéficier de l’aide financière. Plus le score est élevé, plus l’aide est importante
                  </li>
                  <li>
                    <b className="text-esprit">Sociale:</b> plus les revenus des parents sont limités, plus la
                    contribution de la fondation est importante.
                  </li>
                </ul>
                <p>
                  Une bonification est accordée aux étudiants issus des
                  <span className="text-esprit">régions défavorisées.</span>
                </p>
              </Col>
            </Row>

            <Row className="text-center">
              <Col>
                <h3 className="text-esprit">COMMENT NOUS SOUTENIR</h3>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <strong>
                  Notre site:
                  <LinkDuo to={"http://esprit-fondation.tn/"} target="_blank" rel="noopener noreferrer">
                    &nbsp;esprit-fondation.tn
                  </LinkDuo>
                </strong>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <strong>
                  E-mail :&nbsp;
                  <LinkDuo to={"mailto:contact@esprit-fondation.tn"} rel="noopener noreferrer" target="_blank">
                    contact@esprit-fondation.tn
                  </LinkDuo>
                </strong>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <strong>RIB: 07 035 0020105509853 95</strong>
              </Col>
            </Row>
            <Row className="text-center">
              <Col>
                <strong>IBAN : TN59 0703 5002 0105 5098 5395</strong>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  }
}
