import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import lan from "../../assets/img/lan.png"

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
                <img src={lan} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Lan Umek</h1>
                  </Col>
                </Row>
              </center>

              <div>
                <br></br>
              </div>
              <div>
                <ul>
                  <p>
                    Lan Umek is an Assistant Professor at Faculty of Public Administration (University of Ljubljana). He
                    holds a PhD degree in Statistics from University of Ljubljana. His research focuses on the
                    development of new algorithms for data mining, subgroup discovery, bibliometric analysis and the
                    analysis of dataset with multiple response variables. Currently, his research is mostly focused on
                    applications of statistical methods in social sciences, especially in topics related to public
                    administration.
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
  Title: "Lan Umek",
  Subtitle: "Recherche, Développement et Innovation",
}
