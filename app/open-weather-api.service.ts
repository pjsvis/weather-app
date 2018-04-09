/**
 * Service to provide access to Open Weather API
 * example api call http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&appid=6c4929f8e599c1f7d583a46ee4263a98
 * TODO: Add more methods to handle units eg celsius..., metric... Ref: https://openweathermap.org/forecast5#data
 */
interface IOpenWeatherApiService {
    buildUrl(cityName: string, countryCode: string): string;
    getForecast(cityName: string, countryCode: string): any;
}
angular
    .module('app')
    .factory('OpenWeatherApiService', function(
        $http: angular.IHttpService,
        $q: any,
        $sce: angular.ISCEService
    ) {
        // TODO: Move the API_ID to a service that gets it from a json file
        const API_ID = '6c4929f8e599c1f7d583a46ee4263a98';
        const DEFAULT_CITY_NAME = 'Edinburgh';
        const DEFAULT_COUNTRY_CODE = 'GB';

        let fac: IOpenWeatherApiService = {
            buildUrl: buildUrl,
            getForecast: getForecast
        };
        return fac;

        function buildUrl(cityName: string, countryCode: string) {
            let city = cityName ? cityName : DEFAULT_CITY_NAME;
            let country = countryCode ? countryCode : DEFAULT_COUNTRY_CODE;
            let url = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_ID}&units=metric`;
            return url;
        }

        // TODO: add types to return
        function getForecast(city: string, countryCode: string): any {
            const url = buildUrl(city, countryCode);
            const trustedUrl = $sce.trustAsResourceUrl(url);
            return $http
                .jsonp(trustedUrl, {
                    jsonpCallbackParam: 'callback'
                })
                .then(function(response: any) {
                    // TODO: Change this to return a promise<IForecast5>
                    let fc5: IForecast5 = response.data;
                    return fc5;
                })
                .catch(function(err: any) {
                    return $q.reject(err);
                });
        }
    });
