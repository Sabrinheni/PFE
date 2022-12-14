import NavBar from "./NavBar"
import MetaHelmet from "components/MetaHelmet"
import React from "react"
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import "./Intl.css"
import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import { InternationalDegreeProgram as meta } from "./InternationalDegreeDictionary"
import carte from "../../assets/img/carte-du-monde.png"
import noimg from "../../assets/img/noimage.png"
import { useApi } from "../../hooks/useApi"

export default function Partners() {
  const [partnerships] = useApi("partnerships")

  function imageExists(img, title) {
    if (img)
      return <img className="image-boxes-img" src={`${process.env.REACT_APP_API_URL_UPLOADS}${img}`} alt={title} />
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
  const inudstrial =
    partnerships &&
    partnerships.map(function (partnership, idx) {
      if (partnership.type === "industrial") {
        return (
          <Col key={idx + "ind"} lg={3} md={4} sm={6}>
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
      <MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
        <div className="container" style={{ position: "relative", height: "100%", minHeight: "100vh" }}>
          <div>
            <center>
              <Row>
                <Col md={12} xs={12}>
                  <h1>International Degree Program :</h1>
                </Col>
              </Row>
            </center>
          </div>
          <table class="lignesEspacees">
            <div className="container" style={{ position: "relative", height: "100%", minHeight: "100vh" }}>
              <tr>
                <td>
                  <div class="vertical-menu">
                    <a href="/AboutEsprit">About ESPRIT</a>
                    <a href="/StudyProgram">Study Program</a>
                    <a href="/AboutFaculty">About Faculty</a>
                    <a href="/Partners" class="active">
                      Partners
                    </a>
                    <a href="/Admissions">Admissions</a>

                    <a href="/Contact-information">Contact information</a>

                    <a href="#">Frequently Asked Questions (FAQ)</a>
                  </div>
                </td>
                &nbsp;
                <td>
                  <div className="container">
                    <Row>
                      <Col>
                        <p>
                          Since its foundation in 2003, Esprit has given cooperation with international partners a high
                          priority, for the development of the University.
                        </p>
                        <p>
                          This priority became an engagement and not merely an option. Indeed, the membership of ESPRIT
                          in a dynamic network of partnerships and cooperation is a sine qua non to ensure quality
                          engineering education and especially in keeping with international practices and norms in this
                          field.
                        </p>
                        <p>
                          {" "}
                          Given that our school started more than a decade ago, the implementation of this European and
                          international foundation has been done gradually but surely to reach a maturity stage in the
                          next few years.
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
                            Academic Partnerships
                          </ListGroupItem>
                          <ListGroupItem tag="a" href="#technological" action>
                            Technological Partnerships
                          </ListGroupItem>
                          <ListGroupItem tag="a" href="#industrial" action>
                            Industrial Partnerships
                          </ListGroupItem>
                        </ListGroup>
                      </Col>
                      <Col md={10} xs={12}>
                        <div id="academic" className="anchor"></div>

                        <Row>
                          <Col>
                            <h1> Academic Partnerships</h1>
                            <CustomHrRed />
                          </Col>
                        </Row>

                        {partnerships && <Row>{academic}</Row>}
                        <div id="technological" className="anchor"></div>

                        <Row>
                          <Col>
                            <h1>Technological Partnerships</h1>
                            <CustomHrRed />
                          </Col>
                        </Row>
                        {partnerships && <Row>{technological}</Row>}
                        <div id="industrial" className="anchor"></div>
                        <Row>
                          <Col>
                            <h1>Industrial Partnerships</h1>
                            <CustomHrRed />
                          </Col>
                        </Row>
                        {partnerships && <Row>{inudstrial}</Row>}
                      </Col>
                    </Row>
                  </div>
                </td>
              </tr>
            </div>
          </table>
        </div>
      </section>
    </>
  )
}
const breadcrumb = {
  Title: "International Degree Program",
}
