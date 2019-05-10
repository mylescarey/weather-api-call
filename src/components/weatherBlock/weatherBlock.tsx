import * as React from "react";
import styles from "./weatherBlock.module.scss";
import { IWeather } from "../../reducers/weatherReducer";

export interface IProps {
  weather: IWeather;
}

export interface IState {}

class WeatherBlock extends React.Component<IProps, IState> {
  // state = { :  }
  render() {
    return (
      <div className={styles.scene}>
        <span className={styles.card}>
          {" "}
          <div className={styles.header}>
            <h1>{this.props.weather.name}</h1>
          </div>
          <p className={styles.weatherDetails}>
            Humidity: {this.props.weather.main.humidity}
          </p>
          <p className={styles.weatherDetails}>
            Tempature: {this.props.weather.main.temp}
          </p>
          <p className={styles.weatherDetails}>
            Tempature Min: {this.props.weather.main.temp_min}
          </p>
          <p className={styles.weatherDetails}>
            Tempature Max: {this.props.weather.main.temp_max}
          </p>
        </span>
      </div>
    );
  }
}

export default WeatherBlock;
