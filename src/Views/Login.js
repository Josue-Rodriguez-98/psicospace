import React from "react";
import firebase from "firebase";
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {FaRegEnvelope, FaLock} from "react-icons/fa";

import "../Styles/App.css"

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleLogin = async () => {
    if(this.state.email === "" || this.state.password === ""){
      alert("ERROR: Por favor, llene todos los campos.")
    }else{
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .catch( (error) => {
          console.log("something bad happened");
          console.log(error);
        });
      if(firebase.auth().currentUser){
        console.log(firebase.auth().currentUser.email);
        //alert("Bienvenido ", firebase.auth().currentUser.email);
        console.log("Bienvenido ", firebase.auth().currentUser.email);
        this.props.history.push("/");
      }else{
        alert("Error al autenticarse.");
      }
    }
  }

  render(){
    return(
      <div className = "loginContainer">
        <div className = "loginView" style = {{height: "45vh"}}>
          <Form>
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
            <Button 
              size = "lg"
              color = "success"
              style = {{borderRadius: 12}}
              onClick = {this.handleLogin}>Ingresar</Button>
          </Form>
        </div>
      </div>
    );
  }
}