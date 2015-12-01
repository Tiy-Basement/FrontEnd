// require('fullcalendar');
// require('angular-ui-calendar');

import angular from 'angular';
import moment from 'moment';
import $ from 'jquery';
import 'fullcalendar';
import 'angular-ui-calendar';

import HomeController from './controllers/home.controller';

angular
<<<<<<< HEAD
  .module('app.auth', [])
=======
  .module('app.calendar', ['ui.calendar'])
>>>>>>> master
  .controller('HomeController', HomeController)
;