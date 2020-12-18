import React, { Component } from 'react'
import '../Css/WeatherItem.css'

export default class WeatherItem extends Component {
    render() {
        const {day, date, temp, description} = this.props.weatherItem;
        return (
            <div className = "col-md centerText">
                <div>{day}</div>
                <div>{date}</div>
                <div>{temp}</div>
                <div>{description}</div>
            </div>
        )
    }
}