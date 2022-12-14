import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import PropTypes from "prop-types"
import React from "react"
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import carte from "../../assets/img/carte-du-monde.png"
import noimg from "../../assets/img/noimage.png"
import { useApi } from "../../hooks/useApi"
import { Partenariat as meta } from "./InternationalDictionary"

export default function Partenariats() {
  const [partnerships] = useApi( "partnerships" )

  function imageExists(img, title) {
    if (img)
      return < img className="image-boxes-img" src={`${process.env.REACT_APP_API_URL_UPLOADS}${img}`} alt={title} />
    return <img src={noimg} alt="empty" />
  }
  // eslint-disable-next-line
  const academic =
    partnerships &&
    partnerships.map(function (partnership, idx) {
      if (partnership.type === "academic") {
        return (
          <Col key={idx + "acad"} lg={3} md={4} sm={6} xs={12}>
            <div className="partnership-box">
              <a
                href={partnership.url}
                className="hoverBorder image-boxes-link"
                target="_blank"
                rel="noopener noreferrer">
                <div className="image-boxes-img-wrapper">{imageExists(partnership.image, partnership.title)}</div>
              </a>
              <h3 className="m_title m_title_ext text-custom imgboxes-title image-boxes-title">
                <p style={{ wordBreak: "break-word" }}>{ partnership.title }</p>
              </h3>
              <div className="image-boxes-text">{partnership.description && partnership.description}</div>
            </div>
          </Col>
        )
      }
      return null
    })
  // eslint-disable-next-line
  const technological =
    partnerships &&
    partnerships.map(function (partnership, idx) {
      if (partnership.type === "technological") {
        return (
          <Col key={idx + "tech"} lg={3} md={4} sm={6}>
            <div className="partnership-box">
              <a
                href={partnership.url}
                className="hoverBorder image-boxes-link"
                target="_blank"
                rel="noopener noreferrer">
                <div className="image-boxes-img-wrapper">{imageExists(partnership.image)}</div>
              </a>
              <h3 className="m_title m_title_ext text-custom imgboxes-title image-boxes-title">
                <p style={{ wordBreak: "break-word" }}>{partnership.title}</p>
              </h3>
              <div className="image-boxes-text">{partnership.description && partnership.description}</div>
            </div>
          </Col>
        )
      }
      return null
    })
  // eslint-disable-next-line
  const industrial =
  partnerships &&
  partnerships.map(function (partnership, idx) {
    if (partnership.type === "industrial") {
      return (
        <Col key={idx + "indus"} lg={3} md={4} sm={6}>
          <div className="partnership-box">
            <a
              href={partnership.url}
              className="hoverBorder image-boxes-link"
              target="_blank"
              rel="noopener noreferrer">
              <div className="image-boxes-img-wrapper">{imageExists(partnership.image)}</div>
            </a>
            <h3 className="m_title m_title_ext text-custom imgboxes-title image-boxes-title">
              <p style={{ wordBreak: "break-word" }}>{partnership.title}</p>
            </h3>
            <div className="image-boxes-text">{partnership.description && partnership.description}</div>
          </div>
        </Col>
      )
    }
    return null
  })
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
          <Row>
            <Col>
              <h1>Partenariats</h1>
              <CustomHrRed />
              <br></br>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                Dès la création d’ESPRIT en 2003, la coopération avec des partenaires internationaux était une priorité
                stratégique et absolue pour le développement de l’école. Cette priorité représente réellement une
                obligation et non plus une option.
              </p>
              <p>
                En effet, l’appartenance et l’intégration d’ESPRIT dans un tissu dynamique de partenariats et de
                coopérations est une condition sinequanon pour assurer des formations d’ingénieurs de qualité et surtout
                en harmonie avec les pratiques internationales dans ce domaine.
              </p>
              <p>
                Etant donné que notre école a démarré depuis plus d’une décennie, la mise en œuvre de cet ancrage
                européen et international s’est fait progressivement mais surement pour atteindre une étape de maturité
                dans les toutes prochaines années.
              </p>
            </Col>
          </Row>
          <Row style={{ display: "flex", textAlign: "center", placeContent: "center" }}>
            <Col md={6} xs={12}>
              <img src={carte} alt="Carte du monde esprit" style={{ width: "100%" }}></img>
            </Col>
          </Row>
          <Row>
            <Col>
              <ListGroup className="sticky-list">
                <ListGroupItem tag="a" href="#academic" action>
                  Partenariats Académiques
                </ListGroupItem>
                <ListGroupItem tag="a" href="#technological" action>
                  Partenariats Technologiques
                </ListGroupItem>
                <ListGroupItem tag="a" href="#industrial" action>
                  Partenariats Industriels
                </ListGroupItem>
              </ListGroup>
            </Col>
            <Col md={10} xs={12}>
              <div id="academic" className="anchor"></div>

              <Row className="margin-top-60">
                <Col>
                  <h1>Partenariats Académiques</h1>
                  <CustomHrRed />
                </Col>
              </Row>

              {partnerships && (
                <Row className="margin-top-60" style={{ display: "flex", flexWrap: "wrap" }}>
                  {academic}
                </Row>
              )}
              <div id="technological" className="anchor"></div>

              <Row>
                <Col>
                  <h1>Partenariats Technologiques</h1>
                  <CustomHrRed />
                </Col>
              </Row>
              {partnerships && (
                <Row className="margin-top-60" style={{ display: "flex", flexWrap: "wrap" }}>
                  {technological}
                </Row>
              )}
              <div id="industrial" className="anchor"></div>
              <Row>
                <Col>
                  <h1>Partenariats Industriels</h1>
                  <CustomHrRed />
                </Col>
              </Row>
              {partnerships && (
                <Row className="margin-top-60" style={{ display: "flex", flexWrap: "wrap" }}>
                  {industrial}
                </Row>
              )}
            </Col>
          </Row>
        </div>
      </section>
    </>
  )
}

//Props Types
Partenariats.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}
