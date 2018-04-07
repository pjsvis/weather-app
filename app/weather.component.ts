angular.module('app').component('weather', {
    bindings: {},
    controllerAs: 'vm',
    controller: function(openWeatherApiService, WeatherIconService) {
      let vm: any = this;
      // TODO: Refactor this
        vm.$onInit = function() {
            // Test the service
            let test = (vm.test = openWeatherApiService.test());
            vm.test = test;

            // get a specific url
            let buildUrl = openWeatherApiService.buildUrl('London', 'US');
            vm.buildUrl = buildUrl;

            // get some data
            openWeatherApiService
                .getForecast('Edinburgh', 'GB')
                .then(function(data: IForecast5) {
                    vm.json = data;
                })
                .catch(function(err: any) {
                    console.log(err);
                });

          let image = WeatherIconService.icon('01d');
          console.log(image);
          vm.image = image;
      };

      vm.$onChanges = function(changes: any) {};
    },
    template: `
  <div class="h1">Weather Component</div>
<panel-day></panel-day>

<panel-h3></panel-h3>

  <div>image url: {{vm.image}}</div>
  <div><img ng-src="{{vm.image}}"> </div>
  <div>test: {{vm.test}}</div>
  <div>buildUrl: {{vm.buildUrl}}</div>
  <div>jsonData<pre>{{vm.json | json}}</pre></div>
  `
});
