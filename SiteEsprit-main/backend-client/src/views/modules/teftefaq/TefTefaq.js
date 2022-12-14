import React, { useState } from "react"
import Moment from "react-moment"
import { useHistory } from "react-router-dom"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { CustomModal } from "views/components/custom"
import { queryApi } from "../../../utils/queryApi"
import { tefTefaqTypes } from "enums/entities.enum"

export function TefTefaq({ currentUser, tefTefaq, setTefTefaq }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/tefTefaq/details/" + tefTefaq._id)
  }

  function handleEditRedirect() {
    history.push("/tefTefaq/update/" + tefTefaq._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("teftefaq/" + tefTefaq._id, null, "DELETE")
      if (!err) setTefTefaq(tefTefaqs => tefTefaqs.filter(p => p._id !== tefTefaq._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression TEF & TEFAQ",
      body: `Veuillez confirmer la suppression du test <b>${tefTefaq.type}</b> du : <b>${new Date(
        tefTefaq.date
      ).toLocaleDateString("en-CA")}</b>.`,
      confirmBtnTxt: "Supprimer",
      onConfirm,
    })
  }

  async function handleArchive() {
    const onConfirm = async () => {
      let url = "tefTefaq/archive/"

      const [, err] = await queryApi(url + tefTefaq._id, null, "PUT")
      if (!err) setTefTefaq(tefTefaqs => tefTefaqs.filter(p => p._id !== tefTefaq._id))
    }

    // show archive confirmation modal
    if (tefTefaq.status === true)
      setModal({
        isOpen: true,
        title: "Archivage calendrier",
        body: `Veuillez confirmer l'archivage du test  <b>${tefTefaq.type}</b> du : <b>${new Date(
          tefTefaq.date
        ).toLocaleDateString("en-CA")}</b>.`,
        confirmBtnTxt: "Archiver",
        onConfirm,
      })
    // show Unarchive confirmation modal
    else
      setModal({
        isOpen: true,
        title: "Désarchivage calendrier",
        body: `Veuillez confirmer le désarchivage de la calendrier : <b>${tefTefaq.title}</b>.`,
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
              {tefTefaqTypes[tefTefaq.type].toUpperCase()}
              <Moment date={tefTefaq.date} format=" dddd, Do MMMM  YYYY" locale="fr" />
            </b>
            {tefTefaq.status && (
              <div className="card-header-actions">
                <Button color={tefTefaq.status ? "danger" : "success"} size={"sm"} onClick={handleArchive}>
                  {tefTefaq.status ? "Archiver" : "Désarchiver"}
                </Button>
              </div>
            )}
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={tefTefaq.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            {/* <Suspense fallback={<Loading color="secondary" />}> */}
            {/* <CustomCardImg image={tefTefaq.image} /> */}
            {/* </Suspense> */}
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateTefTefaq") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteTefTefaq") || currentUser.roles.includes("admin")) && (
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
