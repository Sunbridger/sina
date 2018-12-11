import React, {
    Component
} from 'react';
import './App.css';
function B(props) {
    if (props.a >= 100) {
      return <p>水会烧开</p>;
    }
    return <p>水不会烧开</p>;
  }
  class App extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = {temp: ''};
    }
  
    handleChange(e) {
      this.setState({temp: e.target.value});
    }
    render() {
      return <fieldset>
          <legend>输入一个摄氏温度</legend>
          <input
            defaultValue={this.state.temp}
            onChange={this.handleChange.bind(this)} />
          <B a={parseFloat(this.state.temp)} />
        </fieldset>
    }
  }
export default App;
