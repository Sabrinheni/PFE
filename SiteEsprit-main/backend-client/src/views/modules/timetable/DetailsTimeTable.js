import React from "react"
import Moment from "react-moment"
import { useParams } from "react-router-dom"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { timeTableTitles } from "../../../enums/entities.enum"
import { useApi } from "../../../hooks/useApi"

export default function DetailsTimeTable() {
  const { id } = useParams()
  // get timeTable by id passed in params with hook
  const [timeTable, error, reload] = useApi("timeTable/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!timeTable) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Calendrier : Détails</strong>
              <div className="card-header-actions">
                &nbsp;
                <Button size={"sm"} color={"success"} onClick={reload}>
                  <i className="icon-reload" />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <div id="exampleAccordion" data-children=".item">
                <div className="item">
                  <h5>Titre :</h5>
                  <p className="mb-3">{timeTableTitles[timeTable.title]}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={timeTable.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {timeTable.file && (
                  <div className="item">
                    <h5>Fichier :</h5>
                    <p className="mb-3">
                      <a href={process.env.REACT_APP_API_URL_UPLOADS + timeTable.file}>{timeTable.file}</a>
                    </p>
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
