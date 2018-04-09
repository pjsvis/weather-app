/**
 * Display a day's worth of three hour forecast periods
 */
angular.module('app').component('panelDay', {
    bindings: {
        dayForecast: '<' // IForecast5
    },
    controllerAs: 'vm',
    controller: function() {
        let vm: any = this;
        vm.$onInit = function() {
            let vm: any = this;
            vm.$onInit = function() {};

            vm.$onChanges = function(changes: any) {
                if (changes.dayForecast.currentValue) {
                    let dayForecast: List[] = changes.dayForecast.currentValue;
                    // periods are 3h each
                    let periods: List[] = dayForecast;
                    vm.periods = periods;
                }
            };
        };
    },
    template: `
    <div>
        <panel-h3 ng-repeat="period in vm.periods" period="period">
        </panel-h3>
    </div>

`
});
