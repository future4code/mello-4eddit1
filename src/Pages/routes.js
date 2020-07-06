import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing/landing";
import Login from "./Login/login";
import SignUp from "./SignUp/signUp";
import Posts from "./Posts/posts";
import PostDetails from "./PostDetails/postDetails";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/posts" component={Posts} />
      <Route exact path="/posts/:id" component={PostDetails} />
    </Switch>
  );
}
