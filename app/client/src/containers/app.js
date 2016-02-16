import React from "react-native";
import { Provider, connect } from "react-redux";
import configureStore from "../store/configure-store";
import CardApp from "./card-app";
import Welcome from "../components/Welcome";
import * as RNRF from "react-native-router-flux";
import {Route, Schema} from "react-native-router-flux";

const Router = connect()(RNRF.Router);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ configureStore() }>
        <Router>
          <Schema name="default" sceneConfig={React.Navigator.SceneConfigs.FloatFromRight}/>
          <Route name="welcome" component={Welcome} initial={true} wrapRouter={true} title="Welcome"/>
          <Route name="cardApp" component={CardApp} wrapRouter={true} schema="default"/>
        </Router>
      </Provider>
    );
  }
}
