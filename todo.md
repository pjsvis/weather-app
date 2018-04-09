# Weather App

## todo

- [ ] see data processing section below...
- [ ] get temps as celsius/fahrenheit
- [ ] use momentJs to parse dates

## done

- [X] get api key => `6c4929f8e599c1f7d583a46ee4263a98`
- [X] get data from [openWeatherMap API](http://openweathermap.org/forecast5)
- [X] create IForecast5 interface using [JsonToTs](http://www.jsontots.com/)
- [X] create AngularJs app with Bootstrap for styling
- [X] create basic weather.component
- [X] create open-weather-api.service
- [X] display json weather data in component
- [X] create weather icon service using [weather icons](https://openweathermap.org/weather-conditions)

## issues

- [ ] ?zip=EH6,GB gets us edinburgh but ?zip=EH12345,GB gets us nothing
- [ ] get city list as json
- [ ] select city by name
- [ ] build url with city id and country code
- [ ] get list of country [codes in json](https://gist.github.com/keeguon/2310008)

## data processing

NOTE: this won't work as the first and final days do not have 8X 3-hour periods

- [X] use _.chunk to split list of day data into days
- [ ] now we have a list of five day chunks
- [ ] we can repeat over the days in panel-forecast5
- [ ] we can repeat over the 3h segments in panel-day
