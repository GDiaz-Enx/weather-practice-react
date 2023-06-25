import { createContext } from 'react';
import { WeatherStore } from '../store/WeatherStore';
import WeatherService from '../services/WeatherService';


export const WeatherContext = createContext<{
    store: WeatherStore;
    provider: WeatherService;
  } | undefined>(undefined);
  

