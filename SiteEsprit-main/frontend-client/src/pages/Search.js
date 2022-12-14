import React from "react"
import { Col, Row } from "react-bootstrap"
import NavBar from "components/layout/NavBar"
import Search from "components/search/SearchResult"
import { useParams } from "react-router-dom"

export default function SearchPage() {
  const { keyword } = useParams()
  return (
    <>
      <NavBar />
      <section className="our-blog extract main-blog dynamic-margin-simple">
        <div className="container">
          <Row>
            <Col>
              <h1>Recherche:</h1>
              <hr
                style={{
                  color: "#ed1c24",
                  borderTop: "2px solid",
                  float: "left",
                  width: "100px",
                }}></hr>
            </Col>
          </Row>
          <Search keyword={keyword} />
        </div>
      </section>
    </>
  )
}
