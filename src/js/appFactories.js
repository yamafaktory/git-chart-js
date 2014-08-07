//  Factories module

/**
 * ColorFactory
 * @ngInject
 */
function ColorFactory () {
  //  Generate a random color
  //  Color palette from Google Material Design
  let ColorFactory = {};
  //  19 RGB values
  ColorFactory.colors = [
    '229, 28, 35',    //  Red
    '233, 30, 99',    //  Pink
    '156, 39, 176',   //  Purple
    '103, 58, 186',   //  Deep Purple
    '63, 81, 181',    //  Indigo
    '86, 119, 252',   //  Blue
    '3, 169, 244',    //  Light Blue
    '0, 188, 212',    //  Cyan
    '0, 150, 136',    //  Teal
    '37, 155, 36',    //  Green
    '139, 195, 74',   //  Light Green
    '205, 220, 57',   //  Lime
    '255, 235, 59',   //  Yellow
    '255, 193, 7',    //  Amber
    '255, 152, 0',    //  Orange
    '255, 87, 34',    //  Deep Orange
    '121, 85, 72',    //  Brown
    '158, 158, 158',  //  Grey
    '96, 125, 139'    //  Blue Grey
  ];
  //  Init cache index
  ColorFactory.lastRandomIndex = -1;
  //  Method to get a random tuple of color & highlight
  ColorFactory.getRandomColor = function getRandomColor () {
    //  Generate a random integer index from 0 to 18
    let currentRandomIndex = Math.floor(Math.random() * 18);
    //  Get the corresponding color
    let randomColor = ColorFactory.colors[currentRandomIndex];
    if (currentRandomIndex === ColorFactory.lastRandomIndex) {
      //  If the generate color is the same as last generated one
      //  Make a recursive call of the named function expression
      return getRandomColor();
    } else {
      //  Keep track of the current index
      ColorFactory.lastRandomIndex = currentRandomIndex;
    }
    //  Expose the generated tuple
    return {
      color     : `rgba(${randomColor}, .7)`,
      highlight : `rgb(${randomColor})`
    };
  };
  //  Expose the factory
  return ColorFactory;
}

/**
 * ResultsFactory
 * @ngInject
 */
function ResultsFactory ($http, ColorFactory) {
  //  Generate an array of data from Github
  let ResultsFactory = {};
  ResultsFactory.results = [];
  ResultsFactory.getResults = query => {
    //  Save the query
    ResultsFactory.query = query;
    //  Use Github API
    let api =  `https://api.github.com/search/repositories?q=${query}`;
    api    +=  '+language:js&sort=stars&order=desc&callback=JSON_CALLBACK';
    return $http.jsonp(api, {cache : true})
      .success(data => {
        //  Reset data
        ResultsFactory.results = [];
        //  Populate it
        for (let element of data.data.items) {
          //   Get color & highlight
          let {color, highlight} = ColorFactory.getRandomColor();
          //  Push element
          ResultsFactory.results.push({
            label       : element.name,
            value       : element.stargazers_count,
            description : element.description,
            homepage    : element.homepage,
            color       : color,
            highlight   : highlight
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
  .factory('ColorFactory', ColorFactory)
  .factory('ResultsFactory', ResultsFactory);
