import React from "react";
import "./App.css";
import WeatherContainer from "./containers/weatherBlocks/weatherContainer";
import Header from "./components/header/header";
import { Provider } from "react-redux";
import store from "./store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <WeatherContainer />
      </div>
    </Provider>
  );
};

export default App;
