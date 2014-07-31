//  Directives module

/**
 * gitChart
 * @ngInject
 */
function gitChart ($window, $document, ResultsFactory) {
  return {
    restrict : 'E',
    templateUrl : '/html/git-chart.html',
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
      new $window.Chart(context).Doughnut(ResultsFactory.results, options);
    }
  };
}

//  Export as appDirectives
export let appDirectives = angular.module('appDirectives', [])
  //  Attach directives
  .directive('gitChart', gitChart);
