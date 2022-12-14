import React from "react"
import { Col, Row } from "react-bootstrap"

export default function PressNoFile({ title, pressData }) {
  //Press loop start
  const Allpress = pressData.map((press, index) => (
    <Row style={{ marginBottom: "60px" }}>
      <Col md={12} xs={12}>
        <div>
          <span className="rectangle-span">
            <span>{title}</span>
          </span>
          <h4 style={{ marginTop: "10px" }} className="circle-title">
            {press.title}
          </h4>
        </div>
        <p>{press.description}</p>
      </Col>
    </Row>
  ))
  //Team loop END

  return <>{Allpress}</>
}
