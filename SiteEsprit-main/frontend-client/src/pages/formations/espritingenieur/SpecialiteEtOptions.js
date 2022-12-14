import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import Unit from "components/Unit"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import ModalVideo from "react-modal-video"
import "react-modal-video/css/modal-video.min.css"
import { SpecialiteEtOptions as meta } from "../FormationsDictionary"

export default class SpecialiteEtOptions extends Component {
  constructor() {
    super()
    this.state = {
      isOpen: false,
    }
    this.openModal = this.openModal.bind(this)
  }
  openModal() {
    this.setState({ isOpen: true })
  }

  setActive(id) {
    var elem = document.getElementsByClassName("section--active")
    if (elem) {
      elem[0].classList.remove("section--active")
      document.getElementById(id).classList.add("section--active")
    }
  }

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
                  <h1>Spécialités Et Options</h1>
                  <CustomHrRed />
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col md={9}>
                  <p>
                    S'appuyant sur une recherche de haut niveau, les enseignements se caractérisent par la richesse, la
                    qualité et l'innovation pédagogique.
                  </p>
                  <p>
                    Les spécialités répondent parfaitement à la diversification croissante des métiers de la société de
                    l'information.
                  </p>
                  <p>
                    Un accent tout particulier est mis sur les qualités humaines, la maîtrise du management, la capacité
                    à travailler dans un contexte pluriculturel et la responsabilisation face à la puissance des
                    technologies dont les diplômés d’Esprit seront experts.
                  </p>
                </Col>
                <Col>
                  <section className="video-area-custom video-bg-bal">
                    <div className="diplay-table">
                      <div className="display-table-cell">
                        <div className="video-inner-content" style={{ marginTop: "0px" }}>
                          <div className="button__holder">
                            <ModalVideo
                              channel="youtube"
                              isOpen={this.state.isOpen}
                              videoId="ZzWlMZRRj4w"
                              onClose={() =>
                                this.setState({
                                  isOpen: false,
                                })
                              }
                            />
                            <span onClick={this.openModal} className="plus popup-youtube"></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <div id="specialites-section">
          <nav className="nav nav--active">
            <ul className="nav__list">
              {/* <li className="nav__item color1">
                <button onClick={e => this.setActive("TIC")} href="#" className="nav__link">
                  <div className="nav__thumb " data-letter="TIC"></div>
                  <p className="nav__label">Tronc commun</p>
                </button>
              </li> */}
              <li className="nav__item color1">
                <button onClick={e => this.setActive("TICIT")} className="nav__link">
                  <div className="nav__thumb " data-letter="IT"></div>
                  <p className="nav__label">IT 2ème cycle</p>
                </button>
              </li>
              <li className="nav__item color2">
                <button onClick={e => this.setActive("TICTC")} className="nav__link">
                  <div className="nav__thumb " data-letter="TC"></div>
                  <p className="nav__label">TC 2ème cycle</p>
                </button>
              </li>
              <li className="nav__item color3">
                <button onClick={e => this.setActive("GC")} className="nav__link">
                  <div className="nav__thumb " data-letter="GC"></div>
                  <p className="nav__label">Genie Civil</p>
                </button>
              </li>
              {/* <li className="nav__item color5">
                <button onClick={e => this.setActive("GEC")} className="nav__link">
                  <div className="nav__thumb " data-letter="GE1"></div>
                  <p className="nav__label">GE tronc commun</p>
                </button>
              </li> */}
              <li className="nav__item color4">
                <button onClick={e => this.setActive("GE")} className="nav__link">
                  <div className="nav__thumb " data-letter="GE"></div>
                  <p className="nav__label">GE 2ème cycle</p>
                </button>
              </li>
            </ul>
          </nav>
          <div className="page">
            {/* <section className="section section--active " id="TIC" data-letter="TIC">
              <article className="section__wrapper color1">
                <h1 className="section__title">TIC : tronc commun : 1er & 2ème cycle</h1>
                <Row>
                  <Unit type="ticCommun"></Unit>
                </Row>
              </article>
            </section> */}
            <section className="section section--active " id="TICIT" data-letter="IT">
              <article className="section__wrapper color1">
                <h1 className="section__title">Spécialité Informatique</h1>
                <p style={{ color: "black", fontSize: "16px" }}>
                  Maitrise des techniques du génie logiciel (méthodes, langages et outils) et de l'interaction
                  utilisateur pour la conception des logiciels embarqués et des systèmes d'information. Acquisition des
                  compétences sur la conception et le déploiement de systèmes et réseaux à l’interface
                  logiciel/matériel. La spécialité informatique se divise en 1 er cycle tronc commun avec la spécialité
                  télécommunication et un deuxième cycle composé de différents parcours qui représentent des options.
                </p>
                <Row>
                  <Unit type="ticDeuxieme"></Unit>
                </Row>
              </article>
            </section>
            <section className="section" id="TICTC" data-letter="TC">
              <article className="section__wrapper color2">
                <h1 className="section__title">Spécialité Télécommunications</h1>
                <p style={{ color: "black", fontSize: "16px" }}>
                  Participer à l'optimisation des systèmes de communication, de la recherche à la conception
                  d'équipements et de services en passant par la gestion d'infrastructures réseaux.
                </p>
                <Row>
                  <Unit type="tcDeuxieme"></Unit>
                </Row>
              </article>
            </section>
            <section className="section" id="GC" data-letter="GC">
              <article className="section__wrapper color3">
                <h1 className="section__title">Génie Civil 1er et 2ème cycles</h1>
                <Row>
                  <Unit type="genieCivil"></Unit>
                </Row>
              </article>
            </section>
            {/* <section className="section " id="GEC" data-letter="GEC">
              <article className="section__wrapper color5">
                <h1 className="section__title">Génie Electromécanique</h1>
                <Row>
                  <Unit type="geCommun"></Unit>
                </Row>
              </article>
            </section> */}
            <section className="section " id="GE" data-letter="GE">
              <article className="section__wrapper color4">
                <h1 className="section__title">G EM 2ème cycle : Les Options</h1>
                <Row>
                  <Unit type="geDeuxieme"></Unit>
                </Row>
              </article>
            </section>
          </div>
        </div>
      </>
    )
  }
}
const breadcrumb = {
  Title: "Spécialités et Options",
  Subtitle: "Quoi choisir ?",
}
