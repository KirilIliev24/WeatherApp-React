import React, { Component } from 'react'
import WeatherItem from './WeatherItem'
import '../Css/WeatherList.css'

export default class WeatherList extends Component {

    render() {
        return (
            <div className = "">
                {this.props.weatherByday.map((weatherItem) => (
                    weatherItem.map((singleItem) =>
                    <div className = "centerItems">
                        <WeatherItem weatherItem = {singleItem}></WeatherItem>
                    </div>
                )))}
            </div>
        )
    }
}
