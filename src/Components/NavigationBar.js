import React from "react";
import firebase from "firebase";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import logo from "../Images/Logo.png"
import "../Styles/NavigationBar.css";

export default class NavigationBar extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isAuth: -1,
    };
    //this.authListen = this.authListen.bind(this);

    console.log("Usuario", firebase.auth().currentUser);
    
    firebase.auth().onAuthStateChanged( async user =>{
      if(user){
        await this.setState({isAuth: 1});
        console.log("IsAuth", this.state.isAuth);
      }else{
        await this.setState({isAuth: 0});
        console.log("IsAuth", this.state.isAuth);
      }
    });
  }

  /*authListen() {
    firebase.auth().onAuthStateChanged( user =>{
      if(user){
        this.setState({isAuth: true});  
      }else{
        this.setState({isAuth: false});
      }
    })
  }*/
  
  render(){
    return (
      <div sm = {12}>
          <Navbar color = "white" expand="md" className = "Nav" style = {{color: "black"}}>
            <NavbarBrand href="/">
              <img src = {logo} height = "100" className="d-inline-block align-top" alt="PsicoSpace"/>
            </NavbarBrand>
            <Nav className={this.state.isAuth === -1 ? "ml-auto Nav NavHidden" : "ml-auto Nav"} navbar>
              <NavItem>
                <NavLink href = "/" style = {{color:"black"}}>
                  <button className="btn button1" style = {{margin: 0}}>INICIO</button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = "/historias" style = {{color:"black"}}>
                  <button className="btn button1" style = {{margin: 0}}>HISTORIAS</button>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = "/blogs" style = {{color:"black"}}>
                  <button className="btn button1" style = {{margin: 0}}>BLOGS</button>
                </NavLink>
              </NavItem>
              {
                this.state.isAuth === 0 ? 
                <NavItem>
                  <NavLink href = "/register" style = {{color: "black"}}>
                    <button className="btn button1" style = {{margin: 0}}>REGISTRARME</button>
                  </NavLink>
                </NavItem>
                : null
              }
              {
                this.state.isAuth === 0 ? 
                <NavItem>
                  <NavLink href = "/login" style = {{color:"black"}}>
                    <button className="btn button3" style = {{margin: 0}}>INGRESAR</button>
                  </NavLink>
                </NavItem>
                : null
              }
              {
                this.state.isAuth === 1 ? 
                <NavItem>
                  <NavLink href = "/" style = {{color: "black"}}>
                    <button className="btn button2" style = {{margin: 0}} 
                      onClick = { () => {
                        firebase.auth().signOut();
                        console.log(firebase.auth().currentUser.email);
                      }}
                    >SALIR</button>
                  </NavLink>
                </NavItem>
                : null
              }
            </Nav>
          </Navbar>
        </div>
    );
  }
}