import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header';
import WeatherList from './Components/WeatherList';
import axios from 'axios';


const Api = {
  place: "Sofia",
  apiKey: "4d60381267f87c75c0d2fe785bfcba24",
  baseURL: "https://api.openweathermap.org/data/2.5/",
};

class App extends Component {
  state = {
    weather: []
  }

  async componentDidMount() {
      await axios
        .get(
          `${Api.baseURL}/weather?q=${Api.place}&units=metric&cnt=5&appid=${Api.apiKey}`
        )
        .then((result) => {
          const data = result.data;
          this.setState({
            weather: [data] 
          });
        })
        .catch((error) => console.log(error));
  }

  render(){
    return (
      <div>
         <Header></Header>
         <div className = "container">
          <WeatherList weather = {this.state.weather}></WeatherList>
        </div>
      </div>
    );
  }
}

export default App;
