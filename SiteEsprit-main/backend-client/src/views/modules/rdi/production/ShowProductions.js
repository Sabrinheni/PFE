import React, { useEffect, useMemo, useState } from "react"
import { getUserFromToken } from "utils/getUserFromToken"
import { Production } from "./Production"
import { queryApi } from "utils/queryApi"
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
import { compareValues } from "utils/compareByField"
import { productionTypes } from "../../../../enums/entities.enum"
import { CustomOptions } from "views/components/custom"

export default function ShowProductions() {
  const [state, setState] = useState({ title: "", type: "" })
  const [productions, setProductions] = useState(null)
  const [error, setError] = useState(null)
  const history = useHistory()
  const [currentUser] = useState(getUserFromToken())
  const [order, setOrder] = useState({ orderBy: "desc", orderWith: "createdAt" })

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("productions")
      setError(err)
      setProductions(res)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  const filtered = useMemo(() => {
    const typeRegex = new RegExp(`${state.type}`, "gi")
    return productions
      ?.filter(p => !state.type || p.type.search(typeRegex) > -1)
      .sort(compareValues(order.orderWith, order.orderBy))
  }, [state, productions, order])

  function handleSubmit(e) {
    e.preventDefault()
  }

  function handleAddRedirect() {
    history.push("/production/add")
  }

  function handleInputChange(e) {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  function handleOrderChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value })
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
                        <Button color="primary">Type de Production:</Button>
                      </InputGroupAddon>
                      <Input type="select" value={state.type} name="type" onChange={handleInputChange}>
                        <option value="">Tous</option>
                        <CustomOptions options={productionTypes} />
                      </Input>
                    </InputGroup>
                  </Col>
                  <Col md="4" sm="4">
                    <InputGroup className="mt-2">
                      <InputGroupAddon addonType="prepend">
                        <Button color="primary">Ordonné Par:</Button>
                      </InputGroupAddon>
                      <Input type="select" value={order.orderWith} name="orderWith" onChange={handleOrderChange}>
                        <option value="createdAt">Date Création</option>
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
                {(currentUser.roles.includes("createProduction") || currentUser.roles.includes("admin")) && (
                  <FormGroup row>
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block color="success" outline onClick={handleAddRedirect}>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter une production
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
                {filtered && filtered?.length > 0 && (
                  <Col className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Description</th>
                          <th scope="col">Type</th>
                          <th scope="col">Année</th>
                          <th scope="col">à ESPRIT</th>
                          <th scope="col">Date d'ajout</th>
                          <th scope="col">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filtered.map(p => (
                          <Production
                            key={p._id}
                            currentUser={currentUser}
                            production={p}
                            setProductions={setProductions}
                          />
                        ))}
                      </tbody>
                    </table>
                  </Col>
                )}

                {filtered && filtered?.length === 0 && (
                  <Col md="4" sm="4">
                    <Alert color="warning">Pas de productions trouvées.</Alert>
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
