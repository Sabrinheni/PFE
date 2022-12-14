import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Card, Col, ListGroup, Row, Tab } from "react-bootstrap"
import photo from "../../assets/img/Naceur-Ammar.jpg"
import { MotDuPresident as meta } from "./EspritDictionary"

export default class MotDuPresident extends Component {
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
                  <h1>Mot du Président</h1>
                  <hr className="esprit-title-hr"></hr>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h6 className="quote">
                    "Bienvenue sur le site d’Esprit où vous trouverez, je l’espère, l’ensemble des informations que vous
                    êtes venus y chercher."
                  </h6>
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row>
                <Col>
                  <div>
                    <Card style={{ width: "18rem" }}>
                      <Card.Img variant="top" src={photo} />
                      <Card.Body>
                        <Card.Title style={{ textAlign: "center" }}>Prof. Naceur Ammar</Card.Title>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
                <Col>
                  <p>
                    Cela fait maintenant 17 ans qu’à Esprit nous avons le plaisir de voir des étudiants venir s’épanouir
                    et finalement aboutir à prendre en main leur avenir professionnel.
                    <br></br>
                    17 ans que nous nous engageons au quotidien pour assurer la meilleure formation possible, celle qui
                    correspond le mieux à notre tissu socio-économique, celle qui donne un emploi à nos étudiants. C’est
                    ainsi que de 30 étudiants lors de la première promotion nous en sommes à près de 7000 étudiants dans
                    nos 4 filières (Informatique, télécommunications, génie électromécanique et génie civil).
                  </p>
                </Col>
                <Col>
                  <p>
                    Sans compter nos 110 étudiants en classes préparatoires aux Grandes Ecoles d’Ingénieur et ceux de
                    notre école de Management.<br></br>
                    Esprit est aujourd’hui la première école d’ingénieur de Tunisie, elle forme plus de 15% des nouveaux
                    ingénieurs diplômés du pays chaque année, et ceux-ci s’intègrent avec bonheur dans le marché de
                    l’emploi.
                  </p>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <h6>Cette volonté s’est traduite de plusieurs manières :</h6>
                <hr className="custom-hr-red"></hr>

                <Tab.Container defaultActiveKey="#link1">
                  <Row>
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1">
                          Pédagogie
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                          Ouverture d’esprit
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3">
                          Multiculturalisme
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4">
                          Entreprenariat
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5">
                          Vie étudiante
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link6">
                          Reconnaissance internationale
                        </ListGroup.Item>
                      </ListGroup>
                    </Col>
                    <Col sm={8}>
                      <Tab.Content>
                        <Tab.Pane eventKey="#link1">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>La Pédagogie Active</h4>
                            <hr style={{ color: "#ed1c24", borderTop: "2px solid" }}></hr>
                            <p>
                              Dès le départ, nous avons opté pour une formation en groupes restreints (30 maximum) basée
                              sur l’apprentissage par problèmes et projets accompagné par un corps enseignant permanent
                              fort de quelques 250 enseignants, soit un enseignant pour 18 étudiants. L’étudiant se
                              retrouve dès sa 1 ère année en situation quasi-professionnelle, il résout des problèmes,
                              il travaille en équipe, il rend des comptes, etc.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link2">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>L'OUVERTURE D'ESPRIT</h4>
                            <hr style={{ color: "#ed1c24", borderTop: "2px solid" }}></hr>
                            <p>
                              Un ingénieur complet se doit d’avoir d’autres compétences que techniques. Il travaille en
                              groupe, gère des équipes, prend en compte les facteurs humains, c’est pourquoi nous
                              insistons aussi beaucoup sur les compétences transversales en économie, en gestion, en
                              communication et en langues.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link3">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>LE MULTICULTURALISME</h4>
                            <hr style={{ color: "#ed1c24", borderTop: "2px solid" }}></hr>
                            <p>
                              Nous offrons à nos étudiants la possibilité d’une expérience internationale à travers de
                              l’un de nos 10 accords de cursus conjoint et de doubles diplômes en France ou aux
                              Etats-Unis.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>
                              LA PRISE EN COMPTE CONSTANTE DE LA DIMENSION ENTREPRENEURIALE
                            </h4>
                            <hr style={{ color: "#ed1c24", borderTop: "2px solid" }}></hr>
                            <p>
                              Par l’obligation de plusieurs stages dont un de 7 mois en fin d’études, par la création de
                              l’incubateur qui permet à de jeunes porteurs de projets de trouver un lieu propice pour le
                              développer, grâce à la « Learning factory » qui met des étudiants au contact de projets
                              d’entreprises, etc.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>
                              LE DÉVELOPPEMENT DE LA VIE ÉTUDIANTE DANS L’UN DES 40 CLUBS
                            </h4>
                            <hr style={{ color: "#ed1c24", borderTop: "2px solid" }}></hr>
                            <p>
                              Quand un(e) étudiant(e) s’engage dans un club, crée un événement, participe à un
                              challenge, il y trouvera une source incomparable de formation à la vie professionnelle,
                              tout en tissant dans une ambiance festive et chaleureuse des amitiés qui contribuent à en
                              faire une personne complète.
                            </p>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link6">
                          <div>
                            <h4 style={{ color: "#ed1c24" }}>
                              LA RECONNAISSANCE INTERNATIONALE DE LA QUALITÉ DE NOTRE DIPLÔME
                            </h4>
                            <hr style={{ color: "#ed1c24", borderTop: "2px solid" }}></hr>
                            <p>
                              Par l’accréditation EUR ACE délivré par la CTI (Commission des Titres de l’Ingénieur
                              française) depuis 2014, Esprit est aujourd’hui la seule école tunisienne à en bénéficier ;
                              par l’adhésion à l’initiative CDIO en 2014 qui rassemble les institutions qui privilégient
                              la mise en situation professionnelle de ses étudiants -116 dans le monde, et seulement 2
                              sur le continent africain- et par l’adhésion a la CGE (Conférence des Grandes Ecoles) qui
                              rassemble environ 200 grandes écoles d’ingénieur et de commerce pour un partage
                              d’expérience.
                            </p>
                            <p>
                              En septembre 2017, l'ensemble des formations d'Esprit ont obtenu l’accréditation d'EUR-ACE
                              fournie par l'organisation française CTI (Comité des titres d’ingénieurs){" "}
                            </p>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Row>
              <Row style={{ marginTop: 20, marginLeft: 5 }}>
                <p>
                  Finalement, la réussite d’Esprit n’est autre que celle de ses étudiants, celle des 85% d’entre eux qui
                  s’insèrent dans le marché de l’emploi dans les 6 mois suivant la délivrance de leur diplôme, celle des
                  35 % de ces derniers qui portent le drapeau de la compétence tunisienne en Europe et en Amérique du
                  Nord, celle des chefs d’entreprise qui ont été formés sur ses bancs, celle des milliers de jeunes qui
                  ont pu s’épanouir au cours de leur formation pour devenir des hommes et des femmes talentueux, ouverts
                  au monde.
                </p>
                <p>
                  Notre réseau de plus de 3000 alumni (anciens étudiants) est là pour en témoigner. Nous vous invitons à
                  les rejoindre.
                </p>
              </Row>
            </div>
          </div>
        </section>
        <section className="our-blog extract main-blog margin-top-0 padding-top-0">
          <div className="container"></div>
        </section>
      </>
    )
  }
}
