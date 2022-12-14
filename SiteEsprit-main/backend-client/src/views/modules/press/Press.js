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
import { pressTypes } from "../../../enums/entities.enum"
import { queryApi } from "../../../utils/queryApi"

export function Press({ currentUser, press, setPresses }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/press/details/" + press._id)
  }

  function handleEditRedirect() {
    history.push("/press/update/" + press._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("press/" + press._id, null, "DELETE")
      if (!err) setPresses(presses => presses.filter(p => p._id !== press._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression presse",
      body: `Veuillez confirmer la suppression de la presse : <b>${press.title}</b>.`,
      confirmBtnTxt: "Supprimer",
      onConfirm,
    })
  }

  async function handleArchive() {
    const onConfirm = async () => {
      let url = press.status === true ? "press/archive/" : "press/unarchive/"

      const [, err] = await queryApi(url + press._id, null, "PUT")
      if (!err) setPresses(presses => presses.filter(p => p._id !== press._id))
    }

    // show archive confirmation modal
    if (press.status === true)
      setModal({
        isOpen: true,
        title: "Archivage presse",
        body: `Veuillez confirmer l'archivage de la presse : <b>${press.title}</b>.`,
        confirmBtnTxt: "Archiver",
        onConfirm,
      })
    // show Unarchive confirmation modal
    else
      setModal({
        isOpen: true,
        title: "Désarchivage presse",
        body: `Veuillez confirmer le désarchivage de la presse : <b>${press.title}</b>.`,
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
              {press.title.length + pressTypes[press.type].length > 29
                ? press.title.substr(0, 29 - pressTypes[press.type].length) + "..."
                : press.title}
            </b>
            <div className="card-header-actions">
              <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
                {pressTypes[press.type]}
              </Badge>
              <Button color={press.status ? "danger" : "success"} size={"sm"} onClick={handleArchive}>
                {press.status ? "Archiver" : "Désarchiver"}
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={press.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            {/* <Suspense fallback={<Loading color="secondary" />}> */}
            <CustomCardImg image={press.image} />
            {/* </Suspense> */}
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updatePress") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deletePress") || currentUser.roles.includes("admin")) &&
                press.status === false && (
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
