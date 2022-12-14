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
import { useApi } from "../../../../hooks/useApi"

export default function DetailsMember() {
  const { id } = useParams()
  // get press by id passed in params with hook
  const [member, error, reload] = useApi("member/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!member) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Membre : Image</strong>
            </CardHeader>
            <CardBody>
              <CustomCardImg isForm image={member.image} />
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" xl="6">
          <Card>
            <CardHeader>
              <i className="fa fa-align-justify"></i>
              <strong>Membre : Détails</strong>
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
                  <p className="mb-3">{member.title}</p>
                </div>
                <div className="item">
                  <h5>Nom :</h5>
                  <p className="mb-3">{member.firstName}</p>
                </div>
                <div className="item">
                  <h5>Prénom :</h5>
                  <p className="mb-3">{member.lastName}</p>
                </div>
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={member.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>
                {member.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{member.description}</p>
                  </div>
                )}
                {member.teachingAreas && (
                  <div className="item">
                    <h5>Domaines d'enseignement :</h5>
                    <ul className="list">
                      {member.teachingAreas.map(value => {
                        return <li>{value}</li>
                      })}
                    </ul>
                  </div>
                )}
                {member.researchInterests && (
                  <div className="item">
                    <h5>Domaines de recherche :</h5>
                    <ul className="list">
                      {member.researchInterests.map(value => {
                        return <li>{value}</li>
                      })}
                    </ul>
                  </div>
                )}
                {member.externalLinks && (
                  <div className="item">
                    <h5>Liens externe :</h5>
                    <ul className="list">
                      {member.externalLinks.map(value => {
                        return <li>{value}</li>
                      })}
                    </ul>
                  </div>
                )}
                {member.productions && (
                  <div className="item">
                    <h5>Productions :</h5>
                    <ul className="list">
                      {member.productions.map(value => {
                        return <li>{value}</li>
                      })}
                    </ul>
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
