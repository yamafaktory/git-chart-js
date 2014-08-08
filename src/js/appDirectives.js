//  Directives module

/**
 * gitChart
 * @ngInject
 */
function gitChart (ResultsFactory) {
  return {
    restrict    : 'E',
    templateUrl : '/html/git-chart.html',
    link        : function (scope, element, attrs) {
      let {context, options} = {
        context : document.querySelector('#chart').getContext('2d'),
        options : {
          animationSteps          : 80,
          animationEasing         : 'cubic-bezier(.175, .885, .320, 1)',
          animateRotate           : true,
          animateScale            : false,
          percentageInnerCutout   : 60,
          responsive              : true,
          maintainAspectRatio     : true,
          segmentShowStroke       : false,
          tooltipFontSize         : 20,
          tooltipTitleFontFamily  : "'Roboto', sans-serif",
          tooltipCaretSize        : 10,
          tooltipCornerRadius     : 0,
          tooltipTemplate         : '<%if (label){%><%=label%> <%}%>| <%= value %> stars'
        }
      };
      new window.Chart(context).Doughnut(ResultsFactory.results, options);
    }
  };
}

//  Export as appDirectives
export let appDirectives = angular.module('appDirectives', [])
  //  Attach directives
  .directive('gitChart', gitChart);
