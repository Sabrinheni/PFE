import React, { useState } from "react"
import Moment from "react-moment"
import noimg from "../../assets/img/noimage.png"
import LinkDuo from "../utils/LinkDuo"
import { LazyImage } from "components/utils/LazyImage"

export default function SingleNews({ ev }) {
  const [showAll, setShowAll] = useState(false)

  function handleShow() {
    setShowAll(true)
  }

  function handleHide() {
    setShowAll(false)
  }

  function imageExists(img, title) {
    if (img) return <LazyImage isWebp={true} src={`${process.env.REACT_APP_API_URL_UPLOADS}${img}`} alt={title} />
    return <img src={noimg} alt="empty" />
  }

  return (
    <div className="col-md-6 col-lg-6" key={ev._id}>
      <div className="blog-item">
        <div className="blog-image">
          {ev.url ? (
            <LinkDuo to={ev.url} className="blog-img">
              {imageExists(ev.cover, ev.title)}
            </LinkDuo>
          ) : (
            <div className="blog-img">{imageExists(ev.cover, ev.title)}</div>
          )}
        </div>

        <div className="blog-info">
          <div className="date-box">
            <Moment date={ev.createdAt} format="DD" />
            <span className="month">
              <Moment locale="fr" date={ev.createdAt} format="MMM" />
            </span>
          </div>
          <div className="title-meta">
            <h2>{ev.url ? <LinkDuo to={ev.url}>{ev.title}</LinkDuo> : ev.title}</h2>
            <div className="post-meta">
              <ul>
                <li>
                  <i className="icofont-funky-man" style={{ visibility: "hidden" }} />
                  {/* Posted By: {ev.userCreated.username ?? "Unknown"} */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="post-content">
          {showAll ? (
            ev.description && <p>{ev.description}</p>
          ) : (
            <p>
              {ev.description && ev.description.length > 140 ? (
                <>
                  {ev.description.substr(0, 140) + "..."}
                  <span onClick={handleShow} style={{ color: "#ed1c24" }}>
                    &nbsp;lire la suite
                  </span>
                </>
              ) : (
                <>
                  {ev.description && ev.description.length < 140 ? (
                    <>{ev.description}</>
                  ) : (
                    <>
                      {ev.description}
                      <span onClick={handleHide} style={{ color: "#ed1c24" }}>
                        &nbsp;lire moins
                      </span>
                    </>
                  )}
                </>
              )}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
