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
import { useApi } from "../../../hooks/useApi"
import { tefTefaqTypes } from "enums/entities.enum"

export default function DetailsTefTefaq() {
  const { id } = useParams()
  // get tefTefaq by id passed in params with hook
  const [tefTefaq, error, reload] = useApi("teftefaq/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!tefTefaq) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="12">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Tef & Tefaq : Détails</strong>
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
                  <h5>Description :</h5>
                  <p className="mb-3">{tefTefaq.description}</p>
                </div>
                <div className="item">
                  <h5>Date :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={tefTefaq.date} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                <div className="item">
                  <h5>Type :</h5>
                  <p className="mb-3">{tefTefaqTypes[tefTefaq.type].toUpperCase()}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={tefTefaq.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {tefTefaq.file && (
                  <div className="item">
                    <h5>Fichier :</h5>
                    <p className="mb-3">
                      <a href={process.env.REACT_APP_API_URL_UPLOADS + tefTefaq.file}>{tefTefaq.file}</a>
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
