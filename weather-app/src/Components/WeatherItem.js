import React, { Component } from 'react'
import '../Css/WeatherItem.css'

export default class WeatherItem extends Component {
    render() {
        const {dt_txt} = this.props.weatherItem;
        const {temp, humidity} = this.props.weatherItem.main;
        return (
            <div className = "centerText">
                <div>{temp}</div>
                <div>{humidity}</div>
                <div>{dt_txt}</div>
            </div>
        )
    }
}