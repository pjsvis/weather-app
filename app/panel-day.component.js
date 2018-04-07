"use strict";
angular.module('app').component('panelDay', {
    bindings: {},
    controllerAs: 'vm',
    controller: function () {
        var vm = this;
        vm.$onInit = function () {
            var vm = this;
            vm.$onInit = function () { };
            vm.$onChanges = function () { };
        };
    },
    template: "\n  <div><pre>\n  - [ ] panel-day contains 8X panel-h3 components\n  - [ ] attrs list of day-data\n  </pre></div>"
});
