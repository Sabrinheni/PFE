import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import { LazyImage } from "components/utils/LazyImage"
import LinkDuo from "components/utils/LinkDuo"
import React, { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import noimg from "../../assets/img/noimage.png"
import { queryApi } from "../../utils/queryApi"

import TeamMembers from "components/blog/teamMember"

export default function Single() {
  const { slug } = useParams()
  // get rdi by slug passed in params with hook
  const [rdi, setRdi] = useState(null)
  const [isResult, setIsResult] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("rdi/slug/" + slug)
      if (err) setError(err)
      else {
        setRdi(res)
        setIsResult(true)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [slug])

  if (error) return <></>

  if (!rdi && isResult)
    return (
      <>
        <NavBar />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row className="admission-banner flex-content-center">
              <Col md={12} xs={12} style={{ backgroundColor: "#cd2122", borderRadius: "15px", padding: "30px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    margin: "0",
                    textTransform: "uppercase",
                  }}>
                  L'équipe que vous cherchez n'existe pas! Utiliser la barre de recherche pour trouver ce que vous
                  chercher.
                </p>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  if (!rdi && !isResult)
    return (
      <>
        <NavBar />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row className="admission-banner flex-content-center">
              <Col md={12} xs={12} style={{ backgroundColor: "#cd2122", borderRadius: "15px", padding: "30px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    margin: "0",
                    textTransform: "uppercase",
                  }}>
                  En cours de chargement...
                </p>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )

  function imageExists(img, title) {
    if (img)
      return (
        <LazyImage
          isWebp={true}
          style={{ width: "100%" }}
          src={`${process.env.REACT_APP_API_URL_UPLOADS}${img}`}
          alt={title}
        />
      )
    return <img src={noimg} alt="empty" />
  }

  return (
    <>
      <MetaHelmet
        meta={{
          title: rdi.title,
          description: rdi.description,
          url: "https://esprit.tn/rdi/equipe/" + rdi.title,
          type: "article",
          image: rdi.image,
          keywords: "équipe rdi, rdi, équipe, esprit ," + rdi.title.split(" ").join(","),
        }}
      />
      <NavBar
        breadcrumb={{
          Title: <LinkDuo to={"/equipes"}>Nos équipes</LinkDuo>,
          Subtitle: rdi.title,
        }}
      />
      <section id="blog" className="our-blog extract main-blog" style={{ marginTop: "10%" }}>
        <h1 style={{ display: "none" }}>{rdi.title}</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-details">
                    <div className="blog-image blog-image-single">{imageExists(rdi.image, rdi.title)}</div>

                    <div className="blog-info" style={{ paddingLeft: "20px" }}>
                      <div className="title-meta">
                        <h2>{rdi.title}</h2>
                      </div>
                    </div>

                    <div className="post-content">
                      <p>{rdi.description}</p>
                      <h3>Domaines de recherche:</h3>
                      <ul className="services-box-list">
                        {rdi.researchInterests?.map((singleItem, index) => (
                          <li className="" key={index}>
                            <span className="services-box-list-text">{singleItem}</span>
                          </li>
                        ))}
                      </ul>
                      <h3>Liste des membres:</h3>
                      <TeamMembers members={rdi.members} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
