import React from "react"
import { getUserFromToken } from "./utils/getUserFromToken"
const currentUser = getUserFromToken()

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"))

// ****************** USER MODULE ******************
const ShowUsers = React.lazy(() => import("./views/modules/user/ShowUsers"))
const UserDetails = React.lazy(() => import("./views/modules/user/UserDetails"))
const UpdateUser = React.lazy(() => import("./views/modules/user/UpdateUser"))
const AddUser = React.lazy(() => import("./views/modules/user/AddUser"))

// ****************** PRESS MODULE ******************
const ShowPresses = React.lazy(() => import("./views/modules/press/ShowPresses"))
const ArchivedPresses = () => <ShowPresses archived={true} />
const AddPress = React.lazy(() => import("./views/modules/press/AddPress"))
const UpdatePress = React.lazy(() => import("./views/modules/press/UpdatePress"))
const DetailsPress = React.lazy(() => import("./views/modules/press/DetailsPress"))

// ****************** Esprit Ingenieur MODULE ******************
const ShowEspritIngenieurs = React.lazy(() => import("./views/modules/EspritIngenieur/ShowEspritIngenieurs"))
const AddEspritIngenieur = React.lazy(() => import("./views/modules/EspritIngenieur/AddEspritIngenieur"))
const UpdateEspritIngenieur = React.lazy(() => import("./views/modules/EspritIngenieur/UpdateEspritIngenieur"))
const DetailsEspritIngenieur = React.lazy(() => import("./views/modules/EspritIngenieur/DetailsEspritIngenieur"))

//****************** ResultatCameroun MODULE ******************
const ShowResultatCamerouns = React.lazy(() => import("./views/modules/ResultatCameroun/ShowResultatCamerouns"))
const AddResultatCameroun = React.lazy(() => import("./views/modules/ResultatCameroun/AddResultatCameroun"))
const UpdateResultatCameroun = React.lazy(() => import("./views/modules/ResultatCameroun/UpdateResultatCameroun"))
const DetailsResultatCameroun = React.lazy(() => import("./views/modules/ResultatCameroun/DetailsResultatCameroun"))


// ****************** EVENTS MODULE ******************
const ShowEvents = React.lazy(() => import("./views/modules/event/ShowEvents"))
const ArchivedEvents = () => <ShowEvents archived={true} />
const AddEvent = React.lazy(() => import("./views/modules/event/AddEvent"))
const UpdateEvent = React.lazy(() => import("./views/modules/event/UpdateEvent"))
const DetailsEvent = React.lazy(() => import("./views/modules/event/DetailsEvent"))

// ****************** SLIDER MODULE ******************
const ShowSliders = React.lazy(() => import("./views/modules/slider/ShowSliders"))
const ArchivedSliders = () => <ShowSliders archived={true} />
const AddSlider = React.lazy(() => import("./views/modules/slider/AddSlider"))
const UpdateSlider = React.lazy(() => import("./views/modules/slider/UpdateSlider"))
const DetailsSlider = React.lazy(() => import("./views/modules/slider/DetailsSlider"))

// ****************** CLUB MODULE ******************
const ShowClubs = React.lazy(() => import("./views/modules/club/ShowClubs"))
const AddClub = React.lazy(() => import("./views/modules/club/AddClub"))
const UpdateClub = React.lazy(() => import("./views/modules/club/UpdateClub"))
const DetailsClub = React.lazy(() => import("./views/modules/club/DetailsClub"))

// ****************** PARTNERSHIP MODULE ******************
const ShowPartnerships = React.lazy(() => import("./views/modules/partnership/ShowPartnerships"))
const AddPartnership = React.lazy(() => import("./views/modules/partnership/AddPartnership"))
const UpdatePartnership = React.lazy(() => import("./views/modules/partnership/UpdatePartnership"))
const DetailsPartnership = React.lazy(() => import("./views/modules/partnership/DetailsPartnership"))

