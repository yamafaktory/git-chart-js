'use strict';

//  Imports

//  Angular, angular-animate & angular-route
import './vendors/angular.min';
import './vendors/angular-animate.min';
import './vendors/angular-route.min';

//  Chart.js
import {Chart} from './vendors/Chart.min';

//  Configuration
import {appConfig} from './appConfig';

//  Controllers
import {appControllers} from './appControllers';

//  Directives
import {appDirectives} from './appDirectives';

//  Factories
import {appFactories} from './appFactories';

/**
 * Main app
 * @ngInject
 */
angular
  .module('app', [
    'appControllers',
    'appDirectives',
    'appFactories',
    'ngAnimate',
    'ngRoute'
  ])
  .config(appConfig);
