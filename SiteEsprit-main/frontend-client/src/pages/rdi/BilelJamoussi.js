import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import bilel from "../../assets/img/bilel.png"

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
                <img src={bilel} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Bilel Jamoussi</h1>
                  </Col>
                </Row>
              </center>

              <div>
                <br></br>
              </div>
              <div>
                <ul>
                  <p>
                    A distinguished engineer, leader, and diplomat; multilingual standardization expert and holder of 22
                    patents, Tunisian born Dr. Bilel Jamoussi has been Chief of the Study Groups Department of ITU
                    Standardization Bureau (TSB) in Geneva Switzerland since 2010.
                  </p>
                  <p>
                    He has led the coordination of the bureau’s standards moving activities into a new era characterized
                    by digital transformation that needs an increased collaboration with vertical sectors such as
                    healthcare, transportation, utility, and banking.
                  </p>
                  <p>
                    His innovative approach has served as a catalyst to launch new standards initiatives related to
                    emerging technologies such as IoT, Blockchain, AI and Quantum, attracting a new wave of memberships
                    from non-traditional players.
                  </p>
                  <p>
                    He has also been credited with bringing the telco and financial sectors together to develop digital
                    payments guidelines and standards with the aim of advancing financial inclusion globally.
                  </p>
                  <p> Bilel is recognized as a key figure in the ICT industry.</p>
                  <p>
                    {" "}
                    Key achievements under his tenure have been important new standards while effectively managing staff
                    by recruiting new talent, improving gender balance, delivering new work methods, and staying within
                    budget.
                  </p>
                  <p>
                    {" "}
                    Prior to 2010, he worked in the private sector for 15 years and held senior executive positions such
                    as Director of Standards for Nortel. In this role he participated in over 90 standards making bodies
                    worldwide. In the Internet Engineering Task Force (IETF), he authored a number of Internet
                    standards.
                  </p>
                  <p>
                    {" "}
                    As an IEEE Senior Member, he was elected to the IEEE Standards Association (IEEE-SA) Board of
                    Governors and the IEEE-SA Corporate Advisory Group.
                  </p>
                  <p>
                    He holds a BSc, MSc and PhD degrees in Computer Engineering from the Pennsylvania State University,
                    USA.
                  </p>
                  <p>
                    Bilel has lived in Tunisia, Canada, USA, and Switzerland, giving him a unique global viewpoint. He
                    is fluent in Arabic, French, and English and speaks some Spanish and German.
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
