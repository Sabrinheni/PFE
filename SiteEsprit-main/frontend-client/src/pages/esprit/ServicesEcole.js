import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { ServicesEcole as meta } from "./EspritDictionary"

export default class ServicesEcole extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar />
        <section className="our-blog extract main-blog dynamic-margin-simple">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Services De L'École</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <div className="section-title text-center">
                <h2>LES DIRECTIONS OPERATIONNELLES</h2>
                <CustomHrGray float={"none"} />
              </div>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">DIRECTION DE LA FORMATION</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Mourad ZERAI</h5>
                  <p>Email : mourad.zerai@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Informatique</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mme Syrine KAROUI</h5>
                  <p>Email : syrine.karoui@esprit.tn</p>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département CO.GE.D</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mme Ines Mhaya</h5>
                  <p>Email : ines.mhaya@esprit.tn</p>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Télécommunications</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mme Nejla Rejeb</h5>
                  <p>Email : nejla.rejeb@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Tronc commun TIC</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mr Mohamed Anis BEN LASMAR</h5>
                  <p>Email : mohamedanis.benlasmar@esprit.tn</p>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Génie civil</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable M. Nadia AJAILIA</h5>
                  <p>Email : nadia.ajailia@esprit.tn</p>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département électromécanique</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable M. Yosr GHOZZI</h5>
                  <p>Email : yosr.ghozzi@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Formation des Formateurs</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mme. Kaouthar LOUATI</h5>
                  <p>Email : kaouther.louati@esprit.tn</p>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département des stages</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable par intérim Mme Ramla Benouirane</h5>
                  <p>Email : ramla.benouirane@esprit.tn</p>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Vie étudiante</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable M. Zied SAIDI</h5>
                  <p>Email : zied.saidi@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Scolarité</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mohamed Ali BOUAKLINE</h5>
                  <p>Email : mohamedali.bouakline@esprit.tn</p>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Alternance</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Anis ZOUAOUI</h5>
                  <p>Email : anis.zouaoui@esprit.tn</p>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Pédagogie Numérique</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mariem Chaabouni</h5>
                  <p>Email : mariem.chaabouni@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Direction de la RDI (ESPRIT-TECH)</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Faouzi KAMOUN</h5>
                  <p>Email : faouzi.kammoun@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Direction Cours du soir TIC</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Mourad ZERAI</h4>
                  <p>Email : mourad.zerai@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département EM/GC (Cours du soir)</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable M. Nacef SIFI</h5>
                  <p>Email : nacef.sifi@esprit.tn</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département TIC (Cours du soir)</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable M. Sami SIFI</h5>
                  <p>Email : sami.sifi@esprit.tn</p>
                </Col>
              </Row>
              <div className="section-title text-center">
                <h2>LES DIRECTIONS ET SERVICES FONCTIONNELS</h2>
                <CustomHrGray float={"none"} />
              </div>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">DIRECTION ADMINISTRATIVE ET FINANCIÈRE</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Souhail OUESLATI</h5>
                  <p>Email : souhail.oueslati@esprit.tn</p>
                </Col>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Comptabilité</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable M. noureddine KARDAMINE</h5>
                  <p>Email : nourddine.kardamine@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>
                      Département Affaires juridiques et administratives
                    </h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mme Ashraf DAMERGI</h5>
                  <p>Email : ashraf.damergi@esprit.tn</p>
                </Col>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h4 style={{ marginTop: "30px", color: "#cd2122" }}>Département Finances</h4>
                    <span className="hr-span"></span>
                  </div>
                  <br />
                  <h5>Responsable Mme Youssef CHENIMA</h5>
                  <p>Email : youssef.chenima@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">DIRECTION DES RELATIONS EXTERIEURES</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Salah BOUSBIA</h5>
                  <p>Email : salah.bousbia@esprit.tn</p>
                </Col>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">DIRECTION DES SYSTÈMES D'INFORMATION</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Chokri CHAARAOUI</h5>
                  <p>Email : chokri.chaaroui@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">DIRECTION DES INFRASTRUCTURES, HYGIÈNE, SÉCURITÉ ET ENVIRONNEMENT</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Faycel LBABDA</h5>
                  <p>Email : faycal.lbabda@esprit.tn</p>
                </Col>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">DIRECTION D'ESPRIT LANGUAGE CENTER</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable Mme Nadia GHELALA</h5>
                  <p>Email : nadia.ghelala@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">DÉMARCHE QUALITÉ ET AMÉLIORATION CONTINUE</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Nabil JGUIRIM</h5>
                  <p>Email : nabil.jguirim@esprit.tn</p>
                </Col>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">SERVICE COMMUNICATION</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Karim MAGHREBI</h5>
                  <p>Email : karim.maghrebi@esprit.tn</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">FOYER & RESTAURANT</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Mohamed RAHMOUNI</h5>
                  <p>Email : mohamed.rahmouni@esprit.tn</p>
                </Col>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">ESPRIT ENTREPRISE (Formation Continue)</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <h5>Responsable M. Naceur AMMAR</h5>
                  <p>Email : naceur.ammar@esprit.tn</p>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}
