git-chart-js
============

A simple chart rendering Angular app that uses the Github API to generate a chart for any given name as input. A donut chart is created, based on top starred JavaScript repositories!

This is a proof of concept to demonstrate what can be done mixing Angular with ES6 today.

A lot of cool technologies are used:

* ES6 syntax and modules thanks to [Google Traceur](https://github.com/google/traceur-compiler) via [es6ify](https://github.com/thlorenz/es6ify) (i.e. using the awesome [Browserify](http://browserify.org/))
* [Chart.js](http://www.chartjs.org/)

In order to get it works, you need to clone this repository. Then run `npm install` and launch it with `gulp`.
