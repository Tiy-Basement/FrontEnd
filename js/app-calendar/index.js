// require('fullcalendar');
// require('angular-ui-calendar');

import angular from 'angular';
import moment from 'moment';
import $ from 'jquery';
import 'fullcalendar';
import 'angular-ui-calendar';

import HomeController from './controllers/home.controller';

angular
  .module('app.calendar', ['ui.calendar'])
  .controller('HomeController', HomeController)
;