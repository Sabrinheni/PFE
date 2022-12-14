import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import "./Intl.css"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import { InternationalDegreeProgram as meta } from "./InternationalDegreeDictionary"
import LinkDuo from "components/utils/LinkDuo"
import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import ImageBox from "components/ImageBox"
import { Accordion, Card, Col, Row } from "react-bootstrap"
import file from "../../assets/files/Guide-pratique-des-étudiants-version-web.pdf"
import photo3 from "../../assets/img/bazza.png"
import photo1 from "../../assets/img/cameroun.png"
import photo2 from "../../assets/img/campus-tunisie.jpg"
import photo4 from "../../assets/img/cesec.png"
import cinemaimg from "../../assets/img/cinema.jpg"
import infirmerie from "../../assets/img/infirmerie.jpg"

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

                  <td>
                    <div className="container">
                      <div>
                        <br></br>
                        <Row>
                          <Col>
                            <h1>Contacts and Information </h1>
                            <CustomHrRed />
                          </Col>
                        </Row>
                      </div>
                      <div className="margin-top-60">
                        <Row style={{ marginBottom: "60px" }}>
                          <Col md={8}>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Useful Information :</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <h3>The academic year usually starts in September and ends in June.</h3>
                            <p>
                              It is strongly recommended to arrive at least two weeks before the new university term
                              begins in order to find accommodation and to become familiar with the new environment.
                            </p>
                            <p>
                              For the accommodation, Campus Tunisie helps students find the option that best fits in
                              with their budget and lifestyle. Although it is difficult to accurately estimate a
                              student's budget, the following table provides an estimate of monthly costs, excluding
                              tuition fees.
                            </p>
                          </Col>
                          <Col md={8}>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Financial services</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <p style={{ width: "100%" }}>
                              <strong>Bank : AMEN BANK</strong>
                            </p>
                            <ul style={{ marginLeft: "40px", listStyle: "circle" }}>
                              <li>Statement of bank identity</li>
                              <li>BIC : 070350020101101366 91</li>
                              <li>IBAN : TN 59 070350020101101366 91</li>
                              <li>CODE BIC : CFCTTNTTXXX</li>
                              <li>Corporate name: ESPRIT</li>
                              <li>
                                Bank name: AMEN BANK AGENCE RAOUED Res.Mariem Il Angle Rue Fathi ZOUHIR Km 2 Ariana
                              </li>
                              <li>Phone number : 71858470</li>
                            </ul>
                          </Col>
                          <Col>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Food and accommodation fees:</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <Row>
                              <Col>
                                <Accordion defaultActiveKey="0" style={{ color: "black" }}>
                                  <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0">
                                      <i className="icofont-home" style={{ marginRight: "10px" }} />
                                      Accommodation
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                      <Card.Body>
                                        <ul style={{ listStyle: "circle", marginLeft: "10px" }}>
                                          <li>Shared accommodation: between 150 and 300 TD/Month,</li>
                                          <li>Studio apartment around 400 TD /Month,</li>
                                          <li>Individual housing 500-800 TD/Month.</li>
                                          <li>
                                            Accommodation in the university’s residence hall.
                                            <LinkDuo
                                              to={"/Catering-Accomodation"}
                                              rel="noopener noreferrer"
                                              target="_blank">
                                              Click here
                                            </LinkDuo>
                                          </li>
                                        </ul>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                  <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                      <i className="icofont-glass" style={{ marginRight: "10px" }} />
                                      Food service
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="1">
                                      <Card.Body>
                                        <ul style={{ listStyle: "circle", marginLeft: "10px" }}>
                                          <li>Food service between 200 and 300 TD/Month,</li>
                                          <li>Food service for ESPRIT hall residents:</li>
                                        </ul>
                                        <ul style={{ listStyle: "disc", marginLeft: "30px" }}>
                                          <li>Full Board (Breakfast, lunch and dinner) : 2800 TD/Year (Net of Tax)</li>
                                          <li>
                                            Half board (F1) (Breakfast, lunch and dinner) : 1 600 TD/Year (Net of Tax)
                                          </li>
                                          <li>(F2) (lunch and dinner) : 1 300 TD/Year (Net of Tax)</li>
                                        </ul>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                  <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="2">
                                      <i className="icofont-road" style={{ marginRight: "10px" }} />
                                      Transportation services
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="2">
                                      <Card.Body>
                                        <ul style={{ listStyle: "circle", marginLeft: "10px" }}>
                                          <li>Public transport: about 50 TD /Month.</li>
                                        </ul>
                                      </Card.Body>
                                    </Accordion.Collapse>
                                  </Card>
                                </Accordion>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row style={{ marginBottom: "60px" }}>
                          <Col md={8}>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Student Support and assistance :</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <p style={{ width: "100%" }}>
                              <strong>Ghazela : </strong>
                            </p>
                            <ul style={{ marginLeft: "40px", listStyle: "circle" }}>
                              <li>Mbiandou kael Juleskael.mbiandoungatchou@esprit.tn 52439114</li>
                              <li>Etoundi axel axelwilfried.etoundiessimi@esprit.tn 55675265</li>
                              <li>Tappa blaise blaisemelvyn.tappangaba@esprit.tn 51689587</li>
                              <li>Nyoungue odette balongodette.nyongue@esprit.tn 54526673</li>
                              <li>Gweth evrad Evrard.gweth@esprit.Tn 99993866</li>
                              <li>Kamga styve styveesly.kamgatchuewa@esprit.tn 20714503</li>
                              <li>Aichatou awalou awalou.aichatou@esprit.tn 54675406</li>
                              <li>Bissai luc LucAudrey.BISSAIYETNA@esprit.tn 50592560</li>
                              <li>Mokolo christianne christianepatrique.mekoloakoa@esprit.tn</li>
                              <li>Ngou jeff lylianjeff.ngoutchoumtchoua@esprit.tn 27458964</li>
                              <li>Tajeuna ines pauleines.tajeunaneossi@esprit.tn 55819806</li>
                              <li>Litet oswald Oswaldgodwill.litet@esprit.tn 53490275</li>
                              <li>Leba celia levyewelesanecelia.lebandjomo@esprit.tn 54455250</li>
                              <li>Ngatchou junior junior.ngatchoujules@esprit.tn 52930046</li>
                              <li>Tiodou gabriel gabrieljordan.tiodoungymfeue@esprit.tn 54822046</li>
                            </ul>
                          </Col>
                          <Col>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Student Support Unit :</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <Row style={{ textAlign: "center" }}>
                              <Col>
                                <LinkDuo
                                  style={{ width: "75%" }}
                                  className="custom-button btn"
                                  to={"/StudentSupportUnit"}>
                                  <span>Click here</span>
                                </LinkDuo>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row style={{ marginBottom: "60px" }}>
                          <Col md={8}>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Health service :</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <Row style={{ textAlign: "center" }}>
                              <Col>
                                <LinkDuo
                                  style={{ width: "30%" }}
                                  className="custom-button btn"
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  to={file}>
                                  <span>Download</span>
                                </LinkDuo>
                              </Col>
                            </Row>
                          </Col>
                          <Col>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Pre-registration in the residence hall:</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <Row style={{ textAlign: "center" }}>
                              <Col>
                                <LinkDuo
                                  style={{ width: "75%" }}
                                  className="custom-button btn"
                                  to={"/Catering-Accomodation"}>
                                  <span>Click here</span>
                                </LinkDuo>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row style={{ marginBottom: "60px" }}>
                          <Col md={8}>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Residence permits:</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <p style={{ width: "100%" }}>
                              <strong>Documents required for residence permits:</strong>
                            </p>
                            <ul style={{ marginLeft: "40px", listStyle: "circle" }}>
                              <li>Proof of schooling or registration for the current university year.</li>
                              <li>Proof of income.</li>
                              <li>Copy of a valid passport.</li>
                              <li>04 passport photos.</li>
                              <li>Proof of accommodation.</li>
                              <li>Fill out the application form for a visa - residence permits.</li>
                            </ul>
                          </Col>
                        </Row>
                        <Row>
                          <Col>
                            <h2>Contact our partners directly for more information:</h2>
                            <CustomHrRed />
                          </Col>
                        </Row>
                        <Row style={{ marginBottom: "60px" }}>
                          <Col md={8}>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">In Cameroon :</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <p style={{ width: "100%" }}>
                              <strong>CESEC</strong>
                              <br />
                              458, Rue Mulenda. <br />
                              Plateaux des 15ans
                              <br />
                              BP: 1025 / Brazzaville
                              <br />
                              République du Congo
                              <br />
                              Contact : Mr Rodrel Melys DE BELKO
                              <br />
                              +(242) 06 863 61 90/ 04 414 8445
                              <br />
                              Email :<LinkDuo to={"mailto:cesec.network@gmail.com"}>cesec.network@gmail.com</LinkDuo>
                            </p>
                            <Row>
                              <Card style={{ width: "14rem" }}>
                                <Card.Img variant="top" src={photo1} />
                              </Card>
                              <Card style={{ width: "14rem" }}>
                                <Card.Img variant="top" src={photo2} />
                              </Card>
                            </Row>
                          </Col>
                          <Col>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">In Congo-Brazzaville :</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <p style={{ width: "100%" }}>
                              <strong>Campus Tunisie</strong>
                              <br />
                              Elig Effa-Yaoundé
                              <br />
                              (en face de l'école de travaux publique)
                              <br />
                              Cameroun
                              <br />
                              Contact : Mr Abraham kamgning
                              <br />
                              +00237691586742
                              <br />
                              +00237669141544
                              <br />
                              <LinkDuo to={"mailto:contact@campustunisie.org"}>contact@campustunisie.org</LinkDuo>
                            </p>
                            <Row>
                              <Card style={{ width: "13rem" }}>
                                <Card.Img variant="top" src={photo3} />
                              </Card>
                              <Card style={{ width: "14rem" }}>
                                <Card.Img variant="top" src={photo4} />
                              </Card>
                            </Row>
                          </Col>
                        </Row>
                        <Row style={{ marginBottom: "60px" }}>
                          <Col>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Health and Insurance</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <Row>
                              <Col>
                                <ImageBox data={sante} />
                              </Col>
                              <Col>
                                <p>
                                  On campus, a nurse and a doctor provide quality medical, health and wellness services
                                  for ESPRIT students.
                                </p>
                                <p>
                                  Health insurance is mandatory for international students. A certificate of affiliation
                                  to a conventional health insurance plan or to a private Tunisian or foreign insurance
                                  (it will be translated into French or English) indicating the validity of your stay is
                                  accepted as proof of health insurance.
                                </p>
                                <p>
                                  You are also strongly advised to take out civil liability insurance on site. This
                                  insurance covers the risks related to the training course (physical accidents,
                                  material damage for which you could be responsible).
                                </p>
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                        <Row style={{ marginBottom: "60px" }}>
                          <Col>
                            <div style={{ display: "flow-root" }}>
                              <h3 className="text-esprit">Social life and activities:</h3>
                              <CustomHrGray />
                            </div>
                            <br />
                            <Row>
                              <Col>
                                <p>
                                  In Tunis and its surroundings, there are several movie theaters: the cost of a ticket
                                  is 8-10 TD.
                                </p>
                                <p>Most of the social life can be done on campus thanks to all the associations.</p>
                              </Col>
                              <Col>
                                <ImageBox data={cinema} />
                              </Col>
                            </Row>
                          </Col>
                        </Row>
                      </div>
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

const sante = {
  src: infirmerie,
  alt: "school infirmary",
  title: "school infirmary",
  text: "",
}
const cinema = {
  src: cinemaimg,
  alt: "Cinéma Le Palace - Tunis",
  title: "Cinéma Le Palace - Tunis",
  text: "",
}
const breadcrumb = {
  Title: "International Degree Program",
}
