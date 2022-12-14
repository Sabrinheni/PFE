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
import { CustomCardImg } from "views/components/custom"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import { pressTypes } from "../../../enums/entities.enum"
import { useApi } from "../../../hooks/useApi"

export default function DetailsPress() {
  const { id } = useParams()
  // get press by id passed in params with hook
  const [press, error, reload] = useApi("press/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!press) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Presse : Image</strong>
            </CardHeader>
            <CardBody>
              <CustomCardImg isForm image={press.image} />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Presse : Détails</strong>
              <div className="card-header-actions">
                <Badge color="info" className="text-capitalize">
                  {pressTypes[press.type]}
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
                  <p className="mb-3">{press.title}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={press.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {press.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{press.description}</p>
                  </div>
                )}
                {press.file && (
                  <div className="item">
                    <h5>Fichier :</h5>
                    <p className="mb-3">
                      <a href={process.env.REACT_APP_API_URL_UPLOADS + press.file}>{press.file}</a>
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
