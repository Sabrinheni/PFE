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
import { EspritIngenieurTypes } from "../../../enums/entities.enum"
import { useApi } from "../../../hooks/useApi"

export default function DetailsEspritIngenieur() {
  const { id } = useParams()
  const [EspritIngenieur, error, reload] = useApi("EspritIngenieur/" + id)

  if (error) return <Error error={error} />

  if (!EspritIngenieur) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Esprit Ingenieur : Détails</strong>
              <div className="card-header-actions">
                <Badge color="info" className="text-capitalize">
                  {EspritIngenieurTypes[EspritIngenieur.type]}
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
                  <p className="mb-3">{EspritIngenieur.title}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={EspritIngenieur.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {EspritIngenieur.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{EspritIngenieur.description}</p>
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
