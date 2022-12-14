import React, { Component } from "react"
import PropTypes from "prop-types"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"
import ScrollAnimation from "react-animate-on-scroll"
import { Row, Col } from "react-bootstrap"

export default class FunFacts extends Component {
  state = {
    didViewCountUp: false,
  }

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true })
    }
  }
  render() {
    return (
      <React.Fragment>
        <section className="fun-facts ptb-100">
          <div className="container">
            <Row>
              <Col lg={{ size: 8 }} className="text-center">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="section-title">
                    <h2>{this.props.sectionTitle}</h2>
                    <p>{this.props.sectionDescription}</p>
                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                  </div>
                </ScrollAnimation>
              </Col>
            </Row>
            <Row>
              <Col lg={2} md={4} sm={6}>
                <div className="count-box text-center">
                  <div className="glyph">
                    <i className="icofont-graduate-alt" />
                  </div>
                  <p>Etudiants</p>
                  <h2 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall>
                      <CountUp start={0} end={this.state.didViewCountUp ? 7000 : 0} duration={3} />
                    </VisibilitySensor>
                  </h2>
                </div>
              </Col>

              <Col lg={2} md={4} sm={6}>
                <div className="count-box text-center">
                  <div className="glyph">
                    <i className="icofont-people" />
                  </div>
                  <p>Enseignants</p>
                  <h2 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall>
                      <CountUp start={0} end={this.state.didViewCountUp ? 300 : 0} duration={3} />
                    </VisibilitySensor>
                  </h2>
                </div>
              </Col>

              <Col lg={2} md={4} sm={6}>
                <div className="count-box text-center">
                  <div className="glyph">
                    <i className="icofont-handshake-deal" />
                  </div>
                  <p>Partenaires</p>
                  <h2 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall>
                      <CountUp start={0} end={this.state.didViewCountUp ? 95 : 0} duration={3} />
                    </VisibilitySensor>
                  </h2>
                </div>
              </Col>
              <Col lg={2} md={4} sm={6}>
                <div className="count-box text-center">
                  <div className="glyph">
                    <i className="icofont-graduate-alt" />
                  </div>
                  <p>Etudiants</p>
                  <h2 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall>
                      <CountUp start={0} end={this.state.didViewCountUp ? 7000 : 0} duration={3} />
                    </VisibilitySensor>
                  </h2>
                </div>
              </Col>

              <Col lg={2} md={4} sm={6}>
                <div className="count-box text-center">
                  <div className="glyph">
                    <i className="icofont-people" />
                  </div>
                  <p>Enseignants</p>
                  <h2 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall>
                      <CountUp start={0} end={this.state.didViewCountUp ? 300 : 0} duration={3} />
                    </VisibilitySensor>
                  </h2>
                </div>
              </Col>

              <Col lg={2} md={4} sm={6}>
                <div className="count-box text-center">
                  <div className="glyph">
                    <i className="icofont-handshake-deal" />
                  </div>
                  <p>Partenaires</p>
                  <h2 className="counter">
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall>
                      <CountUp start={0} end={this.state.didViewCountUp ? 95 : 0} duration={3} />
                    </VisibilitySensor>
                  </h2>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

//Props Types
FunFacts.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
}

//Default Props
FunFacts.defaultProps = {
  SectionbgTitle: "ESPRIT",
  sectionTitle: "ESPRIT en chiffres",
  sectionDescription: "",
}
