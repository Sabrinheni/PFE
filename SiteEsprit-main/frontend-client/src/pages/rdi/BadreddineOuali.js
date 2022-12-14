import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import Badreddine from "../../assets/img/Badreddine.png"

export default class QuiSommesNous extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <div className="margin-top-60">
              <center>
                <img src={Badreddine} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Badreddine Ouali</h1>
                  </Col>
                </Row>
              </center>
              <div>
                <br></br>
              </div>
              <div>
                <ul>
                  <li>Bio:</li>
                  <p>
                    {" "}
                    Badreddine Ouali is the Chairman and founder of Vermeg SARL, one of the largest software companies
                    in Tunisia and abroad. He graduated from École Nationale Supérieure des Mines de Saint-Étienne
                    (1986). Badreddine is an active supporter of entrepreneurship in Tunisia and has worked with many
                    entrepreneurship support agencies such as Réseau Entreprendre Tunisie, TACT, and QFF. He is the
                    founder and president of Tunisia Foundation for Development and sits on the boards of other
                    companies in the Middle East, Europe and the United States
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: "",
  Title: "Esprit-Tech",
  Subtitle: "Recherche, Développement et Innovation",
}
