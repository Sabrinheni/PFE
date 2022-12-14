import React, { useEffect, useState } from "react"
import Moment from "react-moment"
import Gallery from "react-photo-gallery"
import { useParams } from "react-router-dom"
import Badge from "reactstrap/lib/Badge"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { CustomCardImg } from "views/components/custom"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
import normalImage from "views/components/normalImage"
import { eventTypes } from "../../../enums/entities.enum"
import { queryApi } from "../../../utils/queryApi"

export default function DetailsEvent() {
  const { id } = useParams()
  // get event by id passed in params with hook
  const [event, setEvent] = useState(null)
  const [error, setError] = useState(null)
  const [galleryImages] = useState([])

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("event/" + id)
      if (err) setError(err)
      else {
        setEvent(res)
        for (const img in res.images) {
          if (res.images.hasOwnProperty(img))
            galleryImages.push({
              width: 1,
              height: 1,
              src: process.env.REACT_APP_API_URL_UPLOADS + res.images[img],
            })
        }
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [id, galleryImages])

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!event) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Row>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Evénement : Image</strong>
              </CardHeader>
              <CardBody>
                <CustomCardImg isForm image={event.cover} />
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card style={{ width: "100%" }}>
              <CardHeader>
                <i className="fa fa-align-justify"></i>
                <strong>Evénement : </strong>Gallery
              </CardHeader>
              <CardBody>
                <Gallery style={{ width: "100%" }} photos={galleryImages} renderImage={normalImage} />
              </CardBody>
            </Card>
          </Row>
        </Col>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Evenement : Détails</strong>
              <div className="card-header-actions">
                <Badge color="info" className="text-capitalize">
                  {eventTypes[event.type]}
                </Badge>
              </div>
            </CardHeader>
            <CardBody>
              <div id="exampleAccordion" data-children=".item">
                <div className="item">
                  <h5>Titre :</h5>
                  <p className="mb-3">{event.title}</p>
                </div>
                {event.url && (
                  <div className="item">
                    <h5>Url :</h5>
                    <a href={event.url} target="_blank" rel="noopener noreferrer">
                      {event.url}
                    </a>
                  </div>
                )}
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={event.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {event.content && (
                  <div className="item">
                    <h5>Contenu :</h5>
                    <div dangerouslySetInnerHTML={{ __html: event.content }} />
                  </div>
                )}
                {event.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{event.description}</p>
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
