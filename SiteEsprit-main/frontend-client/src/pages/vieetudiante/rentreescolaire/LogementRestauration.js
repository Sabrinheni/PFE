import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import { CustomTitleH1 } from "components/CustomElements/CustomTitleH1"
import DownloadButton from "components/DownloadButton"
import IconList from "components/IconList"
import InformationBox from "components/InformationBox"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import LinkDuo from "components/utils/LinkDuo"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import "react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
import "react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"
import file4 from "../../../assets/files/Contrat_de_location_Bloc 1 -2022-2023.pdf"
import file3 from "../../../assets/files/Contrat_de_location_bloc_2_(Residence_el_Amen)_2022-2023.pdf"
import file5 from "../../../assets/files/Tarif-foyer-etudiants_tunisiens.pdf"
import file6 from "../../../assets/files/Tarif-foyer-etudiants_internationaux.pdf"
import file1 from "../../../assets/files/002_REGLEMENT-INTERIEUR.pdf"
import arrowsrc from "../../../assets/img/arrow.ico"
import breadcrumbbg from "../../../assets/img/restauration.png"
import { LogementRestauration as meta } from "../VieEtudianteDictionary"
import Foyer from "./LogementRestoGalleries/Foyer"
import Resto from "./LogementRestoGalleries/Resto"
import Residence from "./LogementRestoGalleries/Residence"

