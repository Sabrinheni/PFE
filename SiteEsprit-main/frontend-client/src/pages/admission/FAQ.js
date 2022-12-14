import FAQ from "components/FAQ"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { FAQ as meta } from "./AdmissionDictionary"

export default class ESB extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row>
              <Col>
                <FAQ />
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  }
}
const breadcrumb = {
  src: "",
  Title: "ESPRIT INGÉNIEUR",
  Subtitle: "F.A.Q",
}
//Props Types
ESB.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}
