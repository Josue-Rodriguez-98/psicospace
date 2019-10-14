import React from "react";
import firebase from "firebase";
import { Button, Form, FormGroup, Label, Input, Row, Col, Container } from 'reactstrap';
import {FaRegEnvelope, FaLock, FaUserAlt, FaSkype, FaMobileAlt} from "react-icons/fa";
import "../Styles/App.css"

export default class Register extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      name: "",
      skypeUser: "",
      cellphone: ""

    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleRegister = async () => {
    if(this.state.email === "" || this.state.password === "" || this.state.name === "" || this.state.skypeUser === "" || this.state.cellphone === ""){
      alert("ERROR: Por favor, llene todos los campos.")
    }else{
      await firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch(async () => {
          console.log("something bad happened")
        });
      let data = {
        name: this.state.name,
        email: this.state.email,
        skypeUser: this.state.skypeUser,
        cellphone: this.state.cellphone
      }
      await firebase
        .database()
        .ref()
        .child("/users")
        .push(data);
      //alert("¡Registro exitoso!");
      console.log("Registro exitoso")
      await firebase.auth().onAuthStateChanged((user) => {
        user.sendEmailVerification();
      });
      this.props.history.push("/");
    }
  }
  
  render(){
    return(
      <div className = "loginContainer">
        <Container>

          <Row>
            <Col/>
            <Col>
              <div className = "loginView">
                <Form style = {{paddingTop: "25px"}}>
                  <FormGroup>
                    <Label for ="name"><FaUserAlt/> Nombre Completo</Label>
                    <Input 
                      type = "name" 
                      name = "name" 
                      id = "name"
                      onChange = {this.handleChange} 
                      placeholder = "Ingrese su nombre"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for ="email"><FaRegEnvelope/> Correo</Label>
                    <Input 
                      type = "email" 
                      name = "email" 
                      id = "email"
                      onChange = {this.handleChange} 
                      placeholder = "Ingrese su correo"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for = "password"><FaLock/> Contraseña</Label>
                    <Input type = "password" 
                      name = "password" 
                      id = "password"
                      onChange = {this.handleChange} 
                      placeholder = "Ingrese su contraseña"/>
                  </FormGroup>
                </Form>
              </div>
            </Col>
            <Col>
              <div className = "loginView">
                <Form style = {{paddingTop: "25px"}}>               
                  <FormGroup>
                    <Label for ="skypeUser"><FaSkype/> Usuario de Skype</Label>
                    <Input 
                      type = "skypeUser" 
                      name = "skypeUser" 
                      id = "skypeUser"
                      onChange = {this.handleChange} 
                      placeholder = "Ingrese su usuario de Skype"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for ="cellphone"><FaMobileAlt/> Número telefónico</Label>
                    <Input 
                      type = "cellphone" 
                      name = "cellphone" 
                      id = "cellphone"
                      onChange = {this.handleChange} 
                      placeholder = "Ingrese su número telefónico"/>
                  </FormGroup>
                  <div style = {{paddingTop: "20px"}}>
                    <Button 
                      size = "lg"
                      color = "success"
                      style = {{borderRadius: 12}}
                      onClick = {this.handleRegister}>Registrarme</Button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col/>
          </Row>
        </Container>
      </div>
    )
  }
}