angular.module('app').component('panelDay', {
    bindings: {},
    controllerAs: 'vm',
    controller: function() {
        let vm: any = this;
        vm.$onInit = function() {
            let vm: any = this;
            vm.$onInit = function() {};

            vm.$onChanges = function() {};
        };
    },
  template: `
  <div><pre>
  - [ ] panel-day contains 8X panel-h3 components
  - [ ] attrs list of day-data
  </pre></div>`
});
