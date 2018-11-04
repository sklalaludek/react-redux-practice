import axios from 'axios';

const API_KEY = 'c9c6a5f13bdee9470531fd8edaf30dd9';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}?q=${city},us&appid=${API_KEY}`;
  const request = axios.get(url);
  console.log('Req', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}