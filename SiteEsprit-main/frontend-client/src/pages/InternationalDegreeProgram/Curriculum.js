import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import "./Intl.css"
import file1a from "../../assets/files/1A.pdf"
import file2a from "../../assets/files/2A.pdf"
import file3a from "../../assets/files/3A.pdf"
import file3b from "../../assets/files/3B.pdf"
import file4ds5 from "../../assets/files/4DS+5DS.pdf"
import { InternationalDegreeProgram as meta } from "./InternationalDegreeDictionary"
import LinkDuo from "components/utils/LinkDuo"
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
                      <a href="/StudyProgram" class="active">
                        Study Program
                      </a>
                      <a href="/AboutFaculty">About Faculty</a>
                      <a href="/Partners">Partners</a>
                      <a href="/Admissions">Admissions</a>

                      <a href="/Contact-information">Contact information</a>

                      <a href="#">Frequently Asked Questions (FAQ)</a>
                    </div>
                  </td>
                  &nbsp;
                  <td>
                    1st year:
                    <Row>
                      <Col>
                        <LinkDuo
                          className="custom-button btn width100"
                          rel="noopener noreferrer"
                          target="_blank"
                          to={file1a}>
                          <span>1A</span>
                        </LinkDuo>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        2nd year:
                        <LinkDuo
                          className="custom-button btn width100"
                          rel="noopener noreferrer"
                          target="_blank"
                          to={file2a}>
                          <span>2A</span>
                        </LinkDuo>
                      </Col>
                    </Row>
                    3rd year:
                    <Row>
                      <Col>
                        <LinkDuo
                          className="custom-button btn width100"
                          rel="noopener noreferrer"
                          target="_blank"
                          to={file3a}>
                          <span>3A</span>
                        </LinkDuo>
                      </Col>
                      <Col>
                        <LinkDuo
                          className="custom-button btn width100"
                          rel="noopener noreferrer"
                          target="_blank"
                          to={file3b}>
                          <span>3B</span>
                        </LinkDuo>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        4th year + 5th year:
                        <LinkDuo
                          className="custom-button btn width100"
                          rel="noopener noreferrer"
                          target="_blank"
                          to={file4ds5}>
                          <span>4DS+5DS</span>
                        </LinkDuo>
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
const breadcrumb = {
  Title: "International Degree Program",
}
