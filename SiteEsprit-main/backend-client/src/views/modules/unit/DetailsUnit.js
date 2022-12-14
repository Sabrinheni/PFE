import React from "react"
import Moment from "react-moment"
import { useParams } from "react-router-dom"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { CustomCardImg } from "views/components/custom"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { unitTypes } from "../../../enums/entities.enum"
import { useApi } from "../../../hooks/useApi"

export default function DetailsRdi() {
  const { id } = useParams()
  // get unit by id passed in params with hook
  const [unit, error, reload] = useApi("unit/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!unit) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Unité d'enseignement : Image</strong>
            </CardHeader>
            <CardBody>
              <CustomCardImg isForm image={unit.image} />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Unité d'enseignement : Détails</strong>
              <div className="card-header-actions">
                <Button size={"sm"} color={"success"} onClick={reload}>
                  <i className="icon-reload" />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <div id="exampleAccordion" data-children=".item">
                <div className="item">
                  <h5>Titre :</h5>
                  <p className="mb-3">{unit.title}</p>
                </div>
                {unit.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{unit.description}</p>
                  </div>
                )}
                <div className="item">
                  <h5>Unité Associé :</h5>
                  <p className="mb-3">{unitTypes[unit.type]}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={unit.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {unit.file && (
                  <div className="item">
                    <h5>Fichier :</h5>
                    <p className="mb-3">
                      <a href={process.env.REACT_APP_API_URL_UPLOADS + unit.file}>{unit.file}</a>
                    </p>
                  </div>
                )}
                {unit.modules && (
                  <div className="item">
                    <h5>Membres :</h5>

                    {unit.modules?.map(m => {
                      return (
                        <>
                          <p>Nom module : {m.title}</p>
                          <table className="table">
                            <thead>
                              <th>Matiére</th>
                              <th>ECTS</th>
                            </thead>
                            <tbody>
                              {m.subjects?.map(sub => {
                                return (
                                  <tr>
                                    <td>{sub.title}</td>
                                    <td>{sub.ects}</td>
                                  </tr>
                                )
                              })}
                            </tbody>
                          </table>
                          <ul className="list"></ul>
                        </>
                      )
                    })}
                  </div>
                )}
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
