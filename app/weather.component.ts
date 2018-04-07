angular.module('app').component('weather', {
    bindings: {},
    controllerAs: 'vm',
    controller: function(openWeatherApiService, WeatherIconService) {
        let vm: any = this;
        // TODO: Refactor this
        vm.$onInit = function() {
            // Test the service
            let test = (vm.test = openWeatherApiService.test());
            vm.test = test;

            // get a specific url
            let buildUrl = openWeatherApiService.buildUrl('London', 'US');
            vm.buildUrl = buildUrl;

            // get some data
            getWeatherData('Edinburgh', 'GB').then(function(data: any) {
                vm.json = data;
                vm.city = data.city;
                let list = data.list;
                vm.listCount = data.list.length;
            });

            let image = WeatherIconService.icon('01d');
            console.log(image);
            vm.image = image;
        };

        function getWeatherData(cityName: string, countryCode: string) {
            return openWeatherApiService
                .getForecast(cityName, countryCode)
                .then(function(data: IForecast5) {
                    return data;
                })
                .catch(function(err: any) {
                    console.log(err);
                });
        }

        vm.$onChanges = function(changes: any) {};
    },
    template: `
  <div class="h1">Weather Component</div>

  <div>listCount: {{vm.listCount}}</div>
<div class="h3">{{vm.city.name}} {{vm.city.country}} 5 day forecast</div>

<panel-forecast5></panel-forecast5>

<panel-day></panel-day>

<panel-h3></panel-h3>

  <div>image url: {{vm.image}}</div>
  <div><img ng-src="{{vm.image}}"> </div>
  <div>test: {{vm.test}}</div>
  <div>buildUrl: {{vm.buildUrl}}</div>
  <div>jsonData<pre>{{vm.json | json}}</pre></div>
  `
});
