import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import OwlCarousel from "react-owl-carousel"
import { useApi } from "../../hooks/useApi"
import LinkDuo from "../utils/LinkDuo"
import ContentLoader from "react-content-loader"
import { LazyImage } from "components/utils/LazyImage"

export default function Partners() {
  const [partnerships] = useApi("partnershipsHome")

  if (!partnerships || partnerships.length === 0)
    return (
      <>
        <section className="our-partners ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2 text-center">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="section-title">
                    <h2>Partenaires</h2>
                    <p>
                      Nos partenaires académiques, technologiques et industriels sont toujours présents pour nos
                      étudiants.
                    </p>
                    <span className="section-title-bg">Partenaires</span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>

            <div className="row">
              <OwlCarousel
                className="owl-theme partners-slides"
                dots={false}
                margin={100}
                loop={false}
                lazyLoad={true}
                autoplay={false}
                smartSpeed={1000}
                nav={true}
                navText={["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"]}
                responsive={{
                  0: { items: 1 },
                  768: {
                    items: 3,
                  },
                  1200: {
                    items: 5,
                  },
                }}>
                <div className="single-partner-logo">
                  <ContentLoader
                    speed={2}
                    width={160}
                    height={160}
                    viewBox="0 0 160 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="27" y="11" rx="0" ry="0" width="137" height="131" />
                    <rect x="33" y="148" rx="0" ry="0" width="128" height="20" />
                  </ContentLoader>
                </div>
                <div className="single-partner-logo">
                  <ContentLoader
                    speed={2}
                    width={160}
                    height={160}
                    viewBox="0 0 160 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="27" y="11" rx="0" ry="0" width="137" height="131" />
                    <rect x="33" y="148" rx="0" ry="0" width="128" height="20" />
                  </ContentLoader>
                </div>
                <div className="single-partner-logo">
                  <ContentLoader
                    speed={2}
                    width={160}
                    height={160}
                    viewBox="0 0 160 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="27" y="11" rx="0" ry="0" width="137" height="131" />
                    <rect x="33" y="148" rx="0" ry="0" width="128" height="20" />
                  </ContentLoader>
                </div>
                <div className="single-partner-logo">
                  <ContentLoader
                    speed={2}
                    width={160}
                    height={160}
                    viewBox="0 0 160 160"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb">
                    <rect x="27" y="11" rx="0" ry="0" width="137" height="131" />
                    <rect x="33" y="148" rx="0" ry="0" width="128" height="20" />
                  </ContentLoader>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
      </>
    )

  //Partner loop start
  const partnershipsData = partnerships.map(partnership => (
    <div className="single-partner-logo" key={partnership._id}>
      <LinkDuo to={partnership.url} target="_blank" rel="noopener noreferrer" className="logo-preview">
        <LazyImage src={`${process.env.REACT_APP_API_URL_UPLOADS + partnership.image}`} alt={partnership.title} />
        {/* <img src={`${process.env.REACT_APP_API_URL_UPLOADS + partnership.image}`} alt={partnership.title} /> */}
      </LinkDuo>
    </div>
  ))
  //Partner loop END
  return (
    <>
      <section className="our-partners ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>Partenaires</h2>
                  <p>
                    Nos partenaires académiques, technologiques et industriels sont toujours présents pour nos
                    étudiants.
                  </p>
                  <span className="section-title-bg">Partenaires</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row">
            <OwlCarousel
              className="owl-theme partners-slides"
              dots={false}
              loop={false}
              rewind={true}
              margin={100}
              autoplay={true}
              smartSpeed={1000}
              nav={true}
              navText={["<i class='icofont-arrow-left'></i>", "<i class='icofont-arrow-right'></i>"]}
              responsive={{
                0: { items: 1 },
                768: {
                  items: 3,
                },
                1200: {
                  items: 5,
                },
              }}>
              {partnershipsData}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  )
}
