import * as React from "react";
import styles from "./weatherContainer.module.scss";
import WeatherBlock from "../../components/weatherBlock/weatherBlock";
import { connect } from "react-redux";
import { fetchWeather, IWeather } from "../../reducers/weatherReducer";
import { IStore } from "../../reducers";

export interface IReduxProps {
  weather: IWeather[];
  fetchWeather: (cityID: string) => void;
}

export interface IReactProps {}

export interface IState {}

class WeatherContainer extends React.Component<IReduxProps, IState> {
  public componentDidMount() {
    this.props.fetchWeather("2643744,4749005,4219762");
  }
  // state = { :  }
  render() {
    return (
      <div className={styles.weatherBlocks}>
        {this.props.weather.map((card, index) => (
          <WeatherBlock key={index} weather={card} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state: IStore, props: IReactProps) => {
  return {
    weather: state.weather.weather,
    ...props
  };
};

const mapDispatchToProps = { fetchWeather };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WeatherContainer);
