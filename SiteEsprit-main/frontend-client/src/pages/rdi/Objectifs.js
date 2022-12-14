import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row, Table } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"

export default class Objectifs extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row>
              <Col>
                <h1>Nos Objectifs</h1>
                <CustomHrRed />
              </Col>
            </Row>
            <div className="margin-top-60">
              <Row>
                <Col>
                  <p>
                    Le plan stratégique de recherche, développement et innovation 2019-2021 vise à mobiliser la
                    communauté d’ESPRIT autour de huit objectifs prioritaires:
                  </p>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Objectif</th>
                        <th>Stratégies</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <b>O.1. Mettre en place les ressources nécessaires pour le support des activités RDI</b>
                        </td>
                        <td>
                          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                            <li>
                              Mobiliser les moyens et les ressources nécessaires pour la réalisation de projets RDI
                              :Ressources humaines (exemple: assistants de recherche), Ressources matérielles (exemple:
                              espace dédié pour la RDI, équipements, ressources de calcul et de stockage cloud,
                              logiciels, librairies de recherche digitales), Ressources financières (exemple:financement
                              de missions, participation à des conférences)
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>O.2. Contribuer à la formation des enseignants en RDI</b>
                        </td>
                        <td>
                          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                            <li>
                              Organiser des workshops et des séminaires sur des thématiques émergentes Mettre en place
                              des ressources adéquates de référence bibliographique (ex. librairies électroniques)
                            </li>
                            <li>
                              Financer la participation des enseignants à des conférences, colloques, workshops et
                              écoles de recherche
                            </li>
                            <li>Encourager la formation d’équipes de recherche</li>
                            <li>
                              Créer des opportunités pour connecter les enseignants chercheurs issus de disciplines
                              différentes et favoriser les projets interdisciplinaires
                            </li>
                            <li>Engager des chercheurs associés et de renommé dans l’encadrement d’équipes RDI</li>
                            <li>Disséminer les aspects éthiques et légaux dans les pratiques RDI</li>
                            <li>
                              Intégrer le développement durable dans la formation des enseignants-chercheurs et dans la
                              sélection de projets RDI prioritaires
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>O.3. Contribuer à l’ancrage de la formation des élèves ingénieurs avec la RDI </b>
                        </td>
                        <td>
                          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                            <li>
                              Impliquer les étudiants dans des projets innovants et interdisciplinaires, en
                              collaboration avec les équipes RDI (sujets de PFE ou projets intégrés)
                            </li>
                            <li>
                              Fournir les ressources nécessaires (espace, équipement, logiciels…) pour le bon
                              déroulement des projets PFEs de RDI
                            </li>
                            <li>
                              Encourager les enseignants à proposer aux élèves-ingénieurs des projets RDI dans le cadre
                              de stages d’été.
                            </li>
                            <li>Former une nouvelle génération d’ingénieurs capables de mener des PFEs de RDI</li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>O.4. Promouvoir la commercialisation de la production RDI</b>
                        </td>
                        <td>
                          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                            <li>Favoriser le transfert des projets RDI au bénéfice des entreprises</li>
                            <li>Contribuer au développement et financement de laboratoires de recherche</li>
                            <li>
                              Solliciter des fonds auprès de sources privées et publiques pour la commercialisation des
                              projets RDI (investissement, incubation, brevets…).
                            </li>
                            <li>
                              Proposer aux enseignants des workshops reliés à la propriété intellectuelle, les brevets
                              et l’entrepreneuriat.
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>O.5. Identifier, promouvoir et faciliter les opportunités de financement de la RDI</b>
                        </td>
                        <td>
                          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                            <li>
                              Sensibiliser les enseignants chercheurs à publier dans des revues scientifiques présentant
                              un facteur d’impact important
                            </li>
                            <li>
                              Sécuriser des fonds internes à la disposition des enseignants pour le financement de
                              projets RDI qui répondent aux priorités nationales
                            </li>
                            <li>Diversifier les sources de financement de la RDI</li>
                            <li>
                              Élargir les collaborations avec les entreprises en profitant des réseaux internes et des
                              conventions déjà établies
                            </li>
                            <li>
                              Établir des partenariats RDI avec des laboratoires de recherche (nationaux et
                              internationaux)
                            </li>
                            <li>
                              Accompagner les équipes de recherche dans la rédaction des demandes de
                              financement/subventions de projets RDI
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>O.6.Améliorer les processus administratifs</b>
                        </td>
                        <td>
                          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                            <li>
                              Rationaliser les processus administratifs associés au traitement des demandes de missions,
                              à la gestion des activités/évènements/projets/équipes RDI etc.
                            </li>
                            <li>
                              Mettre en places de nouveaux systèmes d’information pour mieux répondre aux besoins des
                              parties prenantes (internes et externes). Élaborer un budget transparent
                            </li>
                            <li>Gérer le budget RDI de manière optimale</li>
                            <li>
                              Définir les objectifs et les indicateurs de performance des programmes stratégiques et
                              assurer leur suivi.
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>O.7. Communiquer et célébrer les productions et succès RDI</b>
                        </td>
                        <td>
                          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                            <li>
                              Diffuser et promouvoir les activités et les productions RDI (site ESPRIT, catalogues de
                              recherche/formation, journées RDI, workshops, conférences, séminaires, rapports annuels,
                              etc.)
                            </li>
                            <li>Améliorer la visibilité de la RDI sur le site web d’ESPRIT</li>
                            <li>
                              Organiser des événements pour célébrer les réalisations des équipes RDI et des
                              enseignants-chercheurs d’ESPRIT et des étudiants.
                            </li>
                            <li>Attribuer des prix annuels aux chercheurs les plus actifs</li>
                            <li>
                              Élaborer un système d’information pour la collecte systématique et le reporting des
                              activités RDI
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <b>O.8. Valoriser d’avantage le volet RDI à ESPRIT </b>
                        </td>
                        <td>
                          <ul style={{ listStyle: "disc", marginLeft: "20px" }}>
                            <li>
                              Positionner ESPRIT entant qu’un acteur majeur d’innovation en favorisant les partenariats
                              avec les laboratoires de recherche, les entreprises et la société civile.
                            </li>
                            <li>
                              Coordonner avec le comité de passage de grade et de recrutement dans le but d’attribuer
                              plus d’importance aux activités et à la production RDI
                            </li>
                            <li>Renforcer la culture de recherche scientifique, technique et industrielle à ESPRIT</li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: "",
  Title: "Nos Objectifs",
  Subtitle: "OBJECTIFS & STRATÉGIES",
}
