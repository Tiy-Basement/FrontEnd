import angular from 'angular';
import 'angular-ui-router';
import 'angular-cookies';
import 'angular-ui-bootstrap';

import config from './config';
import FILESERVER from './constants/fileserver.constant';


angular
  .module('app.core', ['ui.router', 'ngCookies', 'ui.bootstrap'])
  .config(config)
  .constant('FILESERVER', FILESERVER)
;