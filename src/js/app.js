'use strict';

//  Imports

//  Angular & angular-route
import './vendors/angular.min';
import './vendors/angular-route.min';

//  Chart.js & configuration
import {Chart} from './vendors/Chart.min';
import './chartConfig';

//  Configuration
import {appConfig} from './appConfig';

//  Controllers
import {appControllers} from './appControllers';

//  Directives
import {appDirectives} from './appDirectives';

//  Factories
import {appFactories} from './appFactories';

//  Main app
angular
  .module('app', [
    'appControllers',
    'appDirectives',
    'appFactories',
    'ngRoute'
  ])
  .config([
    '$httpProvider',
    '$locationProvider',
    '$routeProvider',
    appConfig
  ]);
