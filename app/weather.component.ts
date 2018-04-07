angular.module('app').component('weather', {
    bindings: {},
    controllerAs: 'vm',
    controller: function(openWeatherApiService) {
        let vm: any = this;
        vm.$onInit = function() {
            // Test the service
            let test = (vm.test = openWeatherApiService.test());
            console.info('test', test);
            vm.test = test;

            // get a specific url
            let buildUrl = openWeatherApiService.buildUrl('London', 'US');
            console.info('buildUrl', buildUrl);
            vm.buildtUrl = buildUrl;

            // get some data
            openWeatherApiService
                .getForecast('Edinburgh', 'GB')
                .then(function(data: IForecast5) {
                    console.info('json', data);
                    vm.json = data;
                })
                .catch(function(err: any) {
                    console.log(err);
                });

            vm.$onChanges = function(changes: any) {};
        };
    },
    template: `
  <div class="h1">Weather Component</div>
  <div>test: {{vm.test}}</div>
  <div>buildUrl: {{vm.buildUrl}}</div>
  <div>jsonData<pre>{{vm.json | json}}</pre></div>
  `
});
