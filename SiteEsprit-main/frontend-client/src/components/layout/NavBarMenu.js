import $ from "jquery"
import React, { Component } from "react"
import LinkDuo from "../utils/LinkDuo"
import SearchModal from "./SearchModal"
//import Multilingue from "./Multilingue"
import { Container, Row, Col } from "react-bootstrap"

export default class NavMenu extends Component {


  componentDidMount() {
    var size
    //SMALLER HEADER WHEN SCROLL PAGE
    function smallerMenu() {
      var supportPageOffset = window.pageXOffset !== undefined
      var isCSS1Compat = (document.compatMode || "") === "CSS1Compat"

      var sc = supportPageOffset
        ? window.pageYOffset
        : isCSS1Compat
        ? document.documentElement.scrollTop
        : document.body.scrollTop
      // var sc = $(window).scrollTop()
      if (sc > 40) {
        $("#header-sroll").addClass("small")
      } else {
        $("#header-sroll").removeClass("small")
      }
    }

    // VERIFY WINDOW SIZE
    function windowSize() {
      size = $(document).width()
      if (size >= 991) {
        $("body").removeClass("open-menu")
        $(".hamburger-menu .bar").removeClass("animate")
      }
    }

    // ESC BUTTON ACTION
    $(document).keyup(function (e) {
      if (e.keyCode === 27) {
        $(".bar").removeClass("animate")
        $("body").removeClass("open-menu")
        $("header .desk-menu .menu-container .menu .menu-item-has-children a ul").each(function (index) {
          $(this).removeClass("open-sub")
        })
      }
    })

    $("#cd-primary-nav > li").hover(function () {
      let $whidt_item = $(this).width()
      $whidt_item = $whidt_item - 8

      // let $prevEl = $(this).prev("li")
      // let $preWidth = $(this)
      //   .prev("li")
      //   .width()
      let pos = $(this).position()
      pos = pos.left + 4
      $("header .desk-menu .menu-container .menu>li.line").css({
        width: $whidt_item,
        left: pos,
        opacity: 1,
      })
    })

    // ANIMATE HAMBURGER MENU
    $(".hamburger-menu").on("click", function () {
      $(".hamburger-menu .bar").toggleClass("animate")
      if ($("body").hasClass("open-menu")) {
        $("body").removeClass("open-menu")
      } else {
        $("body").toggleClass("open-menu")
      }
    })

    $("header .desk-menu .menu-container .menu .menu-item-has-children ul").each(function (index) {
      $(this).append('<li class="back"><a href="#">Retour</a></li>')
    })

    // RESPONSIVE MENU NAVIGATION
    $("header .desk-menu .menu-container .menu .menu-item-has-children > a").on("click", function (e) {
      e.preventDefault()
      if (size <= 991) {
        $(this).next("ul").addClass("open-sub")
      }
    })

    $(".logo-adn a").on("click", function (e) {
      if (size <= 991) {
        $(".bar").removeClass("animate")
        $("body").removeClass("open-menu")
        $("header .desk-menu .menu-container .menu .menu-item-has-children a ul").each(function (index) {
          $(this).removeClass("open-sub")
        })
      }
    })

    // RESPONSIVE MENU NAVIGATION
    $(
      "header .desk-menu .menu-container .menu .menu-item-has-children > ul > li:not(.menu-item-has-children):not(.back) > a"
    ).on("click", function (e) {
      if (size <= 991) {
        $(".bar").removeClass("animate")
        $("body").removeClass("open-menu")
        $("header .desk-menu .menu-container .menu .menu-item-has-children a ul").each(function (index) {
          $(this).removeClass("open-sub")
        })
      }
    })

    $("header .desk-menu .menu-container .menu .menu-item-has-children ul .back").on("click", function (e) {
      e.preventDefault()
      $(this).parent("ul").removeClass("open-sub")
    })

    $("body .over-menu").on("click", function () {
      $("body").removeClass("open-menu")
      $(".bar").removeClass("animate")
    })

    $(document).ready(function () {
      smallerMenu()
      windowSize()
      $("body").removeClass("open-menu")
    })

    $(window).scroll(function () {
      smallerMenu()
    })

    $(window).resize(function () {
      windowSize()
    })
  }


