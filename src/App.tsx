import './App.css'
import WeatherInformation from "./components/WeatherInformation"
import LocationSearch from "./components/LocationSearch"
import { WeatherStore } from "./store/WeatherStore"
import WeatherService from "./services/WeatherService"
import { WeatherContext } from "./context/WeatherContext"

const App = () => {
  const store = new WeatherStore();
  const provider = new WeatherService(store);

  return (
    <div className="app">
      <WeatherContext.Provider value={{ store, provider }}>
        <LocationSearch/>
        <WeatherInformation/>
      </WeatherContext.Provider>
    </div>
  );

}

export default App
