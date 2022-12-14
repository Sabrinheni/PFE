import React, { useState, useContext } from "react"
import { useHistory, useParams } from "react-router-dom"

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
import { UserContext } from "../../utils/UserContext"
import { queryApi } from "../../utils/queryApi"
import { getUserFromToken } from "../../utils/getUserFromToken"

export default function ResetPassword() {
  const token = useParams()
  const [, setUser] = useContext(UserContext)

  const history = useHistory()

  const [state, setState] = useState({
    password: "",
    message: "",
    visible: false,
  })

  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function onDismiss() {
    setState({ ...state, visible: false })
  }

  async function handleLogin(e) {
    e.preventDefault()
    const userData = {
      token: token.token,
      password: state.password,
    }

    const [res, err] = await queryApi("user/reset-password", userData, "POST")
    if (err) {
      setState({
        ...state,
        visible: true,
        message: err.message || err.errors.User,
      })
    } else {
      setUser(getUserFromToken(res.token))
      history.replace("/login")
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
                  <Form onSubmit={handleLogin}>
                    <h1>Login</h1>

                    <p className="text-muted">Change your password</p>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        onChange={onChange}
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name="password"
                        value={state.password}
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
                          Change
                        </Button>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
              </Card>
              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}>
                <CardBody className="text-center">
                  <div>
                    <h2>Change your password</h2>
                    <p>Welcome To Esprit Admin Space , Please Sign up to access this area!</p>
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
