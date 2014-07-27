//  Controllers module

/**
 * SearchController
 * @ngInject
 */
function SearchController ($location, ResultsFactory) {
  this.query = '';
  this.do = () => {
    ResultsFactory
      .getResults(this.query)
      .then(() => {
        $location.path('/result');
      });
  };
}

//  Export as appControllers
export let appControllers = angular.module('appControllers', [])
  //  Define SearchController
  .controller('SearchController', SearchController);
  