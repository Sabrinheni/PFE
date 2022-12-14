import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import LinkDuo from "components/utils/LinkDuo"
import React, { Component } from "react"
import { Col, Container, Image, Row } from "react-bootstrap"
import accredit from "../../assets/img/accredit-button.png"
import CDIO from "../../assets/img/CDIO.png"
import CGE from "../../assets/img/CGE.png"
import EURACE from "../../assets/img/EURACE.png"
import photo1 from "../../assets/img/Photo-1.jpg"
import photo2 from "../../assets/img/photo-2.jpg"
import { ValeursEcole as meta } from "./EspritDictionary"
import ESPRIT from "../../assets/img/logo-esprit-2.png"
import { LazyImage } from "components/utils/LazyImage"
export default class ValeursEcole extends Component {
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
                  <h1>Les Valeurs De L'École</h1>

             
                  <CustomHrRed />

                </Col>
                
              </Row>
              <Row>
                <Col>
                <div style={{ display: "flex", placeItems: "center", marginBottom: "20px" }}>
                <Image src={ESPRIT} rounded style={{ maxWidth: "100px", float: "left", marginRight: "20px" }} />
                  <p>
                    Fondée en 2003 à l’initiative de trois universitaires ayant conduit de nombreux projets dans
                    l’enseignement supérieur tunisien, et dans l’enseignement supérieur technique en particulier,
                    entourés de plusieurs dizaines de leurs collègues, ainsi que d’entreprises TIC et de partenaires
                    financiers, Esprit a dès le départ mis en place des formations basées sur des valeurs intangibles :
                  </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <div style={{ display: "flex", placeItems: "center", marginBottom: "20px" }}>
                    <Image src={accredit} rounded style={{ maxWidth: "100px", float: "left", marginRight: "20px" }} />

