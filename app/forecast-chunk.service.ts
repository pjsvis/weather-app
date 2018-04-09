/**
 * Chunk the OpenWeather list of 3h forecasts in to days
 * NOTE: maybe our day does not correspond with the OpenWeather day
 * eg my day starts a 06:00 not 00:00
 */
interface IForecastChunkService {
    chunkDays(list: List[]): List[][];
}
angular.module('app').factory('ForecastChunkService', function() {
    let fac: IForecastChunkService = {
        chunkDays: chunkDays
    };
    return fac;
    // TODO: Split by date as the chunks are not of equal length
    // TODO: Consider padding the chunks
    function chunkDays(list: List[]): List[][] {
        let chunks = _.chunk(list, 8);
        return chunks;
    }
});
