import NavBar from "pages/InternationalDegreeProgram/NavBar"
import MetaHelmet from "components/MetaHelmet"
import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import DownloadButton from "components/DownloadButton"
import IconList from "components/IconList"
import InformationBox from "components/InformationBox"
import LinkDuo from "components/utils/LinkDuo"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import "react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
import "react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"
import file4 from "../../../assets/files/Contrat_de_location_Bloc_1_2021.pdf"
import file3 from "../../../assets/files/Contrat_de_location_bloc_2_(Résidence_el_Amen)_2021.pdf"
import file5 from "../../../assets/files/Foyer_Grille_tarifaire_2021-2022_école_d_ingénieur_tunisiens.pdf"
import file6 from "../../../assets/files/Grille_tarifaire_2020-2021_étudiants_Internationaux.pdf"
import file1 from "../../../assets/files/REGLEMENT-INTERIEUR_2021.pdf"
import arrowsrc from "../../../assets/img/arrow.ico"
import Foyer from "./LogementRestoGalleries/Foyer"
import Resto from "./LogementRestoGalleries/Resto"
import Residence from "./LogementRestoGalleries/Residence"
import "./Intl.css"

import { LogementRestauration as meta } from "../VieEtudianteDictionary"

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
                    <h1 style={{ display: "none" }}>Logement et Restauration</h1>
                    <div className="container space-items">
                      <Row style={{ textAlign: "center", justifyContent: "center" }}>
                        <Col>
                          <h1 style={{ color: "#cd1211" }}>
                            Opening of online pre-registration in the university residence hall starting from July 7,
                            2021 upon availability
                          </h1>
                          <div style={{ textAlign: "center", margin: "30px" }}>
                            <DownloadButton data={preinscri} />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h1>Accomodation</h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h3>Returning Students</h3>
                          <CustomHrRed />
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <IconList data={listRenouvelement}></IconList>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <p>
                            The deadline for confirmation of renewal of enrollment in the girls' residence hall and Prep
                            students is <strong style={{ color: "red" }}>June 21, 2020.</strong>
                          </p>
                        </Col>
                      </Row>
                      {/* <Row>
              <Col>
                <p>
                  <b style={{ fontSize: "16px" }}>
                    Modalités de paiement des frais d'hébergement au titre de l'année universitaire 2020/2021:
                  </b>
                </p>
                <ul className="services-box-list">
                  <li>800 Dinars aprés confirmation de la réservation.</li>
                  <li>750 Dinars avant la remise des clefs</li>
                  <li>750 Dinars avant le 31/01/2021</li>
                </ul>
              </Col>
            </Row> */}

                      <Row>
                        <Col>
                          <p>
                            <b style={{ fontSize: "16px" }}>Payment methods: </b>
                          </p>
                          <ul className="services-box-list">
                            <li>Credit card.</li>
                            <li>
                              Bank transfer (Scan the receipt and send it){" "}
                              <LinkDuo
                                rel="noopener noreferrer"
                                target="_blank"
                                to={"https://esprit-tn.com/esponline/online/login.aspx"}>
                                via this link
                              </LinkDuo>
                            </li>
                            <li>Payment at the cash desk (First floor Building A)</li>
                          </ul>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h3>New Students</h3>
                          <CustomHrRed />
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <IconList data={list}></IconList>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <p>
                            <b> NB :</b> the payment of the rent is only taken into consideration if the receipt is sent
                            via the link above, it does not give any right to reserve a place in the university
                            residence hall if the instruction is not followed properly.
                          </p>
                          <p>
                            <i>
                              Please be aware of the terms of the contract and the regulations , especially the
                              commitment for the academic year without the possibility of cancellation except in the
                              case of withdrawal of registration and especially in terms of respect for the rules of
                              conduct and hygiene.
                            </i>
                          </p>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h1>Food Service </h1>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-center">
                          <h3>University Canteen</h3>
                          <CustomHrRed float={"none"} />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-center">
                          <strong style={{ color: "#cd1212" }}>
                            The university canteen is open to all students, residents and non-residents of the
                            university residence hall
                          </strong>
                          <br></br>
                          <strong style={{ color: "#cd1212" }}>
                            Subscription to the canteen :
                            <LinkDuo
                              rel="noopener noreferrer"
                              target="_blank"
                              to={"https://esprit-tn.com/esponline/online/login.aspx"}>
                              via this link
                            </LinkDuo>
                          </strong>
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: "60px" }}>
                        <Col md={12} sm={12}>
                          <Resto />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-center">
                          <h3>Esprit Residence Hall (Building 1)</h3>
                          <CustomHrRed float={"none"} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: "60px" }}>
                        <Col md={12} sm={12}>
                          <Foyer />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-center">
                          <h3>Al Amen Residence Hall (Building 2)</h3>
                          <CustomHrRed float={"none"} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: "60px" }}>
                        <Col md={12} sm={12}>
                          <Residence />
                        </Col>
                      </Row>
                      <Row>
                        <Col className="flow-root">
                          <h3 className="text-esprit">Useful links</h3>
                          <CustomHrGray />
                        </Col>
                      </Row>
                      <Row className="flex-align-center">
                        <Col md={4} className="gris">
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
                              <LinkDuo
                                className="custom-button btn width100"
                                rel="noopener noreferrer"
                                target="_blank"
                                to={file5}>
                                <span>fees and cost for Tunisians</span>
                              </LinkDuo>
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <LinkDuo
                                className="custom-button btn width100"
                                rel="noopener noreferrer"
                                target="_blank"
                                to={file6}>
                                <span>fees and cost for international students</span>
                              </LinkDuo>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <h3>Payment</h3>
                          <CustomHrGray float={"left"} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: "60px" }}>
                        <Col md={12} sm={12} className="text-center">
                          <p>Amen Bank, Raoued agency</p>
                          <p>
                            BIC: <strong>07 035 0020101 101366 91</strong>
                          </p>
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: "60px" }} className="flex-align-center">
                        <Col md={4} sm={12} className="gris">
                          <LinkDuo
                            rel="noopener noreferrer"
                            target="_blank"
                            className="custom-button btn width100"
                            to={"https://esprit-tn.com/esponline/online/login.aspx"}>
                            <span>Online Payment</span>
                          </LinkDuo>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <InformationBox data={info} />
                        </Col>
                        <Col>
                          <InformationBox data={info2} />
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
const listRenouvelement = {
  icon: "icofont-clip",
  title: "Renewal request",
  description: [<br />],
  list: [
    [
      "Complete the online application.",
      // <LinkDuo rel="noopener noreferrer" target="_blank" to={"https://esprit-tn.com/FoyerResEsp/login/Inscription"}>
      //   la demande en ligne.
      // </LinkDuo>,
    ],
    "Validation by the administration followed by a notification.",
    "Follow the procedure",
  ],
}

