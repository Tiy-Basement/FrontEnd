import angular from 'angular';
import 'angular-ui-router';

import SignupController from './controllers/signup.controller';
import LoginController from './controllers/login.controller';

angular
  .module('app.auth', ['ui.router'])
;