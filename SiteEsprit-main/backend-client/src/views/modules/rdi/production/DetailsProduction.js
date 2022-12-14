import { useApi } from "hooks/useApi"
import { useParams } from "react-router-dom"
import React from "react"
import Moment from "react-moment"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import { Error } from "views/components/Error"
import { Loading } from "views/components/Loading"
export default function DetailsProduction() {
  const { id } = useParams()
  // get press by id passed in params with hook
  // const [production, error, reload] = useApi("production/" + id)
  const [production, error] = useApi("production/" + id)

  if (error) return <Error error={error} />

  // IMPORTANT !! Must verify it => wait until hook return resutls
  if (!production) return <Loading type="grow" />

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" xl="6">
          <Card>
            <CardBody>
              <div id="exampleAccordion" data-children=".item">
                <div className="item">
                  <h5>Date Enregistrement :</h5>
                  <p className="mb-3">
                    <Moment locale="fr" date={production.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                  </p>
                </div>

                {production.members && (
                  <div className="item">
                    <h5>Membres :</h5>
                    <ul className="list">
                      {production.members.map(member => {
                        return (
                          <li>
                            {member.lastName} {member.firstName}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )}

                {production.description && (
                  <div className="item">
                    <h5>Description :</h5>
                    <p className="mb-3">{production.description}</p>
                  </div>
                )}

                {production.url && (
                  <div className="item">
                    <h5>Url :</h5>
                    <p className="mb-3">
                      <a href={production.url}>{production.url}</a>
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
