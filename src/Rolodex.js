import React, {Component} from 'react';

export default class Rolodex extends Component {

  state = {oldNum: '0'};

  generateAnimation() {
    if (this.state.oldNum !== this.props.num)
      return [
        <div key="underneath" className="rolodex-item bottom underneath">
          <div className="number">{this.props.num}</div>
        </div>,
        <div key="newFlipped" className="rolodex-item top underneath flip-back">
          <div className="number">{this.props.num}</div>
        </div>,
        <div key="oldFlipped" onAnimationEnd={() => this.setState({oldNum: this.props.num})}
             className="rolodex-item bottom flip-up">
          <div className="number">{this.state.oldNum}</div>
        </div>
      ];
    else {
      return <div className="rolodex-item bottom">
        <div className="number">{this.props.num}</div>
      </div>;
    }
  }

  render() {
    return (
        <div className="rolodex-parent">
          <div className="rolodex-item top">
            <div className="number">{this.state.oldNum}</div>
          </div>

          {this.generateAnimation()}
        </div>
    );
  }
}