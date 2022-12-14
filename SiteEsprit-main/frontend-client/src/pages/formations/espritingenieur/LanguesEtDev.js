import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import VieEcole from "components/staticgalleries/VieEcole"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import etudiants from "../../../assets/img/etudiants-esprit.jpg"
import { LanguesEtDev as meta } from "../FormationsDictionary"

export default class LanguesEtDev extends Component {
  render() {
    const renderedData = servicesData.map((service, index) => (
      <div className="col-md-6 col-lg-4 text-center" key={index}>
        <div className="service-item">
          <div className="glyph">
            <i className={service.icon} />
          </div>
          <h3>{service.heading}</h3>
          <p>{service.description}</p>
        </div>
      </div>
    ))
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Langues et Développement Personnel</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <p>
                    <strong>La politique linguistique UP Langues s’articule autour de 3 axes fondamentaux</strong>
                  </p>
                  <Row>{renderedData}</Row>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Row>
                  <Col md={6}>
                    <img style={{ width: "100%" }} src={etudiants} alt="etudiants esprit"></img>
                  </Col>
                  <Col>
                    <p>
                      Soucieuse de former une génération de futurs ingénieurs citoyens compétents dans leur spécialité
                      et bons communicants, l’UP met en place des programmes qui, tout en s’appuyant sur les objectifs
                      déclinés dans les descripteurs du CECR (Cadre européen commun de référence pour les langues) sont
                      conformes aux exigences de la CTI. Ils s’inscrivent ainsi dans une approche qui prône la
                      communication, la culture et la citoyenneté tout en veillant à la richesse du contenu
                      (thématiques, supports, activités).
                    </p>
                    <p>
                      En effet, les documents sont exploités selon 3 volets : linguistique, fonctionnel et culturel. Le
                      volet linguistique est traité à travers des mises en situation et des simulations dont les acquis
                      sont vérifiés dans le cadre de projets intégrés, tests et ateliers de création.
                    </p>
                  </Col>
                </Row>
                <Row>
                  <p>
                    Grâce à l’APP, l’apprenant se trouve dans un contexte où l’apprentissage des langues ne se fait plus
                    de manière classique et purement utilitariste, il est au contraire au centre de sa formation et y
                    participe activement conformément au slogan de l’école <strong>SE FORMER AUTREMENT.</strong> En fin
                    de cursus, l’apprenant est initié à la vie professionnelle avec un module dédié entièrement à cet
                    effet : dossier de candidature (CV, lettre de motivation et entretien d’embauche), compétences
                    personnelles et culture d’entreprise seront alors les principaux axes de cette dernière ligne
                    droite.
                  </p>
                  <p>
                    Par ailleurs, le premier souci de l’UP étant de hisser le maximum d’étudiants au niveau exigé, les
                    efforts des formateurs sont par conséquent focalisés sur les modalités d’évaluation et de
                    remédiation (grilles d’évaluation par niveau et compétence langagière, cours de consolidation…) qui
                    sont constamment renouvelées.
                  </p>
                  <p>
                    Pour finir, l’UP contribue activement à la vie culturelle de l’école au même titre que le vis-à-vis
                    pédagogique et multiplie ainsi les événements et les challenges tels que les concours de dictée
                    (Dictofolie), les campagnes de sensibilisation, les actions citoyennes (Renc’art écolo), les clubs
                    de théâtre et de lecture, le concours de plaidoirie (la justice en un clic).
                  </p>
                </Row>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Vie culturelle de l’école</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <VieEcole />
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
  Title: "Développement Personnel",
  Subtitle: "Langues et développement personnel",
}

const servicesData = [
  {
    icon: "icofont-education",
    heading: "Maîtrise",
    description:
      "Concerne la fixation d’un niveau minimum de maîtrise des langues à l’issue de chaque année et à la sortie de l’école. Le niveau B2 est le niveau minimum de maîtrise des langues requis en fin de cursus.",
  },
  {
    icon: "icofont-certificate-alt-2",
    heading: "Apprenants",
    description:
      "Concerne l’identification de la population d’apprenants qui sont concernés par les cours de consolidation en vue de garantir la progression définie.",
  },
  {
    icon: "icofont-certificate-alt-1",
    heading: "Pédagogie",
    description:
      "Le troisième a trait aux moyens et à la pédagogie en vue d’atteindre les objectifs (pédagogie active, cours de consolidation, coaching personnalisé, stages intensifs, etc.).",
  },
]
