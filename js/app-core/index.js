import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import config from './config';

angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
;