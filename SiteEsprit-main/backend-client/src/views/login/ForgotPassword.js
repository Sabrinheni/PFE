import React, { useState } from "react"

import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardGroup from "reactstrap/lib/CardGroup"
import Container from "reactstrap/lib/Container"
import Form from "reactstrap/lib/Form"
import Input from "reactstrap/lib/Input"
import InputGroup from "reactstrap/lib/InputGroup"
import InputGroupAddon from "reactstrap/lib/InputGroupAddon"
import InputGroupText from "reactstrap/lib/InputGroupText"
import Row from "reactstrap/lib/Row"
import Col from "reactstrap/lib/Col"
import Alert from "reactstrap/lib/Alert"

import { queryApi } from "../../utils/queryApi"

export default function ForgotPassword() {
  // const history = useHistory()
  const [state, setState] = useState({
    email: "",
    message: "",
    visible: false,
    showSuccess: false,
  })

  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function onDismiss() {
    setState({ ...state, visible: false })
  }
  function onSuccessDismiss() {
    setState({ ...state, showSuccess: false })
  }

  async function handleReset(e) {
    e.preventDefault()

    const [, err] = await queryApi("user/forgot-password/" + state.email, null, "POST")
    if (err) {
      setState({
        ...state,
        visible: true,
        message: err.message || err.errors.User,
      })
    } else {
      setState({
        ...state,
        showSuccess: true,
        message: "An email have been sent",
      })
    }
  }

  return (
    <div className="app flex-row align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col md="8">
            <CardGroup>
              <Card className="p-4">
                <CardBody>
                  <Form onSubmit={handleReset}>
                    <h1>Reset Password</h1>
                    <p className="text-muted">Enter your email</p>
                    {state.showSuccess ? (
                      <Row>
                        <Col>
                          <Alert color="primary" isOpen={state.showSuccess} toggle={onSuccessDismiss}>
                            {state.message}
                          </Alert>
                        </Col>
                      </Row>
                    ) : null}
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={onChange}
                        type="text"
                        placeholder="Email"
                        autoComplete="Email"
                        name="email"
                        value={state.email}
                      />
                    </InputGroup>
                    {state.visible ? (
                      <Row>
                        <Col>
                          <Alert color="danger" isOpen={state.visible} toggle={onDismiss}>
                            {state.message}
                          </Alert>
                        </Col>
                      </Row>
                    ) : null}
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4" name="connectButton">
                          Reset
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}>
                <CardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <p>Welcome To Esprit Admin Space , Please Sign up to access this area!</p>
                    {/* <Link to="/register">
                      <Button color="primary" className="mt-3" active tabIndex={-1}>
                        Register Now!
                      </Button>
                    </Link> */}
                  </div>
                </CardBody>
              </Card>
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
