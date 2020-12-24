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
    weather: [],
    dataByday: [],
    firstMeasurments: [],
    tempData: []
  }

  async componentDidMount() {
    await axios
        .get(
          `${Api.baseURL}/forecast?q=${Api.place}&units=metric&appid=${Api.apiKey}`
        )
        .then((result) => {
          const data = result.data.list;
          this.setState({
            weather: data 
          });
        })
        .catch((error) => console.log(error));
        this.filterData();
        this.getFirstMeasurments();
  }

  filterData = () => {
    const noofDays = this.state.weather.length / 8;
    var index = 0;
    for(var i = 0; i < noofDays; i++)
    {
      do
      {
        var currentDate = this.state.weather[index].dt_txt.split(" ");
        var nextDate = this.state.weather[index + 1].dt_txt.split(" ");
        this.setState({ tempData: [...this.state.tempData, this.state.weather[index]]});
        index++;
      }
      while(currentDate[0] === nextDate[0]);
      this.setState({ dataByday: [...this.state.dataByday, this.state.tempData]});
      this.setState({ tempData: []});
    }
  };

  getFirstMeasurments(){
    for(var i = 0; i < this.state.dataByday.length; i++)
    {
      this.setState({ firstMeasurments: [...this.state.firstMeasurments, this.state.dataByday[i][0]]});
    }
  }
  render(){
    return (
      <div>
         <Header></Header>
         <div className = "container">
          <WeatherList weatherByday = {this.state.firstMeasurments}></WeatherList>
        </div>
      </div>
    );
  }
}

export default App;
