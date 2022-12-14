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
import { CustomModal } from "views/components/custom"
import { EspritIngenieurTypes } from "../../../enums/entities.enum"
import { queryApi } from "../../../utils/queryApi"

export function EspritIngenieur({ currentUser, EspritIngenieur, setEspritIngenieurs }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/EspritIngenieur/details/" + EspritIngenieur._id)
  }

  function handleEditRedirect() {
    history.push("/EspritIngenieur/update/" + EspritIngenieur._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("EspritIngenieur/" + EspritIngenieur._id, null, "DELETE")
      if (!err) setEspritIngenieurs(EspritIngenieurs => EspritIngenieurs.filter(c => c._id !== EspritIngenieur._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression Element",
      body: `Veuillez confirmer la suppression d'Element' : <b>${EspritIngenieur.title}</b>.`,
      confirmBtnTxt: "Supprimer",
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
              {EspritIngenieur.title + EspritIngenieurTypes[EspritIngenieur.type] > 41
                ? EspritIngenieur.title.substr(0, 41 - EspritIngenieurTypes[EspritIngenieur.type]) + "..."
                : EspritIngenieur.title}
            </b>
            <div className="card-header-actions">
              <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
                {EspritIngenieurTypes[EspritIngenieur.type]}
              </Badge>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={EspritIngenieur.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateEspritIngenieur") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteEspritIngenieur") || currentUser.roles.includes("admin")) && (
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
