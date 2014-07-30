//  Controllers module

/**
 * HeaderController
 * @ngInject
 */
function HeaderController (LocateFactory) {
  this.showHeader = LocateFactory.showHeader;
}

/**
 * SearchController
 * @ngInject
 */
function SearchController ($location, LocateFactory, ResultsFactory) {
  this.query = '';
  this.state = $location.path() === '/' ? true : false;
  this.go = () => {
    $location.path(`/result/${this.query}`);
  };
  LocateFactory.setState(this.state);
  console.log(LocateFactory.showHeader);
}

//  Export as appControllers
export let appControllers = angular.module('appControllers', [])
  //  Define SearchController
  .controller('SearchController', SearchController)
  .controller('HeaderController', HeaderController);
  