// ****************** TIMETABLE MODULE ******************
const ShowTimeTables = React.lazy(() => import("./views/modules/timetable/ShowTimeTables"))
const ArchivedTimeTables = () => <ShowTimeTables archived={true} />
const AddTimeTable = React.lazy(() => import("./views/modules/timetable/AddTimeTable"))
const UpdateTimeTable = React.lazy(() => import("./views/modules/timetable/UpdateTimeTable"))
const DetailsTimeTable = React.lazy(() => import("./views/modules/timetable/DetailsTimeTable"))

// ****************** UNITS MODULE ******************
const ShowUnits = React.lazy(() => import("./views/modules/unit/ShowUnits"))
const ArchivedUnits = () => <ShowUnits archived={true} />
const AddUnit = React.lazy(() => import("./views/modules/unit/AddUnit"))
const UpdateUnit = React.lazy(() => import("./views/modules/unit/UpdateUnit"))
const DetailsUnit = React.lazy(() => import("./views/modules/unit/DetailsUnit"))

// ****************** TEFTEFAQ MODULE ******************
const ShowTefTefaqs = React.lazy(() => import("./views/modules/teftefaq/ShowTefTefaqs"))
const ArchivedTefTefaqs = () => <ShowTefTefaqs archived={true} />
const AddTefTefaq = React.lazy(() => import("./views/modules/teftefaq/AddTefTefaq"))
const UpdateTefTefaq = React.lazy(() => import("./views/modules/teftefaq/UpdateTefTefaq"))
const DetailsTefTefaq = React.lazy(() => import("./views/modules/teftefaq/DetailsTefTefaq"))

// ****************** FAQ MODULE ******************
const ShowFaqs = React.lazy(() => import("./views/modules/faq/ShowFaqs"))
const AddFaq = React.lazy(() => import("./views/modules/faq/AddFaq"))
const UpdateFaq = React.lazy(() => import("./views/modules/faq/UpdateFaq"))
const DetailsFaq = React.lazy(() => import("./views/modules/faq/DetailsFaq"))

// ****************** RDI MODULE ******************
// ****************** RDITEAM MODULE ******************
const ShowRdis = React.lazy(() => import("./views/modules/rdi/rditeam/ShowRdis"))
const AddRdi = React.lazy(() => import("./views/modules/rdi/rditeam/AddRdi"))
const UpdateRdi = React.lazy(() => import("./views/modules/rdi/rditeam/UpdateRdi"))
const DetailsRdi = React.lazy(() => import("./views/modules/rdi/rditeam/DetailsRdi"))

// ****************** PRODUCTION MODULE ******************
const ShowProductions = React.lazy(() => import("./views/modules/rdi/production/ShowProductions"))
const DetailsProduction = React.lazy(() => import("./views/modules/rdi/production/DetailsProduction"))
const AddProduction = React.lazy(() => import("./views/modules/rdi/production/AddProduction"))

// ****************** MEMBER MODULE ******************
const ShowMembers = React.lazy(() => import("./views/modules/rdi/member/ShowMembers"))
const AddMember = React.lazy(() => import("./views/modules/rdi/member/AddMember"))
const UpdateMember = React.lazy(() => import("./views/modules/rdi/member/UpdateMember"))
const DetailsMember = React.lazy(() => import("./views/modules/rdi/member/DetailsMember"))

// ****************** RDI MODULE ******************
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const rolesString = currentUser?.roles.join("")

let dashboard = { path: "/dashboard", name: "Dashboard", component: Dashboard }

if (currentUser?.rdi) {
  const UpdateRdiLocal = () => <UpdateRdi returnPath={"/dashboard/" + currentUser.rdi} />
  dashboard = {
    path: "/dashboard/:id",
    name: "Dashboard",
    component: UpdateRdiLocal,
  }
}

