import React, {Component} from 'react'
import './App.css';
import Header from './Components/Header';
import WeatherList from './Components/WeatherList';
import axios from 'axios';

class App extends Component {
  state = {
    weather: [
      // {
      //   day: 'Monday',
      //   date: '12.12.20',
      //   temp: 20,
      //   description: 'clear sky'
      // },
      // {
      //   day: 'Tuesday',
      //   date: '13.12.20',
      //   temp: 25,
      //   description: 'sunny'
      // },{
      //   day: 'Wednesday',
      //   date: '14.12.20',
      //   temp: 26,
      //   description: 'rainy'
      // },{
      //   day: 'Thirsday',
      //   date: '15.12.20',
      //   temp: 24,
      //   description: 'sunny'
      // },{
      //   day: 'Friday',
      //   date: '16.12.20',
      //   temp: 20,
      //   description: 'clear sky'
      // },
    ]
  }

  componentDidMount() {
    const cityName = "Sofia";
    const ipKey = "4d60381267f87c75c0d2fe785bfcba24";
    axios.get('api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}')
      .then(res => this.setState({ weather: res.data})).catch(console.log);
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
