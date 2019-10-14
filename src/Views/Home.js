import React from "react";
import { Button, Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText} from "reactstrap";
import { FaArrowRight } from "react-icons/fa";
import {PricingTable,PricingSlot, PricingDetail} from "react-pricing-table";
import firebase from "firebase";
import MyModal from "../Components/MyModal"
import ErrorModal from "../Components/ErrorModal"

import frases from "../Images/frases.jpg";
import historia from "../Images/historia.jpg";
import blog from "../Images/blog.jpg";
import ana from "../Images/AnaEspinal.jpg";
import fernando from "../Images/FernandoCasco.jpg";
import maria from "../Images/MariaSantos.jpg";

import "../Styles/App.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
    this.authListen();
    this.toggle = this.toggle(this);
  }

  async authListen() {
    await firebase.auth().onAuthStateChanged( user =>{
      if(user){
        this.setState({isAuth: true});  
      }else{
        this.setState({isAuth: false});
      }
    })
  }

  toggle(){
    this.setState({modal: !this.state.modal});
  }

  render() {
    return (
      <div>
        <Container id="first" fluid className="homeSection" style = {{alignContent: "left"}}>
          <Row className="backgroundImage">
            {(!this.state.isAuth) ? 
                  <Button size="lg" href="/registro" 
                    style = {{backgroundColor: "rgb(0,204,255)", 
                              marginBottom: "5%", 
                              marginLeft: "25%", 
                              position: "absolute", 
                              bottom: 10, 
                              fontFamily: "Verdana, Geneva, sans-serif",
                              fontWeight: "bold",
                              borderRadius: 11,}}>
                      <FaArrowRight />
                      Registrarme
                  </Button>
                  : null}
              <div style = {{textAlign: "left", paddingTop: 25}}>
                <h1 className="HomeText" style={{ fontSize: 70, color: "white", fontWeight: "bold",}}>
                  PSICOSPACE
                </h1>
                <p className="HomeText" 
                  style={{ color: "rgb(0,204,255)", witdh: "50vh", fontSize: 40, paddingTop: "10%"}}>
                  Orientación, asesoramiento y terapia online.
                </p>
              </div>
          </Row>
        </Container>
        <Container className="homeSection">
          <Row>
            <div style = {{textAlign: "center",}}>
              <h3 style = {{color: "rgb(191,191,191)", paddingTop: "3%", fontWeight: "bold"}}>
                PLATAFORMA DE ASISTENCIA PSICOLÓGICA
              </h3>
              <p className = "homeDescriptionText">
                <span className = "oneWordColor">Psicospace</span> es una plataforma libre de prejuicios, amigable y 
                confiable donde podrás contactar a un profesional en Psicología y 
                recibir terapia, orientación o asesoramiento a través de sesiones vía 
                mensajes de texto o vídeo llamada.
              </p>
              <p className = "homeDescriptionText">
                Además, podrás compartir tu historia de vida con otros de manera pública o anónima, obtener 
                acceso a información sobre la salud mental y la Psicología, al igual 
                que frases motivacionales y de superación personal. 
              </p>
            </div>
          </Row>
        </Container>
        <Container className = "homeSection">
          <div style = {{textAlign: "center",}}>
              <h3 style = {{color: "rgb(191,191,191)", paddingTop: "3%", paddingBottom: "3%", fontWeight: "bold"}}>
                PSICÓLOGOS EN LÍNEA
              </h3>
            </div>
          
          <Row>
            <Col sm = {4}>
              <div style = {{textAlign: "center", height: "100%"}}>
                <Card style = {{backgroundColor: "rgb(0,204,255)", borderRadius: 13, height: "100%"}}>
                  <CardImg width="100%" src = {ana} alt="Ana Espinal" style = {{borderRadius: "15%", padding: "5%", height: "56%"}}/>
                  <CardBody>
                    <CardTitle 
                      style = {{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 20,
                        fontFamily: "Verdana, Geneva, sans-serif",
                      }}
                    >Ana Espinal</CardTitle>
                    <CardText 
                      style = {{
                        color: "white",
                        fontSize: 18,
                        fontFamily: "Verdana, Geneva, sans-serif",
                      }}
                    >Ansiedad, Depresión, Estrés, Inseguridad, Autoestima.</CardText>
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm = {4}>
              <div style = {{textAlign: "center", height: "100%"}}>
                <Card style = {{backgroundColor: "rgb(0,204,255)", borderRadius: 13, height: "100%"}}>
                  <CardImg width="100%" src = {fernando} alt="Fernando Casco" style = {{borderRadius: "15%", padding: "5%", height: "56%"}}/>
                  <CardBody>
                  <CardTitle 
                      style = {{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 20,
                        fontFamily: "Verdana, Geneva, sans-serif",
                      }}
                    >Fernando Casco</CardTitle>
                    <CardText
                      style = {{
                        color: "white",
                        fontSize: 18,
                        fontFamily: "Verdana, Geneva, sans-serif",
                      }}
                    >Ansiedad, pérdidas y duelo, estrés, depresión.</CardText>
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
            <Col sm = {4}>
              <div style = {{textAlign: "center", height: "100%"}}>
                <Card style = {{backgroundColor: "rgb(0,204,255)", borderRadius: 13, height: "100%"}}>
                  <CardImg width="100%" src = {maria} alt="Maria Santos" style = {{borderRadius: "15%", padding: "5%", height: "56%"}}/>
                  <CardBody>
                  <CardTitle 
                      style = {{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: 20,
                        fontFamily: "Verdana, Geneva, sans-serif",
                      }}
                    >María Santos</CardTitle>
                    <CardText
                      style = {{
                        color: "white",
                        fontSize: 18,
                        fontFamily: "Verdana, Geneva, sans-serif",
                      }}
                    >Depresión, timidez, autoestima, ansiedad.</CardText>
                    <Button>Ver más</Button>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="homeSection boxShadowSection" style = {{marginBottom: 15}}>
          <Container>
            <Row>
              <Col>
                <img
                  src={historia}
                  alt="Historia"
                  style={{ paddingLeft: 0, height: "100%", width: "100%" }}
                />
              </Col>
              <Col>
                <div style = {{textAlign: "center"}}>
                  <h2 style = {{color: "rgb(191,191,191)", paddingTop: "3%", fontWeight: "bold"}}>
                    ¡COMPARTE TU HISTORIA!
                  </h2>
                  <p className = "homeDescriptionText" style = {{fontSize: 25, paddingTop: 25}}>
                    Espacio para compartir tu 
                    experiencia e historia de vida. 
                  </p>
                  <div style={{ textAlign: "center", paddingTop: "10vh" }}>
                    {console.log("isAuth: ",this.state.isAuth)}
                    {(this.state.isAuth)?
                    <Button size="lg" href="/historias"
                    style = {{backgroundColor: "rgb(0,204,255)", 
                      marginBottom: "5%", 
                      fontFamily: "Verdana, Geneva, sans-serif",
                      fontWeight: "bold",
                      borderRadius: 11,
                    }}>
                    Ir <FaArrowRight/>
                  </Button>
                    :
                    <Button size="lg" href="/login"
                      style = {{backgroundColor: "rgb(0,204,255)", 
                        marginBottom: "5%", 
                        fontFamily: "Verdana, Geneva, sans-serif",
                        fontWeight: "bold",
                        borderRadius: 11,
                    }}>
                      Ir <FaArrowRight/>
                    </Button>
                  }
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="homeSection boxShadowSection" style = {{marginBottom: 15}}>
          <Container>
            <Row>
              <Col>
                <img
                  src={blog}
                  alt="Blog"
                  style={{ paddingLeft: 0, height: "100%", width: "100%" }}
                />
              </Col>
              <Col>
                <div style = {{textAlign: "center"}}>
                  <h2 style = {{color: "rgb(191,191,191)", paddingTop: "3%", fontWeight: "bold"}}>
                    BLOG DE PSICOLOGÍA
                  </h2>
                  <p className = "homeDescriptionText" style = {{fontSize: 25, paddingTop: 25}}>
                    Publicaciones, artículos, información, investigaciones, 
                    experiencias y más sobre la salud mental escritos por psicólogos. 
                  </p>
                  <div style={{ textAlign: "center", paddingTop: "10vh" }}>
                    {console.log("isAuth: ",this.state.isAuth)}
                    {(this.state.isAuth)?
                    <Button size="lg" href="/blogs"
                    style = {{backgroundColor: "rgb(0,204,255)", 
                      marginBottom: "5%", 
                      fontFamily: "Verdana, Geneva, sans-serif",
                      fontWeight: "bold",
                      borderRadius: 11,
                    }}>
                    Ir <FaArrowRight/>
                  </Button>
                    :
                    <Button size="lg" href="/login"
                      style = {{backgroundColor: "rgb(0,204,255)", 
                        marginBottom: "5%", 
                        fontFamily: "Verdana, Geneva, sans-serif",
                        fontWeight: "bold",
                        borderRadius: 11,
                    }}>
                      Ir al Blog
                    </Button>
                  }
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className="homeSection boxShadowSection" style = {{marginBottom: 15}}>
          <Container>
            <Row>
              <Col>
                <img
                  src={frases}
                  alt="Frases"
                  style={{ paddingLeft: 0, height: "100%", width: "100%" }}
                />
              </Col>
              <Col>
                <div style = {{textAlign: "center"}}>
                  <h2 style = {{color: "rgb(191,191,191)", paddingTop: "3%", fontWeight: "bold"}}>
                    FRASES
                  </h2>
                  <p className = "homeDescriptionText" style = {{fontSize: 25, paddingTop: 25}}>
                    Frases motivacionales y de superación personal.
                  </p>
                  <div style={{ textAlign: "center", paddingTop: "10vh" }}>
                    {console.log("isAuth: ",this.state.isAuth)}
                    {(this.state.isAuth)?
                    <Button size="lg" href="/frases"
                    style = {{backgroundColor: "rgb(0,204,255)", 
                      marginBottom: "5%", 
                      fontFamily: "Verdana, Geneva, sans-serif",
                      fontWeight: "bold",
                      borderRadius: 11,
                    }}>
                    Ir <FaArrowRight/>
                  </Button>
                    :
                    <Button size="lg" href="/login"
                      style = {{backgroundColor: "rgb(0,204,255)", 
                        marginBottom: "5%", 
                        fontFamily: "Verdana, Geneva, sans-serif",
                        fontWeight: "bold",
                        borderRadius: 11,
                    }}>
                      Ir <FaArrowRight/>
                    </Button>
                  }
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container className = "homeSection">
          <div style = {{textAlign: "center"}}>
            <h3 style = {{color: "rgb(191,191,191)", fontWeight: "bold"}}>
              NUESTROS PRECIOS
            </h3>
          </div>
          <PricingTable  highlightColor='rgb(0,204,255)'>
            <PricingSlot  highlighted onClick={() => {console.log("button pressed")}} buttonText='¡Reserva hoy!' title='Cita Individual'>
              <PricingDetail><p style = {{fontSize: "75px"}}>$34.99</p></PricingDetail>
              <PricingDetail><p style = {{fontSize: "30px"}}>Por sesión de <b>55 minutos</b></p></PricingDetail>
              <div style = {{textAlign: "center"}}>
                {this.state.isAuth ? 
                  <MyModal buttonLabel = "Reservar" price = "$34.99" type = "Cita Individual"/>
                :
                  <ErrorModal buttonLabel = "Reservar"/>
                }
              </div>
            </PricingSlot>
            <PricingSlot highlighted onClick={() => {console.log("button pressed")}} buttonText='¡Reserva hoy!' title='Cita de Pareja'>
              <PricingDetail><p style = {{fontSize: "75px"}}>$44.99</p></PricingDetail>
              <PricingDetail><p style = {{fontSize: "30px"}}>Por sesión de <b>55 minutos</b></p></PricingDetail>
              <div style = {{textAlign: "center"}}>
                {this.state.isAuth ? 
                  <MyModal buttonLabel = "Reservar" price = "$44.99" type = "Cita de Pareja"/>
                :
                  <ErrorModal buttonLabel = "Reservar"/>
                }              
              </div>
            </PricingSlot>
          </PricingTable>
        </Container>
      </div>
    );
  }
}
