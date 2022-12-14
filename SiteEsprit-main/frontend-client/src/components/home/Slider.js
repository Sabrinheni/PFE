import "react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
import "react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"
import React from "react"
import { Row, Col } from "react-bootstrap"
import OwlCarousel from "react-owl-carousel"
import VisibilitySensor from "react-visibility-sensor"
import banner from "../../assets/img/esprit-banner.png"
import { useApi } from "../../hooks/useApi"
import { compareValues } from "../utils/compareByField"
import LinkDuo from "../utils/LinkDuo"
import { LazyImage } from "components/utils/LazyImage"

export default function Slider() {
  const [sliders] = useApi("sliders/esprit")

  if (!sliders || sliders.length === 0)
    return (
      <>
        <style
          dangerouslySetInnerHTML={{
            __html: [
              `.item-empty:before {`,
              "  position: absolute;",
              "  width: 100%;",
              '  content: "";',
              "  -webkit-filter: blur(5px);",
              "  filter: blur(5px) brightness(0.6);",
              "  z-index: 0;",
              `  background: url("${banner}") no-repeat top center / cover;`,
              "  height: 100%;",
              "}",
            ].join("\n"),
          }}></style>
        <div className={`single-slider-item item-empty`}>
          <div className="diplay-table overlay">
            <div className="display-table-cell" style={{ verticalAlign: "middle", height: "100%" }}>
              <VisibilitySensor>
                {({ isVisible }) => (
                  <div className="container slider-base" style={{ height: "100%" }}>
                    <Row style={{ height: "100%" }}>
                      <Col lg={7} md={7}></Col>
                      <Col
                        lg={4}
                        md={4}
                        sm={12}
                        xs={12}
                        className="slider-container"
                        style={{
                          padding: " 60px 0",
                          backgroundColor: "rgb(0,0,0,0.6)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}>
                        <Row>
                          <Col
                            className="slider-title"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "center",
                              padding: "0 30px",
                            }}>
                            <span className={isVisible ? "opacityOne" : "opacityZero"}>Bienvenue à</span>
                            <h1 className={isVisible ? "opacityOne" : "opacityZero"}>ESPRIT</h1>
                            <p className={isVisible ? "opacityOne" : "opacityZero"}>Se Former Autrement</p>
                          </Col>
                        </Row>
                        <Row>
                          <Col
                            className="slider-button"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              textAlign: "center",
                            }}>
                            <div className="center-wrap"></div>
                          </Col>
                        </Row>
                      </Col>
                      <Col lg={1} md={1}></Col>
                    </Row>
                    <LazyImage
                      src={banner}
                      alt={"Bienvenue à ESPRIT"}
                      className="slider-image"
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "auto",
                        transform: "translateY(-50%)",
                        top: "50%",
                        left: "0",
                        zIndex: "-1",
                        // filter: "brightness(0.5)",
                      }}
                    />
                  </div>
                )}
              </VisibilitySensor>
            </div>
          </div>
        </div>
      </>
    )

  let bannersData = sliders.sort(compareValues("lastUpdateAt", "desc")).map(slider => (
    <div className={`single-slider-item item-${slider._id}`} key={slider._id}>
      <div className="diplay-table overlay">
        <div className="display-table-cell" style={{ verticalAlign: "middle", height: "100%" }}>
          <VisibilitySensor>
            {({ isVisible }) => (
              <div className="container slider-base" style={{ height: "100%" }}>
                <Row style={{ height: "100%" }}>
                  <Col lg={7} md={7}></Col>
                  <Col
                    lg={4}
                    md={4}
                    sm={12}
                    xs={12}
                    className="slider-container"
                    style={{
                      padding: " 60px 0",
                      backgroundColor: "rgb(0,0,0,0.6)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                    }}>
                    <Row>
                      <Col
                        className="slider-title"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                          padding: "0 30px",
                        }}>
                        <span className={isVisible ? "opacityOne" : "opacityZero"}>{slider.titleDescription}</span>
                        <h1 className={isVisible ? "opacityOne" : "opacityZero"}>{slider.title}</h1>
                        <p className={isVisible ? "opacityOne" : "opacityZero"}>{slider.description}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col
                        className="slider-button"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          textAlign: "center",
                        }}>
                        <div className="center-wrap">
                          {slider.url && slider.btnName && (
                            <LinkDuo to={slider.url} className="btn-a">
                              <div className="button">
                                {slider.btnName}
                                <i className="icofont-long-arrow-right" />
                                <div className="mask" />
                              </div>
                            </LinkDuo>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col lg={1} md={1}></Col>
                </Row>
                <LazyImage
                  isWebp={true}
                  children={
                    <style
                      dangerouslySetInnerHTML={{
                        __html: [
                          `.cover-${slider._id} {`,
                          "  position: absolute;",
                          "  width: 100%;",
                          "  -webkit-filter: blur(5px);",
                          "  filter: blur(5px) brightness(0.6);",
                          "  z-index: 0;",
                          "  top: 0;",
                          "  object-fit: cover;",
                          "  height: 100%;",
                          "}",
                        ].join("\n"),
                      }}></style>
                  }
                  src={process.env.REACT_APP_API_URL_UPLOADS + slider.image}
                  alt={slider.title}
                  className="single-image"
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "auto",
                    transform: "translateY(-50%)",
                    top: "50%",
                    left: "0",
                    zIndex: "-1",
                    // filter: "brightness(0.5)",
                  }}
                />
              </div>
            )}
          </VisibilitySensor>
        </div>
      </div>
      <LazyImage
        isWebp={true}
        src={process.env.REACT_APP_API_URL_UPLOADS + slider.image}
        alt={slider.title}
        className={`cover-${slider._id} `}
      />
    </div>
  ))

  const options = {
    className: "owl-theme home-slides pad-60",
    items: 1,
    loop: true,
    autoplay: false,
    nav: true,
    lazyLoad: true,
    dots: false,
    touchDrag: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    navText: [
      '<span class="icofont-rounded-left icofont-4x"></span>',
      '<span class="icofont-rounded-right icofont-4x"></span>',
    ],
  }

  //Thumbs loop END
  return (
    <>
      <OwlCarousel {...options}>{bannersData}</OwlCarousel>
    </>
  )
}
