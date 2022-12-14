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
import { timeTableTitles } from "../../../enums/entities.enum"
import { getUserFromToken } from "../../../utils/getUserFromToken"
import { queryApi } from "../../../utils/queryApi"
import { TimeTable } from "./TimeTable"
import { compareValues } from "../../../utils/compareByField"

export default function ShowTimeTable({ archived = false }) {
  const [state, setState] = useState({ title: "", type: "" })
  const [timeTables, setTimeTables] = useState(null)
  const [error, setError] = useState(null)
  const history = useHistory()
  const [currentUser] = useState(getUserFromToken())
  const [order, setOrder] = useState({ orderBy: "desc", orderWith: "createdAt" })

  // get all timeTables / archived
  useEffect(() => {
    async function fetchData() {
      let url = "timeTables"
      if (archived) url = "timeTables/archived"
      const [res, err] = await queryApi(url)
      setError(err)
      setTimeTables(res)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  const filtered = useMemo(() => {
    // const titleRegex = new RegExp(`${state.title}`, "gi")
    const typeRegex = new RegExp(`${state.type}`, "gi")

    return timeTables
      ?.filter(p => !state.title || p.title.search(typeRegex) > -1)
      .sort(compareValues(order.orderWith, order.orderBy))
  }, [state, timeTables, order])

  function handleAddRedirect() {
    history.push("/timeTable/add")
  }

  function handleTimeTablesRedirect() {
    // order is IMPORTANT here !!! (and "else" too !)
    if (archived) history.push("/timeTable")
    else history.push("/timeTable/archived")
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
                        <Button color="primary">Type:</Button>
                      </InputGroupAddon>
                      <Input type="select" value={state.title} name="type" onChange={handleInputChange}>
                        <option value="">Tous</option>
                        <CustomOptions options={timeTableTitles} />
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
                <FormGroup row>
                  {(currentUser.roles.includes("createTimeTable") || currentUser.roles.includes("admin")) && (
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block color="success" outline onClick={handleAddRedirect}>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter un calendrier
                        </Button>
                      </InputGroup>
                    </Col>
                  )}
                  {(currentUser.roles.includes("handleArchivedTimeTable") || currentUser.roles.includes("admin")) && (
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block color="info" onClick={handleTimeTablesRedirect}>
                          <i className="fa fa-eye" />
                          &nbsp; Voir Calendriers archivés
                          {archived ? " Non Archivés" : " Archivés"}
                        </Button>
                      </InputGroup>
                    </Col>
                  )}
                </FormGroup>
              </Form>
            </CardHeader>
            <CardBody>
              {!filtered && <Loading />}
              <Row>
                {filtered &&
                  filtered?.length > 0 &&
                  filtered.map(p => (
                    <TimeTable key={p._id} currentUser={currentUser} timeTable={p} setTimeTables={setTimeTables} />
                  ))}

                {filtered && filtered?.length === 0 && (
                  <Col md="4" sm="4">
                    <Alert color="warning">Pas d'articles trouvés.</Alert>
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
