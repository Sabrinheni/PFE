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
import { clubTypes, sportTypes } from "../../../enums/entities.enum"
import { useApi } from "../../../hooks/useApi"

export default function DetailsClub() {
  const { id } = useParams()
  // get press by id passed in params with hook
  const [club, error, reload] = useApi("club/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!club) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Club : Image</strong>
            </CardHeader>
            <CardBody>
              <CustomCardImg isForm image={club.image} />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Club : Détails</strong>
              <div className="card-header-actions">
                <Badge color="info" className="text-capitalize">
                  {clubTypes[club.type]}
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
                  <p className="mb-3">{club.title}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={club.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {club.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{club.description}</p>
                  </div>
                )}
                {club.sport && (
                  <div className="item">
                    <h5>Type de sport :</h5>
                    <p className="mb-3">{sportTypes[club.sport]}</p>
                  </div>
                )}

                {club.url && (
                  <div className="item">
                    <h5>Url :</h5>
                    <p className="mb-3">
                      <a href={club.url}>{club.url}</a>
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
