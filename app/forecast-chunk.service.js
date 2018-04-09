"use strict";
angular.module('app').factory('ForecastChunkService', function () {
    var fac = {
        chunkDays: chunkDays
    };
    return fac;
    // TODO: Split by date as the chunks are not of equal length
    // TODO: Consider padding the chunks
    function chunkDays(list) {
        var chunks = _.chunk(list, 8);
        return chunks;
    }
});
