import React from "react"
import Container from "reactstrap/lib/Container"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"

export function Error({ error }) {
  return error ? (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">{error.statusCode || "Unrecognized error !"}</h1>
              <h4 className="pt-3"> {error.error || "Unrecognized error !"}</h4>
              <p className="text-muted float-left">Error(s): {error.message || "Error is not recognized"}</p>
            </div>
            <br />
            {/* <Button color="dark">Back to Homepage</Button> */}
          </Col>
        </Row>
      </Container>
      {/* <div>Error: {error.message || "Error is not recognized"}</div> */}
    </div>
  ) : null
}
