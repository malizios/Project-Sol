import React from 'react';

export default React.createClass({
  render: function() {
    var cardStyle = {};
    switch(this.props.symbol) {
      case 'Attack':
        cardStyle.backgroundColor = "#FF4B47";
        break;
      case 'Defense':
        cardStyle.backgroundColor = "#5D6EE8";
        break;
      case 'Resource':
        cardStyle.backgroundColor = "#239C37";
        break;
      case 'Trap':
        cardStyle.backgroundColor = "#AB9427";
        break;
      case 'Buff':
        cardStyle.backgroundColor = "#0C1E36";
        break;
    }
    return (
      <div className="card" style={cardStyle}>
        <h1 className="cardName" >
        {this.props.name}
          <small>{this.props.symbol}</small>
        </h1>
        <ul>
          <li>
          COST: {this.props.cost} Resource
          </li>
          <li>
          HP: {this.props.hp}
          </li>
          <li>
          ATK/DEF: {this.props.atk}/{this.props.def}
          </li>
          <li>
          EFFECT: {this.props.effect}
          </li>
          <li>
          TEXT: {this.props.text}
          </li>
          <li>
          POINT VALUE: {this.props.point_value} Resource
          </li>
          <li>
          SELLBACK: {this.props.sellback} Resource
          </li>
        </ul>
        <div id="actions">
          {this.props.play ?
            <input type="button" value="play" onClick={this.props.play.bind(this, this.props.index)} />
            : null}
          {this.props.destroy ?
            <input type="button" value="destroy" onClick={this.props.destroy.bind(this, this.props.index)} />
            : null}
          {this.props.discard ?
            <input type="button" value="discard" onClick={this.props.discard.bind(this, this.props.index)} />
            : null}
        </div>
      </div>
    );
  }
});
