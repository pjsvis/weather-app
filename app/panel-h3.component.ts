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
                // let datStr: any = moment(period.dt_txt);
                console.info('period: ', period);
            }
        };
        function getIconUrl(code: string) {
            let url = WeatherIconService.icon(code);
            return url;
        }
        function formatDate(dt: string) {
            let m = moment(dt).format('DDMMMYY');
            return m;
        }

        function formatTime(dt: string) {
            let m = moment(dt).format('ddd HH:mm');
            return m;
        }
        function formatTemp(temp: number) {
            return _.round(temp);
        }
        vm.formatDate = formatDate;
        vm.formatTime = formatTime;
        vm.formatTemp = formatTemp;
    },
    template: `
  <div class="col-md-1 alert alert-success space-right">
    <div class="date-time">{{vm.formatTime(vm.period.dt_txt)}}</div>
    <div class="date-time">{{vm.formatDate(vm.period.dt_txt)}}</div>
    <img ng-src="{{vm.getIconUrl(vm.period.weather[0].icon)}}">
    <div class="date-time">{{vm.period.weather[0].description}}</div>
    <div class="date-time">{{vm.formatTemp(vm.period.main.temp)}} &deg;C</div>
  </div>
`
});
