import React, { useState, useEffect, useContext } from "react"
import { Link, useHistory } from "react-router-dom"

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

export default function Login() {
  const [user, setUser] = useContext(UserContext)
  const history = useHistory()

  const [state, setState] = useState({
    email: "",
    password: "",
    message: "",
    visible: false,
  })

  // Each time the user is changed (to valid one!) this effect run
  useEffect(
    () => {
      if (user && localStorage.token) history.replace("/dashboard")
    },
    // eslint-disable-next-line
    [user]
  )

  function onChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function onDismiss() {
    setState({ ...state, visible: false })
  }

  async function handleLogin(e) {
    e.preventDefault()
    const userData = {
      email: state.email,
      password: state.password,
    }

    const [res, err] = await queryApi("user/login", userData, "POST")
    if (err) {
      setState({
        ...state,
        visible: true,
        message: err.message || err.errors.User,
      })
    } else setUser(getUserFromToken(res.token))
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
                    <p className="text-muted">Sign In to your account</p>
                    {/* <p className="text-muted">Login: / Password: test</p> */}

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
                          Login
                        </Button>
                      </Col>
                    </Row>
                  </Form>

                  <Link to="/forgot-password" color="link" className="px-0">
                    Forgot password?
                  </Link>
                </CardBody>
              </Card>
              <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: "44%" }}>
                <CardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
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
