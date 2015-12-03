// require('fullcalendar');
// require('angular-ui-calendar');

import angular from 'angular';
import moment from 'moment';
window.$ = require('jquery');
import 'angular-ui-calendar';
import 'fullcalendar';

import CalendarController from './controllers/calendar.controller';
import HomeController from './controllers/home.controller';
import BandController from './controllers/band.controller';

angular
  .module('app.calendar', ['ui.calendar'])
  .controller('CalendarController', CalendarController)
  .controller('HomeController', HomeController)
  .controller('BandController', BandController)
;