import angular from 'angular';

import SignupController from './controllers/signup.controller';
import LoginController from './controllers/login.controller';


import SignupService from './services/signup.service';

angular
  .module('app.auth', [])
  .controller('SignupController', SignupController)
  .controller('LoginController', LoginController)
  .service('SignupService', SignupService)
;