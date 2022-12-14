import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import InformationBox from "components/InformationBox"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import LinkDuo from "components/utils/LinkDuo"
import React from "react"
import { Card, Col, Row } from "react-bootstrap"
import photo2 from "../../../assets/img/espritELC.jpg"
import photo1 from "../../../assets/img/Logo_TEF.jpg"
import { useApi } from "../../../hooks/useApi"
import { TEFTFAQ as meta } from "../EntreprisesDictionary"
import Moment from "react-moment"

export default function TEFTFAQ() {
  const [tests] = useApi("teftefaqs")

  const renderedData =
    tests &&
    tests.map((service, index) => (
      <Col md={4} xs={12} className="text-center" key={index}>
        <div className="service-item">
          <div className="glyph">
            <i className={"icofont-calendar"} />
          </div>
          <h3>
            {service.type === "tef" ? "TEF Canada" : "TEFAQ (Accès Québec)"}
            {service.isOpen === "true" && " : "}
            {service.isOpen === "true" && <Moment locale="fr" date={service.date} format="DD MMMM YYYY" />}
            {service.isOpen === "true" && service.description && " (" + service.description + ")"}
          </h3>
          <p>Avancement des Inscriptions :{service.isOpen === "true" ? "ouvertes" : "fermées"}</p>
        </div>
      </Col>
    ))
  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container">
          <Row>
            <Col>
              <h1>Présentation du Test</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <Row style={{ marginBottom: "60px" }}>
            <Col>
              <p>
                Vu le contexte de pandémie actuelle, et en vue de respecter les mesures sanitaires imposées par la CCI
                Paris pour l'organisation de nos sessions, les examens TEF seront désormais uniquement en version
                électroniques jusqu'à nouvel ordre
              </p>
              <p>Possibilité de préparation aux épreuves sur la demande.</p>
              <strong>
                Le délai de délivrance des résultats est actuellement de 4 à 6 semaines comptant de la date du test
              </strong>
            </Col>
          </Row>
          <Row style={{ marginBottom: "60px" }}>
            <Col>
              <p>
                Les Tests d’Évaluation de Français (TEF) sont des instruments de référence internationaux pour mesurer
                les compétences de français en :
              </p>
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                <li>compréhension orale ;</li>
                <li>expression orale ;</li>
                <li>compréhension écrite ;</li>
                <li>expression écrite.</li>
              </ul>
              <p>
                <strong>Ils bénéficient de la reconnaissance :</strong>
              </p>
              <ul style={{ listStyleType: "circle", marginLeft: "20px" }}>
                <li>Du ministère français de l’éducation nationale ;</li>
                <li>
                  Du gouvernement fédéral canadien pour l'évaluation linguistique des candidats à l'immigration vers ce
                  pays (catégorie "travailleurs qualifiés") ;
                </li>
                <li>Du Ministère Immigration et communautés culturelles du Québec ;</li>
                <li>De nombreuses entreprises et institutions éducatives francophones ;</li>
              </ul>
              <p>
                Toutes autres informations sont disponibles sur le site CCIP :
                <LinkDuo
                  to={"https://www.lefrancaisdesaffaires.fr/tests-diplomes/test-evaluation-francais-tef/"}
                  target="_blank"
                  rel="noopener noreferrer">
                  https://www.lefrancaisdesaffaires.fr/tests-diplomes/test-evaluation-francais-tef/
                </LinkDuo>
              </p>
            </Col>
            <Col md={3}>
              <Row>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={photo2} />
                </Card>
              </Row>
              <Row className="margin-top-60">
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={photo1} />
                </Card>
              </Row>
            </Col>
          </Row>
          <Row className="margin-top-60">
            <Col md={6} xs={12} className="margin-top-30">
              <InformationBox data={first}></InformationBox>
            </Col>
            <Col md={6} xs={12} className="margin-top-30">
              <InformationBox data={second}></InformationBox>
            </Col>
          </Row>
          <Row className="margin-top-60">
            <Col md={6} xs={12} className="margin-top-30">
              <InformationBox data={third}></InformationBox>
            </Col>
            <Col md={6} xs={12} className="margin-top-30">
              <InformationBox data={forth}></InformationBox>
            </Col>
          </Row>
          <Row className="margin-top-60">
            <Col md={6} xs={12}>
              <div style={{ display: "flow-root" }}>
                <h3 className="text-esprit">Démarches à suivre</h3>
                <CustomHrGray />
              </div>
              <br />
              <ul className="qualite-ul">
                <li>consulter le site de façon régulière pour vérifier la disponibilité des sessions.</li>
                <li>
                  Choisir une date selon le calendrier affiché sur le site en vérifiant la disponibilité des places au :{" "}
                  <strong>70 250 064</strong>
                </li>
                <li>
                  Confirmer son inscription sur place muni des documents demandés.Les candidats sont invités à suivre
                  scrupuleusement les démarches suivantes sous peine de rejet de leur candidature.
                </li>
                <li>Lire/télécharger le document relatif aux conditions d'inscription et de passation du test.</li>
              </ul>
              <p>
                Une convocation vous sera remise suite à votre inscription précisant la date, le lieu et l’heure
                auxquels vous devez vous présenter afin de passer le test à la session convenue.
              </p>
            </Col>
            <Col md={6} xs={12}>
              <div style={{ display: "flow-root" }}>
                <h3 className="text-esprit">Pièces à fournir pour chaque candidat</h3>
                <CustomHrGray />
              </div>
              <br />
              <ul className="qualite-ul">
                <li>
                  photocopie de la CIN ou PASSEPORT. <b style={{ color: "#cd1212" }}>(en cours de validité)</b>
                </li>
                <li>Le formulaire d’inscription dûrement renseigné.</li>
                <li>
                  Mode de paiement: par chèque ou par versement espèce à{" "}
                  <strong>l'AMEN BANQUE /Agence: CHARGUIA 2</strong>. (Le RIB vous sera communiqué après vérification de
                  la disponibilité des places.)
                </li>
                <li>
                  Une adresse e-mail personnelle valide <strong>(OBLIGATOIRE)</strong> à préciser dans le formulaire
                  d’inscription afin de recevoir un lien vous permettant d’accéder directement et plus rapidement à
                  votre attestation de résultats au Test d’évaluation de français.
                </li>
              </ul>
              <p>Les Frais sont détaillés comme suit :</p>
              <ul className="qualite-ul">
                <li>
                  <strong>4 épreuves : 600 DT</strong>
                </li>
                <li>
                  <strong>3 épreuves : 500 DT</strong>
                </li>
                <li>
                  <strong>2 épreuves : 400 DT</strong>
                </li>
                <li>
                  <strong>1 épreuves : 210 DT</strong>
                </li>
              </ul>
              <p>
                <strong>NB : Les frais d’inscription ne sont pas remboursables.</strong>
              </p>
            </Col>
          </Row>
          <Row className="margin-top-60">
            <Col>
              <div style={{ display: "flow-root" }}>
                <h3 className="text-esprit">Préparez vous pour le test</h3>
                <CustomHrGray />
              </div>
              <br />
              <Row>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    placeContent: "space-between",
                  }}>
                  <p style={{ marginRight: "35px" }}>CONDITIONS D'INSCRIPTION ET DE PASSATION</p>
                  <LinkDuo
                    className="custom-button btn "
                    to={
                      "https://www.lefrancaisdesaffaires.fr/tests-diplomes/test-evaluation-francais-tef/conditions-dinscription-et-de-passation-du-test-devaluation-de-francais/"
                    }>
                    <span>Cliquez ICI</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    placeContent: "space-between",
                  }}>
                  <p style={{ marginRight: "35px" }}>TEF CANADA</p>
                  <LinkDuo
                    className="custom-button btn "
                    to={"https://www.lefrancaisdesaffaires.fr/tests-diplomes/test-evaluation-francais-tef/tef-canada/"}>
                    <span>Cliquez ICI</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    placeContent: "space-between",
                  }}>
                  <p style={{ marginRight: "35px" }}>TEFAQ</p>
                  <LinkDuo
                    className="custom-button btn "
                    to={
                      "https://www.lefrancaisdesaffaires.fr/tests-diplomes/test-evaluation-francais-tef/tef-quebec-tefaq/"
                    }>
                    <span>Cliquez ICI</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    placeContent: "space-between",
                  }}>
                  <p style={{ marginRight: "35px" }}>Compréhension orale/Plateforme électronique</p>
                  <LinkDuo className="custom-button btn " to={"https://www.youtube.com/watch?v=fCOgP7esfZY"}>
                    <span>Cliquez ICI</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    placeContent: "space-between",
                  }}>
                  <p style={{ marginRight: "35px" }}>Compréhension écrite/plateforme électronique</p>
                  <LinkDuo className="custom-button btn " to={"https://www.youtube.com/watch?v=QY7NIXXNRec"}>
                    <span>Cliquez ICI</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    placeContent: "space-between",
                  }}>
                  <p style={{ marginRight: "35px" }}>Expression orale Section A</p>
                  <LinkDuo className="custom-button btn " to={"https://www.youtube.com/watch?v=zH3Qjrv8rO4"}>
                    <span>Cliquez ICI</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    placeContent: "space-between",
                  }}>
                  <p style={{ marginRight: "35px" }}>Expression orale Section A et Section B</p>
                  <LinkDuo className="custom-button btn " to={"https://www.youtube.com/watch?v=oMr-qwl095E"}>
                    <span>Cliquez ICI</span>
                  </LinkDuo>
                </Col>
              </Row>
              <Row>
                <Col
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                    placeContent: "space-between",
                  }}>
                  <p style={{ marginRight: "35px" }}>Expression écrite</p>
                  <LinkDuo className="custom-button btn " to={"https://www.youtube.com/watch?v=WOnjEDZRLxI"}>
                    <span>Cliquez ICI</span>
                  </LinkDuo>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="margin-top-60">
            <Col>
              <div style={{ display: "flow-root" }}>
                <h3 className="text-esprit">Calendrier Tef&Tefaq</h3>
                <CustomHrGray />
              </div>
              <br />
              <p>Selon les dates affichées ci-dessous et dans la limite des places disponibles :</p>
              <Row style={{ justifyContent: "center" }}>{renderedData}</Row>
              <p>
                <strong style={{ color: "red" }}>
                  N.B : Les inscriptions aux tests se font sur place au 18, rue de l'Usine, Charguia II
                </strong>
              </p>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}
