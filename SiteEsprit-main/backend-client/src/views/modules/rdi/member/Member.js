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

export function Member({ currentUser, member, setMembers }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/member/details/" + member._id)
  }

  function handleEditRedirect() {
    history.push("/member/update/" + member._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("member/" + member._id, null, "DELETE")
      if (!err) setMembers(members => members.filter(c => c._id !== member._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression member",
      body: `Veuillez confirmer la suppression du member : <b>${
        member.title + " " + member.firstName + " " + member.lastName
      }</b>.`,
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
              {member.title.length + member.firstName.length + member.lastName.length > 41
                ? (member.title + " " + member.firstName + " " + member.lastName).substr(0, 41) + "..."
                : member.title + " " + member.firstName + " " + member.lastName}
            </b>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={member.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <CustomCardImg image={member.image} />
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateMember") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteMember") || currentUser.roles.includes("admin")) && (
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
