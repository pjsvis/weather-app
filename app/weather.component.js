"use strict";
angular.module('app').component('weather', {
    bindings: {},
    controllerAs: 'vm',
    controller: function (openWeatherApiService) {
        var vm = this;
        vm.$onInit = function () {
            // Test the service
            var test = (vm.test = openWeatherApiService.test());
            console.info('test', test);
            vm.test = test;
            // get a specific url
            var buildUrl = openWeatherApiService.buildUrl('London', 'US');
            console.info('buildUrl', buildUrl);
            vm.buildtUrl = buildUrl;
            // get some data
            openWeatherApiService
                .getForecast('Edinburgh', 'GB')
                .then(function (data) {
                console.info('json', data);
                vm.json = data;
            })
                .catch(function (err) {
                console.log(err);
            });
            vm.$onChanges = function (changes) { };
        };
    },
    template: "\n  <div class=\"h1\">Weather Component</div>\n  <div>test: {{vm.test}}</div>\n  <div>buildUrl: {{vm.buildUrl}}</div>\n  <div>jsonData<pre>{{vm.json | json}}</pre></div>\n  "
});
