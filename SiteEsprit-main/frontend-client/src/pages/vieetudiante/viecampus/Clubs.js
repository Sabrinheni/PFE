import Club from "components/blog/Club"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { useApi } from "../../../hooks/useApi"
import { Clubs as meta } from "../VieEtudianteDictionary"

export default function Clubs() {
  const [clubs] = useApi("clubs")

  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container">
          <Row>
            <Col>
              <h1>Clubs ESPRIT</h1>
              <CustomHrRed />
            </Col>
          </Row>
          <div className="margin-top-60">
            <Row>
              <Col className="space-items">
                <p>
                  Au sein d’Esprit, les associations et clubs remplissent plusieurs rôles étant donné la diversité des
                  motivations qui animent ceux qui en sont à l’origine. Conscients de l’importance de la vie
                  associative, les étudiants jouent un rôle important dans l’élaboration et la transmission des messages
                  aux destinataires.
                </p>
                <p>
                  <strong>Ci-dessous la liste des clubs d’Esprit. N’hésitez pas à la compléter.</strong>
                </p>
              </Col>
            </Row>
          </div>
          {clubs && <Club data={clubs} />}
        </div>
      </section>
    </>
  )
}
const breadcrumb = {
  Title: "Nos clubs",
  Subtitle: "Découvrez les clubs d'ESPRIT",
}
