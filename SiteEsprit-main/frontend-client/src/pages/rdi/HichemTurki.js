import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import Hichem from "../../assets/img/Hichem.png"

export default class QuiSommesNous extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <div className="margin-top-60">
              <center>
                <img src={Hichem} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Hichem Turki</h1>
                  </Col>
                </Row>
              </center>

              <div>
                <br></br>
              </div>
              <div>
                <ul>
                  <li>Bio:</li>
                  <p>
                    Hichem Turki graduated from the Ecole Nationale des Ponts et Chaussées (Paris - France) in 1986. He
                    held several senior positions of technical, and R&D responsibilities in several French (Elf
                    Aquitaine) and Tunisian (Chemical Group, EMS subsidiary of Carnaut Métal Box etc…) companies before
                    joining the company STRATEGE as a senior consultant in Business Development Strategy. Hichem was for
                    13 years the Chairman and CEO of the SOMATRAL group . Since 2009, he has been the CEO of the Société
                    du Pôle de compétitivité de Sousse “Novation City” which oversees three key R&D, production and
                    service zones (Technopole, industrial zone and service zone). He is President of “Reseau
                    Entreprendre Tunisia” and member of the board of CTFCI and TBCC
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: "",
  Title: "Hichem Turki",
  Subtitle: "Recherche, Développement et Innovation",
}
