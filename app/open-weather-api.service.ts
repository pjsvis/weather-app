interface IOpenWeatherApi {
    test(): string;
    buildUrl(cityName: string, countryCode: string): string;
    getForecast(cityName: string, countryCode: string): any;
}
/**
 * Service to provide access to Open Weather API
 * example api call http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&mode=xml&appid=6c4929f8e599c1f7d583a46ee4263a98
 */
angular
    .module('app')
    .factory('openWeatherApiService', function(
        $http: angular.IHttpService,
        $q: any,
        $sce: angular.ISCEService
    ) {
        // TODO: Move the API_ID to a service that gets it from a json file
        const API_ID = '6c4929f8e599c1f7d583a46ee4263a98';
        // TODO: Use the location api to get the user's location
        const DEFAULT_CITY_NAME = 'Edinburgh';
        const DEFAULT_COUNTRY_CODE = 'GB';

        let fac: IOpenWeatherApi = {
            test: test,
            buildUrl: buildUrl,
            // defaultUrl: defaultUrl,
            getForecast: getForecast
        };
        return fac;

        function test() {
            return 'Hello there from the service';
        }

        function buildUrl(cityName: string, countryCode: string) {
            let city = cityName ? cityName : DEFAULT_CITY_NAME;
            let country = countryCode ? countryCode : DEFAULT_COUNTRY_CODE;
            let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_ID}&units=metric`;
            return url;
        }

        function getForecast(city: string, countryCode: string): any {
            const url = buildUrl(city, countryCode);
            console.info('getForecastUrl', url);
            const trustedUrl = $sce.trustAsResourceUrl(url);
            return $http
                .jsonp(trustedUrl, {
                    jsonpCallbackParam: 'callback'
                })
                .then(function (response: any) {
                    let fc5: IForecast5 = response.data;
                    return fc5;
                })
                .catch(function(err: any) {
                    return $q.reject(err);
                });
        }
    });
