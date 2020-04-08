import React, { Component } from 'react';

import Form from './components/Form/Form';
import Result from './components/Result/Result';
import './App.css';

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: ""
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleCitySubmit = e => {
    e.preventDefault();
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=eb83d66ce254c055b493127ed3693ace&units=metric`;

    fetch(API)
    .then(response => {
      if (response.ok) {
        return response;
      }
      throw Error('Something went wrong');
    })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Form 
          value={this.state.value}
          change={this.handleInputChange}
          submit={this.handleCitySubmit}
        />
        <Result />
      </div>
    );
  }
}

export default App;
