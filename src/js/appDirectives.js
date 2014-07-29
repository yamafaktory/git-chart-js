//  Directives module

/**
 * gitChart
 * @ngInject
 */
function gitChart (ResultsFactory) {
  return {
    restrict : 'E',
    template : ['<canvas id="chart" class="roboto" height="400" width="400"></canvas>'].join(''),
    link     : function (scope, element, attrs) {
      let {context, options} = {
        context : document.querySelector('#chart').getContext('2d'),
        options : {
          responsive            : true,
          segmentShowStroke     : true,
          segmentStrokeColor    : 'rgba(255, 255, 255, 1)',
          segmentStrokeWidth    : 1,
          percentageInnerCutout : 60,
          animationSteps        : 30,
          animationEasing       : 'easeOut',
          animateRotate         : true,
          animateScale          : false
        }
      };
      new Chart(context).Doughnut(ResultsFactory.results, options);
    }
  };
}

//  Export as appDirectives
export let appDirectives = angular.module('appDirectives', [])
  //  Define ChartDirective
  .directive('gitChart', gitChart);
