/**
 * Display five days worth of forecast data
 */
angular.module('app').component('panelForecast5', {
    bindings: {
        forecastData: '<' // IForecast5
    },
    controllerAs: 'vm',
    controller: function(ForecastChunkService: IForecastChunkService) {
        let vm: any = this;
        vm.$onInit = function() {};

        vm.$onChanges = function(changes: any) {
            if (changes.forecastData.currentValue) {
                let forecastData: IForecast5 = changes.forecastData.currentValue;
                let list: List[] = forecastData.list;
                // TODO: Ensure the order is correct ie increasing by time
                // TODO: Move this logic to the ForecastChunkService
                // NOTE: The chunks are ragged at the start and end so we don' get our periods aligned.
                // TODO: Pad the first and last days with empty periods
                // TODO: Determine if we want our days to start or end at midnight
                let dayChunks: List[][] = ForecastChunkService.chunkDays(list);
                // TODO: convert to an array and use ng-repeat
                let days = {
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
    template: `
<div class="row">
    <panel-day day-forecast="vm.days.day0"></panel-day>
</div>
<div class="row">
    <panel-day day-forecast="vm.days.day1"></panel-day>
</div>
<div class="row">
    <panel-day day-forecast="vm.days.day2"></panel-day>
</div>
<div class="row">
    <panel-day day-forecast="vm.days.day3"></panel-day>
</div>
<div class="row">
    <panel-day day-forecast="vm.days.day4"></panel-day>
</div>
`
});
