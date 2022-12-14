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
import { eventTypes } from "../../../enums/entities.enum"
import { getUserFromToken } from "../../../utils/getUserFromToken"
import { queryApi } from "../../../utils/queryApi"
import { Event } from "./Event"
import { compareValues } from "../../../utils/compareByField"

export default function ShowEvent({ archived = false }) {
  const [state, setState] = useState({ title: "", type: "" })
  const [events, setEvents] = useState(null)
  const [error, setError] = useState(null)
  const history = useHistory()
  const [currentUser] = useState(getUserFromToken())
  const [order, setOrder] = useState({ orderBy: "desc", orderWith: "createdAt" })

  // get all events / archived
  useEffect(() => {
    async function fetchData() {
      let url = "events"
      if (currentUser.rdi) {
        url = "events/rdi"
      } else if (currentUser.prepa) {
        url = "events/prepa"
      } else if (currentUser.kindy) {
        url = "events/kindy"
      } else {
        url = "events/esprit"
      }
      if (archived) {
        url = url.concat("/archived")
      }
      const [res, err] = await queryApi(url)
      /**
       * To change later : Handle club filtring in backend
       *  **/
      // if (!currentUser.roles.includes("admin")) {

      //   if (currentUser.club) {
      //     result = res.filter(entity => {
      //       return entity.relatedClub === currentUser.club
      //     })
      //   }
      // } else {
      //   result = res
      // }
      setError(err)
      setEvents(res)
    }
    fetchData()
    // eslint-disable-next-line
  }, [])

  const filtered = useMemo(() => {
    const titleRegex = new RegExp(`${state.title}`, "gi")
    const typeRegex = new RegExp(`${state.type}`, "gi")
    return events
      ?.filter(p => (!state.title || p.title.search(titleRegex) > -1) && (!state.type || p.type.search(typeRegex) > -1))
      .sort(compareValues(order.orderWith, order.orderBy))
  }, [state, events, order])

  function handleAddRedirect() {
    history.push("/event/add")
  }

  function handleEventsRedirect() {
    // order is IMPORTANT here !!! (and "else" too !)
    if (archived) history.push("/event")
    else history.push("/event/archived")
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
                        <Button color="primary">Type:</Button>
                      </InputGroupAddon>
                      <Input type="select" value={state.type} name="type" onChange={handleInputChange}>
                        <option value="">Tous</option>
                        <CustomOptions options={eventTypes} />
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
                  {(currentUser.roles.includes("createEvent") || currentUser.roles.includes("admin")) && (
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block color="success" outline onClick={handleAddRedirect}>
                          <i className="fa fa-plus" />
                          &nbsp;Ajouter un évenement
                        </Button>
                      </InputGroup>
                    </Col>
                  )}
                  {(currentUser.roles.includes("handleArchivedEvent") || currentUser.roles.includes("admin")) && (
                    <Col md="4" sm="4">
                      <InputGroup className="mt-2">
                        <Button block color="info" onClick={handleEventsRedirect}>
                          <i className="fa fa-eye" />
                          &nbsp; Voir les évenement Archivés
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
                  filtered.map(p => <Event key={p._id} currentUser={currentUser} event={p} setEvents={setEvents} />)}

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
