import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import { compareValues } from "../utils/compareByField"
import OwlCarousel from "react-owl-carousel"
import LinkDuo from "../utils/LinkDuo"
import "react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.carousel.min.css"
import "react-owl-carousel/node_modules/owl.carousel/dist/assets/owl.theme.default.min.css"
import { LazyImage } from "components/utils/LazyImage"
export default function Caroussel({ description, title, pressData }) {
  //Press loop start
  const Allpress = pressData.sort(compareValues("createdAt", "desc")).map((press, index) => (
    <div className="team-box" key={index}>
      {press?.image && <LazyImage src={`${process.env.REACT_APP_API_URL_UPLOADS}${press.image}`} alt={press.title} />}
      <div className="box-content">
        <div className="box-inner-content">
          <h3 className="title">{press.title}</h3>
          <span className="post">{press.description && press.description}</span>
          {press?.file && (
            <ul className="icon">
              <li>
                <LinkDuo
                  target="_blank"
                  rel="noopener noreferrer"
                  to={`${process.env.REACT_APP_API_URL_UPLOADS}${press.file}`}>
                  <i className="icofont-download" />
                </LinkDuo>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  ))
  //Team loop END

  const options = {
    className: "owl-theme team-slides",
    dots: false,
    autoplay: false,
    center: false,
    loop: false,
    margin: 30,
    nav: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    navText: ["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"],
    responsive: {
      0: { items: 1 },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  }

  return (
    <>
      <section id="team" className="our-team ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>{title}</h2>
                  {/* <p>{description}</p> */}
                  <span className="section-title-bg">{title}</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row">
            <OwlCarousel {...options}>{Allpress}</OwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
}
