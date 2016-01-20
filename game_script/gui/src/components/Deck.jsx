import React from 'react';

export default React.createClass({
  draw: function(index) {
    if(this.props.deck.size > 0) {
      this.props.drawCard();
    }
  },
  render: function() {
    return (
      <div className="deck" onClick={this.handleClick}>
        <h1>DECK ({this.props.deck.size})</h1>
        <div id="actions">
          <input type="button" value="draw" onClick={this.draw} />
          <input type="button" value="shuffle" onClick={this.props.shuffle.bind(this)} />
        </div>
      </div>
    );
  }
});
