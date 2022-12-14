import { Container, Row } from "react-bootstrap"
import PropTypes from "prop-types"
import React, { Component } from "react"

import Lightbox from "react-image-lightbox"

const images = [
  require("../../assets/img/bibliotheque.jpg"),
  require("../../assets/img/salle_de_sport.jpg"),
  require("../../assets/img/piscine.jpg"),
]

const smallImages = [
  require("../../assets/img/bibliotheque.jpg"),
  require("../../assets/img/salle_de_sport.jpg"),
  require("../../assets/img/piscine.jpg"),
]

export default class InfrastructureGallery extends Component {
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
        <section id="works" className="our-works">
          <Container>
            <div className="mdb-lightbox no-margin">
              <Row>
                <div className="col-md-6 col-lg-4">
                  <div className="work-details">
                    <figure>
                      <img src={smallImages[0]} alt="Bibliotheque Esprit" className="img-fluid" />
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
                      <img src={smallImages[1]} alt="Salle De Sport Esprit" className="img-fluid" />
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
                      <img src={smallImages[2]} alt="Piscine Esprit" className="img-fluid" />
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
//Props Types
InfrastructureGallery.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
}

//Default Props
InfrastructureGallery.defaultProps = {
  SectionbgTitle: "works",
  sectionTitle: "works",
  sectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat hendrerit dictum. Praesent porta, purus eget sagittis imperdiet.",
}
