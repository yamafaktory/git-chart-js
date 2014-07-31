//  Controllers module

/**
 * ChartController
 * @ngInject
 */
function ChartController (ResultsFactory) {
  //  Inject results and query into the scope
  this.results = ResultsFactory.results;
  this.query = ResultsFactory.query;
}

/**
 * HeaderController
 * @ngInject
 */
function HeaderController ($scope) {
  //  Default header state
  this.show = true;
  $scope.$on('showHeader', (event, state) => {
    this.show = state;
  });
}

/**
 * SearchController
 * @ngInject
 */
function SearchController ($location, $scope, ResultsFactory) {
  this.query = '';
  this.go = () => {
    $scope.$emit('showHeader', false);
    $location.path(`/result/${this.query}`);
  };
}

//  Export as appControllers
export let appControllers = angular.module('appControllers', [])
  //  Attach controllers
  .controller('ChartController', ChartController)
  .controller('HeaderController', HeaderController)
  .controller('SearchController', SearchController);
  