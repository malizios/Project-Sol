import React from "react-native";
import {bindActionCreators} from "redux";
import Counter from "../components/counter";
import * as counterActions from "../actions/counter-actions";
import { connect } from "react-redux";

class CardApp extends React.Component {
  constructor(props) {
    super(props);
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
