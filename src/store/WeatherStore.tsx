import { observable } from "mobx";
import { IWeatherResponse } from "../interfaces/WeatherInterface";

export class WeatherStore {
    private weather = observable.box<IWeatherResponse | undefined>(undefined);
    loading = observable.box(false);

    getWeather(): IWeatherResponse | undefined {
      console.log("WeatherStore getWeather - "+ JSON.stringify(this.weather))
      return this.weather.get();
    }
  
    setWeather(weather: IWeatherResponse | undefined) {
      console.log("WeatherStore setWeather - "+ JSON.stringify(weather))
      this.weather.set(weather);
    }
    
  }