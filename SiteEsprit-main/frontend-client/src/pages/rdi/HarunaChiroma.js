import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import haruna from "../../assets/img/haruna.png"

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
                {" "}
                <img src={haruna} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Haruna Chiroma</h1>
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
                    Haruna Chiroma is an Assistant Professor at the University of Hafr Al Batin, KSA. Prior to that, he
                    was a faculty member at the Future Technology Research Center, National Yunlin University of Science
                    and Technology, Taiwan. He holds a Phd degree in Computer Science from the University of Malaya,
                    Kuala Lumpur, Malaysia (2016). Chiroma research interest is on machine learning with emphasis on
                    deep learning, nature-inspired algorithms, with special focus on their applications to internet of
                    things, big data analytics, next generation cloud computing and cybersecurity. He is Associate
                    Editor, IEEE Access; Leading Guest Editor, Mathematical Problems in Engineering; and Guest Editor,
                    BioMed Research International . He is also a member of the IEEE, ACM, NCS, INNS, and IAENG .
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
  Title: "Haruna Chiroma",
  Subtitle: "Recherche, Développement et Innovation",
}