const breadcrumb = {
  Title: "TEF & TEFAQ",
  Subtitle: "LE TEST TEF & TEFAQ",
}
const first = {
  title: "Passation des épreuves",
  subtitle: "Où ?",
  description: [
    "Les épreuves se dérouleront",
    <strong>à ESPRIT LANGUAGE CENTER au 18 Rue de l'usine Charguia II - 2035- Ariana</strong>,
  ],
}
const second = {
  title: "Résultats et attestations",
  subtitle: "",
  description: [
    "Pour des sessions planifiées à partir du ",
    <strong>1er novembre 2016, la CCIP</strong>,
    " procèdera à la dématérialisation des attestations de résultats des tests suivants :",
    <br />,
    <strong> Le Test d'évaluation de français pour l'accès au Québec (TEFAQ)</strong>,
    <br />,
    <strong>Le Test d'évaluation de français pour la naturalisation.</strong>,
    <br />,
    "A compter de cette date les candidats aux sessions de ces deux tests ne recevront plus d'attestation papier. Les candidats souhaitant obtenir une attestation papier en plus de leur attestation dématérialisée pourront commander ce document sur la boutique en ligne au tarif de 50 euros.",
    <br />,
    <a href="http://www.boutique.cci-paris-idf.fr/" target="_blank" rel="noopener noreferrer">
      http://www.boutique.cci-paris-idf.fr/
    </a>,
    <br />,
    "Aucune modification ne pourra être apportée sur les attestations de résultats une fois éditées ou mise en ligne, en dehors des corrections demandées le ",
    <strong>JOUR DU TEST.</strong>,
  ],
}
const forth = {
  title: "CONTACT",
  subtitle: "",
  description: [
    <a href="mailto:elc@esprit.tn " target="_blank" rel="noopener noreferrer">
      elc@esprit.tn
    </a>,
    <br />,
    <strong>Tél : 70 250 064</strong>,
  ],
}
const third = {
  title: "Modalités d’inscription",
  subtitle: "",
  description: [
    <strong>Horaires des inscriptions : Du Lundi au Vendredi 8H30-12H et de 13H-15H</strong>,
    <br />,
    <strong> Horaires séance unique: Du Lundi au Vendredi 8H-12H</strong>,
    <br />,
    <strong>Délai de carence : </strong>,
    "la passation des épreuves du Test d'évaluation de français est soumise au respect d'un délai de carence de 30 jours entre deux sessions. le cas échéant, l'inscription sera rejetée par la CCIP.",
  ],
}