                    <p>
                      En plus d’être habilitée par le Ministère de l’Enseignement Supérieur et de la Recherche
                      Scientifique tunisien, la qualité de l’enseignement Esprit a été reconnue internationalement :
                    </p>
                  </div>
                  <div>
                    <ul style={{ listStyle: "circle" }}>
                      <li>
                        Par son adhésion en avril 2014 à la conférence des grandes école
                        <LinkDuo to="http://www.cge.asso.fr/">(CGE )*</LinkDuo> qui regroupe environ 110 établissements
                        français et étrangers qui forment leurs diplômés dans un souci constant d’excellence
                      </li>
                      <li>
                        Par son adhésion à l’initiative <LinkDuo to="http://www.cdio.org/">CDIO*</LinkDuo> fondé par le
                        MIT (Massachussetts institue of Technology) qui regroupe 116 institutions dont 2 seulement sur
                        le continent africain. CDIO a pour objectif est de recentrer la pédagogie des formations
                        d’ingénieurs autour de mises en situation professionnelle)
                      </li>
                      <li>
                        Et enfin par l’accréditation internationale de ses programmes à travers le label EUR ACE qui lui
                        a été délivrée par la commission française des titres de l’ingénieur
                        <LinkDuo to="https://www.cti-commission.fr/">(CTI)*</LinkDuo> en 2014 et en 2017.
                      </li>
                    </ul>
                    <Container>
                      <Row style={{ marginTop: "20px", marginBottom: "20px", placeItems: "center" }}>
                        <Col xs={6} md={4} style={{ textAlign: "center" }}>
                          <LinkDuo to="http://www.cdio.org/cdio-action/school-profiles/esprit-europe-region">
                            <Image src={CDIO} thumbnail />
                          </LinkDuo>
                        </Col>
                        <Col xs={6} md={4} style={{ textAlign: "center" }}>
                          <LinkDuo to="https://www.cti-commission.fr/">
                            <Image src={EURACE} thumbnail />
                          </LinkDuo>
                        </Col>
                        <Col xs={6} md={4} style={{ textAlign: "center" }}>
                          <LinkDuo to="https://www.cge.asso.fr/ecoles/esprit/">
                            <Image src={CGE} thumbnail />
                          </LinkDuo>
                        </Col>
                      </Row>
                      <Row>
                        <p>
                          Cet important développement de l’école tient d’abord et avant tout aux valeurs sur lesquelles
                          Esprit a été fondée et auxquelles elle ne déroge pas :<br></br>
                        </p>
                      </Row>
                    </Container>
                  </div>
                </Col>
              </Row>
              <Row>
                <Row style={{ marginBottom: "30px" }}>
                  <Col md={3}>
                    <Image src={photo1} thumbnail className="img-wrapper-element" />
                    {/* <div className="img-wrapper">
                    </div> */}
                  </Col>
                  <Col>
                    <div style={{ margin: "20px 0" }}>
                      <div className="circle-headline">
                        <span className="circle-span">
                          <span>1</span>
                        </span>
                        <h4 className="circle-title">Se former autrement</h4>
                      </div>
                      <p>
                        <strong>«&nbsp;Se former autrement&nbsp;»</strong> vise à former des ingénieurs
                        directement&nbsp;opérationnels&nbsp;: cela passe par une approche pédagogique innovante, l’APP
                        apprentissage par&nbsp;projets/problèmes, notamment au travers de la participation à de nombreux
                        challenge nationaux et&nbsp;internationaux. Les activités de recherche et développement dans
                        lesquels les étudiants peuvent être&nbsp;acteurs y jouent aussi leur rôle. Récemment créé ,
                        Esprit incubator constitue un puissant outil&nbsp;contribuant à permettre aux étudiants porteurs
                        d’idées innovantes à aller, dans le cadre de leur&nbsp;formation, jusqu’à la création de leur
                        start up s’ils le souhaitent.
                      </p>
                    </div>
                    <div style={{ margin: "20px 0" }}>
                      <div className="circle-headline">
                        <span className="circle-span">
                          <span>2</span>
                        </span>
                        <h4 className="circle-title">La notion de responsabilité et d’inclusion sociales</h4>
                      </div>
                      <p>
                        Esprit se veut depuis sa création une école ouverte&nbsp;au plus grand nombre. Dès le début, des
                        mécanismes ont été déployés pour qu’un jeune ayant du&nbsp;talent puisse, quelle que soit sa
                        situation sociale, suivre les cours et obtenir son diplôme. Depuis&nbsp;deux ans, l’école a
                        souhaité amplifier le phénomène par la création de la
                        <strong>
                          <LinkDuo to="http://esprit-fondation.tn/" target="_blank">
                            Fondation Esprit
                          </LinkDuo>
                        </strong>
                        &nbsp;en vue d’aider les jeunes à financer leur formation.
                      </p>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col md={3}>
                    <Image src={photo2} thumbnail />
                    {/* <div className="img-wrapper">
                    </div> */}
                  </Col>
                  <Col>
                    <div style={{ margin: "20px 0" }}>
                      <div className="circle-headline">
                        <span className="circle-span">
                          <span>3</span>
                        </span>
                        <h4 className="circle-title">L’Interaction avec les entreprises</h4>
                      </div>
                      <p>
                        L’objectif de l’école étant de former des ingénieurs totalement en phase avec les besoins de
                        l’économie et des entreprises, passe par de nombreux canaux : rencontres régulières avec les
                        professionnels pour faire le point sur les programmes afin de les adapter avec les besoins réels
                        du marché ; obligation pour les élèves d’effectuer 3 stages en entreprise dont le Projet de fin
                        d’étude d’une durée de 7 mois ; mise en place d’une "Learning Factory" qui offre des espaces aux
                        entreprises venus à la rencontre des étudiants et de leurs enseignants pour y déployer des
                        projets en relation avec leurs préoccupations ; création d’Esprit Tech qui porte la RDI
                        (Recherche, développement et innovation) permettant aux enseignants de développer leurs
                        compétences par des activités de production au service des entreprises ; création d’Esprit
                        Incubateur, l’incubateur de startups.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}
