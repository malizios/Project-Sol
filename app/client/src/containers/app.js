import React from "react-native";
import { Provider, connect } from "react-redux";
import configureStore from "../store/configure-store";
import CardApp from "./card-app";
import welcome from "../components/welcome";
import card from "../components/card";
import * as RNRF from "react-native-router-flux";
import {Route, Schema} from "react-native-router-flux";

const Router = connect()(RNRF.Router);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ configureStore() }>
        <Router>
          <Schema
            name="default"
            sceneConfig={React.Navigator.SceneConfigs.FloatFromRight}
          />
          <Schema
            name="no-nav"
            sceneConfig={React.Navigator.SceneConfigs.FloatFromRight}
            hideNavBar={true}
          />
          <Route
            name="handleRouteWelcome"
            component={welcome}
            title="Welcome"
          />
          <Route
            name="handleRouteCardApp"
            component={CardApp}
            initial={false}
            schema="default"
          />
          <Route
            name="handleRouteCard"
            component={card}
            initial={false}
            schema="no-nav"
          />
        </Router>
      </Provider>
    );
  }
}
