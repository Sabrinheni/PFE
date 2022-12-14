import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import DownloadButton from "components/DownloadButton"

import lamia from "../../../assets/img/lamia.png"
import rym from "../../../assets/img/rym.png"
import loukil from "../../../assets/img/loukil.png"

import IconList from "components/IconList"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import LinkDuo from "components/utils/LinkDuo"
import React from "react"
import { Accordion, Card, Col, Row } from "react-bootstrap"
import file2 from "../../../assets/files/Formulaire d'inscription EMBA ESPRIT Mai 2022.pdf"
import file1 from "../../../assets/files/Dépliant-Esprit_MINIMALE.pdf"
import arrowsrc from "../../../assets/img/arrow.ico"
import { ExecutiveMBA as meta } from "../FormationsDictionary"

function ExecutiveMBA() {
  return (
    <>
      <MetaHelmet meta={meta} script={process.env.REACT_APP_API_URL + "facebookPixel.js"} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container">
          <Row>
            <Col>
              <h1>EMBA : L’innovation numérique au service du management</h1>
              <CustomHrRed />
              <br />
              <br />
              <p>
                L’EMBA ESPRIT est destiné aux managers, cadres dirigeants et porteurs de projets, qui veulent donner un
                nouveau souffle à leur carrière par l’appropriation d’une réflexion stratégique et de nouvelles
                compétences managériales transversales dans leur contexte professionnel. L’innovation managériale dans
                un monde digital est au cœur de cette formation. L’EMBA ESPRIT permet en outre aux participants
                d’acquérir une vision 360° de l’entreprise et de développer leurs aptitudes de leadership.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h3 className="text-esprit">La formation EMBA ESPRIT au service des participants</h3>
              <CustomHrRed />
              <br />
              <br />
              <ul className="qualite-ul">
                <li>
                  Développer de nouvelles compétences transversales et s’approprier de nouvelles pratiques de management
                  et de nouveaux concepts et outils, transposables dans votre propre contexte et vos propres projets
                  professionnels.
                </li>
                <li>Prendre du recul sur des situations et sur ses pratiques managériales</li>
                <li>Développer un diagnostic stratégique de votre entreprise et proposer des solutions innovantes</li>
                <li>
                  Concevoir et piloter une stratégie de transformation digitale pour améliorer la prise de décisions, la
                  performance et la position concurrentielle de votre entreprise
                </li>
                <li>Améliorer vos compétences de pensée critique et de résolution de problèmes.</li>
                <li>
                  Développer un esprit éthique, innovant et critique dans la prise de décision dans des situations
                  complexes
                </li>
                <li>
                  Améliorer vos compétences de communication, négociation, travail en groupe et votre aptitude au
                  leadership
                </li>
                <li>Booster votre carrière et améliorer votre employabilité</li>
              </ul>
            </Col>
            <Col>
              <h3 className="text-esprit">La formation EMBA ESPRIT au service des employeurs</h3>
              <CustomHrRed />
              <br />

              <ul className="qualite-ul" style={{ float: "left" }}>
                <li>
                  Un outil de motivation et de fidélisation :
                  <ul style={{ listStyle: "disk", marginLeft: "30px" }}>
                    <li>Investir dans le développement personnel et professionnel de vos cadres</li>
                    <li>
                      Propulser l’évolution de carrière de vos cadres, ce qui leur permettrait de rester impliqués dans
                      votre entreprise.
                    </li>
                  </ul>
                </li>
                <li>
                  Un retour sur investissement :
                  <ul style={{ listStyle: "disk", marginLeft: "30px" }}>
                    <li>
                      Les nouvelles compétences acquises par vos cadres durant la formation EMBA peuvent être
                      immédiatement mises au service de votre entreprise
                    </li>
                    <li>
                      Un coaching personnalisé par des experts pour guider chaque participant á réaliser son propre
                      projet de changement professionnel (mémoire) au service de votre entreprise.
                    </li>
                  </ul>
                </li>
                <li>
                  Une formation à temps partiel qui s’adapte aux agendas chargés de vos cadres ; sans avoir á sacrifier
                  leur vie professionnelle
                </li>
                <li>Une fenêtre sur l’innovation managériale, le digital, entrepreneuriat et le leadership.</li>
                <li>
                  Un réseau de partenaires et de clients potentiels développé par les participants durant leur formation
                  EMBA.
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="margin-top-60">
            <Col>
              <h3 className="text-esprit">Les spécificités de la formation EMBA ESPRIT</h3>
              <CustomHrRed />
              <br />
              <br />
              <ul className="qualite-ul">
                <li>
                  Un fort accent sur l‘innovation managériale, la transformation digitale, l’intra/entrepreneuriat et le
                  leadership
                </li>
                <li>
                  Un coaching personnalisé pour guider chaque participant á réaliser son propre projet de changement
                  professionnel
                </li>
                <li>
                  Une cadence de formation, á temps partiel, planifiée et adaptée aux agendas chargés des professionnels
                  et aux exigences de l’entreprise
                </li>
                <li>
                  Ancrage académique adapté aux :
                  <ul style={{ listStyle: "disk", marginLeft: "30px" }}>
                    <li>Problématiques et aux enjeux d’affaires et de gestion de l’heure</li>
                    <li>
                      Profils variés de participants: Managers, cadres dirigeants, ingénieurs, entrepreneurs, porteurs
                      de projets, etc.
                    </li>
                  </ul>
                </li>
                <li>
                  Approche pédagogique participative basée sur le “learning by doing” á travers les méthodes
                  d'apprentissage par projet, études de cas transversaux, travail en petits groupes, mises en situation,
                  Business games, et les partages d’expériences professionnelles
                </li>
                <li>
                  Des sessions de formation en “ blendedlearning” assurées par un corps professoral (Tunisien et
                  étranger) hautement qualifié
                </li>
                <li>Une formation de préparation au Cambridge Business English Certificate (BEC)</li>
              </ul>
            </Col>
            <Col>
              <h3 className="text-esprit">Les objectifs de la formation EMBA ESPRIT</h3>
              <CustomHrRed />
              <br />

              <ul className="qualite-ul" style={{ float: "left" }}>
                <li>
                  Capacité de communiquer efficacement en milieu professionnel tant sur le plan oral que sur le plan
                  écrit
                </li>
                <li>Capacité de pensée critique et de résolution de problèmes</li>
                <li>
                  Aptitude à prendre en compte les valeurs de l’entreprise : éthique, diversité, ouverture aux autres,
                  responsabilité et performance globale.
                </li>
                <li>
                  Capacité de contextualiser et d’appliquer un large champ de connaissances et de compétences
                  interdisciplinaires dans son propre contexte professionnel
                </li>
                <li>
                  Maitrise des méthodes et des outils du management tant sur le plan stratégique que sur le plan
                  opérationnel
                </li>
                <li>Capacité de s'adapter, d'innover et de gérer dans des environnements imprévisibles</li>
                <li>
                  Capacité d’évaluer la pertinence des technologies émergentes, de développer une stratégie numérique et
                  de piloter une transformation digitale afin de faire évoluer l'entreprise et sa performance.
                </li>
                <li>
                  Capacité d’exercer de manière efficace le style de leadership le plus adapté à la situation et de
                  mobiliser des équipes pour atteindre des objectifs communs
                </li>
                <li>
                  Capacité d’exercer de manière efficace les mécanismes de la négociation et de résolution de conflits
                </li>
              </ul>
            </Col>
          </Row>

          <Row className="margin-top-60">
            <div style={{ display: "flow-root" }}>
              <h3 className="text-esprit">Le contenu du programme</h3>
              <CustomHrGray />
              <br />
            </div>
          </Row>

          <Row className="margin-top-60">
            <Accordion defaultActiveKey="0" style={{ color: "black", width: "100%" }}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Le synoptique
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <ul style={{ listStyle: "circle", marginLeft: "10px" }}>
                      <li>Séminaire d’intégration</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  MODULES D'ENSEIGNEMENTS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <h5>MODULES D'ENSEIGNEMENTS</h5>
                    <h6 style={{ marginLeft: "20px" }}>THÉMATIQUE MANAGEMENT:</h6>
                    <ul style={{ listStyle: "disc", marginLeft: "40px" }}>
                      <li>Management transversal</li>
                      <li>Management des Hommes</li>
                      <li>Négociation managériale</li>
                      <li>Management interculturel et gestion de la diversité</li>
                      <li>La psychologie positive appliquée au travail</li>
                      <li>Management des processus</li>
                    </ul>
                    <h6 style={{ marginLeft: "20px" }}>THÉMATIQUE COMPTABILITÉ ET FINANCE :</h6>
                    <ul style={{ listStyle: "disc", marginLeft: "40px" }}>
                      <li>Comptabilité financière</li>
                      <li>Finance d'entreprise et des marchés</li>
                    </ul>
                    <h6 style={{ marginLeft: "20px" }}>THÉMATIQUE STRATÉGIE :</h6>
                    <ul style={{ listStyle: "disc", marginLeft: "40px" }}>
                      <li>Management stratégique</li>
                      <li>Affaires internationales</li>
                      <li>Leadership and conduite de changement</li>
                    </ul>
                    <h6 style={{ marginLeft: "20px" }}>THÉMATIQUE MARKETING DIGITAL :</h6>
                    <ul style={{ listStyle: "disc", marginLeft: "40px" }}>
                      <li>Fondements du Marketing</li>
                      <li>Stratégies de Marketing et Marketing digital</li>
                    </ul>
                    <h6 style={{ marginLeft: "20px" }}>THÉMATIQUE INNOVATION ET ENTREPRISE DIGITALE</h6>
                    <ul style={{ listStyle: "disc", marginLeft: "40px" }}>
                      <li>Enjeux de l'économie numérique</li>
                      <li>Management de l'innovation et de la technologie</li>
                      <li>Stratégies SI et transformation digitale</li>
                      <li>Applications du Big Data</li>
                    </ul>
                    <h6 style={{ marginLeft: "20px" }}>THÉMATIQUE PROJET PROFESSIONNEL</h6>
                    <ul style={{ listStyle: "disc", marginLeft: "40px" }}>
                      <li>Analyse des données</li>
                      <li>Méthodologies de recherche</li>
                      <li>Thèse professionnelle et soutenance publique devant un jury</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  PROJET PROFESSIONNEL
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <ul style={{ listStyle: "circle", marginLeft: "10px" }}>
                      <li>
                        Permet aux participants d’approfondir leur réflexion face à une problématique liée à leur propre
                        projet professionnel.
                        <ul style={{ listStyle: "disk", marginLeft: "30px" }}>
                          <li>
                            Développement d’activités, de marchés, de modèles d’affaires ou d’unités
                            commerciales/opérationnelles au sein de son propre entreprise
                          </li>
                          <li>Entrepreneuriat : Création ou reprise d’entreprise</li>
                        </ul>
                      </li>
                      <li>
                        Un enseignant-chercheur joue le rôle de superviseur et coach et accompagne le participant tout
                        au long de la formation EMBA,
                      </li>
                      <li>
                        Aboutit à la production et à la soutenance publique d’une thèse professionnelle devant un Jury.
                      </li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  AUTRES ACTIVITES
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <ul style={{ listStyle: "circle", marginLeft: "10px" }}>
                      <li>
                        Des séminaires variés en Français et en Anglais sur des problématiques professionnelles
                        émergentes
                      </li>
                      <li>Des activités d'immersion á l'international.</li>
                      <li>Une formation de préparation au Cambridge Business English Certificate (BEC)</li>
                    </ul>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>

          <Row className="margin-top-60" style={{ display: "flex", placeContent: "center" }}>
            <div style={{ marginTop: "15px", display: "flex", placeContent: "center" }}>
              <DownloadButton
                data={{
                  link: file1,
                  text: "Télécharger le dépliant",
                  src: arrowsrc,
                }}
              />
            </div>
          </Row>

          <Row className="margin-top-60">
            <div style={{ display: "flow-root" }}>
              <h3 className="text-esprit">TEMOIGNAGES</h3>
              <CustomHrGray />
              <br />
            </div>
          </Row>
          <Row className="margin-top-60">
            <table>
              <tr>
                <td>
                  <div style={{ display: "flow-root" }}>
                    <img src={lamia} alt="empty" width="200" height="200" />
                    <br></br>
                  </div>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                  <div>
                    <h4>
                      Lamia BEN FARAH <br></br>BUSINESS UNIT MANAGER MAROC- FWA & TUNISIA <br></br> Bausch & Lomb{" "}
                    </h4>

                    <p>
                      « Dotée d’une formation médicale et d’une expérience de 20 ans dans l’industrie pharmaceutique, le
                      programme Executive-MBA d’Esprit m’a offert l’opportunité d’acquérir de nouvelles connaissances et
                      de découvrir les rouages de l’innovation digitale. Cette formation a bien marqué ma vie
                      professionnelle en me permettant de consolider mes compétences et gagner de la maturité sur le
                      plan humain et professionnel.»
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </Row>
          <br></br>
          <hr></hr>
          <Row className="margin-top-60">
            <table>
              <tr>
                <td>
                  <h4>
                    Mohamed LOUKIL
                    <br></br>Manager à STAR Assurances<br></br>
                  </h4>
                  « J’ai eu la chance de suivre la formation Executive-MBA offerte par la prestigieuse école Esprit,
                  réputée pour la qualité de sa formation et de ses méthodes pédagogiques. Cette formation 360° m’a
                  permis de consolider mes connaissances. Cette expérience fut très enrichissante et m’aidera à exceller
                  tout au long de ma carrière.»
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                  <div style={{ display: "flow-root" }}>
                    <img src={loukil} alt="empty" width="200" height="200" />
                    <br></br>
                  </div>
                </td>
              </tr>
            </table>
          </Row>
          <br></br>
          <hr></hr>
          <Row className="margin-top-60">
            <table>
              <tr>
                <td>
                  <div style={{ display: "flow-root" }}>
                    <img src={rym} alt="empty" width="200" height="200" />
                    <br></br>
                  </div>
                </td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>
                  <div>
                    <h4>
                      Rym Bouattour
                      <br></br>Directeur Technique, Pharmacien Responsable PHARMAGHREB<br></br>
                    </h4>
                    « Pharmacienne de formation et après 19 ans d'expérience dans le secteur de l'industrie
                    pharmaceutique, j'ai senti le besoin de consolider mon parcours par une formation de haut niveau me
                    permettant à la fois d’améliorer mon leadership et d'avoir une idée transversale de l'entreprise. Un
                    besoin que j’ai pu satisfaire en intégrant la formation Executive-MBA d’Esprit. Résumer mon parcours
                    à Esprit en quelques mots est chose difficile, mais le mot qui saurait synthétiser cette expérience
                    c'est TRANSFORMATION : une transformation dans ma façon d'être, de faire et de faire faire. Il y
                    avait avant et un après E-MBA. Merci Esprit, Merci Mes chers Professeurs »
                  </div>
                </td>
              </tr>
            </table>
          </Row>

          <Row className="margin-top-60">
            <div style={{ display: "flow-root" }}>
              <h3 className="text-esprit">ADMISSION</h3>
              <CustomHrGray />
              <br />
            </div>
          </Row>
          <Row className="margin-top-60">
            <Col>
              <IconList data={conditions} />
            </Col>
            <Col>
              <IconList data={etapes} />
            </Col>
          </Row>
          <Row className="margin-top-60" style={{ display: "flex", placeContent: "center" }}>
            <div style={{ marginTop: "15px", display: "flex", placeContent: "center" }}>
              <DownloadButton
                data={{
                  link: file2,
                  text: "Dossier d'inscription",
                  src: arrowsrc,
                }}
              />
            </div>
          </Row>
          <Row className="margin-top-60">
            <div style={{ display: "flow-root" }}>
              <h3 className="text-esprit">FOIRE AUX QUESTIONS</h3>
              <CustomHrGray />
              <br />
            </div>
          </Row>
          <Row className="margin-top-60">
            <Accordion defaultActiveKey="0" style={{ color: "black", width: "100%" }}>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  ADMISSIONS
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <p>
                      <b>Qui doit-on contacter pour obtenir des informations complémentaires sur l’admission ?</b>
                      <br />
                      Vous pouvez contacter Mme. Insaf Khabbouchi, au 93 46 11 15 ou bien par e-mail à
                      rafika.khabbouchi@esprit.tn
                      <br />
                      <b>Quelles sont les conditions d’admission au programme EMBA ?</b>
                      <br />
                      Deux conditions doivent être respectées :
                    </p>
                    <ul style={{ listStyle: "circle", marginLeft: "10px" }}>
                      <li>
                        Titulaire d’un diplôme de premier cycle BAC + 3 au minimum (niveau Bachelor ou Licence) toutes
                        spécialités confondues ;
                      </li>
                      <li>
                        Une expérience professionnelle de 3 ans au minimum dans un poste de responsabilité / gestion
                        (cadre supérieur, entrepreneurs, gestionnaires de niveaux supérieurs ou intermédiaires, etc..).
                      </li>
                    </ul>
                    <p>
                      <b>
                        J’ai le niveau académique requis mais je n’ai pas une expérience managériale considérable.
                        Puis-je postuler au programme EMBA ?
                      </b>
                      <br />
                      Des candidats d’exception peuvent être admis au programme EMBA. Vous devez convaincre le comité
                      d’admission que votre profil, expérience et projet professionnel représentent une valeur ajoutée
                      au programme.
                      <br />
                      <b>Quelle est la date limite pour déposer mon dossier de candidature?</b>
                      <br />
                      La date limite pour déposer votre dossier est fixée au 31 août.
                      <br />
                      <b>Combien y-a- t-il de places disponibles ?</b>
                      <br />
                      Nous nous engageons à ne pas dépasser 25 inscriptions.
                      <br /> <b>Comment déposer mon dossier d’admission?</b>
                      <br />
                      Vous pouvez télécharger le dossier d’admission disponible sur cette page :
                      <a href={file1} target="_blank" rel="noopener noreferrer">
                        ICI
                      </a>
                      <br />
                      Puis l’envoyer par mail à emba-contact@esprit.tn ou le déposer au Bureau EMBA ESPRIT, Z.I Chotrana
                      II - Pôle Technologique El Ghazela, Raoued. (Bloc E). Un mail de confirmation vous sera envoyé à
                      la suite de la réception de votre dossier.
                      <br />
                      <b>Quel est le processus d’admission ?</b>
                    </p>
                    <ul style={{ listStyle: "decimal" }}>
                      <li>Nous accusons réception de votre dossier de candidature.</li>
                      <li>
                        Votre candidature sera examinée par le jury d’admissibilité dans un délai de 5 jours ouvrés.
                      </li>
                      <li>Vous recevez un e-mail vous notifiant de votre admissibilité, ou non.</li>
                      <li>
                        Si vous êtes admissible, vous serez convoqué, par le comité de sélection, à un entretien de
                        personnalité et de motivation.
                      </li>
                      <li>
                        Une fois que vous aurez rempli toutes les conditions d'admission et présenté l'original de vos
                        diplômes, vous recevrez une décision d'admission finale dans un délai de 7 jours ouvrés.
                      </li>
                    </ul>
                    <p>
                      <b>
                        [Votre admission est confirmée après le paiement de la première tranche des frais de formation].
                      </b>
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  INSCRIPTION
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <p>
                      <b> Quelle est la date limite d’inscription ?</b>
                      <br />
                      Vous avez 15 jours ouvrés pour confirmer votre admission et payer la première tranche des frais de
                      formation.
                      <br />
                      <b>Quand aura lieu la prochaine rentrée ?</b>
                      <br />
                      La rentrée prochaine aura lieu le Mercredi 15 Septembre 2021 (Séminaire d’intégration)
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                  FINANCEMENT
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <p>
                      <b>Comment financer ma formation?</b>
                      <br />- Pour les participants qui sont pris en charge par leurs entreprises : Le paiement est
                      fractionné en 2 tranches sur la durée de la formation. <br />- Pour les particuliers : <br />
                    </p>
                    <ul>
                      <li>
                        Vous pouvez payer les frais de votre formation sur 3 tranches. Vous pouvez aussi bénéficier de
                        facilités de paiement (3-5 tranches).
                      </li>
                      <li>
                        Une convention de Partenariat est établie avec la Banque Zitouna afin de permettre à chaque
                        intéressé, éligible, de financer les frais de formation à des tarifs avantageux, sous
                        présentation d’une attestation de préinscription. Pour plus d’informations, veuillez contacter
                        le centre de relation client au 71 128 002.
                      </li>
                    </ul>
                    <p>
                      <b>Quel est le coût total de la formation ?</b>
                      <br />
                      16 000 DT (HT) (année universitaire 2020-2021)
                      <br />
                      <b>La formation est-elle éligible à la TFP ?</b>
                      <br />
                      Oui, la formation est éligible à la ristourne de la TFP pour les entreprises.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                  PAIEMENT
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <p>
                      <b>Comment puis-je payer ?</b>
                      <br />
                      Le paiement est fractionné en 3 tranches sur la durée de la formation :
                    </p>
                    <p style={{ textAlign: "center" }}>
                      1er versement 15 jours ouvrés après admission : <b>6 000 DT</b>
                      <br />
                      2ème versement au 01/04/2022 : <b>5 000 DT</b>
                      <br />
                      3ème versement au 01/10/2022 :<b>5 000 DT</b>
                      <br />
                      Montant Total : <b>17000 DT (HT) (année universitaire 2020-2021)</b>
                    </p>
                    <p>
                      Vous pouvez aussi bénéficier de facilités de paiement (en 3-5 fois).
                      <br />
                      <b>Quels sont les moyens de paiement ?</b>
                      <br />
                      - Par chèque personnel
                      <br />
                      - Par chèque d’entreprise : Une facture sera émise dès réception du bon de commande de la part de
                      l’entreprise. Dans le cas de paiement par chèque bancaire, adressez-vous à la caisse d'ESPRIT
                      situé au 1 er étage du Bloc A.
                      <br />- Par virement bancaire : Nous acceptons les virements bancaires. Veuillez effectuer votre
                      paiement à notre compte bancaire :
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <b>ESPRIT</b>
                      <br />
                      <b>Banque : AMEN BANK</b>
                      <br />
                      <b> Agence Raoued</b>
                      <br />
                      <b>RIB : 07 035 0020101 101366 91</b>
                    </p>
                    <p>
                      Dans le cas de virement bancaire, veuillez nous fournir une copie de la confirmation du virement.
                      <br />
                      <b>À qui s’adresser pour toute question concernant les paiements et les règlements financiers?</b>
                      <br />
                      Vous pouvez contacter Mlle Intissar Chaabani au 216 70 25 00 41 ou par email à
                      intissar.chaabani@esprit.tn
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                  GÉNÉRAL
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                  <Card.Body style={{ marginLeft: "20px" }}>
                    <p>
                      <b>Quelle est la différence entre un MBA full time et un executive MBA (EMBA)?</b>
                      <br />
                      - Le MBA temps plein est un diplôme universitaire qui cible des jeunes professionnels avec
                      quelques années d’expérience. Ce programme ne permet pas de concilier les activités
                      professionnelles et la formation.
                      <br />
                      - L’executive MBA (EMBA) est un MBA professionnel (de formation continue) qui est planifié en
                      temps partiel et qui permet aux participants de poursuivre leurs activités professionnelles tout
                      en suivant les séminaires pendant les week-ends. L’executive MBA s’adresse à des cadres et
                      professionnels ayant un minimum de 3-5 ans d’expérience dans un poste de responsabilité/gestion.
                      Cette expérience pertinente en gestion est prise en considération dans l’approche pédagogique de
                      la formation EMBA.
                      <br />
                      <b>Est-ce que le programme EMBA ESPRIT est accrédité ?</b>
                      <br />
                      ESPRIT est homologué par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique
                      (MESR) pour délivrer le diplôme MBA professionnel. ESPRIT est un membre de la Conférence des
                      Grandes Ecoles (CGE) qui regroupe les plus grandes écoles d'ingénieurs et de management.
                      http://www.cge.asso.fr/ecoles/esprit/
                      <br />
                      <b>Quelle est la durée de la formation ?</b>
                      <br />
                      La formation s’étale sur une période de 24 mois :<br />
                      -20 mois de formation sous forme de 18 séminaires modulaires et successifs ;<br />
                      -4 mois consacrés au projet professionnel.
                      <br />
                      <b>Quel est le rythme des séminaires ?</b>
                      <br />
                      Les séminaires sont organisés les Vendredi (14 :30-18 :30) et Samedi (9 :00-17:00) deux fois par
                      mois.
                      <br />
                      <b>Qui sont les intervenants ?</b>
                      <br />
                      - Des professeurs (Tunisiens et étrangers) de haut niveau et issus de grandes universités
                      prestigieuses ;<br />
                      - Des professionnels hautement qualifiés.
                      <br />
                      <b>
                        J’ai déjà suivi des cours de Gestion/Management, est-ce que je peux me faire créditer ces cours
                        ?
                      </b>
                      <br />
                      Non.
                      <br />
                      <b>Est-ce que cette formation peut amener à la création/reprise d'une entreprise?</b>
                      <br />
                      Oui. Le programme EMBA vous permet de mettre en pratique de nouvelles connaissances et outils en
                      gestion, stratégie, intra/entrepreneuriat, comptabilité, finance, SI et marketing, ce qui vous
                      donne une base solide pour démarrer votre start-up ou reprendre une entreprise. Vous pouvez mener
                      votre propre projet professionnel (mémoire) autour de la création/reprise d'une entreprise.
                      <br />
                      <b>Quel sont les types de supports de cours ?</b>
                      <br />
                      Les supports de cours sont mis à la disposition des participants sur la plateforme Moodle. Par
                      ailleurs, les ouvrages de référence seront distribués au début du séminaire concerné.
                      <br />
                      <b>Est-ce qu’un stationnement est disponible sur place?</b>
                      <br />
                      Oui. Des places de stationnement gratuites sont disponibles au sous-sol du bâtiment (Bloc E).
                      <br />
                      <b>Vais-je recevoir un planning détaillé du programme ?</b>
                      <br />
                      Vous recevrez tous les détails du planning du programme lors du premier séminaire d’intégration.
                      <br />
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Row>
          <Row className="margin-top-60">
            <div style={{ display: "flow-root" }}>
              <h3 className="text-esprit">INFORMATIONS COMPLEMENTAIRES</h3>
              <CustomHrGray />
              <br />
            </div>
          </Row>
          <Row className="margin-top-60">
            <Col>
              <IconList data={informations} />
            </Col>
          </Row>
          <Row className="text-center">
            <Col>
              <strong>
                Renseignements/Inscriptions :
                <LinkDuo to={"mailto:emba-contact@esprit.tn"} rel="noopener noreferrer" target="_blank">
                  emba-contact@esprit.tn
                </LinkDuo>
              </strong>
            </Col>
          </Row>
          {/*
          <Row className="text-center">
            <Col>
              <strong>Prof. Faouzi Kamoun : 99423944</strong>
            </Col>
          </Row>
          */}
        </div>
      </section>
    </>
  )
}

