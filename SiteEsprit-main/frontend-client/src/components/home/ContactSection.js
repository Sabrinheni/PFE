import React from "react"
import ScrollAnimation from "react-animate-on-scroll"
import ContactForm from "components/sections/Contact"

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2>{defaultProps.sectionTitle}</h2>
                  <p>{defaultProps.sectionDescription}</p>
                  <span className="section-title-bg">{defaultProps.SectionbgTitle}</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
        <ContactForm></ContactForm>
      </section>
    </>
  )
}

//Default Props
const defaultProps = {
  SectionbgTitle: "Contact",
  sectionTitle: "Contactez-nous",
  sectionDescription: "Envoyez vos questions ou vos suggestions pour qu'on puisse rester à votre écoute.",
  AddTitle: "Adresse",
  Address: "1, 2 rue André Ampère - 2083 - Pôle Technologique - El Ghazala.",
  EmailTitle: "Email",
  Email: "contact@esprit.tn",
  PhoneTitle: "Téléphone",
  Phone: "T (216) 70 250 000",
}
