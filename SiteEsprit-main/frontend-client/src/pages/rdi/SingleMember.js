import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import { LazyImage } from "components/utils/LazyImage"
import LinkDuo from "components/utils/LinkDuo"
import React, { useEffect, useState } from "react"
import { Col, Container, Row, Table } from "react-bootstrap"
import { useParams } from "react-router-dom"
import noimg from "../../assets/img/noimage.png"
import { queryApi } from "../../utils/queryApi"

export default function Single() {
  const { slug } = useParams()
  // get member by slug passed in params with hook
  const [member, setMember] = useState(null)
  const [productions, setProductions] = useState(null)
  const [isResult, setIsResult] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("member/slug/" + slug)
      if (err) setError(err)
      else {
        console.log(res)
        setMember(res[0])
        setProductions(res[1])
        setIsResult(true)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [slug])

  if (error) return <></>

  if (!member && isResult)
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
                  Le membre que vous cherchez n'existe pas! Utiliser la barre de recherche pour trouver ce que vous
                  chercher.
                </p>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  if (!member && !isResult)
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
          title: member.title + " " + member.firstName + " " + member.lastName,
          description: member.description,
          url: "https://esprit.tn/" + member.url,
          type: "article",
          image: member.image,
          keywords:
            "équipe rdi, rdi, équipe, esprit ," +
            member.title.split(" ").join(",") +
            "," +
            member.firstName +
            "," +
            member.lastName,
        }}
      />
      <NavBar
        breadcrumb={{
          Title: <LinkDuo to={"/equipes"}>Nos équipes</LinkDuo>,
          Subtitle: member.title + " " + member.firstName + " " + member.lastName,
        }}
      />
      <section id="blog" className="our-blog extract main-blog" style={{ marginTop: "10%" }}>
        <h1 style={{ display: "none" }}>{member.title}</h1>
        <Container className="container">
          <Row>
            <Col>
              <div className="blog-details">
                <Row>
                  <Col md={3} xs={12} style={{ alignSelf: "center" }}>
                    <div className="blog-image blog-image-single">{imageExists(member.image, member.title)}</div>
                  </Col>
                  <Col md={9} xs={12}>
                    <div className="blog-info" style={{ paddingLeft: "20px" }}>
                      <div className="title-meta">
                        <h2>
                          {member.title} {member.firstName} {member.lastName}
                        </h2>
                      </div>
                    </div>
                    <div className="post-content">
                      <p>{member.description}</p>
                    </div>
                  </Col>
                </Row>

                <div className="post-content">
                  <h3>Domaines d'enseignement:</h3>
                  <ul className="services-box-list">
                    {member.teachingAreas?.map((singleItem, index) => (
                      <li className="" key={index}>
                        <span className="services-box-list-text">{singleItem}</span>
                      </li>
                    ))}
                  </ul>
                  <h3>Domaines de recherche:</h3>
                  <ul className="services-box-list">
                    {member.researchInterests?.map((singleItem, index) => (
                      <li className="" key={index}>
                        <span className="services-box-list-text">{singleItem}</span>
                      </li>
                    ))}
                  </ul>
                  <h3>Liens externes:</h3>
                  <ul className="services-box-list">
                    {member.externalLinks?.map((singleItem, index) => (
                      <li className="" key={index}>
                        <span className="services-box-list-text">
                          <LinkDuo to={singleItem}>{singleItem}</LinkDuo>
                        </span>
                      </li>
                    ))}
                  </ul>
                  <h3>Liste des productions:</h3>
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Production</th>
                        <th>Année</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productions?.map((production, index) => (
                        <tr key={index}>
                          <td>
                            <b>
                              {production.members.map(member => {
                                if (member.lastName)
                                  return (
                                    <>
                                      <LinkDuo to={"/rdi/membre/" + member.slug}>
                                        {member.firstName + " " + member.lastName}
                                      </LinkDuo>
                                      {", "}
                                    </>
                                  )
                                return (
                                  <>
                                    {member} {", "}{" "}
                                  </>
                                )
                              })}
                            </b>
                            {production.description}
                          </td>
                          <td>{production.session}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
