import angular from 'angular';
import 'angular-ui-router';

import SignupController from './controllers/signup.controller';
import LoginController from './controllers/login.controller';
import SignupService from './services/signup.service';

angular
  .module('app.auth', ['ui.router'])
  .controller('SignupController', SignupController)
  .controller('LoginController', LoginController)
  .service('SignupService', SignupService)
;