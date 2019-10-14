import React from "react";
import { Button, Container } from "reactstrap";
import firebase from "firebase";
import "../Styles/App.css";

export default class Investigations extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      posts: {},
    };
  }

  componentWillMount = async () => {
    await firebase
      .database()
      .ref()
      .child("/blogs")
      .on("value", async values => {
        let val = await values.exportVal();
        await this.setState({posts: val});  
        console.log(this.state.posts);
      });
  }

  render(){
    console.log(this.state.posts);
    return(
      <Container id = "first" fluid className = "homeSection">
        <div style = {{textAlign: "center", paddingTop: "5vh"}}>
          <h1>Investigaciones Publicadas</h1>
          <Button color = "success"  style ={{borderRadius: "100%"}} href = "/newInvestigation">
            <strong>+</strong>  
          </Button>          
        </div>
        { 
          Object.values(this.state.posts).map(post =>{
            return(
              <Container className = "homeSection boxShadowSection">
                <Container>
                  <h3 className = "HomeText" style = {{padding: 0, paddingTop: 10, textDecorationLine: "underline"}}><strong>{post.title}</strong></h3>
                  <h5 className = "HomeText" style = {{padding: 0, fontStyle: "italic"}}>Publicado por {post.author} el {post.date}</h5>
                  <p className = "HomeText" style = {{padding: 0, paddingBottom: 10, }}>{post.content}</p>
                </Container>
              </Container>
            );
          })     
        }
      </Container>
    );
  }
}