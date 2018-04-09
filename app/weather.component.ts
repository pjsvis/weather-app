/**
 * Root level weather component
 *
 * TODO: 1. Add input text inputs and handle invalid response
 * TODO: 2. Swap out text inputs for an autocomplete using the
 * TODO: 3. Use the location api to set the default city
 * TODO: 4. Use google maps to select a set of coordinates
 * TODO: See if the location search api is of any use Ref: https://openweathermap.org/forecast5#accuracy
 * TODO: Add selectors for units: standard, metric, imperial Ref: https://openweathermap.org/forecast5#data
 */
angular.module('app').component('weather', {
    bindings: {},
    controllerAs: 'vm',
    controller: function(
        OpenWeatherApiService: IOpenWeatherApiService,
        WeatherIconService: IWeatherIconService
    ) {
        let vm: any = this;
        vm.$onInit = function() {
            // get some data
            getWeatherData('Edinburgh', 'GB').then(function(forecastData: IForecast5) {
                vm.forecastData = forecastData;
                vm.city = forecastData.city;
                let list = forecastData.list;
                vm.listCount = forecastData.list.length;
            });
        };

        function getWeatherData(cityName: string, countryCode: string) {
            return OpenWeatherApiService.getForecast(cityName, countryCode)
                .then(function(data: IForecast5) {
                    // TODO: Test for an empty response and inform the user
                    return data;
                })
                .catch(function(err: any) {
                    // TODO: Show the user the error
                    console.log(err);
                });
        }

        vm.$onChanges = function(changes: any) {};
    },
    template: `


<div class="h3">
<span>{{vm.city.name}} {{vm.city.country}} 5 day forecast</span>
<span class="pull-right">Weather App  [ <a href="README.md">readme</a> | <a href="TODO.md">todo</a> ]</span>
</div>

<panel-forecast5 forecast-data="vm.forecastData"></panel-forecast5>
`
});
