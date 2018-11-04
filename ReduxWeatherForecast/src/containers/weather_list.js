import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component {
  renderWeather(cityData) {
    const NAME = cityData.city.name;
    const TEMPS = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const PRESSURES = cityData.list.map(weather => weather.main.pressure);
    const HUMIDITIES = cityData.list.map(weather => weather.main.humidity);
    const lon = cityData.city.coord.lon;
    const lat = cityData.city.coord.lat;

    return (
      <tr key={NAME}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={TEMPS} color="orange" units="°C" /></td>
        <td><Chart data={PRESSURES} color="black" units="hPa" /></td>
        <td><Chart data={HUMIDITIES} color="blue" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (pHa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(WeatherList);