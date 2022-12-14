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
                  <h2>Concours d’accès à ESPRIT-Ingénieurs et à ESPRIT-Prépa Cameroun 2021</h2>
                  <CustomHrRed float={"none"} />
                </Col>
              </Row>

              <Row style={{ display: "flex", placeContent: "center", marginBottom: "50px" }}>
                <Col md={12} xs={12} style={{ display: "flex", placeContent: "center" }}>
                  <img src={banner} alt="Bannière Resultat cameroun 2021" style={{ width: "100%" }}></img>
                </Col>
              </Row>

              <Row className="margin-top-60">
                <Col md={12}>
                  <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 1ère année</h1>
                  <CustomHrRed float={"none"} />
                  <p style={{ marginTop: "30px" }}>
                    Le jury, réuni à Tunis le 19 Avril 2020, considérant les résultats obtenus aux épreuves de
                    mathématiques, de sciences physiques et de logique relatives à la 1ère session du concours (Avril
                    2021),{" "}
                    <strong>
                      autorise les candidats dont les noms suivent – classés par ordre de mérite – à se préinscrire en
                      1ère année du cursus d’ingénieurs d’ESPRIT dans la spécialité de leur choix{" "}
                    </strong>
                    pour l’année 2021-22,{" "}
                    <strong>
                      <u>et ce sous réserve de la justification de leur diplôme de baccalauréat.</u>
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
                      <strong>la procédure de préinscription.</strong>
                    </li>
                    <li> Les résultats seront publiés aussi sur le site web de l’école.</li>
                    <li>
                      Parmi les candidats listés ci-dessous, les <strong>50 premiers</strong> sont aussi autorisés à se
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
                        <li>KENVO MELONG CHRISTIAN DANIEL</li>
                        <li>TCHENANG LILYVES KELIELLE</li>
                        <li>NANDA WANDA</li>
                        <li>SONFACK SAMIRA PHADIANE</li>
                        <li>BELEKOTAN II JEFF NICHOSS</li>
                        <li>KENNE TATSOPFO NICKY BRUNEL</li>
                        <li>NDE MBA KOUETCHE</li>
                        <li>NGUEPIE NONO MENPHIS JOUVES</li>
                        <li>NTENDA KAMDEM MEL STEVENS</li>
                        <li>MBOCK JEAN DANIEL</li>
                        <li>MBOCK PAUL DENIS</li>
                        <li>YOUMBI LELE ADRIEN</li>
                        <li>DJIEMON YOUMBI EVAN JARED</li>
                        <li>MENGOSSO MESSELE MEBOUTOU NICOLAS JORIS ADRIEN</li>
                        <li>FOTSING MAKAMTE CHELSEA SERENA</li>
                        <li>MALEDY MOUTNGUI YANN ADRIEN</li>
                        <li>TOUON EDINGELE NOE DIMITRI</li>
                        <li>BABANGUIDA YAHYA</li>
                        <li>FEUDJIO JOULEGHA NELLY</li>
                        <li>KAMDEM YEPMOU DOMINIQUE</li>
                        <li>NONO LOTCHOUANG LOIC ARNOLD</li>
                        <li>ONANA MODO JEAN YVES GABRIEL</li>
                        <li>SIKADI ALLAN CHRISTIAN</li>
                        <li>SILINOU NICOLAS SHEDDY</li>
                        <li>TCHOUPE NEUMBELL GABRIELLA LYDIENNE</li>
                        <li>BOMO MEKA JOSPIN MARIEL</li>
                        <li>DIWANDJA NDJIB YVETTE BETTY S</li>
                        <li>LIENOU KOAGNE BENYCNA LESLIE</li>
                        <li>ADA BALLA RENEE-FRANCINE</li>
                        <li>BOUNOUGOU ZOGO CATHERINE MICHELLE</li>
                        <li>DJOMO CHOUMKUI</li>
                        <li>POUFON BASSO PIERRE PAUL</li>
                        <li>ALLABIRA ABDOUL SALAM CHARAFADDINE</li>
                        <li>BRANHAM ONANA WILLIAMS</li>
                        <li>DJIDDA ACH CHEIKH HESSANA</li>
                        <li>FOMO KAMGO EVANS BRAYANE</li>
                        <li>MOUANJI TARIE IBRAHIM MOUNIR</li>
                        <li>NOUNDJEU NOUBISSIE FRANCK TRESOR</li>
                        <li>NZENANG TCHOUANTCHEU MARC DELON</li>
                        <li>TCHANGA AMELIE DARENA</li>
                        <li>TUEKAM MBOUGANG CYRIL OLYMPIO</li>
                        <li>BIKELE NOMO LOUIS WILLIAM'S</li>
                        <li>DJONGANG TCHOUNKEU VLADIMIR AUREL</li>
                        <li>FOTSO SIMO AURELLE</li>
                        <li>KAMELEU NOUBISSIE EMMA-CHRISTIE</li>
                        <li>TAGOUM KAMDEM CEDRIC YVAN</li>
                        <li>DAYAK YITEMBEN CALIXTE</li>
                        <li>DONGMO KENFACK ARTHUR WILLIAMS</li>
                        <li>ISSOU MOHAMED MOUSTAFA MARAFA</li>
                        <li>PAYO TONDJI GESSY FRANCELLE</li>
                      </ol>
                    </Col>
                    <Col md={6} xs={12}>
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
                    </Col>
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
                        <li>BONOU DEUBOU SCHELSY CLAUDE MARIELLE</li>
                        <li>BOUKE MOUTONGO STIDE MORAN WILFRIED</li>
                        <li>DJOMEGNI KANMO DAVIDE MAEVA</li>
                        <li>HAMADOU KOULAGNA PAUL ULRICH</li>
                        <li>LENGUE ENGOME MAIWENNE CHLOE</li>
                        <li>LONTSI TCHIAZE JEAN DE DIEU</li>
                        <li>MAIGA LARISSA</li>
                      </ol>
                    </Col>
                    <Col md={6} xs={12}>
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
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col md={12}>
                  <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 2ème, 3ème et 4ème</h1>
                  <CustomHrRed float={"none"} />
                  <p style={{ marginTop: "30px" }}>
                    Le jury, réuni à Tunis le 19 Avril 2021, considérant les résultats obtenus aux épreuves de la 1ère
                    session du concours (Avril 2021),{" "}
                    <strong>
                      autorise les candidats dont les noms suivent – classés par ordre de mérite – à se préinscrire en
                      2ème année, en 3ème année ou en 4ème année du cursus d’ingénieurs d’ESPRIT{" "}
                    </strong>
                    , pour l’année 2020-21,{" "}
                    <strong>
                      <u>et ce sous réserve de la justification de leurs diplômes.</u>
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
                      <strong> procédure de préinscription.</strong>
                    </li>
                    <li>Les résultats seront publiés aussi sur le site web de l’école.</li>
                  </ul>
                </Col>
              </Row>
              <Row className="margin-top-60">
                <Col>
                  <h3>Liste des candidats admis:</h3>
                  <Row>
                    <Col md={6} xs={12}>
                      <ol style={{ listStyle: "decimal", marginTop: "30px", listStylePosition: "inside" }}>
                        <li>OVO ZAMEDJO CALEB</li>
                        <li>BETSEM A DJAM DAVID</li>
                        <li>NGOA MENYE LUC AIME</li>
                        <li>ANGOULA PAUL SERVAIS</li>
                      </ol>
                    </Col>
                    <Col md={6} xs={12}>
                      <ol start={5} style={{ listStyle: "decimal", marginTop: "30px", listStylePosition: "inside" }}>
                        <li>FOTSO KAMTCHUENG WILFRIED</li>
                        <li>LENGUE MBANGUE JOYCE MAEVA</li>
                        <li>TAGUEKA TIOMENA ARNAULD JORDAN</li>
                        <li>TONOU KAMDJO MOISE DUVAN</li>
                      </ol>
                    </Col>
                  </Row>
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
