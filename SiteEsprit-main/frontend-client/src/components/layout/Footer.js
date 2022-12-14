import React from "react"

import LinkDuo from "../utils/LinkDuo"

export default function Footer() {
  //Default Props
  const props = {
    copyrightText: "2022 © All Rights Reserved. Created By ",
    createdBy: "ESPRIT",
    socialTitle: "SUIVEZ-NOUS:",
    FacebookLink: "https://www.facebook.com/esprit.tn",
    InstagramLink: "https://www.instagram.com/esprit_ingenieur/",
    TwitterLink: "https://twitter.com/Esprit_News",
    YoutubeLink: "https://www.youtube.com/channel/UCJ5wuQ9AQYtpf9Arieu3iXA",
    linkedinLink: "https://www.linkedin.com/company/esprit_2",
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <p className="copyright">
              {props.copyrightText}
              <span style={{ color: "white", fontWeight: "500" }}>{props.createdBy}</span>
            </p>
          </div>
          <div className="col-md-3">
            <p className="copyright contact-text">
              <LinkDuo to={"/contact"}>Contactez-nous</LinkDuo>
            </p>
          </div>
          <div className="col-md-5">
            <div className="social-icons bottom">
              <ul className="list-inline">
                <li>{props.socialTitle} </li>
                <li>
                  <LinkDuo to={props.FacebookLink}>
                    <i className="icofont-facebook" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to={props.InstagramLink}>
                    <i className="icofont-instagram" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to={props.TwitterLink}>
                    <i className="icofont-twitter" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to={props.YoutubeLink}>
                    <i className="icofont-youtube" />
                  </LinkDuo>
                </li>
                <li>
                  <LinkDuo to={props.linkedinLink}>
                    <i className="icofont-linkedin" />
                  </LinkDuo>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
