import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import samir from "../../assets/img/samir.png"

export default class QuiSommesNous extends Component {
  render() {
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <div className="margin-top-60">
              <center>
                <img src={samir} alt="empty" width="20%" />
                <Row>
                  <Col>
                    <h1>Samir Hamza</h1>
                  </Col>
                </Row>
              </center>
              <div>
                <br></br>
              </div>
              <div>
                <ul>
                  <li>Bio:</li>

                  <p>
                    Samir HAMZA is a Professor of Mechanical Engineering and Director at the National Institute of
                    Applied Sciences and Technology (INSAT), University of Carthage, since 1997. He obtained his Ph.D.
                    in 2002 from the University of Nancy-Metz, France and joined the Biomaterials and Biomechanics
                    Laboratory at the National Institute of Orthopedics M.T. Kassab, Tunisia, since 1998. Since 2004 he
                    is a visiting Professor of the National School of Engineers of Metz and the University of
                    Valenciennes, France. He is an expert in biomaterials and his work is focused on the development of
                    structural and mechanical properties of the biomaterials for medical applications. He obtained a HdR
                    degree in Mechanical Engineering from the University of Carthage in 2012.
                  </p>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: "",
  Title: "Samir Hamza",
  Subtitle: "Recherche, Développement et Innovation",
}
