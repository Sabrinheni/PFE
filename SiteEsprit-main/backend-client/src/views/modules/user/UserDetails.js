import React, { useEffect, useState } from "react"
import Moment from "react-moment"
import { useParams } from "react-router-dom"
import Card from "reactstrap/lib/Card"
import CardBody from "reactstrap/lib/CardBody"
import CardHeader from "reactstrap/lib/CardHeader"
import Col from "reactstrap/lib/Col"
import Row from "reactstrap/lib/Row"
import Table from "reactstrap/lib/Table"
import { CustomCardImg } from "views/components/custom"
import { Error } from "views/components/Error"
import { queryApi } from "../../../utils/queryApi"
export default function UserDetails() {
  const { email } = useParams()
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("user/email/" + email)
      if (err) setError(err)
      else {
        setUser(res)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [email])

  if (!user) return <></>
  if (error) return <Error error={error} />
  return (
    <div className="animated fadeIn">
      <Row>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong>
                <i className="icon-info pr-1" />
                Informations:
              </strong>
            </CardHeader>
            <CardBody>
              <Table responsive striped hover>
                <tbody>
                  <tr key="username">
                    <td>{`UserName :`}</td>
                    <td>
                      <strong>{user.username}</strong>
                    </td>
                  </tr>
                  <tr key="email">
                    <td>{`Email :`}</td>
                    <td>
                      <strong>{user.email}</strong>
                    </td>
                  </tr>
                  <tr key="registeredAt">
                    <td>{`Ajouté le :`}</td>
                    <td>
                      <Moment locale="fr" date={user.createdAt} format=" dddd, Do MMMM  YYYY à hh:mm" />
                    </td>
                  </tr>
                  <tr key="roles">
                    <td>{`Roles :`}</td>
                    <td>
                      {user.roles.map(x => {
                        return x + " | "
                      })}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <CardHeader>
              <strong>
                <i className="icon-info pr-1" />
                Photo:
              </strong>
            </CardHeader>
            <CardBody>
              <CustomCardImg isForm image={user.image} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
