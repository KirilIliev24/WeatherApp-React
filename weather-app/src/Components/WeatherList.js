import React, { Component } from 'react'
import WeatherItem from './WeatherItem'
import WeatherHourItem from './WeatherHourItem'

import '../Css/WeatherList.css'
import {v4 as uuid} from 'uuid'
export default class WeatherList extends Component {
    
    state = {
        isActive: false
    }
    getWeatherByHour = (date) =>{
        this.props.getWeatherByHour(date);
    }

    render() {
        return (
            <div>
                 <div className = "row">
                    {this.props.weatherByday.map((weatherItem) => (
                        <div className = "centerItems">
                            <WeatherItem 
                                key = {uuid()} 
                                weatherItem = {weatherItem} 
                                getWeatherByHour = {this.getWeatherByHour}   
                            ></WeatherItem>
                        </div>
                    ))}
                </div>
                <div className = "row">
                        {this.props.weatherByHour.map((weatherItem) => (
                            <div className = "centerItems">
                                <WeatherHourItem 
                                key = {uuid()} 
                                weatherItem = {weatherItem}   
                            ></WeatherHourItem>
                            </div>
                            
                        ))}
                </div>
            </div>
        )
    }
}
