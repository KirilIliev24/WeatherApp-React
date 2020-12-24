import React, { Component } from 'react'
import WeatherItem from './WeatherItem'
import '../Css/WeatherList.css'
import {v4 as uuid} from 'uuid'
export default class WeatherList extends Component {

    getWeatherByHour = (id) =>{
        console.log(id);
    }
    render() {
        const ids = [0, 1, 2, 3, 4];
        var i = 0;
        return (
            <div className = "row">
                {this.props.weatherByday.map((weatherItem) => (
                    <div className = "centerItems">
                        <WeatherItem 
                            key = {uuid()} 
                            id = {ids[i++]}  
                            weatherItem = {weatherItem} 
                            getWeatherByHour = {this.getWeatherByHour}   
                        ></WeatherItem>
                    </div>
                ))}
            </div>
        )
    }
}
