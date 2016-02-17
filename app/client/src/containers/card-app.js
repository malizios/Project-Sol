import React from "react-native";
import {bindActionCreators} from "redux";
import Counter from "../components/counter";
import * as counterActions from "../actions/counter-actions";
import { connect } from "react-redux";
import "../user-agent";
import io from "socket.io-client/socket.io";

class CardApp extends React.Component {
  constructor(props) {
    super(props);
    // Enter the IP of your socket server
    this.socket = io("192.168.0.108:3000", {jsonp: false});
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Counter
        counter={state.get("count")}
        {...actions}
      />
    );
  }
}

CardApp.propTypes = {
  state: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

export default connect((state) =>
  ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(CardApp);
