import React, { useEffect, useMemo, useState } from "react"
import { useHistory } from "react-router-dom"
import Alert from "reactstrap/lib/Alert"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Form from "reactstrap/lib/Form"
import FormGroup from "reactstrap/lib/FormGroup"
import Input from "reactstrap/lib/Input"
import InputGroup from "reactstrap/lib/InputGroup"
import InputGroupAddon from "reactstrap/lib/InputGroupAddon"
import Row from "reactstrap/lib/Row"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { getUserFromToken } from "../../../utils/getUserFromToken"
import { queryApi } from "../../../utils/queryApi"
import { User } from "./User"

export default function ShowUsers() {
  const [state, setState] = useState({ username: "", email: "" })
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)
  const history = useHistory()
  const [user] = useState(getUserFromToken())
  // get all users
  useEffect(() => {
    async function fetchData() {
      let url = "users"
      const [res, err] = await queryApi(url)
      setError(err)
      setUsers(res)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  const filtered = useMemo(() => {
    const usernameRegex = new RegExp(`${state.username}`, "gi")
    const emailRegex = new RegExp(`${state.email}`, "gi")

    return users?.filter(
      p =>
        (!state.username || p.username.search(usernameRegex) > -1) && (!state.email || p.email.search(emailRegex) > -1)
    )
  }, [state, users])

  function handleAddRedirect() {
    history.push("/user/add")
  }

  function handleInputChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  if (error) return <Error error={error} />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <Form action="" method="post" className="form-horizontal" onSubmit={handleSubmit}>
                <FormGroup row>
                  <Col md="4" sm="4">
                    <InputGroup className="mt-2">
                      <InputGroupAddon addonType="prepend">
                        <Button color="primary">Recherche:</Button>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        id="input1-group2"
                        name="username"
                        placeholder="par nom d'utilisateur"
                        value={state.username}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </Col>
                  <Col md="4" sm="4">
                    <InputGroup className="mt-2">
                      <InputGroupAddon addonType="prepend">
                        <Button color="primary">Type:</Button>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        id="input1-group2"
                        name="email"
                        placeholder="par email"
                        value={state.email}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                {user.roles.includes("admin") && (
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block color="success" outline onClick={handleAddRedirect}>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter un utilisateur
                        </Button>
                      </InputGroup>
                    </Col>
                  </FormGroup>
                )}
              </Form>
            </CardHeader>
            <CardBody>
              {!filtered && <Loading />}
              <Row>
                {filtered &&
                  filtered?.length > 0 &&
                  filtered.map(p => <User key={p._id} user={p} setUsers={setUsers} />)}

                {filtered && filtered?.length === 0 && (
                  <Col md="4" sm="4">
                    <Alert color="warning">Pas d'utilisateurs trouvés.</Alert>
                  </Col>
                )}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
