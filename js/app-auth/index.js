import angular from 'angular';

import SignupController from './controllers/signup.controller';
import LoginController from './controllers/login.controller';

angular
  .module('app.auth', [])
  .controller('SignupController', SignupController)
  .controller('LoginController', LoginController)
;