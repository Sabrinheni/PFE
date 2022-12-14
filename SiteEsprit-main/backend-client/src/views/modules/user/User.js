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
import { queryApi } from "../../../utils/queryApi"

export function User({ user, setUsers }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/user/details/" + user.email)
  }

  function handleEditRedirect() {
    history.push("/user/update/" + user._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("user/" + user._id, null, "DELETE")
      if (!err) setUsers(users => users.filter(p => p._id !== user._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Supression événement",
      body: `Veuillez confirmer la supression de l'évenement : <b>${user.username}</b>.`,
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
              {user.username.length + user.email.length > 29
                ? (user.username + " " + user.email).substr(0, 29) + "..."
                : user.username + " " + user.email}
            </b>
            {user.roles.includes("admin") && (
              <div className="card-header-actions">
                <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
                  admin
                </Badge>
              </div>
            )}
          </CardHeader>
          <CardBody>
            <p>
              Ajouté le
              <b>
                <Moment date={user.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <p>
              Modifier le
              <b>
                <Moment date={user.lastUpdateAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <CustomCardImg image={user.image} />
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              <Col>
                {!user.roles.includes("admin") && (
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                )}
              </Col>
              <Col>
                {!user.roles.includes("admin") && (
                  <Button block color="danger" onClick={handleDelete}>
                    Supprimer
                  </Button>
                )}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  )
}
