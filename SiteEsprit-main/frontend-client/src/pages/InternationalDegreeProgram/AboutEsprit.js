import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import "./Intl.css"
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
                      <a href="/AboutEsprit" class="active">
                        About ESPRIT
                      </a>
                      <a href="/StudyProgram">Study Program</a>

                      <a href="/AboutFaculty">About Faculty</a>
                      <a href="/Partners">Partners</a>
                      <a href="/Admissions">Admissions</a>

                      <a href="/Contact-information">Contact information</a>

                      <a href="#">Frequently Asked Questions (FAQ)</a>
                    </div>
                  </td>
                  <td>
                    <p>
                      ESPRIT School of Engineering was founded in 2003. Now, it has become the largest private
                      university in Tunisia with more than 7000 students and about 250 full-time instructors. ESPRIT
                      stands out thanks to strong ties with the corporate world, its academic partners, and the active
                      pedagogy the university provides for its next generation of engineers in IT, Telecommunications,
                      Electro-mechanics, and Civil Engineering.
                    </p>

                    <p>
                      All of its academic programs are EUR-ACE labelled, through the French accreditation agency:
                      "Commision des Titres d'Ingénieurs".
                    </p>
                    <p>
                      {" "}
                      ESPRIT is also member of the CDIO initiative and the "Conférence des Grandes Ecoles", an
                      association of the most prestigious business and engineering schools in France.{" "}
                    </p>
                    <p>
                      Esprit is also a member of the UNITWIN/UNESCO Chairs Program that aims at promoting international
                      inter-university cooperation and networking, reaching over 700 institutions in 116 countries.
                    </p>
                    <p>
                      Through this network, higher education and research institutions all over the globe pool their
                      resources, both human and material, to address pressing challenges and contribute to the
                      development of their societies.
                    </p>
                    <p>
                      {" "}
                      Recently, Esprit joined “Agence Universitaire de la Francophonie” a world association regrouping
                      990 academic institutions that use French Language as lingua franca on all continents in 118
                      countries.
                    </p>
                    <p>
                      Esprit Engineering is now a flagship entity along with Esprit prépa of the Esprit group comprising
                      Esprit School of Business, Esprit Entreprise, Esprit Education and Top Skills.
                    </p>
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
