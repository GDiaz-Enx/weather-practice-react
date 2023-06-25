import { useContext } from "react"
import { WeatherContext } from "../context/WeatherContext";
import { IWeatherData, IWeatherResponse } from "../interfaces/WeatherInterface";
import {observer } from 'mobx-react'

export  const WeatherInformation = observer(() => {

        const weatherContext = useContext(WeatherContext);
        const weatherStore = weatherContext?.store;
        const weather = weatherStore?.getWeather()

        function isWeatherData(weather: IWeatherResponse | null | undefined): weather is IWeatherData {
            if (weather === null || weather === undefined) {
                return false
            }
            return ((weather as IWeatherData).main !== undefined );
        }

        return (
            <section>
                <div className="container">
                {weatherStore?.loading.get()? 
                    ( <div className="loading-message">cargando...</div> ) : (
                        <div>
                            {isWeatherData(weather) ? (
                            <div className="weather-data-container">
                                <div>
                                    {weather.main.feels_like ? (<p className="bold"> {((weather.main.feels_like - 32) * 5 / 9).toFixed()}°C </p>) : (<p className="bold">N/A</p>)}
                                    <p>Feels Like</p>
                                </div>
                                <div className="humidity">
                                    {weather.main.humidity ? (<p className="bold">{weather.main.humidity}%</p>) : (<p className="bold">N/A</p>)}
                                    <p>Humidity</p>
                                </div>
                                <div className="wind">
                                    {weather.main.wind ? ( <p className="bold">{weather.main.wind.speed.toFixed()} MPH</p> ) : (<p className="bold">N/A</p>)}
                                    <p>Wind Speed</p>
                                </div>
                            </div>
                            ) : (
                            <div className="weather-data-container error">
                                <div>
                                    <p>Please enter a valid city</p>
                                </div>
                            </div>
                        )}
                        </div>
                    )
                }

            </div>
        </section>
          )   
})

export default WeatherInformation