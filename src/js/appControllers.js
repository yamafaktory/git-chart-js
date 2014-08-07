//  Controllers module

/**
 * ChartController
 * @ngInject
 */
function ChartController ($location, $scope, ResultsFactory) {
  //  Inject results and query into the scope
  this.results = ResultsFactory.results;
  this.query = ResultsFactory.query;
  this.return = () => {
    $scope.$emit('minimizeHeader', false);
    $location.path(`/search`);
  };
}

/**
 * HeaderController
 * @ngInject
 */
function HeaderController ($scope) {
  //  Default header state
  this.minimize = false;
  $scope.$on('minimizeHeader', (event, state) => {
    this.minimize = state;
  });
}

/**
 * SearchController
 * @ngInject
 */
function SearchController ($location, $scope, ResultsFactory) {
  this.query = '';
  this.go = () => {
    $scope.$emit('minimizeHeader', true);
    $location.path(`/result/${this.query}`);
  };
}

//  Export as appControllers
export let appControllers = angular.module('appControllers', [])
  //  Attach controllers
  .controller('ChartController', ChartController)
  .controller('HeaderController', HeaderController)
  .controller('SearchController', SearchController);
  