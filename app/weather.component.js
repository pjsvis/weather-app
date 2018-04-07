"use strict";
angular.module('app').component('weather', {
    bindings: {},
    controllerAs: 'vm',
    controller: function (openWeatherApiService, WeatherIconService) {
        var vm = this;
        // TODO: Refactor this
        vm.$onInit = function () {
            // Test the service
            var test = (vm.test = openWeatherApiService.test());
            vm.test = test;
            // get a specific url
            var buildUrl = openWeatherApiService.buildUrl('London', 'US');
            vm.buildUrl = buildUrl;
            // get some data
            openWeatherApiService
                .getForecast('Edinburgh', 'GB')
                .then(function (data) {
                vm.json = data;
            })
                .catch(function (err) {
                console.log(err);
            });
            var image = WeatherIconService.icon('01d');
            console.log(image);
            vm.image = image;
        };
        vm.$onChanges = function (changes) { };
    },
    template: "\n  <div class=\"h1\">Weather Component</div>\n<panel-day></panel-day>\n\n<panel-h3></panel-h3>\n\n  <div>image url: {{vm.image}}</div>\n  <div><img ng-src=\"{{vm.image}}\"> </div>\n  <div>test: {{vm.test}}</div>\n  <div>buildUrl: {{vm.buildUrl}}</div>\n  <div>jsonData<pre>{{vm.json | json}}</pre></div>\n  "
});