  render() {
    return (
      <>
        <div className="over-menu"></div>
        <div id="wrap">
          <header className="header" id="header-sroll">
            <Container>
              {/* <Row>
                <Col md={12} lg={12}>
                  <div className="address-bar">
                    <ul
                      className="list-inline header-admission-start"
                      style={{ textAlign: "center", color: "white", display: "none" }}>
                      <li>
                        OUVERTURE DES INSCRIPTIONS AUX CONCOURS D'ADMISSION
                        <LinkDuo style={{ color: "black" }} to={"/admission/esprit-ingenieur"}>
                          <b>&nbsp;INSCRIVEZ VOUS ICI</b>
                        </LinkDuo>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row> */}
              <Row>
                <Col xs={12}>
                  <div className="desk-menu">
                    <nav className="box-menu">
                      <div className="menu-container">
                        <div className="menu-head">
                          <a href="/" target="_blank" className="client">
                            <span>Bienvenue à ESPRIT</span>
                          </a>
                        </div>
                        <div className="menu-header-container">
                          <div className="logo">
                            <h1 className="logo-adn">
                              <LinkDuo title="ESPRIT" to="/">
                                ESPRIT
                              </LinkDuo>
                            </h1>
                          </div>
                          <ul id="cd-primary-nav" className="menu">
                            <li className="menu-item menu-item-has-children">
                              <LinkDuo to="#">ESPRIT</LinkDuo>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <LinkDuo to="/esprit/valeurs">Valeurs de l'école</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/esprit/les-plus-esprit">Les plus d'ESPRIT</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/esprit/honoris-united-universities">
                                    Honoris United Universities
                                  </LinkDuo>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                  <LinkDuo to="#">Gouvernance</LinkDuo>
                                  <ul className="sub-menu">
                                    {/* <li className="menu-item">
                                      <LinkDuo to="/esprit/gouvernance/strategique">Gouvernance Stratégique</LinkDuo>
                                    </li> */}
                                    <li className="menu-item">
                                      <LinkDuo to="/esprit/gouvernance/services-esprit">Services de l'école</LinkDuo>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/esprit/politique-qualite">Politique Qualité</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/esprit/salle-de-presse">Salle De Presse</LinkDuo>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <LinkDuo to="#">Admission</LinkDuo>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <LinkDuo to="/admission/esprit-ingenieur">Esprit Ingénieur</LinkDuo>
                                </li>
                                {/* <li className="menu-item">
                                  <LinkDuo to="/admission/esprit-alternance">Esprit Alternance</LinkDuo>
                                </li> */}

                                <li className="menu-item">
                                  <LinkDuo force={true} to="https://esprit-prepa.com/">
                                    Esprit-prépa
                                  </LinkDuo>
                                </li>
                                {/* <li className="menu-item">
                                  <LinkDuo to="/admission/ambassadeurs">Etudiants ambassadeurs</LinkDuo>
                                </li> */}
                              </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <LinkDuo to="#">Formations</LinkDuo>
                              <ul className="sub-menu">
                                <li className="menu-item menu-item-has-children">
                                  <LinkDuo to="#">Esprit Ingénieur</LinkDuo>
                                  <ul className="sub-menu">
                                    <li className="menu-item">
                                      <LinkDuo to="/formation/esprit-ingenieur/presentation">Présentation</LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/InternationalDegreeProgram">Classe internationale</LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/formation/esprit-ingenieur/specialites-et-options">
                                        Spécialités Et Options
                                      </LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/formation/esprit-ingenieur/stages">Stages</LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/formation/esprit-ingenieur/langues-dev-personnel">
                                        Langues et Dév Personnel
                                      </LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/formation/esprit-ingenieur/calendrier-examens">
                                        Calendrier Des Examens
                                      </LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/formation/esprit-ingenieur/reglement-scolaire">
                                        Règlement scolaire
                                      </LinkDuo>
                                    </li>
                                  </ul>
                                </li>
                                {/* <li className="menu-item menu-item-has-children">*/}
                                <li className="menu-item">
                                  <LinkDuo force={true} to="https://esprit-prepa.com">
                                    Esprit-prépa
                                  </LinkDuo>
                                </li>

                                <li className="menu-item menu-item-has-children">
                                  <LinkDuo to="#">Formation Continue</LinkDuo>
                                  <ul className="sub-menu">
                                    <li className="menu-item">
                                      <LinkDuo to="/formation/formation-continue/cours-du-soir">Cours Du Soir</LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/EMBA">Executive MBA</LinkDuo>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            {/* <li className="menu-item menu-item-has-children"> */}
                            <li className="menu-item">
                              <LinkDuo force={true} to="/rdi">
                                RDI
                              </LinkDuo>
                              {/* <ul className="sub-menu">
                                <li className="menu-item">
                                  <LinkDuo to="/rdi/espri-tech">Esprit-Tech</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/rdi/production">Production</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/rdi/les-equipes-rdi">Les Équipes</LinkDuo>
                                </li>
                              </ul> */}
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <LinkDuo to="#">ENTREPRISE</LinkDuo>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <LinkDuo to="/entreprise/esprit-entreprise">Esprit Entreprise</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/entreprise/stages">Stages</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/entreprise/fondation">Fondation Esprit</LinkDuo>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                  <LinkDuo to="#">ESPRIT LANGUAGE CENTER</LinkDuo>
                                  <ul className="sub-menu">
                                    <li className="menu-item">
                                      <LinkDuo to="/entreprise/Esprit-Language-Center/presentation">
                                        Présentation
                                      </LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/entreprise/Esprit-Language-Center/TEFTFAQ">TEF & TEFAQ</LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/entreprise/Esprit-Language-Center/APTIS">APTIS TEST</LinkDuo>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/entreprise/formation-certifiante">Formation Certifiante</LinkDuo>
                                </li>
                              </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <LinkDuo to="#">INTERNATIONAL</LinkDuo>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <LinkDuo to="/international/experience">
                                    Avoir une Expérience<br></br>à l'International
                                  </LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/international/venir-a-esprit">Venir à ESPRIT</LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/international/partenariats">Partenariats</LinkDuo>
                                </li>
                                {/* <li className="menu-item">
                                  <LinkDuo to="/international/temoignages">Témoignages</LinkDuo>
                                </li> */}
                              </ul>
                            </li>
                            <li className="menu-item menu-item-has-children">
                              <LinkDuo to="#">VIE ÉTUDIANTE</LinkDuo>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <LinkDuo to="/vie-etudiante/presentation">Présentation</LinkDuo>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                  <LinkDuo to="#">Rentrée Scolaire</LinkDuo>
                                  <ul className="sub-menu">
                                    <li className="menu-item">
                                      <LinkDuo to="/vie-etudiante/rentree-scolaire/logement-restauration">
                                        Logement Et Restauration
                                      </LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/vie-etudiante/rentree-scolaire/espritfondation">Fondation</LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/vie-etudiante/rentree-scolaire/inscription">Inscriptions</LinkDuo>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item menu-item-has-children">
                                  <LinkDuo to="#">Vie sur campus</LinkDuo>
                                  <ul className="sub-menu">
                                    <li className="menu-item">
                                      <LinkDuo to="/vie-etudiante/vie-campus/infrastructure">Infrastructure</LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/vie-etudiante/vie-campus/clubs">Clubs</LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/vie-etudiante/vie-campus/evenements-challenges">
                                        Evénements Et Challenges
                                      </LinkDuo>
                                    </li>
                                    <li className="menu-item">
                                      <LinkDuo to="/vie-etudiante/vie-campus/actualites">Actualités</LinkDuo>
                                    </li>
                                  </ul>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="/vie-etudiante/cellule-ecoute">Cellule D'Écoute</LinkDuo>
                                </li>
                              </ul>
                            </li>
                            <li className="contact menu-item menu-item-has-children">
                              <LinkDuo to="#">Paiement & Intranet</LinkDuo>
                              <ul className="sub-menu">
                                <li className="menu-item">
                                  <LinkDuo to="https://esprit-tn.com/ESPOnline/Online/Login.aspx">
                                    Paiement En Ligne
                                  </LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="https://esprit-tn.com/esponline/online/default.aspx">
                                    Cours Du Jour
                                  </LinkDuo>
                                </li>
                                <li className="menu-item">
                                  <LinkDuo to="https://esprit-tn.com/espcsonline/online/default.aspx">
                                    Cours Du Soir
                                  </LinkDuo>
                                </li>
                              </ul>
                            </li>
                            <li className="contact menu-item">
                              <SearchModal />
                            </li>
                          
                            <li className="contact menu-item">
                            
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="hamburger-menu">
                        <div className="bar"></div>
                      </div>
                    </nav>
                  </div>
                </Col>
              </Row>
            </Container>
          </header>
        </div>
      </>
    )
  }
}
