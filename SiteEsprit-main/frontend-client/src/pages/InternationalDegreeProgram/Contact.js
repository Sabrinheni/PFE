import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import "./Intl.css"
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
                    <LinkDuo target="_blank" rel="noopener noreferrer" to={"mailto:khaled.hafaiedh@esprit.tn"}>
                      khaled.hafaiedh@esprit.tn
                    </LinkDuo>
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
