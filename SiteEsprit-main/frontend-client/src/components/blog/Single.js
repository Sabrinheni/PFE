import React, { useEffect, useState } from "react"
import ImageGallery from "react-image-gallery"
import "../../assets/css/image-gallery.min.css"
import Moment from "react-moment"
import { useParams } from "react-router-dom"
import noimg from "../../assets/img/noimage.png"
import { queryApi } from "../../utils/queryApi"
import { Col, Row } from "react-bootstrap"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import LinkDuo from "components/utils/LinkDuo"
import { LazyImage } from "components/utils/LazyImage"

export default function Single() {
  const { slug } = useParams()
  // get event by slug passed in params with hook
  const [event, setEvent] = useState(null)
  const [isResult, setIsResult] = useState(false)
  const [error, setError] = useState(null)
  const [galleryImages, setGalleryImages] = useState([])

  useEffect(() => {
    async function fetchData() {
      const [res, err] = await queryApi("event/slug/" + slug)
      if (err) setError(err)
      else {
        setEvent(res)
        setIsResult(true)
        let images = []
        for (const img in res.images) {
          if (res.images.hasOwnProperty(img))
            images.push({
              original: process.env.REACT_APP_API_URL_UPLOADS + res.images[img],
              thumbnail: process.env.REACT_APP_API_URL_UPLOADS + res.images[img],
            })
        }
        setGalleryImages(images)
      }
    }
    fetchData()
    // eslint-disable-next-line
  }, [slug])

  if (error) return <></>

  if (!event && isResult)
    return (
      <>
        <NavBar />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row className="admission-banner flex-content-center">
              <Col md={12} xs={12} style={{ backgroundColor: "#cd2122", borderRadius: "15px", padding: "30px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    margin: "0",
                    textTransform: "uppercase",
                  }}>
                  L'actualité que vous cherchez n'existe pas! Utiliser la barre de recherche pour trouver ce que vous
                  chercher.
                </p>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )
  if (!event && !isResult)
    return (
      <>
        <NavBar />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="container">
            <Row className="admission-banner flex-content-center">
              <Col md={12} xs={12} style={{ backgroundColor: "#cd2122", borderRadius: "15px", padding: "30px" }}>
                <p
                  style={{
                    textAlign: "center",
                    fontWeight: "600",
                    color: "white",
                    margin: "0",
                    textTransform: "uppercase",
                  }}>
                  En cours de chargement...
                </p>
              </Col>
            </Row>
          </div>
        </section>
      </>
    )

  function imageExists(img, title) {
    if (img)
      return (
        <LazyImage
          isWebp={true}
          style={{ width: "100%" }}
          src={`${process.env.REACT_APP_API_URL_UPLOADS}${img}`}
          alt={title}
        />
      )
    return <img src={noimg} alt="empty" />
  }

  return (
    <>
      <MetaHelmet
        meta={{
          title: event.title,
          description: event.description,
          url: "https://esprit.tn/" + event.url,
          type: "article",
          image: event.cover,
          keywords: "article, événement, actualité, esprit ," + event.title.split(" ").join(","),
        }}
      />
      <NavBar
        breadcrumb={{
          Title: <LinkDuo to={"/vie-etudiante/vie-campus/evenements-challenges"}>Nos actualités et événements</LinkDuo>,
          Subtitle: event.title,
        }}
      />
      <section id="blog" className="our-blog extract main-blog" style={{ marginTop: "10%" }}>
        <h1 style={{ display: "none" }}>{event.title}</h1>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="blog-details">
                    <div className="blog-image blog-image-single">{imageExists(event.cover, event.title)}</div>

                    <div className="blog-info">
                      <div className="date-box">
                        <Moment date={event.createdAt} format="DD" />
                        <span className="month">
                          <Moment locale="fr" date={event.createdAt} format="MMM" />
                        </span>
                      </div>
                      <div className="title-meta">
                        <h2>{event.title}</h2>
                      </div>
                    </div>

                    <div className="post-content">
                      <h3>{event.description}</h3>
                    </div>
                    <div className="post-content">
                      <div dangerouslySetInnerHTML={{ __html: event.content }} />
                    </div>
                    {galleryImages.length > 0 && (
                      <div className="post-content">
                        <ImageGallery items={galleryImages} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
