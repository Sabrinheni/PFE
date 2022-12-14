import React from "react"
import NavBar from "components/layout/NavBar"
import { Col, Row } from "react-bootstrap"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import { useApi } from "../../../hooks/useApi"
import { CalendrierExamen as meta } from "../FormationsDictionary"
import MetaHelmet from "components/MetaHelmet"

export default function CalendrierExamen() {
  const [timeTables] = useApi("timeTables")
  let examsCalendar = ""
  let rules = ""
  let examsTerminalCalendar = ""
  let examsTerminalReCalendar = ""
  let examsReCalendar = ""
  if (timeTables) {
    examsCalendar = timeTables && timeTables.filter(timeTable => timeTable.title === "calendrierExamens")[0]
    examsReCalendar = timeTables && timeTables.filter(timeTable => timeTable.title === "calendrierRattrapage")[0]
    rules = timeTables && timeTables.filter(timeTable => timeTable.title === "reglement")[0]
    examsTerminalCalendar =
      timeTables && timeTables.filter(timeTable => timeTable.title === "calendrierExamensCinquieme")[0]
    examsTerminalReCalendar =
      timeTables && timeTables.filter(timeTable => timeTable.title === "calendrierRattrapageCinquieme")[0]
  }

  const breadcrumb = {
    Title: "Calendrier des examens",
    Subtitle: "Calendrier des examens et réglement",
  }
  return (
    <>
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin">
        <div className="container">
          <Row>
            <Col>
              <h1>Calendrier des examens</h1>
              <CustomHrRed />
            </Col>
          </Row>
          {(examsTerminalCalendar || examsCalendar) && (
            <section className="cta-area">
              <div className="diplay-table">
                <div className="display-table-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-md-7 col-lg-7">
                        <div className="cta-info">
                          <h2>Calendrier des examens</h2>
                          <h3>Année universitaire 2020/2021</h3>

                          {examsCalendar && (
                            <>
                              <p>Etudiants en 1ère, 2ème, 3ème et 4ème année</p>
                              <div className="center-wrap">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`${process.env.REACT_APP_API_URL_UPLOADS}${examsCalendar.file}`}
                                  className="btn-a">
                                  <div className="button">
                                    Télécharger
                                    <i className="icofont-long-arrow-right" />
                                    <div className="mask" />
                                  </div>
                                </a>
                              </div>
                            </>
                          )}

                          {examsTerminalCalendar && (
                            <>
                              <p>Etudiants en 5ème année</p>
                              <div className="center-wrap">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`${process.env.REACT_APP_API_URL_UPLOADS}${examsTerminalCalendar.file}`}
                                  className="btn-a">
                                  <div className="button">
                                    Télécharger
                                    <i className="icofont-long-arrow-right" />
                                    <div className="mask" />
                                  </div>
                                </a>
                              </div>
                            </>
                          )}

                          {rules && (
                            <>
                              <p>Réglement</p>
                              <div className="center-wrap">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`${process.env.REACT_APP_API_URL_UPLOADS}${rules.file}`}
                                  className="btn-a">
                                  <div className="button">
                                    Télécharger
                                    <i className="icofont-long-arrow-right" />
                                    <div className="mask" />
                                  </div>
                                </a>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-5 col-lg-5 cta-img">
                        <img className="img-fluid" src={require("../../../assets/img/calendar.png")} alt="Calendrier" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {(examsReCalendar || examsTerminalReCalendar) && (
            <section className="cta-area">
              <div className="diplay-table">
                <div className="display-table-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-md-7 col-lg-7">
                        <div className="cta-info">
                          <h2>Calendrier des examens de rattrapage</h2>
                          {examsReCalendar && (
                            <>
                              <p>Etudiants en 1ère, 2ème, 3ème et 4ème année</p>
                              <div className="center-wrap">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`${process.env.REACT_APP_API_URL_UPLOADS}${examsReCalendar.file}`}
                                  className="btn-a">
                                  <div className="button">
                                    Télécharger
                                    <i className="icofont-long-arrow-right" />
                                    <div className="mask" />
                                  </div>
                                </a>
                              </div>
                            </>
                          )}
                          {examsTerminalReCalendar && (
                            <>
                              <p>Etudiants en 5ème année</p>
                              <div className="center-wrap">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`${process.env.REACT_APP_API_URL_UPLOADS}${examsTerminalReCalendar.file}`}
                                  className="btn-a">
                                  <div className="button">
                                    Télécharger
                                    <i className="icofont-long-arrow-right" />
                                    <div className="mask" />
                                  </div>
                                </a>
                              </div>
                            </>
                          )}
                          {rules && (
                            <>
                              <p>Réglement</p>
                              <div className="center-wrap">
                                <a
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  href={`${process.env.REACT_APP_API_URL_UPLOADS}${rules.file}`}
                                  className="btn-a">
                                  <div className="button">
                                    Télécharger
                                    <i className="icofont-long-arrow-right" />
                                    <div className="mask" />
                                  </div>
                                </a>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-5 col-lg-5 cta-img">
                        <img className="img-fluid" src={require("../../../assets/img/calendar.png")} alt="Calendrier" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      </section>
    </>
  )
}
