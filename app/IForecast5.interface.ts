/**
 * Interface for 5 day weather forecast JSON feed.
 * NOTE: the schema for the XML feed has different key names
 * The API docs note the following:
 *   "If you do not see some of the parameters in your API respond it means that these weather phenomena are just
 *   not happened for the time of measurement for the city or location chosen. Only really measured or calculated
 *   data is displayed in API respond." Ref: https://openweathermap.org/forecast5
 * TODO: Find examples of empty values in API response and determine how to handle them
 */
interface IForecast5 {
  cod: string;
  message: number;
  cnt: number;
  list: List[];
  city: City;
}

interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
}

interface Coord {
  lat: number;
  lon: number;
}

interface List {
  dt: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  rain: Rain;
  sys: Sys;
  dt_txt: string;
}

interface Sys {
  pod: string;
}

interface Rain {
  '3h'?: number;
}

interface Wind {
  speed: number;
  deg: number;
}

interface Clouds {
  all: number;
}

interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface Main {
  temp: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}