import { useState, useContext } from "react"
import { WeatherContext } from "../context/WeatherContext";

export default function LocationSearch() {
      const weatherContext = useContext(WeatherContext);
      const weatherService = weatherContext?.provider;

      const[location, setLocation] = useState<string>("")
      function onLocationChange(newLocation: string) {
          setLocation(newLocation)
      }

      function handleKeyPressed(event: React.KeyboardEvent) {
        if (event.key === "Enter") {
          weatherService?.fetchWeather(location)
        }
      }

      return (
          <section className="search">
              <div>
                  <input type="text"
                  className="input-text"
                  value={location}
                  onChange={e => onLocationChange(e.target.value)}
                  onKeyDown={handleKeyPressed}
                  placeholder="Enter the city" />
              </div>
          </section>
        )   
}