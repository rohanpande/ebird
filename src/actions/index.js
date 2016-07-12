import axios from 'axios';

// const ROOT_URL = 'http://ebird.org/ws1.1/data/obs/geo/recent?lng=-76.51&lat=42.46&fmt=json';
export const OBSERVATIONS = 'OBSERVATIONS';

const API_KEY = '34dc6950ff32932a0ed74bd992311783';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function recentObservations(location)
{
  // const url     = ROOT_URL;
  const url = `${ROOT_URL}&q=${location},us`;
  const request = axios.get(url);
  return {
    type : OBSERVATIONS,
    payload:request
  }
}