export default class LogementRestauration extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin">
          <h1 style={{ display: "none" }}>Logement et Restauration</h1>
          <div className="container space-items">
            {/* <Row className="admission-banner" style={{ display: "flex", placeContent: "center" }}>
              <Col md={12} xs={12} style={{ backgroundColor: "#cd2122", borderRadius: "15px", padding: "30px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    margin: "0",
                    textTransform: "uppercase",
                  }}>
                  La page sera disponible tr??s bient??t.
                </p>
              </Col>
            </Row> */}
            <Row style={{ textAlign: "center", justifyContent: "center" }}>
              <Col>
                <h1 style={{ color: "#cd1211" }}>
                  Ouverture des pr??-inscriptions en ligne au foyer ?? partir du 1 juillet 2022 jusqu????? ??puisement des
                  disponibilit??s
                </h1>
               
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomTitleH1>H??bergement</CustomTitleH1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>??tudiants d??j?? inscrits</h3>
                <CustomHrRed />
              </Col>
            </Row>

            <Row>
              <Col>
             
                <IconList data={listRenouvelement}></IconList>
                <div style={{ textAlign: "center", margin: "30px" }}>
             
                    <LinkDuo
                      className="custom-button btn"
                      rel="noopener noreferrer"
                      target="_blank"
                      to="https://esprit-tn.com/FoyerResEsp/login/Inscription">
                      <span>Pr??-inscription</span>
                    </LinkDuo>
                 
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                Le renouvellement des inscriptions au foyer pour filles et ??tudiants pr??pa est ?? partir de  <strong style={{ color: "red" }}> 01 Juin 2022 au 15 Juin 2022. </strong> 
 
                </p>
              </Col>
            </Row>
            {/* <Row>
              <Col>
                <p>
                  <b style={{ fontSize: "16px" }}>
                    Modalit??s de paiement des frais d'h??bergement au titre de l'ann??e universitaire 2020/2021:
                  </b>
                </p>
                <ul className="services-box-list">
                  <li>800 Dinars apr??s confirmation de la r??servation.</li>
                  <li>750 Dinars avant la remise des clefs</li>
                  <li>750 Dinars avant le 31/01/2021</li>
                </ul>
              </Col>
            </Row> */}
            <Row>
              <Col>
                <p>
                  <b style={{ fontSize: "16px" }}>Mode de paiement:</b>
                </p>
                <ul className="services-box-list">
                  <li>Carte bancaire.</li>
                  <li>
                    Virement bancaire (Scanner le re??u et l'envoyer via{" "}
                    <LinkDuo
                      rel="noopener noreferrer"
                      target="_blank"
                      to={"https://esprit-tn.com/esponline/online/login.aspx"}>
                      ce lien
                    </LinkDuo>
                    )
                  </li>
                  <li>Paiement ?? la caisse (Premier ??tage bloc A)</li>
                </ul>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Nouveaux inscrits</h3>
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
                  <b> NB :</b> le r??glement du loyer n???est pris en consid??ration que si le re??u est adress?? via le lien
                  ci-dessus, il ne donne aucun droit de r??servation de place au foyer si la consigne n???est pas suivie.
                </p>
                <p>
                  <i>
                    Attention : bien prendre connaissance des clauses du contrat, du r??glement int??rieur, notamment
                    l???engagement pour l???ann??e universitaire sans possibilit?? de r??siliation sauf en cas de retrait
                    d???inscription et surtout en mati??re de respect des r??gles de conduite et d???hygi??ne.
                  </i>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <CustomTitleH1>Restauration</CustomTitleH1>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <h3>Restaurant</h3>
                <CustomHrRed float={"none"} />
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <strong style={{ color: "#cd1212" }}>
                  Le restaurant est accessible ?? tout ??tudiant r??sident et non resident au foyer
                </strong>
                <strong style={{ color: "#cd1212" }}>
                  Abonnement ?? la restauration :{" "}
                  <LinkDuo
                    rel="noopener noreferrer"
                    target="_blank"
                    to={"https://esprit-tn.com/esponline/online/login.aspx"}>
                    via ce lien
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
                <h3>Foyer Esprit (Bloc 1)</h3>
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
                <h3>Foyer R??sidence Al Amen (Bloc 2)</h3>
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
                <h3 className="text-esprit">Liens Utiles</h3>
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
                      <span>Grille tarifaire pour Tunisiens</span>
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
                      <span>Grille tarifaire pour internationaux</span>
                    </LinkDuo>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>Paiement</h3>
                <CustomHrGray float={"left"} />
              </Col>
            </Row>
            <Row style={{ marginBottom: "60px" }}>
              <Col md={12} sm={12} className="text-center">
                <p>Amen Bank, Agence Raoued</p>
                <p>
                  RIB: <strong>07 035 0020101 101366 91</strong>
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
                  <span>Paiement en ligne</span>
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
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: breadcrumbbg,
  Title: "Logement Et Restauration",
  Subtitle: "Logement Et Restauration",
}
const preinscri = {
  link: "https://esprit-tn.com/FoyerResEsp/login/Inscription",
  text: "pr??-inscription",
  src: arrowsrc,
}
// const reglement = {
//   link: file1,
//   text: "ICI",
//   src: arrowsrc,
// }
const list = {
  icon: "icofont-clip",
  title: "Demande d'h??bergement",
  description: [
    "ATTENTION: Le dossier ne sera trait?? qu'?? partir de la date d'inscription ?? Esprit Ing??nieur, Esprit Pr??pa ou ESB",
    <br />,
    <b>Pi??ces ?? fournir si la demande est valid??e par notification :</b>,
  ],
  list: [
    "1 Photo d'identit??,",
    "1 Copie CIN ou passeport,",
    "Attestation d'inscription,",
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file3}>
      Contrat ?? usage d'habitation (Bloc 2 pour filles - R??sidence El Amen) (Sign??)
    </LinkDuo>,
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file4}>
      Contrat de location meubl??e (Bloc 1 foyer Esprit) (Sign??)
    </LinkDuo>,
    <LinkDuo rel="noopener noreferrer" target="_blank" to={file1}>
      Coupon ?? d??tacher ?? la fin du <b>r??glement int??rieur</b> apr??s l???avoir soigneusement lu, le signer
    </LinkDuo>,
    "Certificat m??dical attestant de la capacit?? ?? vivre au foyer.",
  ],
}
const listRenouvelement = {
  icon: "icofont-clip",
  title: "Demande de renouvellement",
  description: [<br />],
  list: [
    [
      "Remplir la demande en ligne.",
      // <LinkDuo rel="noopener noreferrer" target="_blank" to={"https://esprit-tn.com/FoyerResEsp/login/Inscription"}>
      //   la demande en ligne.
      // </LinkDuo>,
    ],
    "Validation par l'administration suivie d'une notification.",
    "Suivre la procedure",
  ],
}

const info = {
  title: "Pour plus de renseignements:",
  subtitle: "Restaurant",
  description: ["Appelez le +(216) 70 250 000 (poste 306)", <br />, "ou e-mail: resto@esprit.tn"],
}
const info2 = {
  title: "Pour plus de renseignements pour:",
  subtitle: "Foyer",
  description: ["Appelez le +(216) 70 250 308", <br />, "ou e-mail: foyer@esprit.tn"],
}
