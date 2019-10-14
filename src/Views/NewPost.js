import React from "react";
import firebase from "firebase";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';

import "../Styles/App.css";

export default class NewPost extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      postTitle: "",
      postContent: "",
      postAuthor: true,
      data: {}
    };
  }

  componentDidMount = async () => {
    await firebase
      .database()
      .ref()
      .child("/users")
      .once("value", async values =>{
        let val = await values.exportVal();
        await this.setState({data: val});
      });
      console.log(this.state.data);
  }

  submitPost = async () => {
    if(this.state.postTitle === ""){
      alert("¡Hace falta el título!");
    }else if(this.state.postContent === ""){
      alert("¡Hace falta el contenido!")
    }else{
      let data = {
        author: "",
        content: "",
        title: "",
        date: "",
      }
      if(this.state.postAuthor){
        Object.values(this.state.data).map(snap =>{
          if(snap.email === firebase.auth().currentUser.email){
            data.author = snap.name;
          }
        })
        console.log("afuera del object map: ", data.author);
      }else{
        data.author = "Anónimo"
      }
      //console.log("holis", data.author)
      let today = new Date();
      let pDate=today.getDate() + "/" + parseInt(today.getMonth()+1) + "/" + today.getFullYear();
      console.log(pDate);
      data.content = this.state.postContent;
      data.title = this.state.postTitle;
      data.date = pDate;  
      console.log("antes de hacer el push", data.author)
      await firebase
        .database()
        .ref()
        .child("/blogs")
        .push(data);
      console.log("Submitted succesfully");
      alert("¡Su publicación ha sido recibida!")
      this.props.history.push("/blogs")
    }
  }

  handleTextChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleBoxChange = async (e) => {
    await this.setState({postAuthor: !e.target.checked});
    console.log(this.state.postAuthor);
  }

  render(){
    return(
      <div className = "HomeText">
        <Form>
          <FormGroup row>
            <Label for = "postTitle" sm = {2}>Título</Label>
            <Col sm = {10}>
              <Input type = "text" name = "postTitle" id = "postTitle" placeholder = "Título" onChange = {this.handleTextChange}/>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for = "postContent" sm = {2}>Cuentanos tu historia</Label>
            <Col sm = {10}>
              <Input style = {{height: "30vh"}}type = "textarea" name = "postContent" id = "postContent" onChange = {this.handleTextChange}/>
            </Col>
          </FormGroup>
          <FormGroup check>
          <Label check>
            <Input type="checkbox" onChange = {this.handleBoxChange}/>{' '}
              Publicar como anónimo
            </Label>
          </FormGroup>
        </Form>
        <div style = {{textAlign: "center"}}>
          <Button color = "success" onClick = {this.submitPost}>Publicar</Button>
        </div>
      </div>
    );
  }
}