import React from "react-native";
import { Provider } from "react-redux";
import configureStore from "../store/configure-store";
import CardApp from "./card-app";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ configureStore() }>
        <CardApp />
      </Provider>
    );
  }
}
