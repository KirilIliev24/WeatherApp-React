import React, { Component } from 'react'
import '../Css/WeatherItem.css'

export default class WeatherItem extends Component {
    state = {
        date: ""
    }
    
    getDateOnly = (dt_txt) => {

        const date = dt_txt.split(" ");
        return date[0];
    }

    getDayOfWeek = (dt_txt) => {
        const date =  this.getDateOnly(dt_txt);
        const splitDate = date.split("-");
        const options = {weekday: 'long'};
        const event = new Date(Date.UTC(splitDate[0], splitDate[1]-1, splitDate[2]));
        const dayOfweek = event.toLocaleDateString('en-us', options);
        return dayOfweek;
    }
    render() {
        const {dt_txt} = this.props.weatherItem;
        const {temp, humidity} = this.props.weatherItem.main;
        const {icon, description} = this.props.weatherItem.weather[0];
        return (
            <div className = "centerText">
                    <div>
                        <div><h5>{this.getDayOfWeek(dt_txt)}</h5></div>
                        <div>{temp} &deg;C</div>
                        <div>Humidity: {humidity}%</div>
                        <img src = {`http://openweathermap.org/img/wn/${icon}@2x.png`} alt = ""></img>
                        <div id = "description">{description}</div>
                        <div>{this.getDateOnly(dt_txt)}</div>
                    </div>
            </div>
        )
    }
}