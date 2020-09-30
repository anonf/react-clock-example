import React, {Component} from 'react';
import './App.css';
import Rolodex from './Rolodex';

class App extends Component {
  state = {time: this.time()}

  // For every second get the time and update the state when component is loaded
  componentDidMount() {
    setInterval(() => {
      this.setState({time: this.time()})
    }, 1000)
  }

  time() {
    const date = new Date();
    return (date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).split(' ')[0]).replace(/:/g, '').split('');
  }

  generateRolodex(){
    return this.state.time.map((time, index) => <Rolodex key={index} num={time}/>)
  }

  render() {
    return (
        <div className="container">
          {this.generateRolodex()}
        </div>
    );
  }
}

export default App;
