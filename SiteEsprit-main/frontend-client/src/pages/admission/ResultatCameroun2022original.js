import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { ResultatCameroun as meta } from "./AdmissionDictionary"
import banner from "assets/img/BannerCameroun2021.jpg"

export default function ResultatCameroun() {
  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container">
          <Row>
            <Col md={12} xs={12}>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <h2>Concours d’accès à ESPRIT-INGENIEUR / ESPRIT-PRÉPA Cameroun, 1 ère session (Mai 2022)</h2>
                  <CustomHrRed float={"none"} />
                </Col>
              </Row>

              {/* <Row style={{ display: "flex", placeContent: "center", marginBottom: "50px" }}>
                <Col md={12} xs={12} style={{ display: "flex", placeContent: "center" }}>
                  <img src={banner} alt="Bannière Resultat cameroun 2021" style={{ width: "100%" }}></img>
                </Col>
              </Row> */}

              <Row className="margin-top-60">
                <Col md={12}>
                  <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 1ère année</h1>
                  <CustomHrRed float={"none"} />
                  <p style={{ marginTop: "30px" }}>

                   Le jury, réuni à Tunis le 15 mai 2022, considérant les résultats obtenus aux épreuves
de mathématiques, de sciences physiques et de logique au concours de la 1 ère session
(Aout 2021),{" "}
                    <strong>
                    autorise les candidats dont les noms suivent – classés par ordre de
mérite – à s’inscrire en 1 ère et en 3 ème année du cursus d’ingénieurs d’ESPRIT dans les
spécialités de leur choix,
                    </strong>
                    pour l’année 2022-23,{" "}
                    <strong>
                      <u>et ce sous réserve de la justification
de leur diplôme de baccalauréat.</u>
                    </strong>
                  </p>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <h3>Le jury tient à rappeler que : </h3>
                  <ul
                    style={{
                      listStyle: "decimal",
                      marginLeft: "30px",
                      marginTop: "30px",
                      lineHeight: "2",
                      fontSize: "16px",
                    }}>
                    <li>
                      Les lauréats doivent prendre attache avec <strong>Campus Tunisie</strong> pour la suite de{" "}
                      la procédure de préinscription.
                    </li>
                    <li> Les résultats seront publiés aussi sur le site web de l’école.</li>
                    <li>
                      Parmi les candidats listés ci-dessous, les <strong>10 premiers</strong> sont aussi autorisés à se
                      préinscrire en <strong>1ère année MPSI d’ESPRIT-Prépa</strong> sous réserve qu’ils soient inscrits
                      en <strong>Terminale C ou D</strong> et après étude de leur dossier scolaire.
                    </li>
                    <li>
                      Les candidats listés, qui opteront pour <strong>ESPRIT-Ingénieurs</strong>, choisiront de façon
                      définitive leur spécialité (Informatique, télécommunications, Électromécanique ou Génie civil) au
                      moment de l’inscription.
                    </li>
                  </ul>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <h3>Liste des candidats admis:</h3>
                  <Row>
                    <Col md={6} xs={12}>
                      <ol
                        style={{
                          listStyle: "decimal",
                          marginTop: "30px",
                          listStylePosition: "inside",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          height: "100%",
                          fontWeight: "bold",
                        }}>
                        <li>CHIMBA CIBAFO YANN ANICET</li>
                        <li>BONJAWO FOGANG NARCISSE ROMEO</li>
                        <li>BELINGA GILLES-ROBERTO</li>
                        <li>NYAM NKOUE SAMUEL</li>
                        <li>SINOUNOU SAMUEL P VALEUR</li>
                        <li>MBOUM SIPOUO JELKEMZ TCHOKOKAM</li>
                        <li>MEKUIGUEM ERYNE OTHNELLE</li>
                        <li>DZIKOUK MORELLE</li>
                        <li>TAMEGUE ARMEL SINCLAIR</li>
                        <li>SINOUNOU JACQUES DE GRACE</li>
                        <li>KAMOGNE DOMGUIA ETHAN MARIS</li>
                        <li>BETOU ETOUNDI ROBERTO GRACIEL KEEG</li>
                        <li>NJILLE MANDU MELISSA CHERYL</li>
                        <li>BOUGONG A ABEGA PASCAL ESAIE</li>
                        <li>TCHOUSSI KUETCHE STONE CALTEX</li>
                        <li>LEMATSOP DONGMO AZIZ BOLIVAN</li>
                        <li>DOUSSA HAFSATOU AMADOU</li>
                        <li>MOUKOULOU FORTUNE YANN DESIR</li>
                        <li>MOYO FRED AYMERICK</li>
                        <li>KOYE KEDA YANNICK</li>
                        <li>IKORI NGOUNOU CARLA MALIKA</li>
                        <li>ENYEGUE EBODE MICHEL EMMANUEL</li>
                        <li>BISSO JOYCE CHRISTIAN</li>
                        <li>MOYO KAMWA IVAN FRANCK</li>
                        <li>WANDJI ZEKO N JOSE</li>
                        <li>NYAME EBOLLO EMMANUEL</li>
                        <li>DZIKOUK AURELIEN</li>
                        <li>TCHUENTE TEUKAM FLEUR-DOLINE M</li>
                      </ol>
                    </Col>
                    {/* <Col md={6} xs={12}>
                      <ol
                        start="51"
                        style={{
                          listStyle: "decimal",
                          marginTop: "30px",
                          listStylePosition: "inside",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          height: "100%",
                        }}>
                        <li>TINDJOU DJOMO JULIE TRACY</li>
                        <li>BALOG MAELLA SANDRA</li>
                        <li>BRA KALTOUM OUMMA LAMINE</li>
                        <li>DJILO YONIN ROSE SERENA</li>
                        <li>KOUAMEN DOYA WESLEY BAREL</li>
                        <li>MAKANI LIZA BERENICE CONSTANCE</li>
                        <li>MBIH MBOWOU HAMED FEYCAL</li>
                        <li>ESSAKA MANDENGUE FRITZ DESIRE</li>
                        <li>KOBOUWO YOUNDA MARIE NOELLA</li>
                        <li>PIAHA TCHOUAMENI SUN LAETITIA</li>
                        <li>TAFFEMPA MIKE</li>
                        <li>BIDJECK BONDJE CHRITIAN LE GRAND</li>
                        <li>BRADY BLAISE BODIO A BODIO</li>
                        <li>DEMANOU PANING ELISEE</li>
                        <li>MEPOUI A SEYI SARA GERMAINE</li>
                        <li>MFOUAPON MOUBARAK</li>
                        <li>SITIO SITIO TCHAPDA YANNICK DAREL</li>
                        <li>AHMADOU ABOUBAKARY MANSOUR</li>
                        <li>BALLA ESSENGUE HONORINE MAEVA</li>
                        <li>FOTSO FOTSO GUY LEONEL</li>
                        <li>MOTUE NOUMSSI MICHELLE-ANGE</li>
                        <li>ASAGUE KAGHO LESLIE GLORY</li>
                        <li>BANGOFA KEUSSOM RALPH</li>
                        <li>ETOUNDI ESSOMBA PIERRE ANDY</li>
                        <li>KAMOKWE KAMGA HANS WILFRIED</li>
                        <li>SANAMA SIMON LEDOUX</li>
                        <li>ENGOLO EKOMO CATIA ELISE</li>
                        <li>NJANDJEU LAHAKIO DAVID ANDREAS</li>
                        <li>TELA MAFOKAM SELA SAMANTHA</li>
                        <li>TIWA MEGOUO GILLES ROOSVELT</li>
                        <li>FOKOU DJANTIO LE PRINCE RAYAN</li>
                        <li>LUIGI ZEBO MEM NGONG</li>
                        <li>MBAHO YENE JOSEPH BIENVENU</li>
                        <li>PAMDZOU MABIKA ANGE MANUEL</li>
                        <li>WAMBO WAMBO PAPOUS</li>
                        <li>DINGBELE JUNIOR</li>
                        <li>EGRE ALEXI</li>
                        <li>ESHON BENAME HERMANN</li>
                        <li>NDOE ANGON LAETITIA AUDREY</li>
                        <li>ATCHOUMI PAYON MAIVA LUTRESSE</li>
                        <li>BRILTEY BI-NGA PASCAL</li>
                        <li>EL FARIK ABDOUL SALAM</li>
                        <li>ELO MESSOMO BELINGA MARC-AUREL WILLIAM</li>
                        <li>MAKUETCHE FONGANG GRACE MANUELLA</li>
                        <li>MOUFTAOU HOUDOU AOLADJIDE ADJADI</li>
                        <li>NDJEUNGA KO-WAGUENG ANNE ALEXANDRA</li>
                        <li>BONNY MVE MAC CLAUDE RYKIEL</li>
                        <li>ELE AITKINS VAN ARTHUR</li>
                        <li>NDENGA DIMALLA PAULINE BELLADONE</li>
                        <li>ZOGDOULE EFFOUDOU ETIENNE ARMEL</li>
                      </ol>
                    </Col> */}
                  </Row>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <h3>Les candidats en liste d'attente:</h3>
                  <Row>
                    <Col md={6} xs={12}>
                      <ol
                        style={{
                          listStyle: "decimal",
                          marginTop: "30px",
                          listStylePosition: "inside",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          height: "100%",
                        }}>
                        <li>WAFO KUATE JEAN JACQUES</li>
                        <li>TESSE VITALIEN LEBON</li>
                        <li>KENKO TCHIGANG JORDAN DICAPRIO</li>
                        <li>YONKEU TEKEUNDO JORESSE</li>
                       
                       
                      </ol>
                    </Col>
                    {/* <Col md={6} xs={12}>
                      <ol
                        start={8}
                        style={{
                          listStyle: "decimal",
                          marginTop: "30px",
                          listStylePosition: "inside",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          height: "100%",
                        }}>
                        <li>MBARGA NDI JEAN PERRIAL</li>
                        <li>MELINGUI MELINGUI ARIELLE JOSETTE</li>
                        <li>MOUKOKO ALEX-STEPHANE</li>
                        <li>NGONO ATENGA ARNAUD ANDY</li>
                        <li>SIMO BOUTCHUEN YOANN SAMORY</li>
                        <li>SIMO KAMWA GAUDELINE MAEVA</li>
                        <li>TAKOUDJOU AZAPH</li>
                      </ol>
                    </Col> */}
                  </Row>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={12}>
                  <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 2ème, 3ème et 4ème</h1>
                  <CustomHrRed float={"none"} />
                  <p style={{ marginTop: "30px" }}>
                  Le jury, réuni à Tunis le 15 mai 2022, considérant les résultats obtenus aux épreuves
de mathématiques, de sciences physiques et de logique au concours de la 1 ère session
(Aout 2021),{" "}
                    <strong>
                    autorise les candidats dont les noms suivent – classés par ordre de
mérite – à s’inscrire en 2 ème , 3 ème ou 4 ème année du cursus d’ingénieurs d’ESPRIT dans
les spécialités de leur choix,{" "}
                    </strong>
                     pour l’année 2022-2023,{" "}
                    <strong>
                      <u>et ce sous réserve de la
justification de leur diplôme de baccalauréat.</u>
                    </strong>
                  </p>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <h3>Le jury tient à rappeler que : </h3>
                  <ul
                    style={{
                      listStyle: "decimal",
                      marginLeft: "30px",
                      marginTop: "30px",
                      lineHeight: "2",
                      fontSize: "16px",
                    }}>
                    <li>
                      Les lauréats doivent prendre attache avec <strong> Campus Tunisie </strong>pour la suite de la
                     procédure.
                    </li>
                    <li>Les résultats seront publiés aussi sur le site web de l’école.</li>
                    <li>Les candidats listés, qui opteront pour <strong>ESPRIT-Ingénieurs</strong>, choisiront de façon
définitive leur spécialité (Informatique, Télécommunication,
Electromécanique ou Génie civil) au moment de l’inscription.</li>
                  </ul>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <h3>Liste des candidats admis:</h3>
                  <Row>
                    <Col md={6} xs={12}>
                      <ol style={{ listStyle: "decimal", marginTop: "30px", listStylePosition: "inside" }}>
                        <li>TCHAMBA NJIKE FRANCK JUNIOR</li>
                        <li>KOGUEM NEKAM DURAND GABIN</li>
                        <li>DIKOUME CHRISTIAN BERNARD</li>
                        
                      </ol>
                    </Col>
                    {/* <Col md={6} xs={12}>
                      <ol start={5} style={{ listStyle: "decimal", marginTop: "30px", listStylePosition: "inside" }}>
                        <li>FOTSO KAMTCHUENG WILFRIED</li>
                        <li>LENGUE MBANGUE JOYCE MAEVA</li>
                        <li>TAGUEKA TIOMENA ARNAULD JORDAN</li>
                        <li>TONOU KAMDJO MOISE DUVAN</li>
                      </ol>
                    </Col> */}
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <h2>Concours d’accès en 1 ère année ESB.
Cameroun, 1 ère session (Mai 2022)</h2>
                  <CustomHrRed float={"none"} />
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={12}>
                  <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 1ère année</h1>
                  <CustomHrRed float={"none"} />
                  <p style={{ marginTop: "30px" }}>

                  Le jury, réuni à Tunis le 15 Mai 2022, considérant les résultats obtenus aux épreuves
du concours de la session du 1 er Mai 2022,
                    <strong>
                    autorise les candidats dont les noms
suivent – classés par ordre de mérite – à s’inscrire en 1 ère année de Licence
                    </strong>
                    à Esprit
School Of Business pour la rentrée 2022-2023,
                    <strong>
                      <u>et ce sous réserve de la justification
de leurs diplômes.</u>
                    </strong>
                  </p>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <h3>Liste des candidats admis:</h3>
                  <Row>
                    <Col md={6} xs={12}>
                      <ol
                        style={{
                          listStyle: "decimal",
                          marginTop: "30px",
                          listStylePosition: "inside",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-around",
                          height: "100%",
                          fontWeight: "bold",
                        }}>
                        <li>KEUDEM AWOUMBO JORETTE BRENDA</li>
                        <li>FANKAM ANGE MESSIE</li>
                      
                      </ol>
                    </Col>
                  
                  </Row>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={12}>
                  <p style={{ marginTop: "30px" }}>

                  Les lauréats sont invités à prendre attache avec Campus Tunisie pour la suite de la
procédure.
                   
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

const breadcrumb = {
  src: "",
  Title: "ESPRIT INGÉNIEUR",
  Subtitle: "Résultat Concours d'admission Cameroun",
}
