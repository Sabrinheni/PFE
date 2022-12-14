import "animate.css/animate.min.css"
//Package CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import { SideButton } from "components/CustomElements/SideButton"
import React, { Component, Suspense } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import uuid from "uuid"
//Template CSS Style
import "./assets/css/responsive.css"
import "../src/style.min.css"
import "./assets/css/color/color-red.min.css"
import "./assets/css/responsive.min.css"
import "./assets/icofont/icofont.min.css"
import MessengerCustomerChat from "react-messenger-customer-chat"
//EspritRDI
const Sampathkumar = React.lazy(() => import("./pages/rdi/Sam"))
const LanUmek = React.lazy(() => import("./pages/rdi/LanUmek"))
const BadreddineOuali = React.lazy(() => import("./pages/rdi/BadreddineOuali"))
const BilelJamoussi = React.lazy(() => import("./pages/rdi/BilelJamoussi"))
const HarunaChiroma = React.lazy(() => import("./pages/rdi/HarunaChiroma"))
const HichemTurki = React.lazy(() => import("./pages/rdi/HichemTurki"))
const MohamedLouadi = React.lazy(() => import("./pages/rdi/MohamedLouadi"))
const MouradZerai = React.lazy(() => import("./pages/rdi/MouradZerai"))
const SamirHamza = React.lazy(() => import("./pages/rdi/SamirHamza"))
const LobnaKaroui = React.lazy(() => import("./pages/rdi/Lobna"))
const Honoris = React.lazy(() => import("./pages/esprit/Honoris"))
const ActuPage = React.lazy(() => import("./pages/vieetudiante/viecampus/ActuPage"))
const Contact = React.lazy(() => import("./pages/Contact"))
const ResultatCameroun = React.lazy(() => import("./pages/admission/ResultatCameroun"))
const ResultatCameroun2021 = React.lazy(() => import("./pages/admission/ResultatCameroun2021"))
const ResultatCameroun2022 = React.lazy(() => import("./pages/admission/ResultatCameroun2022"))
const Footer = React.lazy(() => import("./components/layout/Footer"))
const ScrollUpBtn = React.lazy(() => import("./components/layout/ScrollUp"))
const Home = React.lazy(() => import("./pages/Home"))
const SingleBlog = React.lazy(() => import("./pages/SingleBlog"))
const Clubs = React.lazy(() => import("./pages/vieetudiante/viecampus/Clubs"))
// Esprit
// const MotDuPresident = React.lazy(() => import("./pages/esprit/MotDuPresident"))
const ValeursEcole = React.lazy(() => import("./pages/esprit/ValeursEcole"))
const Ambassadeurs = React.lazy(() => import("./pages/espritEmbassadeurs/vieaesprit"))
const LePlusDEsprit = React.lazy(() => import("./pages/esprit/LePlusDEsprit"))
// const GouvernanceStrategique = React.lazy(() => import("./pages/esprit/GouvernanceStrategique"))
const ServicesEcole = React.lazy(() => import("./pages/esprit/ServicesEcole"))
const PolitiqueQualite = React.lazy(() => import("./pages/esprit/PolitiqueQualite"))
const SalleDePresse = React.lazy(() => import("./pages/esprit/SalleDePresse"))
// Admission
const EspritIngenieur = React.lazy(() => import("./pages/admission/EspritIngenieur"))
const EspritAlternance = React.lazy(() => import("./pages/admission/EspritAlternance"))
const FAQ = React.lazy(() => import("./pages/admission/FAQ"))
const EspritPrepa = React.lazy(() => import("./pages/admission/EspritPrepa"))
// Formation
// Esprit Ingenieur
const PresentationIngenieur = React.lazy(() => import("./pages/formations/espritingenieur/PresentationIngenieur"))
const InternationalDegreeProgram = React.lazy(() =>
  import("./pages/InternationalDegreeProgram/InternationalDegreeProgram")
)
const StudentSupportUnit = React.lazy(() => import("./pages/InternationalDegreeProgram/StudentSupportUnit"))
const ContactInformationIntl = React.lazy(() => import("./pages/InternationalDegreeProgram/Contact-information-intl"))
const AdmissionsIntl = React.lazy(() => import("./pages/InternationalDegreeProgram/Admission"))
const Partners = React.lazy(() => import("./pages/InternationalDegreeProgram/Partners"))
const AboutEsprit = React.lazy(() => import("./pages/InternationalDegreeProgram/AboutEsprit"))
const Curriculum = React.lazy(() => import("./pages/InternationalDegreeProgram/Curriculum"))
const AboutFaculty = React.lazy(() => import("./pages/InternationalDegreeProgram/AboutFaculty"))
const ReglementScolaire = React.lazy(() => import("./pages/formations/espritingenieur/ReglementScolaire"))
const LanguesEtDev = React.lazy(() => import("./pages/formations/espritingenieur/LanguesEtDev"))
const SpecialiteEtOptions = React.lazy(() => import("./pages/formations/espritingenieur/SpecialiteEtOptions"))
const StagesIngenieur = React.lazy(() => import("./pages/formations/espritingenieur/StagesIngenieur"))
const CalendrierExamen = React.lazy(() => import("./pages/formations/espritingenieur/CalendrierExamen"))
const Contactinfo = React.lazy(() => import("./pages/InternationalDegreeProgram/Contact"))
const CateringAccomodation = React.lazy(() => import("./pages/vieetudiante/rentreescolaire/CateringAccomodation"))
// Esprit Prepa
const ClasseMPSI = React.lazy(() => import("./pages/formations/espritprepa/ClasseMPSI"))
// Formation Continue
const CoursDuSoir = React.lazy(() => import("./pages/formations/formationcontinue/CoursDuSoir"))
const ExecutiveMBA = React.lazy(() => import("./pages/formations/formationcontinue/ExecutiveMBA"))
// Entreprises
const EspritEntreprise = React.lazy(() => import("./pages/entreprises/EspritEntreprise"))
const FormationCertifiante = React.lazy(() => import("./pages/entreprises/FormationCertifiante"))
const APTIS = React.lazy(() => import("./pages/entreprises/espritlanguagecenter/APTIS"))
const PresentationELC = React.lazy(() => import("./pages/entreprises/espritlanguagecenter/PresentationELC"))
const TEFTFAQ = React.lazy(() => import("./pages/entreprises/espritlanguagecenter/TEFTFAQ"))
// International
const Experience = React.lazy(() => import("./pages/international/Experience"))
const Partenariats = React.lazy(() => import("./pages/international/Partenariat"))
const VenirAEsprit = React.lazy(() => import("./pages/international/VenirAEsprit"))
// Vie Etudiante
const EspritFondation = React.lazy(() => import("./pages/vieetudiante/rentreescolaire/EspritFondation"))
const LogementRestauration = React.lazy(() => import("./pages/vieetudiante/rentreescolaire/LogementRestauration"))
const EventsPage = React.lazy(() => import("./pages/vieetudiante/viecampus/EventsPage"))
const Infrastructure = React.lazy(() => import("./pages/vieetudiante/viecampus/Infrastructure"))
const CelluleEcoute = React.lazy(() => import("./pages/vieetudiante/CelluleEcoute"))
const PresentationVieEtudiante = React.lazy(() => import("./pages/vieetudiante/PresentationVieEtudiante"))
const ContactEtInfo = React.lazy(() => import("./pages/admission/ContactEtInfo"))
const Procedure = React.lazy(() => import("./pages/admission/Procedure"))
const Search = React.lazy(() => import("./pages/Search"))
const Evenements = React.lazy(() => import("./pages/rdi/Evenements"))

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <section className="route-section">
            <Suspense
              fallback={
                <>
                  <svg className="spinner" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                  </svg>
                  <style
                    dangerouslySetInnerHTML={{
                      __html: [
                        "   html,body {",
                        "  height: 100%;",
                        "   background-image: linear-gradient(-105deg, #cd2122, #212529) !important;",
                        "}",
                      ].join("\n"),
                    }}></style>
                </>
              }>
              <Switch>
                <Route path="/evenements" render={props => <Evenements {...props} />} />
                <Route path="/recherche/:keyword" render={props => <Search key={uuid()} {...props} />} />
                <Route path="/actualite/:slug" render={props => <SingleBlog key={uuid()} {...props} />} />
                <Route path="/clubs" render={props => <Clubs {...props} />} />
                <Route path="/contact" render={props => <Contact {...props} />} />
                {/* <Route path="/esprit/mot-du-president" render={props => <MotDuPresident {...props} />} /> */}
                <Route path="/esprit/honoris-united-universities" render={props => <Honoris {...props} />} />
                <Route path="/esprit/valeurs" render={props => <ValeursEcole {...props} />} />
                <Route path="/esprit/les-plus-esprit" render={props => <LePlusDEsprit {...props} />} />
                {/* <Route path="/esprit/gouvernance/strategique" render={props => <GouvernanceStrategique {...props} />} /> */}
                <Route path="/esprit/gouvernance/services-esprit" render={props => <ServicesEcole {...props} />} />
                <Route path="/esprit/politique-qualite" render={props => <PolitiqueQualite {...props} />} />
                <Route path="/esprit/salle-de-presse" render={props => <SalleDePresse {...props} />} />
                {/* Esprit Routes */}
                {/* Admission Routes */}
                <Route path="/admission/esprit-prepa" render={props => <EspritPrepa {...props} />} />
                <Route path="/admission/resultat-cameroun" render={props => <ResultatCameroun {...props} />} />
                <Route path="/admission/resultat-cameroun-2021" render={props => <ResultatCameroun2021 {...props} />} />
                <Route path="/admission/resultat-cameroun-2022" render={props => <ResultatCameroun2022 {...props} />} />
                <Route path="/admission/esprit-alternance" render={props => <EspritAlternance {...props} />} />
                <Route path="/admission/faq" render={props => <FAQ {...props} />} />
                <Route path="/admission/esprit-ingenieur" render={props => <EspritIngenieur {...props} />} />
                <Route path="/admission/contact-et-info" render={props => <ContactEtInfo {...props} />} />
                <Route path="/admission/procedure" render={props => <Procedure {...props} />} />
                {/* Admission Routes */}
                {/* Formation Routes*/}
                <Route
                  path="/formation/esprit-ingenieur/presentation"
                  render={props => <PresentationIngenieur {...props} />}
                />
                <Route
                  path="/formation/esprit-ingenieur/calendrier-examens"
                  render={props => <CalendrierExamen {...props} />}
                />
                <Route
                  path="/formation/esprit-ingenieur/langues-dev-personnel"
                  render={props => <LanguesEtDev {...props} />}
                />
                <Route path="/InternationalDegreeProgram" render={props => <InternationalDegreeProgram {...props} />} />
                <Route path="/AboutEsprit" render={props => <AboutEsprit {...props} />} />
                <Route path="/StudentSupportUnit" render={props => <StudentSupportUnit {...props} />} />
                <Route path="/AboutFaculty" render={props => <AboutFaculty {...props} />} />
                <Route path="/Partners" render={props => <Partners {...props} />} />
                <Route path="/Admissions" render={props => <AdmissionsIntl {...props} />} />
                <Route path="/Catering-Accomodation" render={props => <CateringAccomodation {...props} />} />
                <Route path="/StudyProgram" render={props => <Curriculum {...props} />} />
                <Route path="/Contact-information" render={props => <Contactinfo {...props} />} />
                <Route path="/ContactInformation" render={props => <ContactInformationIntl {...props} />} />
                <Route
                  path="/formation/esprit-ingenieur/specialites-et-options"
                  render={props => <SpecialiteEtOptions {...props} />}
                />
                <Route path="/formation/esprit-ingenieur/stages" render={props => <StagesIngenieur {...props} />} />
                <Route
                  path="/formation/esprit-ingenieur/reglement-scolaire"
                  render={props => <ReglementScolaire {...props} />}
                />
                <Route path="/formation/espritPrepa/classeMPSI" render={props => <ClasseMPSI {...props} />} />
                <Route
                  path="/formation/formation-continue/cours-du-soir"
                  render={props => <CoursDuSoir {...props} />}
                />
                <Route path="/EMBA" render={props => <ExecutiveMBA {...props} />} />
                {/* Formation Routes*/}
                {/* Entreprise Routes*/}
                <Route path="/entreprise/Esprit-Language-Center/APTIS" render={props => <APTIS {...props} />} />
                <Route
                  path="/entreprise/Esprit-Language-Center/presentation"
                  render={props => <PresentationELC {...props} />}
                />
                <Route path="/entreprise/Esprit-Language-Center/TEFTFAQ" render={props => <TEFTFAQ {...props} />} />
                <Route path="/entreprise/esprit-entreprise" render={props => <EspritEntreprise {...props} />} />
                <Route path="/entreprise/fondation" render={props => <EspritFondation {...props} />} />
                <Route path="/entreprise/stages" render={props => <StagesIngenieur {...props} />} />
                <Route path="/entreprise/formation-certifiante" render={props => <FormationCertifiante {...props} />} />
                {/* Entreprise Routes*/}
                {/* International Routes*/}
                <Route path="/international/experience" render={props => <Experience {...props} />} />
                <Route path="/international/partenariats" render={props => <Partenariats {...props} />} />
                <Route path="/international/venir-a-esprit" render={props => <VenirAEsprit {...props} />} />
                {/* International Routes*/}
                {/* Vie Etudiante Routes*/}
                <Route
                  path="/vie-etudiante/rentree-scolaire/espritfondation"
                  render={props => <EspritFondation {...props} />}
                />
                <Route
                  path="/vie-etudiante/rentree-scolaire/inscription"
                  render={props => <VenirAEsprit {...props} />}
                />
                <Route
                  path="/vie-etudiante/rentree-scolaire/logement-restauration"
                  render={props => <LogementRestauration {...props} />}
                />
                <Route path="/vie-etudiante/vie-campus/clubs" render={props => <Clubs {...props} />} />
                <Route
                  path="/vie-etudiante/vie-campus/evenements-challenges"
                  render={props => <EventsPage {...props} />}
                />
                <Route path="/vie-etudiante/vie-campus/actualites" render={props => <ActuPage {...props} />} />
                <Route
                  path="/vie-etudiante/vie-campus/infrastructure"
                  render={props => <Infrastructure {...props} />}
                />
                <Route path="/Sampathkumar-Veeraraghavan" render={props => <Sampathkumar {...props} />} />
                <Route path="/LanUmek" render={props => <LanUmek {...props} />} />
                <Route path="/BadreddineOuali" render={props => <BadreddineOuali {...props} />} />
                <Route path="/BilelJamoussi" render={props => <BilelJamoussi {...props} />} />
                <Route path="/HarunaChiroma" render={props => <HarunaChiroma {...props} />} />
                <Route path="/HichemTurki" render={props => <HichemTurki {...props} />} />
                <Route path="/MohamedLouadi" render={props => <MohamedLouadi {...props} />} />
                <Route path="/MouradZerai" render={props => <MouradZerai {...props} />} />
                <Route path="/SamirHamza" render={props => <SamirHamza {...props} />} />
                <Route path="/LobnaKaroui" render={props => <LobnaKaroui {...props} />} />
                <Route path="/vie-etudiante/cellule-ecoute" render={props => <CelluleEcoute {...props} />} />
                <Route path="/vie-etudiante/presentation" render={props => <PresentationVieEtudiante {...props} />} />
                <Route path="/admission/ambassadeurs" render={props => <Ambassadeurs {...props} />} />
                {/* Vie Etudiante Routes*/}
                <Route path="/" exact render={() => <Home />} />
                <Redirect to="/" />
              </Switch>
              <Footer />
              <ScrollUpBtn />
              {/* <MessengerCustomerChat pageId="100263982262006" appId="192175696094624" /> */}
              <SideButton />
            </Suspense>
          </section>
          {/* </CSSTransition> */}
        </div>
      </BrowserRouter>
    )
  }
}
