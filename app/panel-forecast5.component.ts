angular.module('app').component('panelForecast5', {
    bindings: {},
    controllerAs: 'vm',
    controller: function() {
        let vm: any = this;
        vm.$onInit = function() {};

        vm.$onChanges = function() {};
    },
  template: `
<div><pre>
  - [ ] panel-forecast5 contains 5X panel-day components.
  - [ ] attrs: city, country-code
</pre></div>
    `
});
