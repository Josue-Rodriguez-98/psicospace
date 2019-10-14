import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import NavigationBar from "./Components/NavigationBar.js";
import Home from "./Views/Home.js";
import Blogs from "./Views/Blogs.js";
import Login from "./Views/Login.js";
import Register from "./Views/Register.js";
import NewPost from "./Views/NewPost.js";
import Investigations from "./Views/Investigations.js";
import NewInvestigation from "./Views/NewInvestigation.js";

import "./Styles/App.css";

function App() {
  return (
    <BrowserRouter>
    <div>
      <NavigationBar/>
      <div id="realBody">
        <Switch>
          <Route path ="/" exact component={Home} />
          <Route path = "/historias" exact component = {Blogs} />
          <Route path = "/login" exact component = {Login} />
          <Route path = "/register" exact component = {Register}/>
          <Route path = "/newPost" exact component = {NewPost}/>
          <Route path = "/blogs" exact component = {Investigations}/>
          <Route path = "/newInvestigation" exact compent = {NewInvestigation}/>
        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
