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
import { timeTableTitles } from "../../../enums/entities.enum"
import { queryApi } from "../../../utils/queryApi"

export function TimeTable({ currentUser, timeTable, setTimeTables }) {
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/timeTable/details/" + timeTable._id)
  }

  function handleEditRedirect() {
    history.push("/timeTable/update/" + timeTable._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("timeTable/" + timeTable._id, null, "DELETE")
      if (!err) setTimeTables(timeTables => timeTables.filter(p => p._id !== timeTable._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression calendrier",
      body: `Veuillez confirmer la suppression de la calendrier : <b>${timeTable.title}</b>.`,
      confirmBtnTxt: "Supprimer",
      onConfirm,
    })
  }

  async function handleArchive() {
    const onConfirm = async () => {
      let url = "timeTable/archive/"

      const [, err] = await queryApi(url + timeTable._id, null, "PUT")
      if (!err) setTimeTables(timeTables => timeTables.filter(p => p._id !== timeTable._id))
    }

    // show archive confirmation modal
    if (timeTable.status === true)
      setModal({
        isOpen: true,
        title: "Archivage calendrier",
        body: `Veuillez confirmer l'archivage de la calendrier : <b>${timeTable.title}</b>.`,
        confirmBtnTxt: "Archiver",
        onConfirm,
      })
    // show Unarchive confirmation modal
    else
      setModal({
        isOpen: true,
        title: "Désarchivage calendrier",
        body: `Veuillez confirmer le désarchivage de la calendrier : <b>${timeTable.title}</b>.`,
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
              {timeTableTitles[timeTable.title].length > 49
                ? timeTableTitles[timeTable.title].substr(0, 49) + "..."
                : timeTableTitles[timeTable.title]}
            </b>
            {timeTable.status && (
              <div className="card-header-actions">
                <Button color={timeTable.status ? "danger" : "success"} size={"sm"} onClick={handleArchive}>
                  {timeTable.status ? "Archiver" : "Désarchiver"}
                </Button>
              </div>
            )}
          </CardHeader>
          <CardBody>
            <p>
              Publié le
              <b>
                <Moment date={timeTable.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
              </b>
            </p>
            <hr className="my-2" />
            {/* <Suspense fallback={<Loading color="secondary" />}> */}
            {/* <CustomCardImg image={timeTable.image} /> */}
            {/* </Suspense> */}
            <hr className="my-2" />
            <Row>
              <Col>
                <Button block color="primary" onClick={handleDetailsRedirect}>
                  Détails
                </Button>
              </Col>
              {(currentUser.roles.includes("updateTimeTable") || currentUser.roles.includes("admin")) && (
                <Col>
                  <Button block color="warning" onClick={handleEditRedirect}>
                    Modifier
                  </Button>
                </Col>
              )}
              {(currentUser.roles.includes("deleteTimeTable") || currentUser.roles.includes("admin")) && (
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
