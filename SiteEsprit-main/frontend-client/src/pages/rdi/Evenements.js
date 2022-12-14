import { CustomHrRed } from "components/CustomElements/CustomHrRed"
import NavBar from "components/layout/NavBar"
import MetaHelmet from "components/MetaHelmet"
import React, { Component } from "react"
import { Col, Row } from "react-bootstrap"
import { EspritTech as meta } from "./RDIDictionary"
import bilel from "../../assets/img/bilel.png"
import sam from "../../assets/img/sam.png"
import lan from "../../assets/img/lan.png"
import mekki from "../../assets/img/mekki.png"
import khaled from "../../assets/img/khaled.png"
import faouzi from "../../assets/img/faouzi.png"
import lamjed from "../../assets/img/lamjed.png"
import karim from "../../assets/img/karim.png"
import manel from "../../assets/img/manel.png"
import syrine from "../../assets/img/syrine.png"
import yosr from "../../assets/img/yosr.png"
import Badreddine from "../../assets/img/Badreddine.png"
import Hichem from "../../assets/img/Hichem.png"
import mohamed from "../../assets/img/mohamed.png"
import samir from "../../assets/img/samir.png"
import haruna from "../../assets/img/haruna.png"
import mourad from "../../assets/img/mourad.png"
import Lobna from "../../assets/img/lobna.png"
import Conference from "../../assets/img/conference.jpg"
import LinkDuo from "components/utils/LinkDuo"
import Countdown from "pages/rdi/Countdown"
import "./evenements.css"

