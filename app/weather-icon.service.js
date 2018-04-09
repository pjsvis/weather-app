"use strict";
angular.module('app').factory('WeatherIconService', function () {
    var fac = {
        icon: icon
    };
    return fac;
    function icon(code) {
        var url = "http://openweathermap.org/img/w/" + code + ".png";
        return url;
    }
});
