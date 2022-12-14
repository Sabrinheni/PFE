import React, { createRef, useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import ScrollAnimation from "react-animate-on-scroll"
import { Row, Col, Container } from "react-bootstrap"
import { TwitterTimelineEmbed } from "react-twitter-embed"

export default function SocialMedia() {
  const [showTwitter, setShowTwitter] = useState(false)
  const [showFacebook, setShowFacebook] = useState(false)

  const twitterContainer = createRef()
  const facebookContainer = createRef()

  const twitterObserver = new IntersectionObserver(onTwitterIntersection, {
    rootMargin: "100px 0px",
    threshold: 0.25,
  })

  const facebookObserver = new IntersectionObserver(onFacebookIntersection, {
    rootMargin: "100px 0px",
    threshold: 0.25,
  })

  useEffect(() => {
    if (window && "IntersectionObserver" in window) {
      if (twitterContainer && twitterContainer.current) {
        twitterObserver.observe(twitterContainer.current)
      }
    } else {
      setShowTwitter(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [twitterContainer])

  function onTwitterIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return
    }

    if (entries[0].isIntersecting) {
      setShowTwitter(true)
      twitterObserver.disconnect()
    }
  }

  useEffect(() => {
    if (window && "IntersectionObserver" in window) {
      if (facebookContainer && facebookContainer.current) {
        facebookObserver.observe(facebookContainer.current)
      }
    } else {
      setShowFacebook(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facebookContainer])

  function onFacebookIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return
    }

    if (entries[0].isIntersecting) {
      setShowFacebook(true)
      facebookObserver.disconnect()
    }
  }

  return (
    <>
      <section className="fun-facts">
        <Container>
          <Row style={{ margin: "30px 0" }}>
            <Col lg={{ size: 12 }} className="text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>Suivez Nous</h2>
                  <p>Suivez Nous</p>
                  <span className="section-title-bg">Suivez Nous</span>
                </div>
              </ScrollAnimation>
            </Col>
          </Row>
          <Row style={{ display: "flex", placeContent: "center" }}>
            <Col style={{ display: "flex", placeContent: "center" }} md={6} xs={12}>
              <section
                ref={twitterContainer}
                style={{ display: "flex", alignItems: "center" }}
                className="twitterContainer">
                <div className="twitter-embed">
                  {showTwitter ? (
                    <TwitterTimelineEmbed
                      sourceType="profile"
                      screenName="Esprit_News"
                      options={{
                        tweetLimit: "1",
                        width: "100%",
                        height: "100%",
                      }}
                      theme="dark"
                      noHeader={false}
                      noBorders={true}
                      noFooter={false}></TwitterTimelineEmbed>
                  ) : (
                    <Spinner
                      animation="border"
                      role="status"
                      variant="danger"
                      style={{ width: "8rem", height: "8rem" }}
                    />
                  )}
                </div>
              </section>
            </Col>
            <Col style={{ display: "flex", placeContent: "center" }} md={6} xs={12}>
              <section
                className="twitterContainer"
                ref={facebookContainer}
                style={{ display: "flex", alignItems: "center" }}>
                <div className="twitter-embed">
                  {showFacebook ? (
                    <iframe
                      title="facebook feed"
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fesprit.tn&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&colorscheme=dark&hide_cover=false&show_facepile=true&appId=247743375278472"
                      width="100%"
                      height="100%"
                      style={{
                        border: "none",
                        overflow: "hidden",
                        width: "100%",
                        minHeight: "450px",
                        minWidth: "340px",
                      }}
                      scrolling="no"
                      frameBorder="0"
                      allowTransparency="true"
                      allow="encrypted-media"></iframe>
                  ) : (
                    <Spinner
                      animation="border"
                      role="status"
                      variant="danger"
                      style={{ width: "8rem", height: "8rem" }}
                    />
                  )}
                </div>
              </section>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
