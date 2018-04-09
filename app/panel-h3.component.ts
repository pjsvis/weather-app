/**
 * Display the forecast for a three hour period.
 *
 */
angular.module('app').component('panelH3', {
    bindings: {
        period: '<' // List
    },
    controllerAs: 'vm',
    controller: function(WeatherIconService: IWeatherIconService) {
        let vm: any = this;
        vm.getIconUrl = getIconUrl;

        vm.$onInit = function() {};

        vm.$onChanges = function(changes: any) {
            if (changes.period.currentValue) {
                let period: List = changes.period.currentValue;
                vm.period = period;
            }
        };
        function getIconUrl(code: string) {
            let url = WeatherIconService.icon(code);
            return url;
        }
    },
    template: `
  <div class="col-md-1 alert alert-success space-right">
    {{vm.period.dt_txt}}
    <img ng-src="{{vm.getIconUrl(vm.period.weather[0].icon)}}">
    {{vm.period.weather[0].description}}
  </div>
`
});