const conditions = {
  icon: "icofont-briefcase",
  title: "CONDITIONS D'ADMISSION",
  description: "Les conditions d'admission sont:",
  list: [
    "Titulaire d’un diplôme de premier cycle BAC + 3 au minimum (niveau Bachelor ou Licence) dans n’importe quelle spécialisation",
    "Expérience professionnelle de 3 ans au minimum dans un poste de responsabilité / gestion (cadre supérieur, entrepreneurs, gestionnaires de niveaux supérieurs ou intermédiaires).",
    "Faire preuve d'une grande motivation.",
  ],
}
const etapes = {
  icon: "icofont-hat",
  title: "ETAPES",
  description: "Les étapes d'admission :",
  list: [
    "1ère étape : Dépôt de la demande d'admission:",
    <ul style={{ listStyle: "disc" }}>
      <li style={{ marginLeft: "40px" }}>Dossier de candidature dûment complété et signé</li>
      <li style={{ marginLeft: "40px" }}>Un curriculum vitae détaillé</li>
    </ul>,
    "2ème étape : Entretien de sélection pour les candidats retenus",
    <ul style={{ listStyle: "disc" }}>
      <li style={{ marginLeft: "40px" }}>Une Photocopie de votre pièce d’identité en cours de validité</li>
      <li style={{ marginLeft: "40px" }}>Une photo d’identité récente</li>
      <li style={{ marginLeft: "40px" }}>Les photocopies de vos diplômes, à défaut vos relevés de notes</li>
      <li style={{ marginLeft: "40px" }}>Une ou deux lettres de recommandation pour la candidature</li>
    </ul>,
    "3ème étape : Décision finale du comité d’admission",
  ],
}

const informations = {
  icon: "icofont-briefcase",
  title: "Informations pratiques",
  description: "Quelques informations pratiques:",
  list: [
    "Durée de la formation : 2 ans",
    "Organisation de la formation : Les Vendredi (14h30-18h30) & Samedi (9h-17h), deux fois par mois, sur une période de 20 mois : Un planning détaillé est remis aux inscrits à la rentrée",
    "Coût de la formation : 17000DT HT (année universitaire 2020-2021) déductible de la TFP.",
    "Lieu de la formation : ESPRIT, Z.I Chotrana II - Pôle Technologique El Ghazela, 2083 site El Ghazala, Raoued. (Bloc E).",
    "Prochaine rentrée : Fin Septembre 2021",
  ],
}

const breadcrumb = {
  Title: "Executive MBA",
  Subtitle: "Formation MBA",
}
export default ExecutiveMBA
