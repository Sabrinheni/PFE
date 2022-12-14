import React from "react"
import { useHistory } from "react-router-dom"
import Button from "reactstrap/lib/Button"
import Col from "reactstrap/lib/Col"
import Container from "reactstrap/lib/Container"
import Row from "reactstrap/lib/Row"

export default function Page404() {
  const history = useHistory()

  function redirectToHomepage() {
    history.push("/dashboard")
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="6">
            <div className="clearfix">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You're lost.</h4>
              <p className="text-muted float-left">The page you are looking for was not found.</p>
            </div>
            {/* <InputGroup className="input-prepend">
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <i className="fa fa-search" />
                </InputGroupText>
              </InputGroupAddon>
              <Input size="16" type="text" placeholder="What are you looking for?" />
              <InputGroupAddon addonType="append">
                <Button color="info">Search</Button>
              </InputGroupAddon>
            </InputGroup> */}
            <br />
            <Button onClick={redirectToHomepage} color="dark">
              Back to Homepage
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
