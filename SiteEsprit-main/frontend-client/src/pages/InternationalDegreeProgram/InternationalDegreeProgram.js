import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import "./Intl.css"
import ClasseIternationale from "../../assets/files/ClasseInternationale.pdf"
import activityreport from "../../assets/files/activity-report.pdf"
import { Col, Row } from "react-bootstrap"
import DSC from "../../assets/img/DSC.JPG"
import LinkDuo from "components/utils/LinkDuo"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import { InternationalDegreeProgram as meta } from "./InternationalDegreeDictionary"
export default class InternationalDegreeProgram extends Component {
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
            <Row>
              <Col md={12} xs={12}>
                <table class="lignesEspacees">
                  <tr>
                    <td>
                      <div class="vertical-menu">
                        <a href="/AboutEsprit">About ESPRIT</a>
                        <a href="/StudyProgram">Study Program</a>
                        <a href="/AboutFaculty">About Faculty</a>
                        <a href="/Partners">Partners</a>
                        <a href="/Admissions">Admissions</a>

                        <a href="/Contact-information">Contact information</a>

                        <a href="#">Frequently Asked Questions (FAQ)</a>
                      </div>
                    </td>
                    <div>
                      <td>
                        <div>
                          <h3>Presentation</h3>
                          <CustomHrRed />
                          <p>
                            The International Degree Program is a program that will entirely and exclusively be
                            conducted in English. It provides English-language instruction in an English-speaking
                            environment, i.e., by adopting an English-language curriculum.{" "}
                          </p>
                          <p>
                            This is an innovative and exclusive school project that will be launched by Esprit for the
                            upcoming academic year (2021-2022).
                          </p>

                          <h3>Objective</h3>
                          <CustomHrRed />
                          <p>
                            The International Degree Program aims to train bilingual ICT engineers for a promising
                            international career.{" "}
                          </p>
                          <p>
                            {" "}
                            It also facilitates the integration of English-speaking students into Esprit's educational
                            system as well as their potential academic and professional reintegration in their home
                            country.{" "}
                          </p>
                          <p>
                            The International Degree Program will welcome both Tunisian and international students in
                            the same class, offering them the possibility to follow scientific and technical education
                            (lessons, tutorials, practicals and projects...) exclusively in English, with respect to
                            Esprit's pedagogical approaches.
                          </p>

                          <Row>
                            <Col>
                              <LinkDuo
                                className="custom-button btn width100"
                                rel="noopener noreferrer"
                                target="_blank"
                                to={ClasseIternationale}>
                                <span>Download Leaflet </span>
                              </LinkDuo>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <LinkDuo
                                className="custom-button btn width100"
                                rel="noopener noreferrer"
                                target="_blank"
                                to={activityreport}>
                                <span>Download Activity report</span>
                              </LinkDuo>
                            </Col>
                          </Row>

                          <Row style={{ display: "flex", textAlign: "center", placeContent: "center" }}>
                            <Col md={6} xs={12}>
                              <center>
                                <img src={DSC} alt="empty" style={{ width: "100%" }}></img>
                              </center>
                            </Col>
                          </Row>
                        </div>
                      </td>
                    </div>
                  </tr>
                </table>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  }
}
const breadcrumb = {
  Title: "International Degree Program",
}
