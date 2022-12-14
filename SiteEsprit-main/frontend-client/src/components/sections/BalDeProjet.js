import React from "react"
import { Row, Col } from "react-bootstrap"

import baldeprojet from "../../assets/img/BDP.jpg"

export default function BalDeProjet() {
  return (
    <Row>
      <Col md={6} xs={12} style={{ display: "flex", placeContent: "center", margin: "50px auto" }}>
        <a href="http://esprit.tn/bal" target="_blank" rel="noopener noreferrer">
          <img src={baldeprojet} alt="Bal de projet" style={{ width: "100%" }}></img>
        </a>
      </Col>
    </Row>
  )
}
