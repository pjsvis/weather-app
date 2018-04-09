"use strict";
angular
    .module('app')
    .factory('OpenWeatherApiService', function ($http, $q, $sce) {
    // TODO: Move the API_ID to a service that gets it from a json file
    var API_ID = '6c4929f8e599c1f7d583a46ee4263a98';
    var DEFAULT_CITY_NAME = 'Edinburgh';
    var DEFAULT_COUNTRY_CODE = 'GB';
    var fac = {
        buildUrl: buildUrl,
        getForecast: getForecast
    };
    return fac;
    function buildUrl(cityName, countryCode) {
        var city = cityName ? cityName : DEFAULT_CITY_NAME;
        var country = countryCode ? countryCode : DEFAULT_COUNTRY_CODE;
        var url = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country + "&appid=" + API_ID + "&units=metric";
        return url;
    }
    // TODO: add types to return
    function getForecast(city, countryCode) {
        var url = buildUrl(city, countryCode);
        var trustedUrl = $sce.trustAsResourceUrl(url);
        return $http
            .jsonp(trustedUrl, {
            jsonpCallbackParam: 'callback'
        })
            .then(function (response) {
            // TODO: Change this to return a promise<IForecast5>
            var fc5 = response.data;
            return fc5;
        })
            .catch(function (err) {
            return $q.reject(err);
        });
    }
});
