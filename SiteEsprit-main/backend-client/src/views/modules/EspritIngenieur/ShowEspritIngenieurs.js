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
import { CustomOptions } from "views/components/custom"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { EspritIngenieurTypes } from "../../../enums/entities.enum"
import { getUserFromToken } from "../../../utils/getUserFromToken"
import { queryApi } from "../../../utils/queryApi"
import { EspritIngenieur } from "./EspritIngenieur"
import { compareValues } from "../../../utils/compareByField"

export default function ShowEspritIngenieurs() {
  const [state, setState] = useState({ title: "", type: "" })
  const [EspritIngenieurs, setEspritIngenieurs] = useState(null)
  const [error, setError] = useState(null)
  const history = useHistory()
  const [currentUser] = useState(getUserFromToken())
  const [order, setOrder] = useState({ orderBy: "desc", orderWith: "createdAt" })

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("EspritIngenieurs")
      setError(err)
      setEspritIngenieurs(res)
    }
    fetchData()
  }, [])

  const filtered = useMemo(() => {
    const titleRegex = new RegExp(`${state.title}`, "gi")
    const typeRegex = new RegExp(`${state.type}`, "gi")

    return EspritIngenieurs
      ?.filter(c => (!state.title || c.title.search(titleRegex) > -1) && (!state.type || c.type.search(typeRegex) > -1))
      .sort(compareValues(order.orderWith, order.orderBy))
  }, [state, EspritIngenieurs, order])

  function handleAddRedirect() {
    history.push("/EspritIngenieur/add")
  }

  function handleInputChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleOrderChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value })
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
                        name="title"
                        placeholder="par titre"
                        value={state.title}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </Col>
                  <Col md="4" sm="4">
                    <InputGroup className="mt-2">
                      <InputGroupAddon addonType="prepend">
                        <Button color="primary">Type de Esprit Ingenieur:</Button>
                      </InputGroupAddon>
                      <Input type="select" value={state.type} name="type" onChange={handleInputChange}>
                        <option value="">Tous</option>
                        <CustomOptions options={EspritIngenieurTypes} />
                      </Input>
                    </InputGroup>
                  </Col>
                  <Col md="4" sm="4">
                    <InputGroup className="mt-2">
                      <InputGroupAddon addonType="prepend">
                        <Button color="primary">Ordonn?? Par:</Button>
                      </InputGroupAddon>
                      <Input type="select" value={order.orderWith} name="orderWith" onChange={handleOrderChange}>
                        <option value="createdAt">Date Cr??ation</option>
                        <option value="lastUpdateAt">Date Modification</option>
                      </Input>
                    </InputGroup>
                    <InputGroup className="mt-2">
                      <InputGroupAddon addonType="prepend">
                        <Button color="primary">Tri:</Button>
                      </InputGroupAddon>
                      <Input type="select" value={order.orderBy} name="orderBy" onChange={handleOrderChange}>
                        <option value="desc">Descendant</option>
                        <option value="asc">Ascendant</option>
                      </Input>
                    </InputGroup>
                  </Col>
                </FormGroup>
                {(currentUser.roles.includes("createEspritIngenieur") || currentUser.roles.includes("admin")) && (
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block color="success" outline onClick={handleAddRedirect}>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter un Element
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
                  filtered.map(c => (
                    <EspritIngenieur
                      key={c._id}
                      currentUser={currentUser}
                      EspritIngenieur={c}
                      setEspritIngenieurs={setEspritIngenieurs}
                    />
                  ))}

                {filtered && filtered?.length === 0 && (
                  <Col md="4" sm="4">
                    <Alert color="warning">Pas d'Elements trouv??s.</Alert>
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
