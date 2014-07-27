//  Directives module

/**
 * gitChart
 * @ngInject
 */
function gitChart (ResultsFactory) {
  return {
    restrict : 'E',
    template : ['<canvas id="chart"></canvas>'].join(''),
    link     : function (scope, element, attrs) {
      var context = document.querySelector('#chart').getContext('2d');
      var data = [
        {
            value: 300,
            color:"#F7464A",
            highlight: "#FF5A5E",
            label: "Red"
        },
        {
            value: 50,
            color: "#46BFBD",
            highlight: "#5AD3D1",
            label: "Green"
        },
        {
            value: 100,
            color: "#FDB45C",
            highlight: "#FFC870",
            label: "Yellow"
        }
      ];
      new Chart(context).Doughnut(ResultsFactory.results);
    }
  };
}

//  Export as appDirectives
export let appDirectives = angular.module('appDirectives', [])
  //  Define ChartDirective
  .directive('gitChart', gitChart);
