import React from "react"
import Moment from "react-moment"
import { useParams } from "react-router-dom"
import Badge from "reactstrap/lib/Badge"
import Button from "reactstrap/lib/Button"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { ResultatCamerounTypes } from "../../../enums/entities.enum"
import { useApi } from "../../../hooks/useApi"

export default function DetailsResultatCameroun() {
  const { id } = useParams()
  const [ResultatCameroun, error, reload] = useApi("ResultatCameroun/" + id)

  if (error) return <Error error={error} />

  if (!ResultatCameroun) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>ResultatCameroun : Détails</strong>
              <div className="card-header-actions">
                <Badge color="info" className="text-capitalize">
                  {ResultatCamerounTypes[ResultatCameroun.type]}
                </Badge>
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
                  <p className="mb-3">{ResultatCameroun.title}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={ResultatCameroun.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {ResultatCameroun.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{ResultatCameroun.description}</p>
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
