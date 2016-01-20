import React from 'react';
import Card from './Card';

export default React.createClass({
  render: function() {
    var play = this.props.play;
    var discard = this.props.discard;
    var cardNodes = this.props.hand.map(function(card, i) {
      return (
        <Card {...card} index={i} key={card.id} play={play} discard={discard}/>
        );
    });
    return (
      <div className="hand">
        <h1>Hand</h1>
        {cardNodes}
      </div>
    );
  }
});
