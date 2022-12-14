import { CustomHrGray } from "components/CustomElements/CustomHrGray"
import IconList from "components/IconList"
import React from "react"
import { Col, Row } from "react-bootstrap"
import { compareValues } from "../utils/compareByField"
import LinkDuo from "../utils/LinkDuo"

export default function RDI({ data }) {
  const rdisData = data.sort(compareValues("createdAt", "desc")).map(ev => {
    const members = {
      icon: "icofont-people",
      title: "Les membres",
      description: "L'équipe " + ev.title + " est composée de :",
      list: ev.members || [],
    }
    return (
      <Row className="margin-bottom-60" key={ev._id}>
        <Col md={6} xs={12}>
          <div className="flow-root">
            <h3 className="text-esprit">
              {ev.url ? (
                <LinkDuo target="_blank" rel="noopener noreferrer" className="text-esprit" to={ev.url}>
                  {ev.title}
                </LinkDuo>
              ) : (
                ev.title
              )}
            </h3>
            <CustomHrGray />
          </div>

          {ev.description &&
            ev.description.split("\n").map(i => {
              return <p className="text-justify">{i}</p>
            })}
        </Col>
        <Col md={6} xs={12}>
          <IconList data={members} />
        </Col>
      </Row>
    )
  })

  //BlogPost loop END
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">{rdisData}</div>
        </div>
      </div>
    </>
  )
}
