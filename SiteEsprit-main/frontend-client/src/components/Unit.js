import React, { useState } from "react"
import { useApi } from "../hooks/useApi"
import { Col, Row, Accordion, Card } from "react-bootstrap"
import ModalVideo from "react-modal-video"
import DownloadButton from "components/DownloadButton"
import arrowsrc from "../assets/img/arrow.ico"

export default function Unit({ type }) {
  const [isOpen, setisOpen] = useState(false)
  const [unit] = useApi("units")
  if (!unit) return <></>

  function filterByType() {
    return unit && unit.filter(p => p.type === type)
  }

  function openModal() {
    var div = document.getElementById("specialites-section")
    window.scrollTo(0, div.scrollHeight / 2 + 600)
    setisOpen(true)
  }

  function closeModal() {
    setisOpen(false)
  }

  const [filtred] = [filterByType()]

  function style(url) {
    if (url) return { marginTop: "40px" }
  }

  return (
    <>
      {filtred &&
        filtred.map((unit, idx) => {
          return (
            <Col md={6} key={idx}>
              <Row className="specialite-row">
                <Col md={12} className="specialite-col">
                  <h3 style={{ textTransform: "capitalize" }}>{unit.title}</h3>
                  <br></br>
                  <p>{unit.description && unit.description}</p>
                  {unit.image && (
                    <>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: [
                            `.item-${unit._id} {`,
                            "  margin-top: 20px;",
                            "  background-size: cover;",
                            "  background-position: center;",
                            `  background-image: url("${process.env.REACT_APP_API_URL_UPLOADS + unit.image}");`,
                            "  height: 300px;",
                            "}",
                          ].join("\n"),
                        }}></style>
                      <section className={`video-area-custom item-${unit._id}`}>
                        <div className="diplay-table">
                          <div className="display-table-cell">
                            <div className="video-inner-content" style={{ marginTop: "0px" }}>
                              {unit.videoUrl && (
                                <div className="button__holder">
                                  <ModalVideo
                                    id={unit.videoUrl}
                                    channel="youtube"
                                    isOpen={isOpen}
                                    videoId={unit.videoUrl}
                                    onClose={closeModal}
                                  />
                                  <span onClick={openModal} className="plus popup-youtube"></span>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </section>
                    </>
                  )}
                  {unit.file && (
                    <div style={{ marginTop: "15px", marginBottom: "20px", display: "flex", placeContent: "center" }}>
                      <DownloadButton
                        data={{
                          link: process.env.REACT_APP_API_URL_UPLOADS + unit.file,
                          text: "Télécharger",
                          src: arrowsrc,
                        }}
                      />
                    </div>
                  )}
                  {unit.modules?.length > 0 && (
                    <Row style={style(unit.videoUrl)}>
                      <Col md={12}>
                        <Accordion style={{ color: "black" }}>
                          <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                              <i className="icofont-certificate-alt-2" style={{ marginRight: "10px" }} />
                              Voir les modules
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                              <Card.Body>
                                <div className="acc--style3 text-custom-parent panel-group">
                                  {unit.modules.map((mod, idx) => {
                                    return (
                                      <div key={idx} className="acc-group">
                                        <div className="acc-panel-title">
                                          <button
                                            data-ects={
                                              mod.subjects?.reduce((a, b) => {
                                                return a + (parseFloat(b["ects"]) || 0)
                                              }, 0) + "ECTS"
                                            }
                                            data-toggle="collapse"
                                            disabled
                                            className="acc-tgg-button text-custom-child-hov"
                                            aria-expanded="true">
                                            {mod.title}
                                          </button>
                                        </div>
                                        <div className="acc-panel-collapse collapse in" aria-expanded="true">
                                          <div className="acc-content row" data-droplevel="1">
                                            <div className="col-md-12 col-sm-12" data-droplevel="2">
                                              <div className="ects-list-container">
                                                <ul>
                                                  {mod.subjects?.map((subject, idx) => {
                                                    return <li key={idx}>{subject.title}</li>
                                                  })}
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    )
                                  })}
                                </div>
                              </Card.Body>
                            </Accordion.Collapse>
                          </Card>
                        </Accordion>
                      </Col>
                    </Row>
                  )}
                </Col>
              </Row>
            </Col>
          )
        })}
    </>
  )
}
