import React, { Component } from 'react'
import '../Css/WeatherItem.css'

export default class WeatherItem extends Component {
    getDateOnly = (dt_txt) =>{
        const date = dt_txt.split(" ");
        return date[0];
    }
    render() {
        const {dt_txt} = this.props.weatherItem;
        const {temp, humidity} = this.props.weatherItem.main;
        const {icon, description} = this.props.weatherItem.weather[0];
        const {id} = this.props.id;
        return (
            <div className = "centerText" onClick = {this.props.getWeatherByHour.bind(this, id)}>
                    <div>
                        <div>{temp} &deg;C</div>
                        <div>Humidity: {humidity}</div>
                        <img src = {`http://openweathermap.org/img/wn/${icon}@2x.png`} alt = ""></img>
                        <div id = "description">{description}</div>
                        <div>{this.getDateOnly(dt_txt)}</div>
                    </div>
            </div>
        )
    }
}