export default class QuiSommesNous extends Component {
  render() {
    const currentDate = new Date()
    const year =
      currentDate.getMonth() === 11 && currentDate.getDate() > 23
        ? currentDate.getFullYear() + 1
        : currentDate.getFullYear()
    return (
      <>
        <MetaHelmet meta={meta} />
        <NavBar breadcrumb={breadcrumb} />
        <section className="our-blog extract main-blog dynamic-margin-no-bg">
          <div className="containerr">
            <Row>
              <Col>
                <div class="containerr">
                  <center>
                    <img src={Conference} alt="empty" width="900" height="400" />

                    <Countdown date={`${year}-07-28T09:00:00`} />
                  </center>
                </div>
              </Col>
            </Row>
            <div>
              <div>
                <Row>
                  <Col>
                    <h4>Background</h4>
                    <CustomHrRed />
                  </Col>
                </Row>
                <p>
                  Despite ongoing vaccination rollouts, strict travel restrictions and other lockdown measures, the
                  COVID-19 pandemic has evolved from a health crisis towards a world-wide, unprecedented, and most
                  likely a long-lasting socio-economic crisis. Smart technologies and innovations, based for instance on
                  AI, IoT, big data, robotics, drones, 5G, blockchain, nanotechnology, and 3D printing, can potentially
                  play an important role in enhancing our preparedness in preventing, adapting to, and recovering from
                  the COVID-19 pandemic.
                </p>
                <Row>
                  <Col>
                    <h4>Objectives</h4>
                    <CustomHrRed />
                  </Col>
                </Row>
                <div>
                  <ul>
                    <li>
                      Provide a discussion forum for local / international experts and interested parties to discuss and
                      share their research findings, insights, ongoing projects, lessons-learned, and the challenges
                      encountered when adopting smart innovative technologies in the ongoing fight against COVID-19.{" "}
                    </li>
                    <li>Two main areas of potential discussions were identified: </li>
                  </ul>
                </div>
                <ol>
                  <li>
                    Using smart technologies and innovations to enhance our readiness to cope with the COVID-19 pandemic
                    (mainly through prevention and adaptation){" "}
                  </li>

                  <li>
                    Using smart technologies to enhance our ability to cope with the challenges of post COVID-19
                    economic recovery by enabling innovative ways to support more resilient and sustainable social,
                    economic, and educational activities.
                  </li>
                </ol>
                <Row>
                  <Col>
                    <h4>Organizers</h4>
                    <CustomHrRed />{" "}
                  </Col>
                </Row>
                The conference is organized by ESPRIT (member of Honoris United Universities), with the technical
                Co-Sponsorship of IEEE Tunisia Section. <br></br>
                <br></br>
                <Row>
                  <Col>
                    <h4>Conference Format</h4>
                    <CustomHrRed />{" "}
                  </Col>
                </Row>
                The virtual 1-day conference will take place via WebEx web conferencing tool. All presentations will be
                video-recorded and archived in a dedicated ESPRIT-Tech YouTube Channel. The event will also be Streamed
                Live on Facebook. <br></br>
                <br></br>
              </div>

              <Row>
                <Col>
                  <h4>Organizing Committee</h4>
                  <CustomHrRed />
                </Col>
              </Row>

              <div className="margin-top-60">
                <div class="d-flex justify-content-center flex-wrap">
                  <div>
                    <center>
                      <h3>General Co-Chairs</h3>
                    </center>

                    <Row>
                      <Col>
                        <div class="d-flex justify-content-center flex-wrap">
                          <div class="card">
                            <img src={faouzi} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>Faouzi Kamoun</b>
                                </h5>
                              </div>
                            </center>
                          </div>

                          <div class="card">
                            <img src={lamjed} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>Lamjed Bettaieb</b>
                                </h5>
                              </div>
                            </center>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>

              <div className="margin-top-60">
                <div class="d-flex justify-content-center flex-wrap">
                  <div>
                    <center>
                      <h3>Scientific committee Co-Chairs</h3>
                    </center>

                    <Row>
                      <Col>
                        <div class="d-flex justify-content-center flex-wrap">
                          <div class="card">
                            <img src={mekki} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>
                                    Mekki Ksouri <br></br>{" "}
                                  </b>
                                </h5>
                                <br></br>
                              </div>
                            </center>
                          </div>

                          <div class="card">
                            <img src={khaled} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>Khaled Ghedira</b>
                                </h5>
                              </div>
                            </center>
                          </div>

                          <div class="card">
                            <img src={mourad} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>Mourad Zerai</b>
                                </h5>
                                <br></br>
                              </div>
                            </center>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className="margin-top-60">
                <div class="d-flex justify-content-center flex-wrap">
                  <div>
                    <center>
                      <h3>Publicity Co-Chairs</h3>
                    </center>

                    <Row>
                      <Col>
                        <div class="d-flex justify-content-center flex-wrap">
                          <div class="card">
                            <img src={karim} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>
                                    Karim Maghrebi <br></br>{" "}
                                  </b>
                                </h5>
                              </div>
                            </center>
                          </div>

                          <div class="card">
                            <img src={manel} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>Manel Medhioub</b>
                                </h5>
                              </div>
                            </center>
                          </div>

                          <div class="card">
                            <img src={syrine} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>Syrine Karoui</b>
                                </h5>
                                <br></br>
                              </div>
                            </center>
                          </div>

                          <div class="card">
                            <img src={yosr} alt="empty" />
                            <center>
                              <div class="containers">
                                <h5>
                                  <b>Yosr Ghozzi</b>
                                </h5>
                                <br></br>
                              </div>
                            </center>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
              <div className="margin-top-60">
                <Row>
                  <Col>
                    <h4>Confirmed speakers</h4>
                    <CustomHrRed />
                  </Col>
                </Row>
                <div class="d-flex justify-content-center flex-wrap">
                  <div>
                    <LinkDuo to="/LanUmek">
                      <div class="card">
                        <img src={lan} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Lan Umek</b>
                            </h5>
                            <p>University of Ljubljana Slovenia</p>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>

                  <div class="d-flex justify-content-center flex-wrap">
                    <LinkDuo to="/BilelJamoussi">
                      <div class="card">
                        <img src={bilel} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Bilel Jamoussi</b>
                            </h5>
                            <p>ITU Standardization, Bureau Geneva</p>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>

                  <div>
                    <LinkDuo to="/HichemTurki">
                      <div class="card">
                        <img src={Hichem} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Hichem Turki</b>
                            </h5>
                            <p>Novation City, Tunisia</p>
                            <br></br>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>

                  <div>
                    <LinkDuo to="/LobnaKaroui">
                      <div class="card">
                        <img src={Lobna} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Lobna Karoui</b>
                            </h5>
                            <p>Fortune 500 Seattle, USA</p>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>
                </div>

                <div class="d-flex justify-content-center flex-wrap">
                  <div>
                    <LinkDuo to="/BadreddineOuali">
                      <div class="card">
                        <img src={Badreddine} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Badreddine Ouali</b>
                            </h5>
                            <p>VERMEG, SARL Tunisia </p>
                            <br></br> <br></br>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>

                  <div>
                    <LinkDuo to="/SamirHamza">
                      <div class="card">
                        <img src={samir} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Samir Hamza</b>
                            </h5>
                            <p>National Institute of Applied Sciences and Technology, Tunisia</p>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>

                  <div>
                    <LinkDuo to="/MohamedLouadi">
                      <div class="card">
                        <img src={mohamed} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Mohamed Louadi</b>
                            </h5>
                            <p>Higher Institute of Management Tunisia</p>
                            <br></br>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>
                </div>
                <div class="d-flex justify-content-center flex-wrap">
                  <div>
                    <LinkDuo to="/MouradZerai">
                      <div class="card">
                        <img src={mourad} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Mourad Zerai</b>
                            </h5>
                            <p>ESPRIT School of Engineering Tunisia</p>
                            <br></br>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>

                  <div>
                    <LinkDuo to="/HarunaChiroma">
                      <div class="card">
                        <img src={haruna} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Haruna Chiroma</b>
                            </h5>
                            <p>University of Hafr Al Batin KSA</p>
                            <br></br>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>
                </div>
                <div>
                  <div class="d-flex justify-content-center flex-wrap">
                    <LinkDuo to="/Sampathkumar-Veeraraghavan">
                      <div class="card">
                        <img src={sam} alt="empty" />
                        <center>
                          <div class="containers">
                            <h5>
                              <b>Sampathkumar Veeraraghavan</b>
                            </h5>
                            <p>Global Chair, 2021 IEEE Humanitarian Activities Committee</p>
                            <p>More...</p>
                          </div>
                        </center>
                      </div>
                    </LinkDuo>
                  </div>
                </div>

                <br></br>
                <Row style={{ marginBottom: "60px" }}>
                  <Col>
                    <h4>Conference Agenda & Presentations</h4>
                    <CustomHrRed />
                  </Col>
                </Row>
                <table>
                  <tr>
                    <th colspan="2">
                      <center>Morning sessions</center>
                    </th>
                    <td colspan="2">
                      {" "}
                      <center>
                        <th>Afternoon sessions</th>{" "}
                      </center>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <th rowspan="2">
                        9:00
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        9:15
                        <br></br>
                        9:45
                      </th>
                    </td>

                    <td>
                      {" "}
                      <br></br>
                      <b>Welcome & Opening</b>
                      <br></br>
                      <li>Lamjed Bettaieb (DGA, ESPRIT)</li>
                      <li>Faouzi Kamoun (Director, ESPRIT-Tech)</li>
                      <br></br>
                      <LinkDuo to="https://drive.google.com/file/d/1E97tk34G3yOxyN6CjiCsopWt7KiFNvpj/view ">
                        Archived video 1
                      </LinkDuo>
                      <br></br> <br></br>
                      <b> The Dynamics of Global Research Trends on Covid-19 Across Scientific Areas</b>
                      <br></br>
                      Lan Umek, Chair of Economics and Public Sector Management, University of Ljubljana. Slovenia{" "}
                      <br></br>{" "}
                      <LinkDuo to="https://drive.google.com/file/d/1qXpfSKvisEGmna7KhVX2huImMNtRZQAB/view">
                        Archived video 2
                      </LinkDuo>
                    </td>
                    <td>
                      <th rowspan="2">
                        <br></br> <br></br>
                        13:00
                        <br></br>
                        13:00
                        <br></br>
                        <br></br>
                        <br></br> <br></br> <br></br>
                        <br></br>
                        13:30
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br> <br></br>
                        14:00
                      </th>
                    </td>
                    <td>
                      {" "}
                      <br></br> <br></br>
                      <b>
                        <u>Session 2</u>
                      </b>
                      <br></br>
                      <b>
                        Expérience de Novation City Lors de la Première Vague du COVID-19: The SAFETUNISIA CHALLENGE
                      </b>
                      <br></br>
                      Hichem Turki, CEO , Novation City, Société du Pôle de compétitivité de Sousse (SPCS). Tunisia
                      <br></br>
                      <LinkDuo to="https://drive.google.com/file/d/1WX7c9Akza8bnfW-VHlT8XwqnoMxUBxUT/view ">
                        Archived video 6
                      </LinkDuo>
                      <br></br>
                      <br></br>
                      <b>Disinfection Technology in Hospitals : Harmful Effects of UVC</b>
                      <br></br>
                      Samir Hamza, Director, National Institute of Applied Sciences and Technology, INSAT- Tunisia
                      <br></br>{" "}
                      <LinkDuo to="https://drive.google.com/file/d/1J6AQaqn1jZjlEkc4KeWRDCUx_kVPDqNL/view ">
                        Archived video 7
                      </LinkDuo>
                      <br></br> <br></br>
                      <b>Q & A #2</b>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <th rowspan="1">
                        <br></br>
                        9:45
                        <br></br>
                        9:45
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        10:15
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        10:45
                        <br></br>
                        <br></br>
                        <br></br>
                        11:15
                        <br></br>
                        <br></br>
                        11:45
                        <br></br>
                        12:00
                      </th>
                    </td>

                    <td>
                      {" "}
                      <br></br>
                      <b>
                        {" "}
                        <u>Session 1</u>
                      </b>
                      <br></br>
                      <b>
                        International Standards Enabling Smart technologies and Innovations in the Fight Against
                        Covid-19
                      </b>
                      <br></br>
                      Bilel Jamoussi, Chief of the Study Groups Department at ITU Standardization Bureau , Geneva,
                      Switzerland <br></br>{" "}
                      <LinkDuo to="https://drive.google.com/file/d/1UsB0Kx3TmpS-vhBC-sm4gKfkVBOl2Yww/view ">
                        Archived video 3
                      </LinkDuo>
                      <br></br>
                      <br></br>
                      <b> Digital Transformation Keys of Acceleration</b>
                      <br></br>
                      Lobna Karoui , Executive Digital Transformation Director at Fortune 500, Greater Seattle Area,
                      USA.
                      <br></br>{" "}
                      <LinkDuo to="https://drive.google.com/file/d/10OCDg5T5wQMuQ00uE5ItM6ooke_IMzDo/view ">
                        Archived video 4
                      </LinkDuo>
                      <br></br> <br></br> <br></br>
                      <b>Machine Learning Approaches in Controlling Coronavirus with Smart City Framework</b>
                      <br></br>
                      Haruna Chiroma, University of Hafr Al Batin, KSA. <br></br>{" "}
                      <LinkDuo to="https://drive.google.com/file/d/14u9axTr09uVOX53XIFxJqb_MEZ22XRZB/view ">
                        Archived video 5
                      </LinkDuo>
                      <br></br>
                      <br></br>
                      <br></br>
                      <b>Q & A #1</b>
                      <br></br>
                      <br></br>
                      <br></br>
                      <b>
                        IEEE HAC/SIGHT Projects Call for Proposals Focused on COVID-19 Response and Pressing Community
                        Need
                      </b>{" "}
                      <br></br>
                      Sam Veeraraghavan, Amazon, Burlington, US.
                    </td>
                    <td>
                      <th rowspan="1">
                        14:15
                        <br></br>
                        14:15
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        14:45
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        15:15
                        <br></br> <br></br> <br></br> <br></br>
                        15:45
                      </th>
                    </td>
                    <td>
                      <b>
                        <u>Session 3</u>
                      </b>
                      <br></br>
                      <b> Work-from-home and the Future of Work in the Post-covid World</b>
                      <br></br>
                      Mohamed Louadi , Professor, Higher Institute of Management of Tunis (ISG). Tunisia<br></br>{" "}
                      <LinkDuo to="https://www.youtube.com/watch?v=_ZkEg2nqnQk">Archived video 8</LinkDuo>
                      <br></br>
                      <br></br>
                      <b>Covid-19 & the Digital Transformation</b>
                      <br></br>
                      Badreddine Ouali , Chairman & founder VERMEG SARL, Tunisia<br></br>{" "}
                      <LinkDuo to="https://drive.google.com/file/d/1tJ1qmiFBYV-KCIDJmUJk_q_rU9PR1-1W/view">
                        Archived video 9
                      </LinkDuo>
                      <br></br>
                      <br></br>
                      <b>Engineering Education During the COVID19 Pandemic: ESPRIT as a Case Study</b>
                      <br></br>
                      Mourad Zerai, Director, Academic Affairs, ESPRIT School of Engineering. Tunisia<br></br>
                      <LinkDuo to="https://drive.google.com/file/d/1SisM-T8vCqGaGGLnV71A_ovegMvWxyzr/view ">
                        Archived video 10
                      </LinkDuo>{" "}
                      <br></br>
                      <br></br>
                      <b>Q & A #3</b>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <th rowspan="1">
                        <br></br>
                        12:00
                        <br></br>
                        13:00
                      </th>
                    </td>
                    <td>
                      <b> BREAK</b>
                    </td>
                    <td>
                      <th rowspan="1">
                        <br></br>
                        16:15
                        <br></br>
                        16:25
                      </th>
                    </td>

                    <td>
                      <b> Closing Remarks</b>
                    </td>
                  </tr>
                </table>
              </div>
              <br></br>
              <Row style={{ marginBottom: "60px" }}>
                <Col>
                  <h4>Free Registration </h4>
                  <CustomHrRed />
                </Col>
              </Row>
              <div>
                This event is open to everyone; you just need to register in advance. Please note that most of the
                presentations are delivered in English. See you on July 28th !<br></br>
                <Col md={4} xs={12}>
                  <LinkDuo className="custom-button btn width100" to={"https://bit.ly/2021-esprit"}>
                    <span>Register</span>
                  </LinkDuo>
                </Col>
                <br></br>
                <b>Join from the meeting link</b>
                <br></br>
                <LinkDuo to="https://ieeemeetings.webex.com/ieeemeetings/j.php?MTID=m13d0a1e6e4f73e6458e33b7653a0d941 ">
                  https://ieeemeetings.webex.com/ieeemeetings/j.php?MTID=m13d0a1e6e4f73e6458e33b7653a0d941
                </LinkDuo>
                <br></br>
                <b>Join by meeting number </b>
                <br></br>
                Meeting number (access code): 130 310 5138 <br></br>
                Meeting password: esprit2021
                <br></br>
                <b>Tap to join from a mobile device (attendees only)</b>
                <br></br>
                +1-415-655-0002,,1303105138## United States Toll<br></br>
                1-855-282-6330,,1303105138## United States Toll Free<br></br>
                <b>Join by phone</b>
                <br></br>
                +1-415-655-0002 United States Toll<br></br>
                1-855-282-6330 United States Toll Free
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }
}

const breadcrumb = {
  src: "",
  Title: "Virtual 1-day Conference",
  Subtitle: "Recherche, Développement et Innovation",
}
