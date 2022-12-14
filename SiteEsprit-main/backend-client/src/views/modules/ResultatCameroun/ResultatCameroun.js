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
import { ResultatCamerounTypes } from "../../../enums/entities.enum"
import { queryApi } from "../../../utils/queryApi"

export function ResultatCameroun({ currentUser, ResultatCameroun, setResultatCamerouns }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/ResultatCameroun/details/" + ResultatCameroun._id)
  }

  function handleEditRedirect() {
    history.push("/ResultatCameroun/update/" + ResultatCameroun._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("ResultatCameroun/" + ResultatCameroun._id, null, "DELETE")
      if (!err) setResultatCamerouns(ResultatCamerouns => ResultatCamerouns.filter(c => c._id !== ResultatCameroun._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression Element",
      body: `Veuillez confirmer la suppression d'Element' : <b>${ResultatCameroun.title}</b>.`,
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
            <div className="card-header-actions">
              <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
                {ResultatCamerounTypes[ResultatCameroun.type]}
              </Badge>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={ResultatCameroun.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateResultatCameroun") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteResultatCameroun") || currentUser.roles.includes("admin")) && (
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
