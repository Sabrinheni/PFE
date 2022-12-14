import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import mourad from "../../assets/img/mourad.png"

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
                <img src={mourad} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Mourad Zerai</h1>
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
                    Mourad Zerai is an Associate professor and the Director of Academic Affairs at ESPRIT School of
                    Engineering. He is also a research associate at the “Laboratoire de Modélisation Mathématique et
                    Numérique pour les Sciences de l’Ingénieur” (LAMSIN) of the Ecole Nationale d’Ingénieurs de Tunis
                    (ENIT). He is a University Ambassador of the NVIDIA Deep Learning Institute. Mourad research
                    interest is on the application of image processing, mathematical modeling, machine learning and AI
                    approaches to address real-world problems. He holds an engineering degree and a PhD in applied
                    mathematics from ENIT .
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
  Title: "Mourad Zerai",
  Subtitle: "Recherche, Développement et Innovation",
}
