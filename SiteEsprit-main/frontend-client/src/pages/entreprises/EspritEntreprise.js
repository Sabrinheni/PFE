import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import IconList from "components/IconList"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React from "react"
import { Card, Col, ListGroup, Row, Tab } from "react-bootstrap"
import photo from "../../assets/img/niveau-entreprise.jpg"
import { EspritEntreprise as meta } from "./EntreprisesDictionary"

function EspritEntreprise() {
  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container">
          <Row>
            <Col md={6} xs={12}>
              <h1>Missions d’Esprit Entreprise</h1>
              <CustomHrRed />
              <br />
              <br />
              <p>
                ESPRIT ENTREPRISE, filiale Esprit, créée en Janvier 2011 à l’attention des entreprises et de leurs
                ressources humaines, a pour principales missions de :
              </p>
              <ul className="qualite-ul">
                <li>Partager un savoir-faire élevé en matière de formation continue.</li>
                <li>Augmenter ou mettre à jour les compétences des ressources humaines de l’entreprise.</li>
                <li>
                  Assister les entreprises et les établissements de formation en matière d’ingénierie de formation et
                  d’ingénierie pédagogique.
                </li>
              </ul>
            </Col>
            <Col md={6} xs={12}>
              <h1>Nos savoir-faire</h1>
              <CustomHrRed />
              <br />
              <p>
                Selon la demande, ESPRIT ENTREPRISE est en mesure d'élaborer et de réaliser des formations sur mesure,
                adaptées aux besoins de l’entreprise et en étroite collaboration avec ses représentants, dans les
                domaines des TIC, du Génie Civil, de l’Electromécanique, de GRH et des langues (Français, Anglais,
                Allemand, Italien…).
              </p>
              <p>
                <strong>
                  Ces Formations proposées en inter ou en intra entreprise peuvent se présenter sous les 3 formes :
                </strong>
              </p>
              <ul className="qualite-ul">
                <li>Formations qualifiantes</li>
                <li>Formations promotionnelles</li>
                <li>Formations Certifiantes</li>
              </ul>
              <p>
                Esprit Entreprise&nbsp; centre de certification agréé par&nbsp;Pearson Vue, Prométric, ISTQB et autres
                centres,&nbsp; propose des cursus de formations et de certifications sur les Logiciels des acteurs
                majeurs de L'informatique : Microsoft, Cisco, Oracle, LPL Apple, etc.
              </p>
            </Col>
          </Row>
          <Row className="margin-top-60">
            <Col md={6} xs={12}>
              <h1>Nos Moyens</h1>
              <CustomHrRed />
              <br />
              <br />
              <p>ESPRIT ENTREPRISES met à la disposition des entreprises&nbsp;:</p>
              <ol>
                <li>
                  Ses experts en ingénierie de formation pour l'élaboration de parcours de formation et ses 300
                  enseignants et formateurs pour la réalisation de ces parcours dans les différents domaines
                  technologiques et linguistiques.
                </li>
                <li>Ses deux (2) grands sites de formation équipés par :</li>
              </ol>
              <ul className="qualite-ul">
                <li>Des Plateformes avancées et des ateliers technologiques pour la formation et la RDI</li>
                <li>Des liaisons Internet haut-débit et réseau Wifi</li>
                <li>D’un Centre de langues</li>
                <li>D’un Centre d’innovation pédagogique</li>
                <li>Des Espaces pour l’hébergement et la restauration.</li>
              </ul>
            </Col>
            <Col md={6} xs={12}>
              <h1>Certifications reçues par ESPRIT Entreprise</h1>
              <CustomHrRed />
              <br />
              <br />
              <ul className="qualite-ul">
                <li>Centre de certification&nbsp;&nbsp; Pearson&nbsp; &nbsp;VUE</li>
                <li>Centre de&nbsp; &nbsp;certification Prometric</li>
                <li>Centre de&nbsp; &nbsp;certification CERTIPORTE</li>
                <li>Centre de certification lSTQB</li>
                <li>Centre de certification SolidWork,CATIA et MATLAB</li>
                <li>
                  Académie Locale ClSCO (en 2008 L'école ESPRlT a été sélectionnée comme meilleure académie Locale ClSCO
                  pour La région MENA)
                </li>
                <li>Académie Oracle</li>
                <li>Microsoft lT Academy&nbsp;&nbsp; et membre du MlC (Mie rosoft lnnovation Center)</li>
                <li>Académie VMware : Centre de test pour La virtualisation .</li>
                <li>Académie LPl</li>
                <li>Membre de L’lTSMF (Organisation internationale des Certifiés lTlU)</li>
                <li>Académie SAP.</li>
              </ul>
            </Col>
          </Row>

          <div className="margin-top-60">
            <Tab.Container style={{ marginBottom: "60px" }}>
              <Col>
                <Row>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Nos Champs d’interventions</h3>
                    <CustomHrGray />
                    <br />
                  </div>
                </Row>
                <Row className="margin-top-60">
                  <h4 style={{ color: "lightgrey" }}>LA FORMATION CONTINUE DES ENTREPRISES</h4>
                </Row>
                <Tab.Container defaultActiveKey="#link1">
                  <Row className="margin-top-60">
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1">
                          Démarche
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                          Niveau
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                          Population
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>
                              Une démarche centrée sur l’analyse des besoins spécifiques de chaque entreprise
                            </h4>
                            <CustomHrRed />
                            <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                              <li>Prospecter par des visites personnalisées aux entreprises.</li>
                              <li>Présenter l’offre d’Esprit en formation continue par secteur d’activité.</li>
                              <li>
                                Enquêter auprès des services concernés pour identifier leurs besoins en compétences.
                              </li>
                              <li>Analyser et consolider les besoins de l’entreprise en formation continue.</li>
                              <li>Elaborer les cahiers des charges en collaboration avec l’entreprise.</li>
                              <li>Proposer un plan d’action et le faire valider par l’entreprise.</li>
                              <li>Mettre en œuvre la formation.</li>
                              <li>Evaluer à chaud et à froid la formation.</li>
                            </ul>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>Un Niveau de Formation adapté à l’analyse des besoins</h4>
                            <CustomHrRed />
                            <Col style={{ textAlign: "-webkit-center" }}>
                              <Card style={{ width: "18rem" }}>
                                <Card.Img variant="top" src={photo} />
                              </Card>
                            </Col>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>Population cible et Niveau de qualification</h4>
                            <CustomHrRed />
                            <p>OP, OQ, CAP, BTP, BTS, CADRES….</p>
                            <p>Champs de compétences visés par la formation :</p>
                            <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                              <li>Processus de la production / fabrication.</li>
                              <li>Processus de la maintenance.</li>
                              <li>Processus commercial.</li>
                              <li>Processus RH et gestion administrative.</li>
                              <li>Processus de développement des TIC.</li>
                            </ul>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Tab.Container>
            <Row className="margin-top-60">
              <h4 style={{ color: "lightgrey" }}>L’INGENIERIE DE FORMATION</h4>
            </Row>
            <Row className="margin-top-60">
              <Col md={6} xs={12}>
                <IconList data={entreprise} />
              </Col>
              <Col md={6} xs={12}>
                <IconList data={formations} />
              </Col>
            </Row>
            <Row className="margin-top-60">
              <h4 style={{ color: "lightgrey" }}>LA CERTIFICATION DE COMPÉTENCES</h4>
            </Row>
            <Row className="margin-top-60">
              <p>
                Assurer l’évaluation et la certification des compétences techniques en collaboration avec les organismes
                Compétents pour :
              </p>
              <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                <li>Recruter du personnel.</li>
                <li>Effectuer un bilan des compétences du personnel.</li>
                <li>Certifier les compétences du personnel.</li>
                <li>Identifier des besoins en formation au profit des entreprises.</li>
              </ul>
            </Row>
            <Row className="margin-top-60">
              <div style={{ display: "flow-root" }}>
                <h3 className="text-esprit">DOMAINES DE FORMATION</h3>
                <CustomHrGray />
                <br />
              </div>
            </Row>
            <Row className="margin-top-60">
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF1</span>
                    </span>
                    <h4 className="circle-title">Informatique et Si</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Programmation et Bases de Données</li>
                    <li>Administration des systèmes d’exploitation</li>
                    <li>Modélisation et programmation objet</li>
                    <li>Développement Web et Mobile</li>
                    <li>Java et SGBD</li>
                    <li>Système et sécurité</li>
                    <li>Développement orienté cloud</li>
                    <li>Cloud et virtualisation</li>
                    <li>Interopérabilité</li>
                    <li>Application d’entreprise (SharePoint, SOA, Architecture n-tiers)</li>
                    <li>Test et validation</li>
                    <li>Informatique décisionnelle.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF2</span>
                    </span>
                    <h4 className="circle-title">Télécommunications</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Réseaux locaux</li>
                    <li>Interconnexion de réseaux</li>
                    <li>Réseaux IP et routage</li>
                    <li>Réseaux de capteurs</li>
                    <li>Sécurité des réseaux</li>
                    <li>Microcontrôleurs</li>
                    <li>Transmission et traitement du signal</li>
                    <li>Hyper communication</li>
                    <li>Mesures et instrumentation.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF3</span>
                    </span>
                    <h4 className="circle-title">Génie Civil et BTP</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Relevés et Traitement de données topographiques</li>
                    <li>Logiciels de Génie Civil et BTP</li>
                    <li>Travaux de Bâtiment (Menuiserie, Maçonnerie, Marbrerie, Plomberie sanitaire).</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="margin-top-60">
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF4</span>
                    </span>
                    <h4 className="circle-title">Electronique, Automatismes</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Électronique Industrielle</li>
                    <li>Automatisme et informatique industrielle</li>
                    <li>Régulation industrielle</li>
                    <li>Commande des systèmes robotiques.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF5</span>
                    </span>
                    <h4 className="circle-title">Electricité, Électrotechnique</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Equipements et installations électriques</li>
                    <li>Electrotechnique</li>
                    <li>Exploitation des centrales électriques.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF6</span>
                    </span>
                    <h4 className="circle-title">Energétique, Froid, Climatisation</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Energétique</li>
                    <li>Froid Industriel</li>
                    <li>Climatisation.</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="margin-top-60">
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF7</span>
                    </span>
                    <h4 className="circle-title">Mécanique, Electromécanique, Maintenance industrielle et Thermique</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Technologies des systèmes mécaniques</li>
                    <li>Fabrication Mécanique</li>
                    <li>Techniques et Gestion de la maintenance industrielle</li>
                    <li>Systèmes Hydrauliques et pneumatiques</li>
                    <li>Mécanique des engins de chantiers.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF8</span>
                    </span>
                    <h4 className="circle-title">Soudure, construction métallique, chaudronnerie</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Techniques et procédures de soudure</li>
                    <li>Construction métallique</li>
                    <li>Chaudronnerie.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF9</span>
                    </span>
                    <h4 className="circle-title">Génie Industriel, Logistique</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Santé, sécurité de Travail et Environnement industriel</li>
                    <li>Manutention des équipements Industriels</li>
                    <li>Organisation, Management Industriel et Gestion des projets</li>
                    <li>Procédés d'exploitation des usines.</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="margin-top-60">
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF10</span>
                    </span>
                    <h4 className="circle-title">Comptabilité, Gestion, Finance</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Les Achats et la Gestion de stock,</li>
                    <li>Comptabilité-finance</li>
                    <li>Gestion de patrimoine</li>
                    <li>Contrôle de gestion.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF11</span>
                    </span>
                    <h4 className="circle-title">Droit, Administration, GRH</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Documents et actes juridiques</li>
                    <li>Assurances</li>
                    <li>Gestion des archives</li>
                    <li>Gestion des RH.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF12</span>
                    </span>
                    <h4 className="circle-title">Langues et Communication</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Langues,</li>
                    <li>Techniques de communication.</li>
                  </ul>
                </div>
              </Col>
            </Row>
            <Row className="margin-top-60">
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF13</span>
                    </span>
                    <h4 className="circle-title">SMQ et Qualité Totale</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Les normes ISO, démarche Qualité,</li>
                    <li>SMQ et préparation à la certification ISO.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}>
                <div>
                  <div className="circle-headline">
                    <span className="circle-span">
                      <span>DF14</span>
                    </span>
                    <h4 className="circle-title">Pédagogie et Ingénierie de formation</h4>
                  </div>
                  <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                    <li>Ingénierie de Formation</li>
                    <li>Ingénierie Pédagogique</li>
                    <li>Formation pédagogique du personnel de formation</li>
                    <li>Formation des responsables de formation des entreprises.</li>
                  </ul>
                </div>
              </Col>
              <Col md={4} xs={12}></Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  )
}

const entreprise = {
  icon: "icofont-briefcase",
  title: "Assistance aux entreprises",
  description: "Une assistance professionnelle :",
  list: [
    "Élaboration et mise à jour des Référentiels d’Emploi et des Compétences (REC)",
    "Identification des besoins en formation",
    "Élaboration des cahiers des charges",
    "Élaboration des plans de formation",
    "Réalisation des plans de formation",
    "Évaluation des actions de formation",
    "Implantation et développement de la fonction formation en entreprises.",
  ],
}
const formations = {
  icon: "icofont-hat",
  title: "Assistance aux opérateurs de formation",
  description: "Une assistance académique :",
  list: [
    "Élaboration et mise à jour des Référentiels de Formation (RF)",
    "Élaboration des programmes de formation initiale",
    "Élaboration des catalogues de formation continue",
    "Élaboration des supports de formation",
    "Implantation des programmes de formation",
    "Mise en œuvre de la formation initiale",
    "Ré-ingénierie des structures de formation.",
  ],
}

const breadcrumb = {
  Title: "Esprit Entreprise",
  Subtitle: "Nos savoirs faire",
}
export default EspritEntreprise
