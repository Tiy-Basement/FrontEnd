import angular from 'angular';
import 'angular-ui-calendar';
// import fullcalendar

import HomeController from './controllers/home.controller';

angular
  .module('app.auth', ['ui.calendar'])
  .controller('HomeController', HomeController)
;