const routes = [dashboard]
// ****************** USER MODULE ******************
if (currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/user", exact: true, name: "Utilisateur(s)", component: ShowUsers },
    { path: "/user/details/:email", exact: true, name: "Détails", component: UserDetails },
    { path: "/user/update/:id", exact: true, name: "Modifier", component: UpdateUser },
    { path: "/user/add", exact: true, name: "Ajouter", component: AddUser }
  )
}
// ****************** CLUB MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("club") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/club", exact: true, name: "Club(s)", component: ShowClubs },
    { path: "/club/details/:id", exact: true, name: "Détails", component: DetailsClub }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createclub") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/club/add", exact: true, name: "Ajouter", component: AddClub })
}
if (rolesString?.toLocaleLowerCase().includes("updateclub") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/club/update/:id", exact: true, name: "Modifier", component: UpdateClub })
}
// ****************** RDI MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("rdi") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/rdi", exact: true, name: "Rdi(s)", component: ShowRdis },
    { path: "/rdi/details/:id", exact: true, name: "Détails", component: DetailsRdi }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createrdi") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/rdi/add", exact: true, name: "Ajouter", component: AddRdi })
}
if (rolesString?.toLocaleLowerCase().includes("updaterdi") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/rdi/update/:id", exact: true, name: "Modifier", component: UpdateRdi })
}
// ****************** MEMBER MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("member") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/member", exact: true, name: "Member(s)", component: ShowMembers },
    { path: "/member/details/:id", exact: true, name: "Détails", component: DetailsMember }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createmember") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/member/add", exact: true, name: "Ajouter", component: AddMember })
}
if (rolesString?.toLocaleLowerCase().includes("updatemember") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/member/update/:id", exact: true, name: "Modifier", component: UpdateMember })
}
// ****************** PARTNERSHIP MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("partnership") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/partnership", exact: true, name: "Partnership", component: ShowPartnerships },
    { path: "/partnership/details/:id", exact: true, name: "Détails", component: DetailsPartnership }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createpartnership") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/partnership/add", exact: true, name: "Ajouter", component: AddPartnership })
}
if (rolesString?.toLocaleLowerCase().includes("updatepartnership") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/partnership/update/:id", exact: true, name: "Modifier", component: UpdatePartnership })
}
// ****************** EVENT MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("event") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/event", exact: true, name: "Événement(s)", component: ShowEvents },
    { path: "/event/details/:id", exact: true, name: "Détails", component: DetailsEvent }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createevent") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/event/add", exact: true, name: "Ajouter", component: AddEvent })
}
if (rolesString?.toLocaleLowerCase().includes("updateevent") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/event/update/:id", exact: true, name: "Modifier", component: UpdateEvent })
}
if (rolesString?.toLocaleLowerCase().includes("handlearchivedevent") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/event/archived", exact: true, name: "Archivées", component: ArchivedEvents })
}
// ****************** PRESS MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("press") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/press", exact: true, name: "Presse(s)", component: ShowPresses },
    { path: "/press/details/:id", exact: true, name: "Détails", component: DetailsPress }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createpress") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/press/add", exact: true, name: "Ajouter", component: AddPress })
}
if (rolesString?.toLocaleLowerCase().includes("updatepress") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/press/update/:id", exact: true, name: "Modifier", component: UpdatePress })
}
if (rolesString?.toLocaleLowerCase().includes("handlearchivedpress") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/press/archived", exact: true, name: "Archivées", component: ArchivedPresses })
}

// ****************** Esprit Ingenieur MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("Esprit Ingenieur") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/EspritIngenieur", exact: true, name: "Esprit Ingenieur", component: ShowEspritIngenieurs },
    { path: "/EspritIngenieur/details/:id", exact: true, name: "Détails", component: DetailsEspritIngenieur }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createEspritIngenieur") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/EspritIngenieur/add", exact: true, name: "Ajouter", component: AddEspritIngenieur })
}
if (rolesString?.toLocaleLowerCase().includes("updateEspritIngenieur") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/EspritIngenieur/update/:id", exact: true, name: "Modifier", component: UpdateEspritIngenieur })
}

