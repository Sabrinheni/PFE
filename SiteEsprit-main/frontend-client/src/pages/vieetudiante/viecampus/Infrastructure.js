import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import ImageBox from "components/ImageBox"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import InfrastructureGallery from "components/staticgalleries/InfrastructureGallery"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import coursdusoir from "../../../assets/img/bat18-cours-du-soir.jpg"
import blocABC from "../../../assets/img/bloc-A-B-C.jpg"
import blocE from "../../../assets/img/bloc-E.jpg"
import blocIJK from "../../../assets/img/bloc-I-J-K.jpg"
import espritghazela from "../../../assets/img/esprit-ghazela.jpg"
import { Infrastructure as meta } from "../VieEtudianteDictionary"

export default class Infrastructure extends Component {
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
                  <h1>Infrastructure</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>

            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col className="space-items">
                  <h4 style={{ color: "#ed1c24" }}>Vie sur le campus</h4>
                  <p>
                    <strong>
                      ESPRIT dispose d'un campus à la hauteur de ses ambitions, situé dans les environs de Tunis et
                      localisé dans le gouvernorat de l'Ariana.
                    </strong>
                  </p>
                  <p>
                    ESPRIT dispose de trois sites de formation : le premier avec lequel elle a démarré, à la zone
                    industrielle de Charguia 2, et le site principal sis à la zone limitrophe du Technopôle des
                    Communications, dans la zone industrielle à vocation technologique à Chotrana, et un troisième site
                    qui vient s’ajouter aux deux autres à Charguia 2.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <ImageBox data={batiment1} />
                </Col>
                <Col md={6} xs={12}>
                  <iframe
                    className="googlemaps"
                    title="Esprit location google maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1080.235767244713!2d10.189454883048041!3d36.89895189079932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb055e36e611%3A0xd904d2bf4308a2c!2sEsprit!5e0!3m2!1sen!2stn!4v1588968285265!5m2!1sen!2stn"
                    width="100%"
                    height="90%"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"></iframe>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <ImageBox data={batiment2} />
                </Col>
                <Col md={6} xs={12}>
                  <iframe
                    className="googlemaps"
                    title="Esprit location google maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.263912978404!2d10.20706575769796!3d36.85220588980418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34d3c96bec6b%3A0x9f458fbb48b78af4!2sESPRIT%20-%20Night%20Schools!5e0!3m2!1sen!2stn!4v1589132980764!5m2!1sen!2stn"
                    width="100%"
                    height="90%"
                    frameBorder="0"
                    style={{ border: "0" }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"></iframe>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <ImageBox data={blocPrincipal} />
                </Col>
                <Col md={6} xs={12}>
                  <ImageBox data={blocAdmin} />
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <ImageBox data={blocNouveau} />
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Infrastructures</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <p>
                    Les infrastructures modernes et adaptées, mises à la disposition des étudiants offrent les
                    meilleures conditions pour leur épanouissement aussi bien dans les études que dans toutes les
                    activités qui stimulent les capacités sportives, artistiques, associatives … etc. des futurs
                    ingénieurs, activités qui sont développées au sein de clubs de l'école. Plusieurs clubs ont été
                    créés à l'initiative des étudiants avec les encouragements effectifs de l'école.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={6} xs={12}>
                  <p>
                    Outre les 23000 m² couverts, abritant les espaces administratifs et de formation, ESPRIT dispose
                    d'un centre d'hébergement pour ses étudiants et de 2 restaurants. Par ailleurs ESPRIT dispose
                    d'espaces et d'équipements sportifs de qualité, divers et variés, mis à la disposition de ses
                    étudiants et de ses clubs : un terrain de sport polyvalent, une salle de gymnastique, une piscine
                    couverte, avec tous les accessoires nécessaires.
                  </p>
                </Col>
                <Col md={6} xs={12}>
                  <InfrastructureGallery />
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <p>
                    De même, ESPRIT dispose d'une bibliothèque, avec les ouvrages scientifiques et techniques utilisés
                    dans la formation dispensée, mais aussi toute sorte de matières : littéraires, techniques,
                    économiques, financières,…etc.
                  </p>
                  <p>
                    Une connexion haut débit à fibres optiques relie les sites aux réseaux extérieurs et un réseau Wifi
                    couvre chaque site, donnant la possibilité à tous les étudiants, partout où ils se trouvent, et en
                    tout temps, de se connecter dans les conditions les plus confortables.
                  </p>
                  <p>
                    Des plateformes technologiques leur permettent aussi de travailler dans des environnements adaptés à
                    leurs besoins. Plus de 100 ressources pédagogiques sont accessibles et mises à leur disposition : ce
                    sont là des atouts appréciables pour des élèves ingénieurs, qui leur permettent réellement de
                    pouvoir mener parallèlement à leurs études, des activités qui les intéressent et qui complètent et
                    consolident leur formation d'ingénieur.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const batiment1 = {
  src: coursdusoir,
  alt: "Esprit Charguia II",
  title: "Esprit Charguia II",
  text:
    "Créé en 2003, le premier site abrite actuellement les activités de la formation continue, cours du soir, ESPRIT Language Center et le centre de certification Pearson VUE.",
}

const batiment2 = {
  src: espritghazela,
  alt: "SITE PRINCIPAL (El-Ghazela)",
  title: "SITE PRINCIPAL (El-Ghazela)",
  text:
    "Le second site réunit dans un premier bloc les activités de formation initiale d’ingénieurs, cours du jour, pour les spécialités informatique et Télécommunications et dans un deuxième bloc ESPRIT Prépa avec le Centre d’hébergement.",
}

const blocPrincipal = {
  src: blocABC,
  alt: "Bloc A, B et C",
  title: "Bloc A, B et C",
  text: "",
}
const blocAdmin = {
  src: blocE,
  alt: "Bloc E",
  title: "Bloc E",
  text: "",
}
const blocNouveau = {
  src: blocIJK,
  alt: "Bloc I, J et K",
  title: "Bloc I, J et K",
  text: "",
}
//Props Types
Infrastructure.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}
