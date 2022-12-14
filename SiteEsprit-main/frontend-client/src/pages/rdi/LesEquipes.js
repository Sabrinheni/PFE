import RDITeam from "components/blog/RDITeam"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { useApi } from "../../hooks/useApi"
import { LesEquipes as meta } from "./RDIDictionary"

export default function LesEquipes() {
  const [rdis] = useApi("rdis")

  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container">
          <Row>
            <Col>
              <h1>Les équipes de recherche</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <div className="margin-top-60">
            <Row>
              <Col className="space-items">
                <p>
                  Au sein d’Esprit, les associations et rdis remplissent plusieurs rôles étant donné la diversité des
                  motivations qui animent ceux qui en sont à l’origine. Conscients de l’importance de la vie
                  associative, les étudiants jouent un rôle important dans l’élaboration et la transmission des messages
                  aux destinataires.
                </p>
              </Col>
            </Row>
          </div>
          {rdis && <RDITeam data={rdis} />}
        </div>
      </section>
    </>
  )
}
const breadcrumb = {
  Title: "Nos équipes R.D.I",
  Subtitle: "Découvrez les équipes R.D.I d'ESPRIT",
}
