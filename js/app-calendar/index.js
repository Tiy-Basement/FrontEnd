import angular from 'angular';
import $ from 'jquery';
import 'angular-ui-calendar';
import moment from 'moment';
import 'fullcalendar';

import HomeController from './controllers/home.controller';

angular
  .module('app.calendar', ['ui.calendar'])
  .controller('HomeController', HomeController)
;