import BlogActu from "components/blog/BlogActu"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { ActuPage as meta } from "../VieEtudianteDictionary"

export default function ActuPage() {
  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container">
          <div>
            <Row>
              <Col>
                <h1>Nos Actualités</h1>
                <CustomHrRed />
              </Col>
            </Row>
          </div>

          <div className="margin-top-60">
            <Row style={{ marginBottom: "60px" }}>
              <Col className="space-items">
                <h4 style={{ color: "#ed1c24" }}>Les actualités</h4>

                <p>Vous retrouverez ici toutes les actualités d'ESPRIT :</p>
              </Col>
            </Row>
          </div>
          <BlogActu />
        </div>
      </section>
    </>
  )
}
const breadcrumb = {
  Title: "Nos actualités",
  Subtitle: "Restez à la une des nouvelles d'ESPRIT",
}
