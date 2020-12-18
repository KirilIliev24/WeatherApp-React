import React, { Component } from 'react'
import WeatherItem from './WeatherItem'
import '../Css/WeatherList.css'

export default class WeatherList extends Component {
    render() {
        return (
            <div className = "row">
                {this.props.weather.map((weatherItem) => (
                    <div className = "centerItems">
                        <WeatherItem weatherItem = {weatherItem}></WeatherItem>
                    </div>
                ))}
            </div>
        )
    }
}
