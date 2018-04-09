"use strict";
/**
 * Display the forecast for a three hour period.
 *
 */
angular.module('app').component('panelH3', {
    bindings: {
        period: '<' // List
    },
    controllerAs: 'vm',
    controller: function (WeatherIconService) {
        var vm = this;
        vm.getIconUrl = getIconUrl;
        vm.$onInit = function () { };
        vm.$onChanges = function (changes) {
            if (changes.period.currentValue) {
                var period = changes.period.currentValue;
                vm.period = period;
            }
        };
        function getIconUrl(code) {
            var url = WeatherIconService.icon(code);
            return url;
        }
    },
    template: "\n  <div class=\"col-md-1 alert alert-success space-right\">\n    {{vm.period.dt_txt}}\n    <img ng-src=\"{{vm.getIconUrl(vm.period.weather[0].icon)}}\">\n    {{vm.period.weather[0].description}}\n  </div>\n"
});
