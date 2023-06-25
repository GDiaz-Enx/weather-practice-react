export interface IWeatherResponse {
  cod: WeatherResponseCode;
}

export enum WeatherResponseCode {
  Success = 200,
  NotFound = 404,
  BadRequest = 400,
  ServerError = 500
}

export interface IWeatherError extends IWeatherResponse{
  message: string;
}

export interface IWeatherData extends IWeatherResponse{
  coord: {
    lon: number
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number ,   
    humidity: number,
    visibility: number,
  wind: {
    speed: number,
    deg: number,
    gust: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
  }
}