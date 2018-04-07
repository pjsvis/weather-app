"use strict";
/**
 * Service to provide access to Open Weather API
 * example api call http://api.openweathermap.org/data/2.5/forecast?q=Edinburgh,uk&mode=xml&appid=6c4929f8e599c1f7d583a46ee4263a98
 */
angular
    .module('app')
    .factory('openWeatherApiService', function ($http, $q, $sce) {
    // TODO: Move the API_ID to a service that gets it from a json file
    var API_ID = '6c4929f8e599c1f7d583a46ee4263a98';
    // TODO: Use the location api to get the user's location
    var DEFAULT_CITY_NAME = 'Edinburgh';
    var DEFAULT_COUNTRY_CODE = 'GB';
    var fac = {
        test: test,
        buildUrl: buildUrl,
        // defaultUrl: defaultUrl,
        getForecast: getForecast
    };
    return fac;
    function test() {
        return 'Hello there from the service';
    }
    function buildUrl(cityName, countryCode) {
        var city = cityName ? cityName : DEFAULT_CITY_NAME;
        var country = countryCode ? countryCode : DEFAULT_COUNTRY_CODE;
        var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&appid=" + API_ID + "&units=metric";
        return url;
    }
    function getForecast(city, countryCode) {
        var url = buildUrl(city, countryCode);
        console.info('getForecastUrl', url);
        var trustedUrl = $sce.trustAsResourceUrl(url);
        return $http
            .jsonp(trustedUrl, {
            jsonpCallbackParam: 'callback'
        })
            .then(function (response) {
            var fc5 = response.data;
            return fc5;
        })
            .catch(function (err) {
            return $q.reject(err);
        });
    }
});
