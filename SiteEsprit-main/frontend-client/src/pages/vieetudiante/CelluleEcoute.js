import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import PropTypes from "prop-types"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { CelluleEcoute as meta } from "./VieEtudianteDictionary"

export default class CelluleEcoute extends Component {
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
                  <h1>Cellule d’écoute</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>

            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col className="space-items" md={6} xs={12}>
                  <h4 style={{ color: "#ed1c24" }}>PRÉSENTATION</h4>
                  <p>
                    La cellule d’écoute et d’accompagnement est un espace confidentiel qui a pour objectif d’accueillir,
                    écouter, comprendre, informer et orienter les étudiants d'ESPRIT.
                  </p>
                  <p>
                    C’est un espace où les étudiants peuvent parler de leurs doutes, de leurs problèmes et trouver une
                    orientation des différents domaines (scolarité, stress/anxiété, tristesse, mal être diffus……)
                  </p>
                  <p>
                    La primauté est accordée au soutien de la parole, et l’écoute, comme l’initiation d’une réflexion
                    personnelle, afin d’élaborer avec l’étudiant des réponses adaptées à chaque situation. - A ce titre,
                    et si besoin, des orientations vers différents partenaires peuvent être soutenues en facilitant et
                    en accompagnant l’étudiant dans cette démarche
                  </p>
                </Col>
                <Col className="space-items">
                  <h4 style={{ color: "#ed1c24" }}>MISSIONS</h4>
                  <p>
                    Recevoir et écouter en entretiens individuels les étudiants à leur demande (permanence libre et
                    prises de rendez-vous).
                  </p>
                  <p>
                    Recevoir tout type de réclamation concernant le déroulement des cours, la logistique,
                    l’environnement scolaire.
                  </p>
                  <p>Etre en relation avec les délégués de classes.</p>
                  <p>Apporter une aide aux étudiants par le biais de conseils et d’orientations cohérentes.</p>
                  <p>Proposer un relais auprès de praticien pour une prise en charge thérapeutique si nécessaire.</p>
                  <p>Proposer des mesures préventives.</p>
                </Col>
              </Row>
              <Row style={{ marginBottom: "60px" }}>
                <Col className="space-items" md={6} xs={12}>
                  <h4 style={{ color: "#ed1c24" }}>CADRE DE FONCTIONNEMENT</h4>
                  <p>
                    <strong>La demande de rendez vous </strong>
                  </p>
                  <p>
                    Les étudiants en difficulté peuvent solliciter par téléphone ou mail un rendez vous à la cellule
                    d’écoute en indiquant leurs coordonnées téléphoniques, ils seront contactés et reçus dès que
                    possible.
                  </p>
                  <p>
                    <strong>00216 92234330</strong>
                  </p>
                  <p>
                    <strong>E-mail : cellule.decoute@esprit.tn</strong>
                  </p>
                  <p>
                    <strong>Adresse : cellule d’écoute. RDC bloc A. ESPRIT el GHAZELA</strong>
                  </p>
                  <p>
                    La cellule d’écoute fonctionne sur la base de libre adhésion des étudiants : cette démarche doit
                    rester volontaire
                  </p>
                  <p>
                    <strong>Engagement des membres</strong>
                  </p>
                  <p>
                    - Toutes les situations et les documents dont la cellule a connaissance sont uniquement destinés aux
                    membres de la cellule, et ne figureront ni dans le dossier médical ni dans le dossier administratif
                    de l’étudiant
                  </p>
                  <p>
                    - Chaque membre a un devoir de confidentialité absolu et s’engage à ne pas diffuser d’informations
                    ni en cours du traitement du dossier, ni après son archivage et quelle que soit l’issue
                  </p>
                  <p>
                    <strong>Engagement de l’institution</strong>
                  </p>
                  <p>
                    - Des moyens techniques et organisationnels seront prévus afin de permettre l’optimisation des
                    actions de la cellule
                  </p>
                  <p>
                    - La faculté s’engage notamment à respecter les plannings nécessaires au fonctionnement des membres
                    de la cellule
                  </p>
                  <p>
                    <strong>Principes déontologiques pour les membres</strong>
                  </p>
                  <p>Préservation du secret médical et principe de confidentialité :</p>
                  <p>
                    - La confidentialité est essentielle pour l’efficacité du travail au sein de la cellule. Elle
                    concerne tous les membres de la cellule.
                  </p>

                  <p>
                    - Ces derniers s’engagent à ne restituer les informations recueillies qu’aux seuls membres de la
                    cellule, lors de réunion d’analyse de dossier, ou lors de réunion de travail restreinte, dans le
                    cadre de la recherche des solutions.
                  </p>
                  <p>Principe d’engagement transparent</p>

                  <p>Principe de spécificité de la demande</p>
                  <p>
                    - Au cours de l’analyse de la demande, de la recherche et de la mise en place de solutions, les
                    membres de la cellule doivent se limiter au domaine et la situation qui a fait l’objet de la
                    demande. Principe de collaboration avec des spécialistes
                  </p>

                  <p>
                    - A ce titre, et si besoin, des orientations vers différents partenaires peuvent être soutenues en
                    facilitant et en accompagnant l’étudiant dans cette démarche.
                  </p>
                  <p>Principe de distanciation dans la recherche de solution</p>

                  <p>
                    - Tous les membres de la cellule s’engagent à viser l’amélioration globale d’une situation de
                    difficulté, sans privilégier systématiquement une solution. L’amélioration globale d’une situation
                    doit s’entendre comme la restitution à la personne d’une manœuvre réelle vis-à-vis de son problème.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}

//Props Types
CelluleEcoute.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}
