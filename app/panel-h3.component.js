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
        vm.formatDate = formatDate;
        vm.formatTime = formatTime;
        vm.formatTemp = formatTemp;
        vm.$onInit = function () { };
        vm.$onChanges = function (changes) {
            if (changes.period.currentValue) {
                var period = changes.period.currentValue;
                vm.period = period;
                // console.info('period: ', period);
            }
        };
        function getIconUrl(code) {
            var url = WeatherIconService.icon(code);
            return url;
        }
        function formatDate(dt) {
            var m = moment(dt).format('DDMMMYY');
            return m;
        }
        function formatTime(dt) {
            var m = moment(dt).format('ddd HH:mm');
            return m;
        }
        function formatTemp(temp) {
            return _.round(temp);
        }
    },
    template: "\n  <div class=\"col-md-1 alert alert-success centered space-right\">\n    <div class=\"badge date-time\">{{vm.formatTime(vm.period.dt_txt)}}</div>\n    <div class=\"date-time pull-right\">{{vm.formatDate(vm.period.dt_txt)}}</div>\n    <img ng-src=\"{{vm.getIconUrl(vm.period.weather[0].icon)}}\">\n    <div class=\"date-time\">{{vm.period.weather[0].description}}</div>\n    <div class=\"badge date-time\">{{vm.formatTemp(vm.period.main.temp)}} &deg;C</div>\n  </div>\n"
});
