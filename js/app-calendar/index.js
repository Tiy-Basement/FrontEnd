// require('fullcalendar');
// require('angular-ui-calendar');

import angular from 'angular';
import moment from 'moment';
window.$ = require('jquery');
import 'fullcalendar';
import 'angular-ui-calendar';

import HomeController from './controllers/home.controller';
import BandController from './controllers/band.controller';

angular
  .module('app.calendar', ['ui.calendar'])
  .controller('HomeController', HomeController)
  .controller('BandController', BandController)
;