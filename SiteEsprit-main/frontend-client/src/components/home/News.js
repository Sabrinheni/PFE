import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import ContentLoader from "react-content-loader"
import { Link } from "react-router-dom"
import { useApi } from "../../hooks/useApi"
import { compareValues } from "../utils/compareByField"
import SingleNews from "./SingleNews"

export default function News() {
  const [events] = useApi("events/esprit/4/0")

  if (!events || events[0].length === 0)
    return (
      <>
        <section id="blog" className="our-blog">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="section-title">
                    <h2>Actualités</h2>
                    <p>Restez au courant de nos actualités et événements.</p>
                    <span className="section-title-bg">Actualités</span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 col-lg-6">
                <ContentLoader viewBox="0 0 500 280" height={280} width={500} speed={3}>
                  <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                  <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                  <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                  <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                </ContentLoader>
              </div>
              <div className="col-md-6 col-lg-6">
                <ContentLoader viewBox="0 0 500 280" height={280} width={500} speed={3}>
                  <rect x="3" y="3" rx="10" ry="10" width="300" height="180" />
                  <rect x="6" y="190" rx="0" ry="0" width="292" height="20" />
                  <rect x="4" y="215" rx="0" ry="0" width="239" height="20" />
                  <rect x="4" y="242" rx="0" ry="0" width="274" height="20" />
                </ContentLoader>
              </div>

              <div className="col-lg-12 col-md-12 all-post">
                <div className="center-wrap">
                  <Link to="/vie-etudiante/vie-campus/evenements-challenges" className="btn-a">
                    <div className="button">
                      Actualités <i className="icofont-long-arrow-right" />
                      <div className="mask"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )

  const eventsData = events[0]
    .sort(compareValues("createdAt", "desc"))
    .map((ev, key) => <SingleNews key={key} ev={ev} />)

  return (
    <>
      <section id="blog" className="our-blog">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>Actualités</h2>
                  <p>Restez au courant de nos actualités et événements.</p>
                  <span className="section-title-bg">Actualités</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row">
            {eventsData}
            <div className="col-lg-12 col-md-12 all-post">
              <div className="center-wrap">
                <Link to="/vie-etudiante/vie-campus/actualites" className="btn-a">
                  <div className="button">
                    Actualités <i className="icofont-long-arrow-right" />
                    <div className="mask"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
