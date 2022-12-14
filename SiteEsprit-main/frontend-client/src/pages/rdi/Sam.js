import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import sam from "../../assets/img/sam.png"

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
                <img src={sam} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1> Sampathkumar Veeraraghavan</h1>
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
                    Sampathkumar Veeraraghavan is a globally renowned technologist best known for his technological
                    innovations in addressing global humanitarian and sustainable development challenges. As the 2021
                    IEEE Humanitarian Activities Committee (HAC) Chair, Sampath spearheads the global strategy and
                    portfolio of sustainable development and humanitarian engineering programs to deliver impactful
                    programs at grass root-level. Sampath was the 2019-2020 IEEE SIGHT Chair, leading the program to
                    record-breaking growth through high-impact, technology-driven sustainable programs benefiting
                    members in 117+ countries. He is the founding chair for the IEEE SIGHT day (2020) and SIGHT week
                    (2019), a global program that showcases the impactful IEEE technology-based humanitarian programs.
                    Sampath was an expert in the Broadband Commission working group on school connectivity co-chaired by
                    UNESCO, UNICEF and ITU to drive “GIGA,” a Global School Connectivity Initiative. He is the founder
                    and president of “The Brahmam,” a humanitarian program delivering next-generation social innovations
                    to achieve sustainable development goals and benefit marginalized communities globally. Sampath was
                    recently accredited with the 2020 IEEE Theodore W. Hissey Outstanding Young Professional Award. He
                    currently works as a senior technology and program management leader with Alexa Artificial
                    Intelligence Group at Amazon.
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
  Title: "Sampathkumar Veeraraghavan",
  Subtitle: "Recherche, Développement et Innovation",
}
