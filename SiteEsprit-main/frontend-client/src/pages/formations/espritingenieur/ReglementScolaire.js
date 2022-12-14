import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import DownloadButton from "components/DownloadButton"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import file2 from "../../../assets/files/Reg SCO cours du soir 21-22.pdf"
import file1 from "../../../assets/files/Reg SCO cours du jour 21-22.pdf"
import file3 from "../../../assets/files/Règ SCO Alternance 21-22.pdf"
import downloadsrc from "../../../assets/img/download.ico"
import { PresentationIngenieur as meta } from "../FormationsDictionary"

export default class PresentationIngenieur extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <div>
              <Row>
                <Col>
                  <h1>Esprit Ingénieur : Nos règlements au sein de l'école</h1>
                  <CustomHrRed />
                </Col>
              </Row>
            </div>
            <div className="margin-top-60">
              <Row style={{ marginBottom: "60px" }}>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Esprit cours du jour</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <DownloadButton data={download1} />
                    </Col>
                  </Row>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Esprit cours du soir</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <DownloadButton data={download2} />
                    </Col>
                  </Row>
                </Col>
                <Col md={4} xs={12}>
                  <div style={{ display: "flow-root" }}>
                    <h3 className="text-esprit">Esprit Alternance</h3>
                    <CustomHrGray />
                  </div>
                  <br />
                  <Row>
                    <Col>
                      <DownloadButton data={download3} />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </div>
        </section>
      </>
    )
  }
}
const download1 = {
  link: file1,
  text: "DOWNLOAD",
  src: downloadsrc,
}
const download2 = {
  link: file2,
  text: "DOWNLOAD",
  src: downloadsrc,
}
const download3 = {
  link: file3,
  text: "DOWNLOAD",
  src: downloadsrc,
}
const breadcrumb = {
  Title: "L’école d’ingénieur",
  Subtitle: "Former les ingénieurs de demain",
}
