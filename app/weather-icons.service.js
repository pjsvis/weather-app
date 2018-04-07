"use strict";
/**
 * Get weather icons from http://openweathermap.org/img/w/10d.png
 * Note the icon codes are specific to OpenWeatherMap
 * Ref: https://openweathermap.org/weather-conditions
 */
angular.module('app').factory('WeatherIconService', function () {
    var fac = {
        icon: icon
    };
    return fac;
    function icon(code) {
        return "http://openweathermap.org/img/w/" + code + ".png";
    }
});
