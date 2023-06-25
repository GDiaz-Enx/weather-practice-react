import axios from 'axios';
import { WeatherStore } from '../store/WeatherStore';
import { IWeatherData, IWeatherResponse, WeatherResponseCode } from '../interfaces/WeatherInterface';


class WeatherService {
  constructor(private store: WeatherStore) {}

  async fetchWeather(location: string) {
    this.store.loading.set(true)
    try {
      const response = await axios.get<IWeatherResponse>(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=30d4741c779ba94c470ca1f63045390a`) 
      if(response.status !== WeatherResponseCode.Success || response.data.cod !== WeatherResponseCode.Success) {
        throw Error
      }
      this.store.setWeather( response.data as IWeatherData)
      this.store.loading.set(false)
    } catch(error) {
      this.store.setWeather( undefined )
      this.store.loading.set(false)
      throw error
    }

  }
  
}

export default WeatherService;
