import React, { useEffect } from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";

import SpaceDetails from "./pages/SpaceDetails/SpaceDetails";
import Spaces from "./pages/Spaces/Spaces";
import MySpace from "./pages/MySpace/MySpace";
import CreatePost from "./pages/CreatePost/CreatePost";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={Spaces} />
        <Route exact path="/spaces/:id" component={SpaceDetails} />
        <Route exact path="/myspace" component={MySpace} />
        <Route exact path="/myspace/post" component={CreatePost} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
