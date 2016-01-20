import React from 'react';

export default React.createClass({
  getInitialState: function() {
    return {value: ''};
  },
  handleChange: function(event) {
    var setDeck = this.props.setDeck;
    var fr = new FileReader();
    fr.onload = function() {
      var deck = JSON.parse(fr.result);
      setDeck(deck);
    }
    fr.readAsText(event.target.files[0]);
  },
  render: function() {
    var value = this.state.value;
    return (
      <div className="import">
        <input type="file" accept=".json" value={value} onChange={this.handleChange}/>
      </div>
    );
  }
});
