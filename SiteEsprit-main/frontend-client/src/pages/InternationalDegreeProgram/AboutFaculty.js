import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import "./Intl.css"
import faouzi from "../../assets/img/faouzi.png"
import achref from "../../assets/img/achref.png"

import { InternationalDegreeProgram as meta } from "./InternationalDegreeDictionary"
export default class VieAEsprit extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container" style={{ position: "relative", height: "100%", minHeight: "100vh" }}>
            <div>
              <center>
                <Row>
                  <Col md={12} xs={12}>
                    <h1>International Degree Program :</h1>
                  </Col>
                </Row>
              </center>
            </div>
            <table class="lignesEspacees">
              <div className="container" style={{ position: "relative", height: "100%", minHeight: "100vh" }}>
                <tr>
                  <td>
                    <div class="vertical-menu">
                      <a href="/AboutEsprit">About ESPRIT</a>
                      <a href="/StudyProgram">Study Program</a>
                      <a href="/AboutFaculty" class="active">
                        About Faculty
                      </a>
                      <a href="/Partners">Partners</a>
                      <a href="/Admissions">Admissions</a>

                      <a href="/Contact-information">Contact information</a>

                      <a href="#">Frequently Asked Questions (FAQ)</a>
                    </div>
                  </td>
                  <td>
                    <Row>
                      <Col></Col>
                    </Row>
                    <div style={{ display: "flow-root" }}>
                      <center>
                        <img src={faouzi} alt="empty" width="200" height="200" />
                      </center>
                    </div>
                    <center>
                      <h4>
                        Faouzi Kammoun <br></br>{" "}
                      </h4>
                    </center>
                    <p>
                      A professor and Director of the Research, Development & Innovation (RDI) Office at ESPRIT School
                      of Engineering, Tunisia. He holds a PhD degree in Electrical & Computer Engineering from Concordia
                      University and an MBA in Management from McGill University, Canada.
                    </p>{" "}
                    <div>
                      <p>
                        {" "}
                        He started his professional career in 1995, as senior systems engineer/technical advisor at
                        Nortel Networks. He moved to the UAE in 2002, where he held various academic and administrative
                        positions, including Dean of the College of IT at the University of Dubai (2009-2012) and Acting
                        and Associate Dean of the College of Technological Innovation at Zayed University (2014-2015).
                      </p>
                      <p>
                        Since 2015, he has been with ESPRIT School of Engineering Tunisia where he leads many funded RDI
                        projects on smart-cities, social innovation, technology management, networking, and
                        cybersecurity. He also teaches senior courses related to Wireless Sensor Networks, Networking,
                        Operations Research, and IoT.{" "}
                      </p>
                      <p>
                        Dr Kamoun was the recipient of many awards, including an IBM Research Award (2008) and the
                        University of Dubai best faculty award (2004).
                      </p>
                      <p>
                        {" "}
                        During the period 2012-2014, he was the founder and Director of the Intelligent Remote Sensing
                        and Tracking Lab at Zayed University.{" "}
                      </p>
                      <p>
                        Dr Kamoun is a member of the editorial board of many international journals, including the
                        International Journal on Advances in Intelligent Systems, the International Arab Journal of
                        e-Technology (IAJeT), the Aceh International Journal of Science & Technology (AIJST) and the
                        International Journal of Security in Computer Networks and Distributed Systems (IJSCNDS).
                      </p>
                      <p>
                        {" "}
                        He has published more than 70 scientific papers in International journals and conference
                        proceedings.
                      </p>
                    </div>
                    <hr></hr>
                    <div style={{ display: "flow-root" }}>
                      <center>
                        <img src={achref} alt="empty" width="200" height="200" />
                      </center>
                    </div>
                    <center>
                      <h4>Achref Lemjid</h4>
                    </center>
                    <p>
                      Achref Lemjid is an Assistant professor and researcher at ESPRIT. He holds a PhD degree in
                      mathematics from faculty of science of Tunis El Manar. He started his professional career in 2011,
                      as contractual assistant professor. He moved to Sweden in 2016, where he was a researcher at
                      Linnaeus university, Växjö.
                    </p>
                    <div>
                      <p>
                        Dr. Achref is guest lecturer at Bergische Universität Wuppertal, Germany and Linnaeus
                        university, Sweden. He has been teaching courses at all levels from the large mathematical
                        fields of analysis, probability theory and statistics, stochastic process, algebra, and
                        Financial mathematical modeling. The field of research of Dr. Achref is Stochastic Analysis and
                        applications, Quantum field theory, Quantum probability and White Noise analysis
                      </p>
                      <p>
                        He participated in many international conferences and workshop at Linnaeus University Växjö,
                        Bergische Universität Wuppertal, Toulouse III- Paul Sabatier University, Kulliyyah of science
                        international islamic university Malaysia, Technishe Universitat Kaiserslautern, in Germany and
                        Loughborough University in England.<br></br> Dr. Achref has published 5 scientific papers in
                        international journals.
                      </p>
                    </div>
                  </td>
                </tr>
              </div>
            </table>
          </div>
        </section>
      </>
    )
  }
}
const breadcrumb = {
  Title: "International Degree Program",
}
