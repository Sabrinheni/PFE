import React, { useState } from "react"
import Moment from "react-moment"
import { useHistory } from "react-router-dom"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { CustomCardImg, CustomModal } from "views/components/custom"
import { queryApi } from "../../../../utils/queryApi"

export function Rdi({ currentUser, rdi, setRdis }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/rdi/details/" + rdi._id)
  }

  function handleEditRedirect() {
    history.push("/rdi/update/" + rdi._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("rdi/" + rdi._id, null, "DELETE")
      if (!err) setRdis(rdis => rdis.filter(c => c._id !== rdi._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression rdi",
      body: `Veuillez confirmer la suppression du rdi : <b>${rdi.title}</b>.`,
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
            <b>{rdi.title.length > 41 ? rdi.title.substr(0, 41) + "..." : rdi.title}</b>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={rdi.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <CustomCardImg image={rdi.image} />
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateRdi") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteRdi") || currentUser.roles.includes("admin")) && (
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
