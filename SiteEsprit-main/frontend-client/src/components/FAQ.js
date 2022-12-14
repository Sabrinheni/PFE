import React, { useEffect, useState } from "react"
import { Accordion, AccordionItem } from "react-sanfona"
import { queryApi } from "../utils/queryApi"
import { Col, Row } from "react-bootstrap"
import LinkDuo from "./utils/LinkDuo"

export default function FAQ() {
  const [faqs, setFaqs] = useState(null)
  const [isResult, setIsResult] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("faqs")
      if (err) setError(err)
      else {
        setFaqs(res)
        setIsResult(true)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  if (error) return <></>

  if (!faqs && !isResult)
    return (
      <>
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
      </>
    )

  if (faqs.length === 0 && isResult)
    return (
      <>
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
              La page FAQ sera disponible bientôt.
            </p>
          </Col>
        </Row>
      </>
    )

  return (
    <React.Fragment>
      <section className="faq ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h2>{defaultProps.sectionTitle}</h2>
                <p>{defaultProps.sectionDescription}</p>
                <span className="section-title-bg">{defaultProps.SectionbgTitle}</span>
              </div>
            </div>
          </div>
          <div className="faq-content">
            <div className="row">
              <div className="col-lg-4">
                <LinkDuo to={defaultProps.ContentLink}>
                  <div className="content-box color-effect-1">
                    <h3>{defaultProps.ContentTitle}</h3>

                    <div className="box-icon-wrap box-icon-effect-1 box-icon-effect-1a">
                      <div className="box-icon">
                        <i className="icofont-share-alt" />
                      </div>
                    </div>

                    <p>{defaultProps.ContentDescription}</p>
                  </div>
                </LinkDuo>
              </div>

              <div className="col-lg-8">
                <Accordion rootTag="div" className="panel-group">
                  {faqs &&
                    faqs.map(item => {
                      return (
                        <AccordionItem
                          key={item}
                          title={item.question}
                          expanded={true}
                          expandedClassName=""
                          className="panel-title panel panel-default"
                          titleTag="a"
                          titleClassName="">
                          <div>
                            <div className="panel-body">
                              <div dangerouslySetInnerHTML={{ __html: item.response }} />
                            </div>
                          </div>
                        </AccordionItem>
                      )
                    })}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

//Default Props
const defaultProps = {
  SectionbgTitle: "FAQ",
  sectionTitle: "Foire Aux Questions",
  sectionDescription: "Vous trouverez ici les réponses à vos questions concernant l'admission.",

  ContentTitle: "Vous avez encore des questions?",
  ContentDescription: "Contactez-nous.",
  ContentLink: "mailto:zied.saidi@esprit.tn",
}
