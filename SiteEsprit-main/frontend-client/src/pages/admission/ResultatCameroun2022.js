import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React from "react"
import PropTypes from "prop-types"
import { Col, Row } from "react-bootstrap"
import { ResultatCameroun as meta } from "./AdmissionDictionary"
import { useApi } from "../../hooks/useApi"
export default function ResultatCamerouns() {
    const [ResultatCamerouns] = useApi( "ResultatCamerouns" )
    const Techsession1 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "Techsession1") {
     return (
      <Col key={idx + "Techsession1"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p>
             <div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const  admis1 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "admis1") {
     return (
      <Col key={idx + "admis1"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const rappelJury1 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "rappelJury1") {
     return (
      <Col key={idx + "rappelJury1"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const  listeAdmis1 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "listeAdmis1") {
     return (
      <Col key={idx + "listeAdmis1"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const  listeAttente1 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "listeAttente1") {
     return (
      <Col key={idx + "listeAttente1"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const session234 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "session234") {
     return (
      <Col key={idx + "session234"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const rappelJury234 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "rappelJury234") {
     return (
      <Col key={idx + "rappelJury234"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const  listeAdmis234 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "listeAdmis234") {
     return (
      <Col key={idx + "listeAdmis234"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const esbSession1 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "esbSession1") {
     return (
      <Col key={idx + "esbSession1"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 const esbAdmis1 =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "esbAdmis1") {
     return (
      <Col key={idx + "esbAdmis1"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 
 
 const conclusion =
 ResultatCamerouns &&
 ResultatCamerouns.map(function (ResultatCameroun, idx) {
   if (ResultatCameroun.type === "conclusion") {
     return (
      <Col key={idx + "conclusion"} >

             <p style={{ wordBreak: "break-word" }}>{ResultatCameroun.title}</p><div className="image-boxes-text">{ResultatCameroun.description && ResultatCameroun.description}</div>
         
       </Col>
     )
   }
   return null
 })
 return (
    
      <><MetaHelmet meta={meta} />
      <NavBar breadcrumb={breadcrumb} />
      <section className="our-blog extract main-blog dynamic-margin-no-bg">
     <div className="container">
       <Row>
         <Col md={12} xs={12}>
           <Row>
             <Col style={{ textAlign: "center" }}>
               {Techsession1}
               <CustomHrRed float={"none"} />
             </Col>
           </Row>

           <Row className="margin-top-60">
             <Col md={12}>
               {admis1}

             </Col>
           </Row>
           <Row className="margin-top-60">
             <Col>
               {rappelJury1}

             </Col>
           </Row>
           <Row className="margin-top-60">
             <Col>
               {listeAdmis1}
             </Col>
           </Row>
           <Row className="margin-top-60">
             
               {listeAttente1}
            
           </Row>
           <Row className="margin-top-60">
             <Col md={12}>
               {session234}
             </Col>
           </Row>
           <Row className="margin-top-60">
             <Col>
               {rappelJury234}
             </Col>
           </Row>
           <Row className="margin-top-60">
             <Col>
               {listeAdmis234}
             </Col>

           </Row>
           <Row>
             <Col style={{ textAlign: "center" }}>
               {esbSession1}
             </Col>
           </Row>
           <Row className="margin-top-60">
             <Col>
               {esbAdmis1}

             </Col>
           </Row>
           <Row className="margin-top-60">
             <Col md={12}>
               <p style={{ marginTop: "30px" }}>
                 {conclusion}

               </p>
             </Col>
           </Row>
         </Col>
       </Row>
     </div>
   </section>
   </>
    
  )
}

const breadcrumb = {
  src: "",
  Title: "ESPRIT INGÉNIEUR",
  Subtitle: "Résultat Concours d'admission Cameroun",
}
ResultatCamerouns.propTypes = {
  Title: PropTypes.string,
  Content: PropTypes.string,
}



