import { LazyImage } from "components/utils/LazyImage"
import React, { useEffect, useState } from "react"
import Paginator from "react-hooks-paginator"
import Moment from "react-moment"
import noimg from "../../assets/img/noimage.png"
import { queryApi } from "../../utils/queryApi"
import { compareValues } from "../utils/compareByField"
import LinkDuo from "../utils/LinkDuo"

export default function BlogPost() {
  const [currentPage, setCurrentPage] = useState(1)
  const [offset, setOffset] = useState(0)
  const [events, setEvents] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const [res] = await queryApi("events/evenement/esprit/6/" + offset)
      setEvents(res)
    }
    fetchData()
  }, [offset])

  //BlogPost loop start
  function imageExists(img, title) {
    if (img) return <LazyImage isWebp={true} src={`${process.env.REACT_APP_API_URL_UPLOADS}${img}`} alt={title} />
    return <img src={noimg} alt="empty" />
  }

  const eventsData =
    events &&
    events[0].sort(compareValues("createdAt", "desc")).map(ev => (
      <div className="col-md-6 col-lg-6" key={ev._id}>
        <div className="blog-item">
          <div className="flex-content-center">
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
            <p>{ev.description}</p>
          </div>
        </div>
      </div>
    ))

  //BlogPost loop END
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 pagination-area text-center flex-wrap">{eventsData}</div>
        </div>
        <div className="row"></div>
        {events && (
          <Paginator
            totalRecords={events[1]}
            pageLimit={6}
            pageNeighbours={1}
            setOffset={setOffset}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </div>
    </>
  )
}