// ****************** Resultat Cameroun MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("ResultatCameroun") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/ResultatCameroun", exact: true, name: "Resultat Cameroun", component: ShowResultatCamerouns },
    { path: "/ResultatCameroun/details/:id", exact: true, name: "Détails", component: DetailsResultatCameroun }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createResultatCameroun") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/ResultatCameroun/add", exact: true, name: "Ajouter", component: AddResultatCameroun })
}
if (rolesString?.toLocaleLowerCase().includes("updateResultatCameroun") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/ResultatCameroun/update/:id", exact: true, name: "Modifier", component: UpdateResultatCameroun })
}
// ****************** SLIDER MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("slider") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/slider", exact: true, name: "Slider(s)", component: ShowSliders },
    { path: "/slider/details/:id", exact: true, name: "Détails", component: DetailsSlider }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createslider") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/slider/add", exact: true, name: "Ajouter", component: AddSlider })
}
if (rolesString?.toLocaleLowerCase().includes("updateslider") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/slider/update/:id", exact: true, name: "Modifier", component: UpdateSlider })
}
if (rolesString?.toLocaleLowerCase().includes("handlearchivedslider") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/slider/archived", exact: true, name: "Archivés", component: ArchivedSliders })
}
// ****************** TIMETABLE MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("timetable") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/timetable", exact: true, name: "Calendrier(s)", component: ShowTimeTables },
    { path: "/timetable/details/:id", exact: true, name: "Détails", component: DetailsTimeTable }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createtimetable") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/timetable/add", exact: true, name: "Ajouter", component: AddTimeTable })
}
if (rolesString?.toLocaleLowerCase().includes("updatetimetable") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/timetable/update/:id", exact: true, name: "Modifier", component: UpdateTimeTable })
}
if (rolesString?.toLocaleLowerCase().includes("handlearchivedtimetable") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/timetable/archived", exact: true, name: "Archivés", component: ArchivedTimeTables })
}
// ****************** TEFTEFAQ MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("teftefaq") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/teftefaq", exact: true, name: "TEF TEFAQ(s)", component: ShowTefTefaqs },
    { path: "/teftefaq/details/:id", exact: true, name: "Détails", component: DetailsTefTefaq }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createteftefaq") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/teftefaq/add", exact: true, name: "Ajouter", component: AddTefTefaq })
}
if (rolesString?.toLocaleLowerCase().includes("updateteftefaq") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/teftefaq/update/:id", exact: true, name: "Modifier", component: UpdateTefTefaq })
}
if (rolesString?.toLocaleLowerCase().includes("handlearchivedteftefaq") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/teftefaq/archived", exact: true, name: "Archivés", component: ArchivedTefTefaqs })
}
// ****************** UNIT MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("unit") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/unit", exact: true, name: "Unité(s) d'enseignement", component: ShowUnits },
    { path: "/unit/details/:id", exact: true, name: "Détails", component: DetailsUnit }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createunit") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/unit/add", exact: true, name: "Ajouter", component: AddUnit })
}
if (rolesString?.toLocaleLowerCase().includes("updateunit") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/unit/update/:id", exact: true, name: "Modifier", component: UpdateUnit })
}
if (rolesString?.toLocaleLowerCase().includes("handlearchivedunit") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/unit/archived", exact: true, name: "Archivés", component: ArchivedUnits })
}

// ****************** FAQ MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("faq") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/faq", exact: true, name: "Faq(s)", component: ShowFaqs },
    { path: "/faq/details/:id", exact: true, name: "Détails", component: DetailsFaq }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createfaq") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/faq/add", exact: true, name: "Ajouter", component: AddFaq })
}
if (rolesString?.toLocaleLowerCase().includes("updatefaq") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/faq/update/:id", exact: true, name: "Modifier", component: UpdateFaq })
}

// ****************** PRODUCTION MODULE ******************
if (rolesString?.toLocaleLowerCase().includes("production") || currentUser?.roles.includes("admin")) {
  routes.push(
    { path: "/production", exact: true, name: "Productions", component: ShowProductions },
    { path: "/production/details/:id", exact: true, name: "Détails", component: DetailsProduction }
  )
}
if (rolesString?.toLocaleLowerCase().includes("createproduction") || currentUser?.roles.includes("admin")) {
  routes.push({ path: "/production/add", exact: true, name: "Ajouter", component: AddProduction })
}

export default routes
