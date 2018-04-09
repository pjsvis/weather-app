"use strict";
/**
 * Display a day's worth of three hour forecast periods
 */
angular.module('app').component('panelDay', {
    bindings: {
        dayForecast: '<' // IForecast5
    },
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        vm.$onInit = function () {
            var vm = this;
            vm.$onInit = function () { };
            vm.$onChanges = function (changes) {
                if (changes.dayForecast.currentValue) {
                    var dayForecast = changes.dayForecast.currentValue;
                    // periods are 3h each
                    var periods = dayForecast;
                    vm.periods = periods;
                }
            };
        };
    },
    template: "\n    <div>\n        <panel-h3 ng-repeat=\"period in vm.periods\" period=\"period\">\n        </panel-h3>\n    </div>\n\n"
});
