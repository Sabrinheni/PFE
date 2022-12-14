import React, { createRef, useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"

export default function Partners() {
  const [showVideo, setShowVideo] = useState(false)

  const container = createRef()

  const videoObserver = new IntersectionObserver(onVideoIntersection, {
    rootMargin: "100px 0px",
    threshold: 0.25,
  })

  useEffect(() => {
    if (window && "IntersectionObserver" in window) {
      if (container && container.current) {
        videoObserver.observe(container.current)
      }
    } else {
      setShowVideo(true)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [container])

  function onVideoIntersection(entries) {
    if (!entries || entries.length <= 0) {
      return
    }

    if (entries[0].isIntersecting) {
      setShowVideo(true)
      videoObserver.disconnect()
    }
  }

  return (
    <>
      <section className="our-partners" style={{ paddingTop: "0px!important", paddingBottom: "75px" }}>
        <div style={{ display: "flex", placeContent: "center", height: "400px", alignItems: "center" }}>
          <div ref={container}>
            {showVideo ? (
              <iframe
                className="youtube-video"
                title="Video esprit"
                src="https://www.youtube.com/embed/wHMWYD-Yhrs?version=3&rel=0&autoplay=1&loop=1&mute=1&controls=0&playlist=wHMWYD-Yhrs"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; loop;"
                allowFullScreen></iframe>
            ) : (
              <Spinner animation="border" role="status" variant="danger" style={{ width: "10rem", height: "10rem" }} />
            )}
          </div>
        </div>
      </section>
    </>
  )
}
