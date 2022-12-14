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

export default function DetailsFaq() {
  const { id } = useParams()
  // get press by id passed in params with hook
  const [faq, error, reload] = useApi("faq/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!faq) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Faq : Détails</strong>
              <div className="card-header-actions">
                <Button size={"sm"} color={"success"} onClick={reload}>
                  <i className="icon-reload" />
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <div id="exampleAccofaqon" data-children=".item">
                <div className="item">
                  <h5>Titre :</h5>
                  <p className="mb-3">{faq.title}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={faq.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {faq.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{faq.description}</p>
                  </div>
                )}
                {faq.members && (
                  <div className="item">
                    <h5>Membres :</h5>
                    <ul className="list">
                      {faq.members.map(member => {
                        return <li>{member}</li>
                      })}
                    </ul>
                  </div>
                )}
                {faq.url && (
                  <div className="item">
                    <h5>Url :</h5>
                    <p className="mb-3">
                      <a href={faq.url}>{faq.url}</a>
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
