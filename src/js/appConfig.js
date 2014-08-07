//  Configuration

export function appConfig ($httpProvider, $locationProvider, $routeProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider.
    when('/', {
      templateUrl   : '/html/search.html',
      controller    : 'SearchController',
      controllerAs  : 'search'
    }).
    when('/result/:id/', {
      templateUrl   : '/html/result.html',
      controller    : 'ChartController',
      controllerAs  : 'chart',
      resolve       : {
        load : function ($route, ResultsFactory) {
          return ResultsFactory.getResults($route.current.params.id);
        }
      }
    }).
    otherwise({
      redirectTo    : '/'
    });
    
  $locationProvider.html5Mode(true);
}
