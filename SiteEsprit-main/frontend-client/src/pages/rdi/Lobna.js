import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import Lobna from "../../assets/img/lobna.png"

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
                <img src={Lobna} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Lobna Karoui</h1>
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
                    Dr. Lobna Karoui is an exponential optimist. She believes in a bright Trust Technologies Future and
                    our ability to build it together. Dr. Lobna Karoui is an Artificial Intelligence Trust Builder and
                    results-oriented with more than two decades experience driving Digital Transformations across
                    industries, sectors and countries. Lobna is a Digital Transformation Director in Tech industry
                    Fortune 500 who helps large organizations thrive in the Exponential Digital Era by harnessing the
                    power of data and AI and bringing digital capabilities to fuel business growth revenues. She is a
                    Google recognized Expert about “Disruption, Empathy and Trust” and one of the 1000 AI experts in the
                    world who signed “Autonomous Weapons: an Open Letter” with Stephen Hawking and Elon Musk. Dr. Karoui
                    was graduate from CentraleSupelec and Yale. As a digital transformer and Tech philanthropist, she is
                    invited as a contributor at Forbes, MIT, Women Forum Economic & society and as a speaker at Harvard
                    University, Stanford, Amazon, Bloomberg. Lobna Karoui is the President of AI Exponential Thinker
                    with the mission to educate and empower 1 Million young people, horizon 2025, about TRUST
                    Technologies and Artificial Intelligence Opportunities. As a Futurist, researcher and podcast
                    producer, she invites Exponential Thinkers from various organizations such as Google, Amazon,
                    Nvidia, WEF, Harvard Business School to share their visions about the Future of Work and Education
                    in this times of Exponential Technologies.
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
  Title: "Lobna Karoui",
  Subtitle: "Recherche, Développement et Innovation",
}
