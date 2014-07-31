//  Factories module

/**
 * ResultsFactory
 * @ngInject
 */
function ResultsFactory ($http) {
  let ResultsFactory = {};
  ResultsFactory.results = [];
  ResultsFactory.getResults = query => {
    //  Save the query
    ResultsFactory.query = query;
    //  Use Github API
    let api = `https://api.github.com/search/repositories?q=${query}`;
    api += '+language:js&sort=stars&order=desc&callback=JSON_CALLBACK';
    return $http.jsonp(api, {cache : true})
      .success(data => {
        //  Reset data
        ResultsFactory.results = [];
        //  Populate it
        for (let element of data.data.items) {
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
  //  Attach factories
  .factory('ResultsFactory', ResultsFactory);
