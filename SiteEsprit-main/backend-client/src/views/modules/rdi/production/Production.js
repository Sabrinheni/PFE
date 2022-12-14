import { productionTypes } from "enums/entities.enum"
import React, { useState } from "react"
import Moment from "react-moment"
import { useHistory } from "react-router-dom"
import Badge from "reactstrap/lib/Badge"
import Button from "reactstrap/lib/Button"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { CustomModal } from "views/components/custom"
import { queryApi } from "../../../../utils/queryApi"

export function Production({ currentUser, production, setProductions }) {
  const [showAll, setShowAll] = useState(false)

  function handleShow() {
    setShowAll(true)
  }

  function handleHide() {
    setShowAll(false)
  }
  const [modal, setModal] = useState({ isOpen: false, title: "", body: "", confirmBtnTxt: "" })
  const history = useHistory()

  function handleDetailsRedirect() {
    history.push("/production/details/" + production._id)
  }

  function handleEditRedirect() {
    history.push("/production/update/" + production._id)
  }

  // *************************************************************
  async function handleDelete() {
    const onConfirm = async () => {
      const [, err] = await queryApi("production/" + production._id, null, "DELETE")
      if (!err) setProductions(productions => productions.filter(c => c._id !== production._id))
    }

    // show delete confirmation modal
    setModal({
      isOpen: true,
      title: "Suppression Production",
      body: `Veuillez confirmer la suppression de la production `,
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
      <tr>
        <th scope="row">
          {showAll ? (
            production.description && <p>{production.description}</p>
          ) : (
            <p>
              {production.description && production.description.length > 255 ? (
                <>
                  {production.description.substr(0, 255) + "..."}
                  <span onClick={handleShow} style={{ color: "#ed1c24" }}>
                    &nbsp;lire plus
                  </span>
                </>
              ) : (
                <>
                  {production.description && production.description.length < 255 ? (
                    <>{production.description}</>
                  ) : (
                    <>
                      {production.description}
                      <span onClick={handleHide} style={{ color: "#ed1c24" }}>
                        &nbsp;lire moins
                      </span>
                    </>
                  )}
                </>
              )}
            </p>
          )}
        </th>
        <td>
          <Badge color={"warning"} className={"ml-1 mr-1 text-capitalize"}>
            {productionTypes[production.type]}
          </Badge>
        </td>
        <td>{production.session}</td>
        <td>{production.inEsprit === true ? "OUI" : "NON"}</td>
        <td>
          <Moment date={production.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" locale="fr" />
        </td>
        <td>
          <Row>
            <Col>
              <Button block color="primary" onClick={handleDetailsRedirect}>
                Détails
              </Button>
            </Col>
            {(currentUser.roles.includes("admin") || currentUser.roles.includes("updateProduction")) && (
              <Col>
                <Button block color="warning" onClick={handleEditRedirect}>
                  Modifier
                </Button>
              </Col>
            )}
            {(currentUser.roles.includes("deleteProduction") || currentUser.roles.includes("admin")) && (
              <Col>
                <Button block color="danger" onClick={handleDelete}>
                  Supprimer
                </Button>
              </Col>
            )}
          </Row>
        </td>
      </tr>
    </>
  )
}
