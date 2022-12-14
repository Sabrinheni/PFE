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
import { useApi } from "../../../hooks/useApi"

export default function DetailsSlider() {
  const { id } = useParams()
  // get slider by id passed in params with hook
  const [slider, error, reload] = useApi("slider/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!slider) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Slider : Image</strong>
            </CardHeader>
            <CardBody>
              <CustomCardImg isForm image={slider.image} />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Slider : Détails</strong>
              <div className="card-header-actions">
                <Button size={"sm"} color={"success"} onClick={reload}>
                  <i className="icon-reload" />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <div id="exampleAccordion" data-children=".item">
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={slider.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                <div className="item">
                  <h5>Titre :</h5>
                  <p className="mb-3">{slider.title}</p>
                </div>
                {slider.titleDescription && (
                  <div className="item">
                    <h5>Sous-Titre :</h5>
                    <p className="mb-3">{slider.titleDescription}</p>
                  </div>
                )}
                {slider.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{slider.description}</p>
                  </div>
                )}
                {slider.btnName && (
                  <div className="item">
                    <h5>Texte du bouton :</h5>
                    <p className="mb-3">{slider.btnName}</p>
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
