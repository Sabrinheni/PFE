import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Row, Col } from "react-bootstrap"
import Contact from "components/sections/Contact"
import { CustomTitleH1 } from "components/CustomElements/CustomTitleH1"

export default class EspritIngenieur extends Component {
  render() {
    return (
      <>
        <MetaHelmet
          meta={{
            title: "Esprit - Contact",
            description:
              "Contactez-nous à tout moment pour toute information concernant l'admission ou tout autre sujet concernant ESPRIT.",
            keywords: "esprit, contact, contact admission, emplacement",
          }}
        />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg extract">
          <div className="container">
            <Row>
              <Col>
                <CustomTitleH1>Nos emplacements</CustomTitleH1>
              </Col>
            </Row>
            <Row className="margin-top-60">
              <Col md={6} xs={12}>
                <iframe
                  className="googlemaps"
                  title="Esprit location google maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1080.235767244713!2d10.189454883048041!3d36.89895189079932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb055e36e611%3A0xd904d2bf4308a2c!2sEsprit!5e0!3m2!1sen!2stn!4v1588968285265!5m2!1sen!2stn"
                  width="100%"
                  height="90%"
                  frameBorder="0"
                  style={{ border: "0", minHeight: "300px" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"></iframe>
              </Col>
              <Col md={6} xs={12}>
                <iframe
                  className="googlemaps"
                  title="Esprit location google maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2241.263912978404!2d10.20706575769796!3d36.85220588980418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd34d3c96bec6b%3A0x9f458fbb48b78af4!2sESPRIT%20-%20Night%20Schools!5e0!3m2!1sen!2stn!4v1589132980764!5m2!1sen!2stn"
                  width="100%"
                  height="90%"
                  frameBorder="0"
                  style={{ border: "0", minHeight: "300px" }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"></iframe>
              </Col>
            </Row>
            <Row className="margin-top-60">
              <Col>
                <CustomTitleH1>Contactez-nous</CustomTitleH1>
              </Col>
            </Row>
            <Contact></Contact>
          </div>
        </section>
      </>
    )
  }
}
const breadcrumb = {
  src: "",
  Title: "Contact",
  Subtitle: "Contactez-nous",
}
