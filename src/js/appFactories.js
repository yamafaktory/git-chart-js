//  Factories module

/**
 * ResultsFactory
 * @ngInject
 */
function ResultsFactory ($http) {
  var ResultsFactory = {};
  ResultsFactory.results = [];
  ResultsFactory.getResults = query => {
    //  Use Github API
    var api = `https://api.github.com/search/repositories?q=${query}`
    api += '+language:js&sort=stars&order=desc&callback=JSON_CALLBACK';
    return $http.jsonp(api)
      .success(data => {
        for (var element of data.data.items) {
          ResultsFactory.results.push({
            label     : element.name,
            value     : element.stargazers_count,
            color     : '#46BFBD',
            highlight : '#5AD3D1'
          });
        }
      })
      .error(() => {
        console.log('error');
      });
  };
  //  Expose the factory
  return ResultsFactory;
}

//  Export as appFactories
export let appFactories = angular.module('appFactories', [])
  //  Define ResultsFactory
  .factory('ResultsFactory', ResultsFactory);
