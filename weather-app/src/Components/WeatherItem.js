import React, { Component } from 'react'
import '../Css/WeatherItem.css'

export default class WeatherItem extends Component {
    render() {
        const {temp, humidity} = this.props.weatherItem.main;
        return (
            <div className = "col-md centerText">
                <div>{temp}</div>
                <div>{humidity}</div>
            </div>
        )
    }
}