const preinscri = {
  link: "https://esprit-tn.com/FoyerResEsp/login/Inscription",
  text: "pre-registration",
  src: arrowsrc,
}
// const reglement = {
//   link: file1,
//   text: "ICI",
//   src: arrowsrc,
// }
const list = {
  icon: "icofont-clip",
  title: "Request For Accommodation",
  description: [
    "Important: The file will be processed only after registration to Esprit School of Engineering, Esprit Prépa or ESB.",
    <br />,
    <b>Documents to be supplied if the application is validated by notification:</b>,
  ],
  list: [
    "1 passport photo,",
    "1 Copy of ID or passport,",
    "Certificate of registration,",
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file3}>
      Contract for residential premises (Building 2 for boys - El Amen Residence) (Signed)
    </LinkDuo>,
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file4}>
      Furnished rental contract (Block 1 - Esprit Residence) (Signed)
    </LinkDuo>,
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file1}>
      Coupon to be detached at the end of the rules and regulations document after having carefully read it, sign it
    </LinkDuo>,
    "Medical certificate attesting to the ability to live in the university residence hall.",
  ],
}

const info = {
  title: "For more information:",
  subtitle: "University Canteen",
  description: ["Call  +(216) 70 250 000 (poste 306)", <br />, "Or e-mail: resto@esprit.tn"],
}
const info2 = {
  title: "For more information:",
  subtitle: "University Residence Hall",
  description: ["Call  +(216) 70 250 308", <br />, "Or e-mail: foyer@esprit.tn"],
}
const breadcrumb = {
  Title: "International Degree Program",
}
