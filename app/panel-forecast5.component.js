"use strict";
/**
 * Display five days woth of forecast data
 */
angular.module('app').component('panelForecast5', {
    bindings: {
        forecastData: '<' // IForecast5
    },
    controllerAs: 'vm',
    controller: function (ForecastChunkService) {
        var vm = this;
        vm.$onInit = function () { };
        vm.$onChanges = function (changes) {
            if (changes.forecastData.currentValue) {
                var forecastData = changes.forecastData.currentValue;
                var list = forecastData.list;
                // TODO: Ensure the order is correct ie increasing by time
                // TODO: Move this logic to the ForecastChunkService
                // NOTE: The chunks are ragged at the start and end so we don' get our periods aligned.
                // TODO: Pad the first and last days with empty periods
                // TODO: Determine if we want our days to start or end at midnight
                var dayChunks = ForecastChunkService.chunkDays(list);
                // TODO: convert to an array and use ng-repeat
                var days = {
                    day0: dayChunks[0],
                    day1: dayChunks[1],
                    day2: dayChunks[2],
                    day3: dayChunks[3],
                    day4: dayChunks[4]
                };
                vm.days = days;
            }
        };
    },
    template: "\n<div class=\"row\">\n    <panel-day day-forecast=\"vm.days.day0\"></panel-day>\n</div>\n<div class=\"row\">\n    <panel-day day-forecast=\"vm.days.day1\"></panel-day>\n</div>\n<div class=\"row\">\n    <panel-day day-forecast=\"vm.days.day2\"></panel-day>\n</div>\n<div class=\"row\">\n    <panel-day day-forecast=\"vm.days.day3\"></panel-day>\n</div>\n<div class=\"row\">\n    <panel-day day-forecast=\"vm.days.day4\"></panel-day>\n</div>\n"
});
