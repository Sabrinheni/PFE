import React, { useState } from "react"
import Moment from "react-moment"
import { useHistory } from "react-router-dom"
import Badge from "reactstrap/lib/Badge"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { CustomCardImg, CustomModal } from "views/components/custom"
import { eventTypes } from "../../../enums/entities.enum"
import { queryApi } from "../../../utils/queryApi"

export function Event({ currentUser, event, setEvents }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/event/details/" + event._id)
  }

  function handleEditRedirect() {
    history.push("/event/update/" + event._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("event/" + event._id, null, "DELETE")
      if (!err) setEvents(events => events.filter(p => p._id !== event._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Supression événement",
      body: `Veuillez confirmer la supression de l'évenement : <b>${event.title}</b>.`,
      confirmBtnTxt: "Supprimer",
      onConfirm,
    })
  }

  async function handleAccept() {
    const onConfirm = async () => {
      const [, err] = await queryApi("event/" + event._id, null, "PATCH")
      if (!err) {
        event.accepted = true
        handleAbortModal()
      }
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Accepter événement",
      body: `Veuillez confirmer l'acceptation de l'évenement : <b>${event.title}</b>.`,
      confirmBtnTxt: "Accepter",
      onConfirm,
    })
  }

  function renderBadge(accepted) {
    if (accepted) {
      return (
        <Badge color={"primary"} className={"ml-1 mr-1 text-capitalize"}>
          accepté
        </Badge>
      )
    } else {
      return (
        <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
          en attente
        </Badge>
      )
    }
  }

  async function handleArchive() {
    const onConfirm = async () => {
      let url = event.status === true ? "event/archive/" : "event/unarchive/"

      const [, err] = await queryApi(url + event._id, null, "PUT")
      if (!err) setEvents(events => events.filter(p => p._id !== event._id))
    }

    // show archive confirmation modal
    if (event.status === true)
      setModal({
        isOpen: true,
        title: "Archivage évenement",
        body: `Veuillez confirmer l'archivage de l'évenement : <b>${event.title}</b>.`,
        confirmBtnTxt: "Archiver",
        onConfirm,
      })
    // show Unarchive confirmation modal
    else
      setModal({
        isOpen: true,
        title: "Désarchivage événement",
        body: `Veuillez confirmer le désarchivage de l'événement : <b>${event.title}</b>.`,
        confirmBtnTxt: "Désarchiver",
        onConfirm,
      })
  }

  function handleAbortModal() {
    setModal({ isOpen: false })
  }

  return (
    <>
      <CustomModal {...modal} onAbort={handleAbortModal} />
      <Col xs="12" sm="8" md="4">
        <Card>
          <CardHeader>
            <b>
              {event.title.length + eventTypes[event.type].length > 29
                ? event.title.substr(0, 29 - eventTypes[event.type].length) + "..."
                : event.title}
            </b>
            <div className="card-header-actions">
              <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
                {eventTypes[event.type]}
              </Badge>
              {renderBadge(event.accepted)}
              <Button color={event.status ? "danger" : "success"} size={"sm"} onClick={handleArchive}>
                {event.status ? "Archiver" : "Désarchiver"}
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={event.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <p>
              Modifier le
              <b>
                <Moment date={event.lastUpdateAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <CustomCardImg image={event.cover} />
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateEvent") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {currentUser.roles.includes("admin") && !event.accepted && (
                <Col>
                  <Button block color="secondary" onClick={handleAccept}>
                    Accepter
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteEvent") || currentUser.roles.includes("admin")) &&
                event.status === false && (
                  <Col>
                    <Button block color="danger" onClick={handleDelete}>
                      Supprimer
                    </Button>
                  </Col>
                )}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}
