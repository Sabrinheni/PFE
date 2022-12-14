import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { Embassadeurs as meta } from "./EspritEmbassadeursDictionary"

export default class VieAEsprit extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar />
        <section className="our-blog extract main-blog " style={{ backgroundColor: "white" }}>
          <br></br>
          <br></br> <br></br> <br></br>
          <br></br> <br></br>
          <div
            className="container"
            style={{ backgroundColor: "white", position: "relative", height: "200%", minHeight: "200vh" }}>
            <Row style={{ height: "100%", position: "absolute", top: 0, bottom: 0, left: 0, width: "100%" }}>
              <Col
                style={{
                  position: "absolute",
                  minHeight: "100%",
                  left: 0,
                  height: "100%",
                  width: "100%",
                  top: 0,
                  bottom: 0,
                }}>
                <center>
                  Échangez avec des étudiants et étudiantes qui vous ressemblent! L'équipe d’ambassadeurs et
                  d'ambassadrices à ESPRIT est là pour vous aiguiller, vous assister, vous diriger. Pour des questions
                  reliées à un programme d’études spécifique ou pour des questions plus générales sur l'expérience
                  étudiante à ESPRIT, entrez en contact avec nos ambassadeurs et ambassadrices : ils sauront vous aider!
                </center>
                <div className="container" style={{ position: "relative", height: "100%", minHeight: "100vh" }}>
                  <iframe
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      border: "none",
                    }}
                    data-ub-cookie-consent="necessary"
                    data-ub-lang="fr"
                    id="unibuddy-iframe"
                    scrolling="no"
                    src="https://unibuddy.co/embed/esprit/colour/ffc107"
                    title="Unibuddy"
                    width="100%"></iframe>
                </div>
              </Col>
            </Row>

            <script src="https://cdn.unibuddy.co/unibuddy-iframe.js" type="text/javascript"></script>
          </div>
        </section>
      </>
    )
  }
}
