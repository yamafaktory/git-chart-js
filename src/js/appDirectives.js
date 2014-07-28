//  Directives module

/**
 * gitChart
 * @ngInject
 */
function gitChart (ResultsFactory) {
  return {
    restrict : 'E',
    template : ['<canvas id="chart" class="roboto"></canvas>'].join(''),
    link     : function (scope, element, attrs) {
      var context = document.querySelector('#chart').getContext('2d');
      var options = {
        segmentShowStroke     : true,
        segmentStrokeColor    : 'rgba(255, 255, 255, 1)',
        segmentStrokeWidth    : 3,
        percentageInnerCutout : 60,
        animationSteps        : 100,
        animationEasing       : "easeOut",
        animateRotate         : true,
        animateScale          : false
      };
      new Chart(context).Doughnut(ResultsFactory.results, options);
    }
  };
}

//  Export as appDirectives
export let appDirectives = angular.module('appDirectives', [])
  //  Define ChartDirective
  .directive('gitChart', gitChart);
