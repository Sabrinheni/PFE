import React, { Component } from "react"
import Alert from "reactstrap/lib/Alert"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardFooter from "reactstrap/lib/CardFooter"
import Col from "reactstrap/lib/Col"
import Container from "reactstrap/lib/Container"
import Form from "reactstrap/lib/Form"
import Input from "reactstrap/lib/Input"
import InputGroup from "reactstrap/lib/InputGroup"
import InputGroupAddon from "reactstrap/lib/InputGroupAddon"
import InputGroupText from "reactstrap/lib/InputGroupText"
import Row from "reactstrap/lib/Row"

export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      passwordRepeat: "",
      message: "",
      visible: false,
      success: true,
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        message: nextProps.errors.message,
        visible: nextProps.errors.visible,
        success: nextProps.errors.success,
      })
    }
  }
  onSubmit = e => {
    e.preventDefault()
    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    }
    this.props.registerUser(userData)
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onDismiss = () => {
    this.setState({ visible: false })
  }

  render() {
    const { message, visible, success } = this.state

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form onSubmit={e => this.onSubmit(e)}>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="Username"
                        autoComplete="username"
                        name="username"
                        onChange={this.onChange}
                        value={this.state.username}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="email"
                        placeholder="Email"
                        autoComplete="email"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Password"
                        autoComplete="new-password"
                        name="password"
                        onChange={this.onChange}
                        value={this.state.password}
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="Repeat password"
                        autoComplete="new-password"
                        name="passwordRepeat"
                        onChange={this.onChange}
                        value={this.state.passwordRepeat}
                      />
                    </InputGroup>
                    <Button color="success" block>
                      Create Account
                    </Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  {visible ? (
                    <Row>
                      <Col>
                        <Alert color={success ? "success" : "danger"} isOpen={visible} toggle={this.onDismiss}>
                          {message}
                        </Alert>
                      </Col>
                    </Row>
                  ) : null}
                  <Row>
                    <Col xs="12" sm="6">
                      <Button className="btn-facebook mb-1" block>
                        <span>facebook</span>
                      </Button>
                    </Col>
                    <Col xs="12" sm="6">
                      <Button className="btn-twitter mb-1" block>
                        <span>twitter</span>
                      </Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
