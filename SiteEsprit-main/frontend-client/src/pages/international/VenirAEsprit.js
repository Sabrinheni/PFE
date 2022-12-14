import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
// import file1 from "../../assets/files/Résultat-du-test-de-psychotechnique-du-23-Avril-2017-Campus-Tunisie.pdf"
import DownloadButton from "components/DownloadButton"
import IconList from "components/IconList"
import InformationBox from "components/InformationBox"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import LinkDuo from "components/utils/LinkDuo"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import arrowsrc from "../../assets/img/arrow.ico"
import { VenirAEsprit as meta } from "./InternationalDictionary"

export default class VenirAEsprit extends Component {
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
                  <h1>Inscriptions Pour Les Étudiants Internationaux</h1>
                  <CustomHrRed />
                  <br></br>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Inscrivez vous</h3>
                    <CustomHrGray />
                  </div>
                  <DownloadButton data={ici} />
                  <p>Compléter les informations requises dans le formulaire ci dessus :</p>
                  <h6>
                    Modifier les informations :
                    <LinkDuo
                      to={"https://esprit-tn.com/admission/Changeall.aspx"}
                      rel="noopener noreferrer"
                      target="_blank">
                      &nbsp;ICI
                    </LinkDuo>
                  </h6>
                  <p>
                    Vous devez notamment choisir la spécialité et le niveau d'admission en fonction de votre spécialité
                    d’origine et de votre niveau d’études.
                    <strong> La formation d’ingénieur à ESPRIT est</strong> un cursus progressif et intégré de 5 années
                    d’études post baccalauréat avec des entrées multiples :
                  </p>
                  <ul style={{ listStyleType: "disc", marginLeft: "20px" }}>
                    <li>
                      La 1ère année est accessible aux titulaires d’un baccalauréat scientifique, technique ou
                      équivalent.
                    </li>
                    <li>
                      La 2ème année est accessible aux titulaires d’une année accomplie avec succès dans un institut
                      préparatoire aux études d’ingénieur.
                    </li>
                    <li>
                      La 3ème année est accessible aux titulaires d’une licence dans la spécialité choisie et aux admis
                      aux concours nationaux des écoles d’ingénieurs y compris la liste complémentaire.
                    </li>
                    <li>La 4ème année est accessible aux titulaires d'un mastère(M1) dans la spécialité choisie.</li>
                  </ul>
                  <p>
                    Les spécialités actuellement dispensées sont
                    <strong> les TIC (Informatique & Télécom), le génie civil et le génie électromécanique.</strong>
                  </p>
                  <p>
                    <strong>
                      Les informations demandées ci-après sont nécessaires pour la constitution de votre dossier et,
                      notamment pour l'établissement ultérieur de certificats et autres documents administratifs tels
                      que exigés par les autorités de tutelle.
                    </strong>
                  </p>
                  <p>
                    <em>
                      Ces informations sont confidentielles, et, ESPRIT s'interdit de les divulguer ou de les mettre à
                      la disposition de tiers sans votre autorisation. Nous sommes tenus par les règles d’usage de la
                      protection des données personnelles.
                    </em>
                  </p>
                </Col>
                <Col md={6} xs={12}>
                  <InformationBox data={first}></InformationBox>
                  <div style={{ marginBottom: "40px" }}></div>
                  <InformationBox data={second}></InformationBox>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Obtenir son visa ?</h3>
                    <CustomHrGray />
                  </div>
                  <h6>
                    Avant le départ, demander un visa de type visa d’étudiant auprès de l’ambassade de Tunisie dont
                    dépend votre pays.
                  </h6>
                </Col>
                <Col md={6} xs={12}>
                  <IconList data={firstList} />
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col md={6} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Carte de Séjour ?</h3>
                    <CustomHrGray />
                  </div>
                  <h6>A l’arrivée (délai d’un mois), Déposer sa Demande de Carte de Séjour 75 DT.</h6>
                  <p>
                    La carte de séjour est un document obligatoire dont la demande doit être faite au commissariat le
                    plus proche du lieu d’habitation.
                  </p>
                  <p>
                    Elle n’est délivrée qu’après 2 ou 3 mois de la date de dépôt de la demande et sera valable une année
                    (jusqu’au 30 septembre de l’année) renouvelable chaque année. En attendant, le commissariat délivre
                    une carte provisoire qui permet d’être en situation régulière sur tout le territoire tunisien.
                  </p>
                </Col>
                <Col md={6} xs={12}>
                  <IconList data={secondList} />
                </Col>
              </Row>
              {/* <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Résultats au concours d'admission (Cameroun)</h3>
                    <CustomHrGray />
                    <DownloadButton data={telecharger} />
                  </div>
                </Col>
              </Row> */}
            </div>
          </div>
        </section>
      </>
    )
  }
}

const ici = {
  link: "https://esprit-tn.com/admission/ETR.aspx",
  text: "ici",
  src: arrowsrc,
}
// const telecharger = {
//   link: file1,
//   text: "télécharger",
//   src: arrowsrc,
// }
const first = {
  title: "Contactez-nous (Tunisie)",
  subtitle: "Service des étudiants internationaux",
  description: ["M. Zied Saidi", <br />, "email : zied.saidi@esprit.tn"],
}
const second = {
  title: "Contact Pays (Cameroun/Congo Brazzaville)",
  subtitle: "Contact au Cameroun",
  description: [
    "Campus Tunisie",
    <br />,
    "Elig Effa-Yaoundé",
    <br />,
    "(en face de l'école des travaux publics)",
    <br />,
    "Cameroun",
    <br />,
    "Contact : Mr Abraham Kamgning",
    <br />,
    "+00237691586742",
    <br />,
    "+00237669141544",
    <br />,
    <LinkDuo to={"mailto:contact@campustunisie.org"} rel="noopener noreferrer" target="_blank">
      contact@campustunisie.org
    </LinkDuo>,
  ],
}

const firstList = {
  icon: "icofont-clip",
  title: "Documents nécessaires avant le départ",
  description: "",
  list: [
    "2 photographies d'identité",
    "3 formulaires de visa remis par le Consulat tunisien",
    "Photocopie des 3 premières pages du passeport",
    "Photocopie de l'attestation de pré-inscription délivrée par l'Université.",
  ],
}

const secondList = {
  icon: "icofont-clip",
  title: "Documents nécessaires à l’arrivée",
  description: "",
  list: [
    "Le certificat d’inscription à l’université ainsi que le reçu de paiement de vos frais de scolarité,",
    "Le contrat de location ou dans le cas où vous logez en foyer : une attestation de résidence,",
    "2 photos d’identité,",
    "2 timbres fiscaux à acquérir auprès de la Recette des Finances,",
    "Un justificatif des ressources en Banque et/ou une attestation de prise en charge,",
    "Un justificatif d’assurance maladie/accident.",
  ],
}
