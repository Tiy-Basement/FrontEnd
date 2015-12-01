import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';

import config from './config';
import FILESERVER from './constants/fileserver.constant';


angular
  .module('app.core', ['ui.router', 'ngCookies'])
  .config(config)
  .constant('FILESERVER', FILESERVER)
;