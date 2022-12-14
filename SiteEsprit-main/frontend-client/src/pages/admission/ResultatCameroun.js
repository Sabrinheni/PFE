import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row, ListGroup, ListGroupItem } from "react-bootstrap"
import { ResultatCameroun as meta } from "./AdmissionDictionary"

export default class ResultatCameroun extends Component {
  render() {
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `@media only screen and (min-width: 991px) {body,html {`,
              "  overflow-x: initial; scroll-behavior:smooth;",
              "}}",
            ].join("\n"),
          }}></style>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row>
              <Col>
                <ListGroup className="sticky-list">
                  <ListGroupItem tag="a" href="#first" action>
                    1ère session
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#second" action>
                    2ème session
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#third" action>
                    3ème session
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <Col md={10} xs={12}>
                <div id="first" className="anchor"></div>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <h1>RESULTATS DU JURY D’ADMISSION</h1>
                    <h2>Concours d’accès à ESPRIT-Ingénieurs et à ESPRIT-Prépa Cameroun 2020</h2>
                    <h3>1ère session (Mai 2020)</h3>
                    <CustomHrRed float={"none"} />
                  </Col>
                </Row>

                <Row className="margin-top-60">
                  <Col md={12}>
                    <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 1ère année</h1>
                    <CustomHrRed float={"none"} />
                    <p style={{ marginTop: "30px" }}>
                      Le jury, réuni à Tunis le 18 mai 2020, considérant les résultats obtenus aux épreuves de
                      mathématiques, de sciences physiques et de logique relatives à la 1ère session du concours (Mai
                      2020),{" "}
                      <strong>
                        autorise les candidats dont les noms suivent – classés par ordre de mérite – à se préinscrire en
                        1ère année du cursus d’ingénieurs d’ESPRIT dans la spécialité de leur choix{" "}
                      </strong>
                      pour l’année 2020-21.
                    </p>
                    <p>
                      <strong>
                        <u>L’inscription définitive aura lieu après la justification du diplôme de Baccalauréat. </u>
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
                      <li>
                        Les candidats déclarés admis doivent confirmer leur <strong>préinscription</strong> avant{" "}
                        <strong>le 20 juin 2020</strong> (au risque de perdre leur place).
                      </li>
                      <li> Les résultats seront publiés aussi sur le site web de l’école.</li>
                      <li>
                        Parmi les candidats listés ci-dessous, les <strong>50 premiers</strong> sont aussi autorisés à
                        se préinscrire en <strong>1ère année MPSI d’ESPRIT-Prépa</strong> sous réserve qu’ils soient
                        inscrits en <strong>Terminale C ou D</strong> et après étude de leur dossier scolaire.
                      </li>
                      <li>
                        Les candidats listés, qui opteront pour <strong>ESPRIT-Ingénieurs</strong>, choisiront de façon
                        définitive leur spécialité (Informatique, télécommunications, Électromécanique ou Génie civil)
                        au moment de l’inscription.
                      </li>
                      <li>
                        <strong>
                          Les candidats refusés sont autorisés à repasser les épreuves du concours des sessions
                          suivantes.
                        </strong>
                      </li>
                      <li>
                        En cas <strong>d’impossibilité de venir à Tunis en septembre 2020</strong> en relation avec{" "}
                        <strong>
                          la crise du Covid-19 et le maintien de l’arrêt des lignes internationales desservant Tunis
                        </strong>
                        , les candidats auront le choix entre,{" "}
                        <strong>
                          suivre les cours du premier semestre (septembre à décembre 2020) à distance sur plateforme
                          numérique
                        </strong>
                        selon des modalités qui seront fixées par ESPRIT et arriver à Tunis plus tard pour{" "}
                        <strong>suivre les cours du deuxième semestre en présentiel à partir de janvier 2021</strong>,
                        ou bien <strong> reporter leur inscription à l’année suivante 2021- 22.</strong>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="margin-top-60">
                  <Col>
                    <h3>Liste des candidats admis:</h3>
                    <Row>
                      <Col md={4} xs={12}>
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
                          <li>Kom Assana Malick</li>
                          <li>Atewoung Sonfack Randi Vairel</li>
                          <li>Dora Nkongo Frida Ange</li>
                          <li>Mboumela Sob Elton Lewis</li>
                          <li>Guendergue Francis Toldo</li>
                          <li>Ananga Ananga Yves Nicolas</li>
                          <li>Essomba Essomba Antoine Emmanuel</li>
                          <li>Touko Emou Yvana Carrelle Tifanny</li>
                          <li> Tchouamo Raoul</li>
                          <li> Nlend Nkana André Cyr José</li>
                          <li> Samedjeu De Tengambe Ulrich</li>
                          <li> Bihay Raphael</li>
                          <li> Tamen Tchapet Prince Hazael</li>
                          <li> Soh Fosso Herman</li>
                          <li> Djudjié Kamdoum Saurelle</li>
                          <li> Foyou Youdom Dechateau</li>
                          <li> Mukam Tangui Lavoisier Parfait</li>
                          <li> Simo Tatchim Yann Junior</li>
                          <li> Moyo Kamdem Auren Bradley</li>
                          <li> Kouogang Kouam Boris Esdras</li>
                          <li> Fomou Kemene Steve Borel</li>
                          <li> Magnifouet Zefack Maïva Schéla</li>
                          <li> Noussi Takam Gery Durel</li>
                          <li> Kamdem Keumogne Rich Bill</li>
                          <li> Kondjo Yvan</li>
                          <li> Ngainson Anaïs Jessica</li>
                          <li> Kepsu Njossu Jules Algor</li>
                          <li> Abe Manga Serge Landry Samyr</li>
                          <li> Bayiha Masen Manuel Envel</li>
                          <li> Mouolly Robert Durell</li>
                          <li> Nebot Fonkou Christian Parfait</li>
                          <li> Ngueyep Wandji Axel Constant</li>
                          <li> Ajahou Tsafack Fortune Francine</li>
                          <li> Bonjawo Bonjawo Joseph Junior</li>
                          <li> Fotso Lawa Rych ewald</li>
                          <li> Guepy Lonkeng Elisée</li>
                          <li> Edoa Mbono Marie Joséphine Nancy Hilary</li>
                          <li> Tsang Asse Eric Xavier</li>
                          <li> Kamtchueng Fodjo Kouam Winnie Julienne</li>
                          <li> Piakeu Brenda</li>
                          <li> Tchoutchui Tiomou Inelva Leila</li>
                          <li> Voufo Nguefack Tristan Mendes</li>
                          <li> Fontsa Noupa Ciliane Yvana</li>
                          <li> Fombo Tissebe Abdoul-Aziz</li>
                          <li> Tchogna Kamtchoum Yves lionnel</li>
                          <li> Mbouopda Fogue Yvan Marcel</li>
                          <li> Fomekong Djimeli Ronelson</li>
                          <li> Kouam Kamdem Herve</li>
                          <li> Fankam Dieudonne Junior</li>
                          <li> Tang Essomba Augustin Presdie </li>
                        </ol>
                      </Col>
                      <Col md={4} xs={12}>
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
                          <li> Ambani Nkoulou Luila Cassandra</li>
                          <li> Leonardo Momo</li>
                          <li> Peto Florian Junior</li>
                          <li> Djuipou Bristow</li>
                          <li> Belinga Mballa Henri Franck</li>
                          <li> Mendomo Mfou'ou Lorine Diane Frederic</li>
                          <li> Nkoro Auriel Lionel</li>
                          <li> Ntouba ALex Junior</li>
                          <li> Zue Nguema Patrick Renaud</li>
                          <li> Temgoua De Russ</li>
                          <li> Leugwe Nchango Philip junior</li>
                          <li> Njoche Sobnangou Georges Loic</li>
                          <li> Nyonkwe Nyangwa Russel Kamel</li>
                          <li> Leugwe Nchango Philip Junior</li>
                          <li> Mbabu Couthon Henri Michel</li>
                          <li> Fotso Ngueche Orelie Marcelle</li>
                          <li> Kounatse Sotchie Jérôme Aime</li>
                          <li> Choup Mathieu Daryl</li>
                          <li> Sami Armel</li>
                          <li> Bakone Giovanni</li>
                          <li> Nchankou Mfouapon abdel malik</li>
                          <li> Pone Djiodom Patrick Adrien</li>
                          <li> Aboubakar Mohamed</li>
                          <li> Fonkoue Yannick</li>
                          <li> Djoumessi Tatsitsa Killian</li>
                          <li> Obono Obono Nathalie Loicia</li>
                          <li> Bilong Theodore</li>
                          <li> Ndoumbe Kome Jean Georges</li>
                          <li> Kemogne Idriss junior</li>
                          <li> Ngniguepa Faha Therence Armel</li>
                          <li> Mouzong Fadjuen Wilfried Francois</li>
                          <li> Kaman Mengong Jeanne Maeva</li>
                          <li> Onana Miguel Stephane</li>
                          <li> Kemogne Idriss Kemogne</li>
                          <li> Aboa Anna Josette</li>
                          <li> Yanisamuel Suzette Sophie</li>
                          <li> Mendouga Zanga Blandine</li>
                          <li> Meva Yene Ernest William</li>
                          <li> Tankeu Djoujip Yann Brown</li>
                          <li> Ndongo Claudy</li>
                          <li> Njanen Ngantchui Clavel Aurielle</li>
                          <li> Homsi Dibril Okry</li>
                          <li> Bodo Souga Roger Christian</li>
                          <li> Araba Thérèse</li>
                          <li> Bongnso Romaric Romaric</li>
                          <li> Azemfack Temkeng Sullivan Wilfred</li>
                          <li> Touogo Ngongang Raissa</li>
                          <li> Kamdem Djoko Marcel Derrick</li>
                          <li> Christy Dan Therese </li>
                          <li> Ekoko Djemba Ename Freddy Ryan</li>
                        </ol>
                      </Col>
                      <Col md={4} xs={12}>
                        <ol
                          start="101"
                          style={{ listStyle: "decimal", marginTop: "30px", listStylePosition: "inside" }}>
                          <li> Djidjou Tadiesse Rick Aurel</li>
                          <li> Kamgo Kamgueu Ryan</li>
                          <li> Dieugue Nouyep Ryan Bravel</li>
                          <li> Epale Ndame Karla Rose</li>
                          <li> Engoue Andrea Pascale</li>
                          <li> Djomo Yague Rita Lenaelle</li>
                          <li> Bessala Urbain Nazaire </li>
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
                      Le jury, réuni à Tunis le 18 mai 2020, considérant les résultats obtenus aux épreuves de la 1ère
                      session du concours (Mai 2020),{" "}
                      <strong>
                        autorise les candidats dont les noms suivent – classés par ordre de mérite – à se préinscrire en
                        2ème année, en 3ème année ou en 4ème année du cursus d’ingénieurs d’ESPRIT{" "}
                      </strong>
                      , pour l’année 2020-21.
                    </p>
                    <p>
                      <strong>
                        <u>L’inscription définitive aura lieu après la justification des diplômes acquis.</u>
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
                      <li>
                        Les candidats déclarés admis doivent confirmer leur <strong>préinscription</strong> avant le{" "}
                        <strong>20 juin 2020</strong> (au risque de perdre leur place).
                      </li>
                      <li>Les résultats seront publiés aussi sur le site web de l’école.</li>
                      <li>
                        <strong>
                          Les candidats refusés sont autorisés à repasser les épreuves du concours des sessions
                          suivantes.
                        </strong>
                      </li>
                      <li>
                        En cas <strong>d’impossibilité de venir à Tunis en septembre 2020</strong> en relation{" "}
                        <strong>avec la crise du Covid-19</strong>, les candidats auront le choix entre,
                        <strong>
                          {" "}
                          suivre les cours du premier semestre (septembre à décembre 2020) à distance
                        </strong>{" "}
                        avec des modalités qui seront fixées par ESPRIT et venir à Tunis pour{" "}
                        <strong>suivre les cours du deuxième semestre en présentiel à partir de janvier 2021</strong>,
                        ou bien <strong>reporter leur inscription à l’année suivante 2021-22.</strong>
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row className="margin-top-60">
                  <Col>
                    <h3>Liste des candidats admis:</h3>
                    <ol style={{ listStyle: "decimal", marginTop: "30px", listStylePosition: "inside" }}>
                      <li>Tamko Tamko Fredy Donald</li>
                      <li>Tchabo Dupont Stanislas</li>
                      <li>Kouotou Pouoh Cynthia Audrey</li>
                      <li>Tala Wdajie Hermann</li>
                      <li>Tam Mervine</li>
                      <li>Magne Tatap Doriane Syntia</li>
                    </ol>
                  </Col>
                </Row>
                <div id="second" className="anchor"></div>
                <Row>
                  <Col style={{ textAlign: "center" }}>
                    <h1>RESULTATS DU JURY D’ADMISSION</h1>
                    <h2>Concours d’accès à ESPRIT-Ingénieurs et à ESPRIT-Prépa Cameroun 2020</h2>
                    <h3>2ème session (Juin 2020)</h3>
                    <CustomHrRed float={"none"} />
                  </Col>
                </Row>
                <Row className="margin-top-60">
                  <Col md={12}>
                    <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 1ère année</h1>
                    <CustomHrRed float={"none"} />
                    <p style={{ marginTop: "30px" }}>
                      Le jury, réuni à Tunis le 30 Juin 2020, considérant les résultats obtenus aux épreuves de
                      mathématiques, de sciences physiques et de logique relatives à la 2ème session du concours (Juin
                      2020),{" "}
                      <strong>
                        autorise les candidats dont les noms suivent – classés par ordre de mérite - à se préinscrire en
                        1ère année du cursus d&#39;ingénieurs d&#39;ESPRIT dans la spécialité de leur choix{" "}
                      </strong>
                      pour l’année 2020-21.
                    </p>
                    <p>
                      <strong>
                        <u>L’inscription définitive aura lieu après la justification du diplôme de Baccalauréat. </u>
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
                      <li>
                        Les candidats déclarés admis doivent confirmer leur <strong>préinscription</strong> avant{" "}
                        <strong>le 30 Juillet 2020</strong> (au risque de perdre leur place).
                      </li>
                      <li> Les résultats seront publiés aussi sur le site web de l’école.</li>
                      <li>
                        Parmi les candidats listés ci-dessous, les <strong>20 premiers</strong> sont aussi autorisés à
                        se préinscrire en <strong>1ère année MPSI d’ESPRIT-Prépa</strong> sous réserve qu’ils soient
                        inscrits en <strong>Terminale C ou D</strong> et après étude de leur dossier scolaire.
                      </li>
                      <li>
                        Les candidats listés, qui opteront pour <strong>ESPRIT-Ingénieurs</strong>, choisiront de façon
                        définitive leur spécialité (Informatique, télécommunications, Électromécanique ou Génie civil)
                        au moment de l’inscription.
                      </li>
                      <li>
                        <strong>
                          Les candidats refusés sont autorisés à repasser les épreuves du concours des sessions
                          suivantes.
                        </strong>
                      </li>
                      <li>
                        En cas <strong>d’impossibilité de venir à Tunis en septembre 2020</strong> en relation avec{" "}
                        <strong>
                          la crise du Covid-19 et le maintien de l’arrêt des lignes internationales desservant Tunis
                        </strong>
                        , les candidats auront le choix entre,{" "}
                        <strong>
                          suivre les cours du premier semestre (septembre à décembre 2020) à distance sur plateforme
                          numérique
                        </strong>
                        selon des modalités qui seront fixées par ESPRIT et arriver à Tunis plus tard pour{" "}
                        <strong>suivre les cours du deuxième semestre en présentiel à partir de janvier 2021</strong>,
                        ou bien <strong> reporter leur inscription à l’année suivante 2021- 22.</strong>
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
                          }}>
                          <li>TCHAM KO KADJI JOHAN PASCAL</li>
                          <li>NTONE MALLO CHRISTIAN-RYAN</li>
                          <li>NDZANA NDUGA VICTOR HERMANN</li>
                          <li>ATONZONG NGUIMSING ANDY LOÏC</li>
                          <li>EMMANUEL ARTHUR MOMNOUGUI</li>
                          <li>DOMGNO KAMGA PATRICK</li>
                          <li>KOUAMDEFFO LAETICIA JOSÉPHINE</li>
                          <li>BISSECK LOUIS LE ROI</li>
                          <li>MBECK MBOH LULA JONATHAN</li>
                          <li>PENPEN BERBOSS</li>
                          <li>BACK NLEND KEVIN EINSTEIN</li>
                          <li>ISSA MOHAMADOU</li>
                          <li>BAEE SERGE BENOÎT</li>
                          <li>TCHAMI KUETCHE YANNICK YVIAN</li>
                          <li>NGANDEU NGANDEU CEDRIC MACAIRE</li>
                          <li>SAM NICK TONG ROBERTO MARTIAL</li>
                          <li>MEKOULOU EYE'E STEVE BRYAN</li>
                          <li>HAMZA MOHAMADOU</li>
                          <li>SIMO NANSU ORNELLA ASHLEZ</li>
                          <li>MINDZIÉ Ml MBIDA JULIEN</li>
                          <li>NOMO PHILIPPE ANDRE</li>
                          <li>KOUAMOU QRIEL FRANCK</li>
                          <li>MEBENGA AROL</li>
                          <li>NDOYE NGANG LUCIEN ROBERT</li>
                          <li>MBOULEFACK LEKANE LOIC</li>
                          <li>TCHEUBON TALLA ADIPRENE</li>
                          <li>KITIO NCHEUMEZA FRANK WILNIS</li>
                          <li>MBIAKOP NZWEMFUT FRANCK JOHANN</li>
                          <li>TIENTCHEU HILLARY</li>
                          <li>BOMO ARIELLE SYNTHIA</li>
                          <li>NDAMBWE GILLES AUBIN</li>
                          <li>ASSE'E EMMANUEL</li>
                          <li>ESSINDI GILBERT STÉPHANE</li>
                          <li>MPELE NKONO ELIE</li>
                          <li>NTSOBE BILLONG ANDRE</li>
                          <li>YVES DOMINIQUE ANANGA MEVOH</li>
                          <li>CHEUDJOU DIMITRI</li>
                          <li>SOH TALLA JOEL STEPHANE</li>
                          <li>NKOU ONDO MURIEL CALLIXTE</li>
                          <li>ALIANA FOU DA JULES-VIANNEY</li>
                          <li>ONIMB YANN LANDRY</li>
                          <li>KAMENI SUNDA LILIAN LALANDE</li>
                          <li>ONIMB MOUSSENI YANN LANDRY</li>
                        </ol>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="margin-top-60">
                  <Col md={12}>
                    <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 2ème année</h1>
                    <CustomHrRed float={"none"} />
                    <p style={{ marginTop: "30px" }}>
                      Le jury, réuni à Tunis le 30 Juin 2020, considérant les résultats obtenus aux épreuves de la 2ème
                      session du concours (Juin 2020),{" "}
                      <strong>
                        autorise les candidats dont les noms suivent – classés par ordre de mérite - à se préinscrire en
                        2ème année, 3ème année ou en 4ème année du cursus d&#39;ingénieurs d&#39;ESPRIT{" "}
                      </strong>
                      pour l’année 2020-21.
                    </p>
                    <p>
                      <strong>
                        <u>L’inscription définitive aura lieu après la justification du diplôme de Baccalauréat. </u>
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
                      <li>
                        Les candidats déclarés admis doivent confirmer leur <strong>préinscription</strong> avant{" "}
                        <strong>le 30 Juillet 2020</strong> (au risque de perdre leur place).
                      </li>
                      <li> Les résultats seront publiés aussi sur le site web de l’école.</li>
                      <li>
                        Parmi les candidats listés ci-dessous, les <strong>20 premiers</strong> sont aussi autorisés à
                        se préinscrire en <strong>1ère année MPSI d’ESPRIT-Prépa</strong> sous réserve qu’ils soient
                        inscrits en <strong>Terminale C ou D</strong> et après étude de leur dossier scolaire.
                      </li>
                      <li>
                        Les candidats listés, qui opteront pour <strong>ESPRIT-Ingénieurs</strong>, choisiront de façon
                        définitive leur spécialité (Informatique, télécommunications, Électromécanique ou Génie civil)
                        au moment de l’inscription.
                      </li>
                      <li>
                        <strong>
                          Les candidats refusés sont autorisés à repasser les épreuves du concours des sessions
                          suivantes.
                        </strong>
                      </li>
                      <li>
                        En cas <strong>d’impossibilité de venir à Tunis en septembre 2020</strong> en relation avec{" "}
                        <strong>
                          la crise du Covid-19 et le maintien de l’arrêt des lignes internationales desservant Tunis
                        </strong>
                        , les candidats auront le choix entre,{" "}
                        <strong>
                          suivre les cours du premier semestre (septembre à décembre 2020) à distance sur plateforme
                          numérique
                        </strong>
                        selon des modalités qui seront fixées par ESPRIT et arriver à Tunis plus tard pour{" "}
                        <strong>suivre les cours du deuxième semestre en présentiel à partir de janvier 2021</strong>,
                        ou bien <strong> reporter leur inscription à l’année suivante 2021- 22.</strong>
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
                          }}>
                          <li>ABISSO ISSEINI</li>
                          <li>FANKOU TEKEUNDO PAMELA SOREL</li>
                          <li>KENFACK TSOPGOU KARL EDSON</li>
                        </ol>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <div id="third" className="anchor"></div>
                <Row className="margin-top-60">
                  <Col style={{ textAlign: "center" }}>
                    <h1>RESULTATS DU JURY D’ADMISSION</h1>
                    <h2>Concours d’accès à ESPRIT-Ingénieurs et à ESPRIT-Prépa Cameroun 2020</h2>
                    <h3>3ème session (Août 2020)</h3>
                    <CustomHrRed float={"none"} />
                  </Col>
                </Row>
                <Row className="margin-top-60">
                  <Col md={12}>
                    <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 1ère année</h1>
                    <CustomHrRed float={"none"} />
                    <p style={{ marginTop: "30px" }}>
                      Le jury, réuni à Tunis le 3 Septembre 2020, considérant les résultats obtenus aux épreuves de
                      mathématiques, de sciences physiques et de logique relatives à la 2ème session du concours (Août
                      2020),{" "}
                      <strong>
                        autorise les candidats dont les noms suivent – classés par ordre de mérite - à se préinscrire en
                        1ère année du cursus d&#39;ingénieurs d&#39;ESPRIT dans la spécialité de leur choix{" "}
                      </strong>
                      pour l’année 2020-21.
                    </p>
                    <p>
                      <strong>
                        <u>L’inscription définitive aura lieu après la justification du diplôme de Baccalauréat. </u>
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
                      <li>
                        Les candidats déclarés admis doivent confirmer leur <strong>préinscription</strong> avant{" "}
                        <strong>le 15 Septembre 2020</strong> (au risque de perdre leur place).
                      </li>
                      <li> Les résultats seront publiés aussi sur le site web de l’école.</li>
                      <li>
                        Parmi les candidats listés ci-dessous, les <strong>20 premiers</strong> sont aussi autorisés à
                        se préinscrire en <strong>1ère année MPSI d’ESPRIT-Prépa</strong> sous réserve qu’ils soient
                        inscrits en <strong>Terminale C ou D</strong> et après étude de leur dossier scolaire.
                      </li>
                      <li>
                        Les candidats listés, qui opteront pour <strong>ESPRIT-Ingénieurs</strong>, choisiront de façon
                        définitive leur spécialité (Informatique, télécommunications, Électromécanique ou Génie civil)
                        au moment de l’inscription.
                      </li>
                      <li>
                        <strong>
                          Les candidats refusés sont autorisés à repasser les épreuves du concours des sessions
                          suivantes.
                        </strong>
                      </li>
                      <li>
                        En cas <strong>d’impossibilité de venir à Tunis en septembre 2020</strong> en relation avec{" "}
                        <strong>
                          la crise du Covid-19 et le maintien de l’arrêt des lignes internationales desservant Tunis
                        </strong>
                        , les candidats auront le choix entre,{" "}
                        <strong>
                          suivre les cours du premier semestre (septembre à décembre 2020) à distance sur plateforme
                          numérique
                        </strong>
                        selon des modalités qui seront fixées par ESPRIT et arriver à Tunis plus tard pour{" "}
                        <strong>suivre les cours du deuxième semestre en présentiel à partir de janvier 2021</strong>,
                        ou bien <strong> reporter leur inscription à l’année suivante 2021- 22.</strong>
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
                          }}>
                          <li>MOHAMAN BELLO SOULEY</li>
                          <li>NKOMA BAYEMA FRANCK BRONDON</li>
                          <li>NGHOKO JOUYAGUENG MAURICE</li>
                          <li>DOUANLA MELI SCOTT</li>
                          <li>KOUEBOU DJONKO GILLES ADRIEN</li>
                          <li>EBALAND MOAMBOS JACQUES ROGER</li>
                          <li>TIODA NGNINZAGHO STEVI JOAN NES</li>
                          <li>FOSSI DOUNGMO CHRIST MIGUEL</li>
                          <li>OWONA ASSIGA SOSTHENE DARYL</li>
                          <li>FOTSO TAMDEM</li>
                          <li>GAMOM PANGOP ALEX YVAN</li>
                          <li>MBODE NGOMBE JOSEPH ULRICH</li>
                          <li>ELINDA TOMO DIEUDONNE</li>
                          <li>TCHAMO ELINOR</li>
                          <li>NDONPOUGNIGNI NJOUHOUA BEBETO NOEL</li>
                          <li>FOGANG TAKOU FRANKLIN</li>
                          <li>TCHINDA TAFFEM JOSPIN</li>
                          <li>AWANA ONANA JOSEPH DE PAIX</li>
                          <li>DIMBONGO ESSOMBE AUBERT</li>
                          <li>OUAFO FOADJO HAROLD PARHYL</li>
                          <li>MBEUGA TITCHIO JUNIOR</li>
                          <li>YANKEU TCHIEKOUO LYNN OPHELIE</li>
                          <li>KAGHO OUGON PRINCE JUNIOR</li>
                          <li>BODOLDJOB MICHEL</li>
                          <li>EPEE EPEE PIERRE CORNEILLE VALDES</li>
                          <li>JAMES NONKENG </li>
                          <li>NGUIMBOUS NGUIMBOUS ANDREAS EDOUARD</li>
                          <li>FOKAM MEKIEDJE JEHAN VIANNEY</li>
                          <li>SOH DJONNANG STYVE GUYVAN</li>
                          <li>AMOUZOU GUIFFO WISDOM ERIC</li>
                          <li>ABOU! BAANA BERNADETTE CINTHYA</li>
                          <li>BODIANG JOVANY LE BLANC</li>
                          <li>FONIE MEKIEDJE YANN CHARLES</li>
                          <li>NKOTTO YANN KENDRICK</li>
                          <li>ZEFACK SIANY ROLEX</li>
                        </ol>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className="margin-top-60">
                  <Col md={12}>
                    <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Candidats admis en 2ème année</h1>
                    <CustomHrRed float={"none"} />
                    <p style={{ marginTop: "30px" }}>
                      Le jury, réuni à Tunis le 3 Septembre 2020, considérant les résultats obtenus aux épreuves de la
                      2ème session du concours (Août 2020),{" "}
                      <strong>
                        autorise les candidats dont les noms suivent – classés par ordre de mérite - à se préinscrire en
                        2ème année, 3ème année ou en 4ème année du cursus d&#39;ingénieurs d&#39;ESPRIT{" "}
                      </strong>
                      pour l’année 2020-21.
                    </p>
                    <p>
                      <strong>
                        <u>L’inscription définitive aura lieu après la justification du diplôme de Baccalauréat. </u>
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
                      <li>
                        Les candidats déclarés admis doivent confirmer leur <strong>préinscription</strong> avant{" "}
                        <strong>le 10 Septembre 2020</strong> (au risque de perdre leur place).
                      </li>
                      <li> Les résultats seront publiés aussi sur le site web de l’école.</li>
                      <li>
                        Parmi les candidats listés ci-dessous, les <strong>20 premiers</strong> sont aussi autorisés à
                        se préinscrire en <strong>1ère année MPSI d’ESPRIT-Prépa</strong> sous réserve qu’ils soient
                        inscrits en <strong>Terminale C ou D</strong> et après étude de leur dossier scolaire.
                      </li>
                      <li>
                        Les candidats listés, qui opteront pour <strong>ESPRIT-Ingénieurs</strong>, choisiront de façon
                        définitive leur spécialité (Informatique, télécommunications, Électromécanique ou Génie civil)
                        au moment de l’inscription.
                      </li>
                      <li>
                        <strong>
                          Les candidats refusés sont autorisés à repasser les épreuves du concours des sessions
                          suivantes.
                        </strong>
                      </li>
                      <li>
                        En cas <strong>d’impossibilité de venir à Tunis en septembre 2020</strong> en relation avec{" "}
                        <strong>
                          la crise du Covid-19 et le maintien de l’arrêt des lignes internationales desservant Tunis
                        </strong>
                        , les candidats auront le choix entre,{" "}
                        <strong>
                          suivre les cours du premier semestre (septembre à décembre 2020) à distance sur plateforme
                          numérique
                        </strong>
                        selon des modalités qui seront fixées par ESPRIT et arriver à Tunis plus tard pour{" "}
                        <strong>suivre les cours du deuxième semestre en présentiel à partir de janvier 2021</strong>,
                        ou bien <strong> reporter leur inscription à l’année suivante 2021- 22.</strong>
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
                          }}>
                          <li>NGONGANG LOIC FRAICHLIN</li>
                          <li>YOMO LAETITIA</li>
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
}

const breadcrumb = {
  src: "",
  Title: "ESPRIT INGÉNIEUR",
  Subtitle: "Résultat Concours d'admission Cameroun",
}
