# weather-app

## Introduction

A weather forecasting app written in AngularJs with Typescript.

See the [discussion](#discussion) section for details of the requirements and the resulting app.

See also the code for TODOs and comments.

## Demo

1. A demo of the app can be found at [http://weather.visibility.net/](http://weather.visibility.net/)

## Install

1. Clone the repository from [https://github.com/pjsvis/weather-app](https://github.com/pjsvis/weather-app)
1. Run `yarn` or `npm install` to install the project dependencies

## Run

1. Open a terminal and run `live-server` in the project folder
1. The app should open in your default browser at [http://127.0.0.1:8080/](http://127.0.0.1:8080/)

## Develop

1. Open another terminal and run `tsc --watch` in the project folder

<a name="discussion"></a>

## Discussion

The project was written as an exercise with a time limit of four hours. Consequently there is not a lot of tooling involved. Previously, I have successfully used `gulp` to bundle apps.

The app structure is flat, which is not ideal, and would be easy to refactor into a more functional structure once a build task is put in place.

The requirements were:

1. "_...a single HML page displaying the 5 day weather forecast for a location of your choice._"
2. "_...a decent user experience. ...something readable..._"

The first requirement was met but the second requirement not so much!

The forecast data comprised 40X periods of three hours. The initial strategy was to chunk the 40 periods into 5 days of 8 periods. This strategy was not successful as the current day's forecast was for the remainder of the day. IE less that eight periods. Similarly the final day's forecast was for an incomplete day.

The final UI shows five rows twenty four hour forecasts. The first column shows the time nearest to current time. Each of the forecast times of day is shown in eight columns.

The UI allows the user to see the forecast for the next 24 hours by scanning along the first row.

Five day forecasts for a particular period can be read by scanning down one of the columns.

For example cold with continuous rain for Tuesday thru Thursday and getting warmer on Friday and Saturday. Still raining though.

Some issues for discussion:

1. Layout of the forecast periods.
1. Maybe the user could decide when he/she wants the day to begin eg 06:00
1. Forecast summaries
