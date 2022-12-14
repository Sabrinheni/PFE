import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import mohamed from "../../assets/img/mohamed.png"

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
                <img src={mohamed} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Mohamed Louadi</h1>
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
                    Mohamed Louadi is a Professor of Management Information Systems (MIS) at the Higher Institute of
                    Management of Tunis (ISG). Before joining the University of Tunis, he had held several research and
                    teaching positions: at the University of Pittsburgh (US), the Université du Québec à Trois-Rivières
                    (Canada), Concordia University (Canada), the Higher Colleges of Technology (Dubai), and the American
                    University of Beirut (Lebanon). He has been consultant with several government and non-government
                    organizations. He is also the author of three books on Information & Communication Technologies and
                    MIS.
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
  Title: "Mohamed Louadi",
  Subtitle: "Recherche, Développement et Innovation",
}
