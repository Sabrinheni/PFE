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
import { clubTypes } from "../../../enums/entities.enum"
import { queryApi } from "../../../utils/queryApi"

export function Club({ currentUser, club, setClubs }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/club/details/" + club._id)
  }

  function handleEditRedirect() {
    history.push("/club/update/" + club._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("club/" + club._id, null, "DELETE")
      if (!err) setClubs(clubs => clubs.filter(c => c._id !== club._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression club",
      body: `Veuillez confirmer la suppression du club : <b>${club.title}</b>.`,
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
              {club.title.length + clubTypes[club.type].length > 41
                ? club.title.substr(0, 41 - clubTypes[club.type].length) + "..."
                : club.title}
            </b>
            <div className="card-header-actions">
              <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
                {clubTypes[club.type]}
              </Badge>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={club.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <CustomCardImg image={club.image} />
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateClub") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteClub") || currentUser.roles.includes("admin")) && (
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
