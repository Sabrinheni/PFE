import { Container, Row } from "react-bootstrap"
import React, { Component } from "react"

import Lightbox from "react-image-lightbox"

const images = [
  require("../../assets/img/etudiants1.jpg"),
  require("../../assets/img/etudiants2.jpg"),
  require("../../assets/img/etudiants3.jpg"),
  require("../../assets/img/etudiants4.jpg"),
  require("../../assets/img/etudiants5.jpg"),
  require("../../assets/img/etudiants6.jpg"),
]

const smallImages = [
  require("../../assets/img/etudiants1.jpg"),
  require("../../assets/img/etudiants2.jpg"),
  require("../../assets/img/etudiants3.jpg"),
  require("../../assets/img/etudiants4.jpg"),
  require("../../assets/img/etudiants5.jpg"),
  require("../../assets/img/etudiants6.jpg"),
]

export default class VieEcole extends Component {
  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
      isOpen: false,
    }
  }

  render() {
    const { photoIndex, isOpen } = this.state
    return (
      <>
        <section id="works" className="our-works ptb-100">
          <Container>
            <div className="mdb-lightbox no-margin">
              <Row>
                <div className="col-md-6 col-lg-4">
                  <div className="work-details">
                    <figure>
                      <img src={smallImages[0]} alt="Etudiant(s) Esprit" className="img-fluid" />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span
                              href="ll"
                              onClick={() => this.setState({ photoIndex: 0, isOpen: true })}
                              className="popup-btn">
                              <i className="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="work-details">
                    <figure>
                      <img src={smallImages[1]} alt="Etudiant(s) Esprit" className="img-fluid" />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span
                              href="ll"
                              onClick={() => this.setState({ photoIndex: 1, isOpen: true })}
                              className="popup-btn">
                              <i className="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="work-details">
                    <figure>
                      <img src={smallImages[2]} alt="Etudiant(s) Esprit" className="img-fluid" />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span
                              href="ll"
                              onClick={() => this.setState({ photoIndex: 2, isOpen: true })}
                              className="popup-btn">
                              <i className="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="work-details">
                    <figure>
                      <img src={smallImages[3]} alt="Etudiant(s) Esprit" className="img-fluid" />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span
                              href="ll"
                              onClick={() => this.setState({ photoIndex: 3, isOpen: true })}
                              className="popup-btn">
                              <i className="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="work-details">
                    <figure>
                      <img src={smallImages[4]} alt="Etudiant(s) Esprit" className="img-fluid" />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span
                              href="ll"
                              onClick={() => this.setState({ photoIndex: 4, isOpen: true })}
                              className="popup-btn">
                              <i className="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                  </div>
                </div>

                <div className="col-md-6 col-lg-4">
                  <div className="work-details">
                    <figure>
                      <img src={smallImages[5]} alt="Etudiant(s) Esprit" className="img-fluid" />
                      <div className="box-content">
                        <ul className="icon">
                          <li>
                            <span
                              href="ll"
                              onClick={() => this.setState({ photoIndex: 5, isOpen: true })}
                              className="popup-btn">
                              <i className="icofont-search-2" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </figure>
                  </div>
                </div>
              </Row>
            </div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                imageTitle={photoIndex + 1 + "/" + images.length}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Container>
        </section>
      </>
    )
  }
}
