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
import { partnershipTypes } from "../../../enums/entities.enum"
import { queryApi } from "../../../utils/queryApi"

export function Partnership({ currentUser, partnership, setPartnerships }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/partnership/details/" + partnership._id)
  }

  function handleEditRedirect() {
    history.push("/partnership/update/" + partnership._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("partnership/" + partnership._id, null, "DELETE")
      if (!err) setPartnerships(partnerships => partnerships.filter(c => c._id !== partnership._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression partenaire",
      body: `Veuillez confirmer la suppression du partenaire : <b>${partnership.title}</b>.`,
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
              {partnership.title.length + partnershipTypes[partnership.type].length > 41
                ? partnership.title.substr(0, 41 - partnershipTypes[partnership.type].length) + "..."
                : partnership.title}
            </b>
            <div className="card-header-actions">
              <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
                {partnershipTypes[partnership.type]}
              </Badge>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={partnership.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <CustomCardImg image={partnership.image} />
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updatePartnership") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deletePartnership") || currentUser.roles.includes("admin")) && (
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
