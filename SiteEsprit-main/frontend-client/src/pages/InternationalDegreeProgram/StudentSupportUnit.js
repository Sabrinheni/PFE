import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import "./Intl.css"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
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
                      <a href="/AboutFaculty">About Faculty</a>
                      <a href="/Partners">Partners</a>
                      <a href="/Admissions">Admissions</a>

                      <a href="/Contact-information" class="active">
                        Contact information
                      </a>

                      <a href="#">Frequently Asked Questions (FAQ)</a>
                    </div>
                  </td>
                  &nbsp;
                  <td>
                    <div>
                      <Row>
                        <Col>
                          <h1>Student Support Unit</h1>
                          <CustomHrRed />
                        </Col>
                      </Row>
                    </div>

                    <div className="margin-top-60">
                      <Row style={{ marginBottom: "60px" }}>
                        <Col className="space-items" md={6} xs={12}>
                          <h4 style={{ color: "#ed1c24" }}>PRESENTATION</h4>
                          <p>
                            The Student Support Unit is a confidential space that aims to welcome, understand, support
                            and guide ESPRIT students. It is also dedicated to creating an engaging learning environment
                            that fosters success while addressing barriers to learning that some students encounter on
                            their academic journey.
                          </p>
                          <p>
                            It is a platform where students can talk about their doubts, their problems (educational,
                            psychological...) and find assistance and guidance in different areas (schooling,
                            stress/anxiety, sadness, diffuse...).
                          </p>
                          <p>
                            Listening and self-reflection are a priority to help students elaborate answers adapted to
                            each situation. - In this respect, and if necessary, referrals to different partners can be
                            supported by facilitating and guiding the student in this process.
                          </p>
                        </Col>
                        <Col className="space-items">
                          <h4 style={{ color: "#ed1c24" }}>MISSION</h4>
                          <p>
                            Meet and listen to students on an individual basis upon their request (open hours and
                            appointments).
                          </p>
                          <p>
                            Take in any type of complaint concerning schooling, logistics, and the overall school
                            environment.
                          </p>
                          <p>Be in contact with the class representatives.</p>
                          <p>Provide assistance to students through advice and consistent guidance.</p>
                          <p>Provide referrals to practitioners for therapeutic care if necessary.</p>
                          <p>Suggest preventive measures.</p>
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: "60px" }}>
                        <Col className="space-items" md={6} xs={12}>
                          <h4 style={{ color: "#ed1c24" }}>OPERATING ENVIRONMENT</h4>
                          <p>
                            <strong>Making an appointment</strong>
                          </p>
                          <p>
                            Students in difficulty can make an appointment by phone or email to the Student Support Unit
                            by indicating their phone number, they will be contacted and received as soon as possible:
                          </p>
                          <p>
                            <strong>00216 92234330</strong>
                          </p>
                          <p>
                            <strong>E-mail : cellule.decoute@esprit.tn</strong>
                          </p>
                          <p>
                            <strong>Address: Student Support Unit. RDC block A. ESPRIT EL GHAZELA</strong>
                          </p>
                          <p>
                            The Student Support Unit works on the basis of free membership of the students: this step
                            must remain voluntary.
                          </p>
                          <p>
                            <strong>Members Commitment</strong>
                          </p>
                          <p>
                            - All the documents that the unit is aware of are only intended for internal reference, and
                            will not appear in the medical or administrative file of the student
                          </p>
                          <p>
                            - Each member has a duty of utmost discretion and confidentiality and undertakes not to
                            disseminate any information neither during the processing of the file, nor after its
                            archiving and whatever the outcome
                          </p>
                          <p>
                            <strong>Commitment of the institution. </strong>
                          </p>
                          <p>
                            - Technical and organizational means will be provided in order to optimize the activities of
                            the Unit
                          </p>
                          <p>
                            - The University undertakes particularly to respect the schedules necessary for the
                            functioning of the members of the unit
                          </p>
                          <p>
                            <strong>Ethical guidelines for the members</strong>
                          </p>
                          <p>Preservation of medical confidentiality and guidelines of confidentiality:</p>
                          <p>
                            - Confidentiality is essential for the efficiency of the work within the unit. It applies to
                            all members of the unit.
                          </p>

                          <p>
                            - The latter undertake to disclose the information gathered only to the members of the unit,
                            during meetings to analyze the case, or during restricted working meetings, as part of the
                            search for solutions.
                          </p>
                          <p>Guidelines of transparent commitment</p>

                          <p>Guidelines of specificity of the request</p>
                          <p>
                            - During the analysis of the request, the search for and the implementation of solutions,
                            the members of the unit must limit themselves to the field and the situation which was the
                            subject of the request. Guidelines of collaboration with specialists
                          </p>

                          <p>
                            - In this respect, and if necessary, referrals to different partners can be supported by
                            facilitating and accompanying the student in this process.
                          </p>
                          <p>Guidelines of distancing oneself in the search for a solution</p>

                          <p>
                            - All members of the team are committed to improving the overall situation, without
                            systematically favouring one solution. The global improvement of a situation must be
                            understood as the return to the person of a real maneuver with regard to his problem.
                          </p>
                        </Col>
                      </Row>
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
