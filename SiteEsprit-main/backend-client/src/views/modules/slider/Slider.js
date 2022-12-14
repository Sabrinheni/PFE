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
import { queryApi } from "../../../utils/queryApi"

export function Slider({ currentUser, slider, setSliders }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/slider/details/" + slider._id)
  }

  function handleEditRedirect() {
    history.push("/slider/update/" + slider._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("slider/" + slider._id, null, "DELETE")
      if (!err) setSliders(slideres => slideres.filter(p => p._id !== slider._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Supsliderion slidere",
      body: `Veuillez confirmer la supsliderion de la slidere : <b>${slider.title}</b>.`,
      confirmBtnTxt: "Supprimer",
      onConfirm,
    })
  }

  async function handleArchive() {
    const onConfirm = async () => {
      let url = slider.status === true ? "slider/archive/" : "slider/unarchive/"

      const [, err] = await queryApi(url + slider._id, null, "PUT")
      if (!err) setSliders(slideres => slideres.filter(p => p._id !== slider._id))
    }

    // show archive confirmation modal
    if (slider.status === true)
      setModal({
        isOpen: true,
        title: "Archivage slidere",
        body: `Veuillez confirmer l'archivage de la slidere : <b>${slider.title}</b>.`,
        confirmBtnTxt: "Archiver",
        onConfirm,
      })
    // show Unarchive confirmation modal
    else
      setModal({
        isOpen: true,
        title: "Désarchivage slidere",
        body: `Veuillez confirmer le désarchivage de la slidere : <b>${slider.title}</b>.`,
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
            <b>{slider.title.length > 29 ? slider.title.substr(0, 29) + "..." : slider.title}</b>
            <div className="card-header-actions">
              <Button color={slider.status ? "danger" : "success"} size={"sm"} onClick={handleArchive}>
                {slider.status ? "Archiver" : "Désarchiver"}
              </Button>
            </div>
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={slider.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <p>
              Modifier le
              <b>
                <Moment date={slider.lastUpdateAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            <CustomCardImg image={slider.image} />
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateSlider") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteSlider") || currentUser.roles.includes("admin")) && (
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
