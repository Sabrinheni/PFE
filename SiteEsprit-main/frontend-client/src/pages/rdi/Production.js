import PRODUCTION from "components/blog/Production"
import { useApi } from "hooks/useApi"
import React from "react"
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import { Production as meta } from "./RDIDictionary"

export default function Production() {
  const [productions] = useApi("productions/esprit")

  const byYear = [...new Set(productions?.map(item => item.session))]
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
      <NavBar />
      <section className="our-blog extract main-blog dynamic-margin-simple">
        <div className="container">
          <div>
            <Row>
              <Col>
                <h1>Productions</h1>
                <CustomHrRed />
              </Col>
            </Row>
          </div>

          <div className="margin-top-60">
            <Row>
              <Col>
                <ListGroup className="sticky-list">
                  {byYear?.map(year => (
                    <ListGroupItem key={year} tag="a" href={"#" + year} action>
                      Publications {year}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Col>
              <Col md={10} style={{ marginTop: "30px" }}>
                {byYear?.map(year => (
                  <Row key={"prod" + year} style={{ marginBottom: "60px" }}>
                    <div id={year} className="anchor"></div>
                    <h2 style={{ marginLeft: "auto", marginRight: "auto" }}>Productions de l'année {year}</h2>
                    <CustomHrRed float={"center"} />
                    <PRODUCTION data={productions.filter(prod => prod.session === year)} />
                  </Row>
                ))}
                {/* <div id="2016" className="anchor"></div>
                  <Col>{productions && <PRODUCTION data={productions} />}</Col> */}
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  )
}
