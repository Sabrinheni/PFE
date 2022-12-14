import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import "./Intl.css"
import { InternationalDegreeProgram as meta } from "./InternationalDegreeDictionary"
import LinkDuo from "components/utils/LinkDuo"
import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import DownloadButton from "components/DownloadButton"
import file4 from "../../assets/files/règlement_concours_dadmission_21-22.pdf"
import admission from "../../assets/img/admissionathome.png"
import arrowsrc from "../../assets/img/arrow.ico"

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
                      <a href="/Admissions" class="active">
                        Admissions
                      </a>

                      <a href="/Contact-information">Contact information</a>

                      <a href="#">Frequently Asked Questions (FAQ)</a>
                    </div>
                  </td>
                  &nbsp;
                  <td>
                    <br></br>
                    <center>
                      <Row>
                        <Col md={4} xs={12}>
                          <LinkDuo
                            className="custom-button btn width100"
                            to={"https://esprit-tn.com/admission/admission_cj_eng.aspx"}>
                            <span>Daytime study (Tunisian students) </span>
                          </LinkDuo>
                        </Col>
                        <Col md={4} xs={12}>
                          <LinkDuo
                            className="custom-button btn width100"
                            to={"https://esprit-tn.com/admission/admission_cj_eng.aspx"}>
                            <span>Daytime study (international students) </span>
                          </LinkDuo>
                        </Col>
                      </Row>
                    </center>
                    <Row>
                      <Col md={12}>
                        <div>
                          <h3 className="text-esprit">For further information, please send an email to:</h3>
                          <LinkDuo
                            target="_blank"
                            rel="noopener noreferrer"
                            to={"mailto:reclamation.admission2021@esprit.tn"}>
                            reclamation.admission2021@esprit.tn
                          </LinkDuo>
                          <h5 style={{ color: "#1E90FF" }}>Or call: 70 250 068</h5>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6} xs={12} style={{ display: "flex", placeContent: "center", alignItems: "center" }}>
                        <p
                          style={{
                            padding: "30px",
                            borderRadius: "15px",
                            backgroundColor: "#cd2122",
                            textAlign: "center",
                            fontWeight: "600",
                            color: "white",
                            margin: "0",
                            textTransform: "uppercase",
                          }}>
                          TO ENSURE THE SAFETY AND HEALTH OF EACH CANDIDATE,
                          <br /> THE ENTRANCE EXAM WILL BE CONDUCTED ENTIRELY ONLINE.
                        </p>
                      </Col>
                      <Col md={6} xs={12} style={{ display: "flex", placeContent: "center" }}>
                        <img src={admission} alt="ESPRIT altérnance" style={{ width: "100%" }}></img>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={8} className="pad-right-desk-100">
                        <div style={{ display: "flow-root" }}>
                          <h3 className="text-esprit">Admissions requirements: </h3>
                          <CustomHrGray />
                        </div>
                        <br />
                        <h3>First year (freshmen):</h3>
                        <p>Holders of a Scientific or Technical Baccalaureate Degree</p>
                        <h3>Third year A:</h3>
                        <p>Holders of a license or equivalent degrees in line with the speciality requested</p>

                        <h3>Third year B:</h3>
                        <p>Holders of a non - Computer Science Licence</p>
                      </Col>
                      <Col className="gris">
                        <div style={{ display: "flow-root" }}>
                          <h3 className="text-esprit">Useful links</h3>
                          <CustomHrGray />
                        </div>
                        <br />
                        <style
                          dangerouslySetInnerHTML={{
                            __html: [
                              " .gris .custom-button {",
                              "  background-color:#848484;",
                              "}",
                              " .gris .custom-button:hover {",
                              "  background-color:#a41a1b;",
                              "}",
                            ].join("\n"),
                          }}></style>

                        <Row>
                          <Col>
                            <LinkDuo className="custom-button btn width100" to={"/ContactInformation"}>
                              <span>Information for international students</span>
                            </LinkDuo>
                          </Col>
                        </Row>

                        <Row>
                          <Col>
                            <LinkDuo className="custom-button btn width100" to={"/Catering-Accomodation"}>
                              <span>Food and accommodation </span>
                            </LinkDuo>
                          </Col>
                        </Row>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={8} xs={12}>
                        <Row>
                          <Col md={12}>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Entrance Examination Process:</h3>
                              <CustomHrGray />
                            </div>
                            <p style={{ fontSize: "16px" }}>Admissions process:</p>
                            <ul style={{ fontSize: "16px" }} className="services-box-list">
                              The admissions process is divided into two steps:<br></br>
                              <li>- Portfolio review</li>
                              <li>- Online Interviews</li>
                            </ul>
                          </Col>
                        </Row>
                      </Col>
                      <Col md={4} xs={12}>
                        <Row>
                          <Col md={9}>
                            <div>
                              <h3 className="text-esprit">Contest rules</h3>
                              <CustomHrGray />
                            </div>
                            <style
                              dangerouslySetInnerHTML={{
                                __html: [
                                  "   .download-button {",
                                  "  height: 50px!important;",
                                  "   font-size:14px!important;",
                                  "   float:left!important;",
                                  "}",
                                ].join("\n"),
                              }}></style>
                            <DownloadButton data={reglement} />
                          </Col>
                        </Row>
                      </Col>
                    </Row>
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
const reglement = {
  link: file4,
  text: "Download",
  src: arrowsrc,
}

const breadcrumb = {
  Title: "International Degree Program",
}
