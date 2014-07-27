//  Configuration

export function appConfig ($httpProvider, $locationProvider, $routeProvider) {
  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
  $routeProvider.
    when('/', {
      templateUrl:  '/html/search.html',
      controller:   'SearchController',
      controllerAs: 'search'
    }).
    when('/result', {
      templateUrl:  '/html/result.html',
      controller:   'SearchController',
      controllerAs: 'search'
    }).
    otherwise({
      redirectTo:   '/'
    });
  $locationProvider.html5Mode(true);
}
