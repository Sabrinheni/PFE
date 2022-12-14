import React, { useEffect, useState } from "react"
import { queryApi } from "../../utils/queryApi"
import LinkDuo from "../utils/LinkDuo"
import { Col, Row } from "react-bootstrap"

export default function SearchResults({ keyword }) {
  const [results, setResults] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const [res] = await queryApi("search?keyword=" + keyword)
      setResults(res)
    }
    fetchData()
  }, [keyword])

  if (!results) return <></>
  //BlogPost loop start

  function renderResultText(desc, sub) {
    let text = ""
    text = desc || sub
    if (text?.length > 120) {
      text = text?.substring(0, 120) + "..."
    }
    return text
  }

  const resultsData = results.map((ev, idx) => (
    <Col md={4} xs={12} key={idx}>
      <LinkDuo to={ev.url}>
        <div className="blog-item">
          <div className="search-info">
            <div className="title-meta">
              <h2 className="title-meta-search">{ev.title}</h2>
            </div>
          </div>
          <div className="post-content" style={{ padding: "20px 10px" }}>
            <p style={{ color: "#848484" }}>{renderResultText(ev.description, ev.subtitle)}</p>
          </div>
        </div>
      </LinkDuo>
    </Col>
  ))

  //BlogPost loop END
  return (
    <>
      <div className="container">
        <Row>
          <Col md={12} style={{ display: "flex", flexWrap: "wrap" }}>
            {resultsData.length > 0 ? (
              resultsData
            ) : (
              <Row>
                <Col className="space-items">
                  <p>
                    <strong>Pas de résultats trouvé.</strong>
                  </p>
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </div>
    </>
  )
}
