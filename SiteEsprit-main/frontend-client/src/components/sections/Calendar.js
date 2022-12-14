import React from "react"
import ScrollAnimation from "react-animate-on-scroll"

import { useApi } from "../../hooks/useApi"

export default function Calendar() {
  const [timeTables] = useApi("timeTables")
  let annualCalendar = ""
  let annualTerminalCalendar = ""
  if (timeTables) {
    annualCalendar = timeTables && timeTables.filter(timeTable => timeTable.title === "calendrierAnnuel")[0]
    annualTerminalCalendar =
      timeTables && timeTables.filter(timeTable => timeTable.title === "calendrierAnnuelCinquieme")[0]
  }

  return (
    <>
      {(annualCalendar || annualTerminalCalendar) && (
        <section className="cta-area">
          <div className="diplay-table">
            <div className="display-table-cell">
              <div className="container">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="row">
                    <div className="col-sm-6 col-md-7 col-lg-7">
                      <div className="cta-info">
                        <h2>Calendrier 2020/2021</h2>
                        {annualCalendar && (
                          <>
                            <p>Etudiants en 1ère, 2ème, 3ème et 4ème année</p>
                            <div className="center-wrap">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`${process.env.REACT_APP_API_URL_UPLOADS}${annualCalendar.file}`}
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
                        {annualTerminalCalendar && (
                          <>
                            <p>Etudiants en 5ème année</p>
                            <div className="center-wrap">
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={`${process.env.REACT_APP_API_URL_UPLOADS}${annualTerminalCalendar.file}`}
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
                      <img className="img-fluid" src={require("../../assets/img/calendar.png")} alt="Calendrier" />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  )
}
