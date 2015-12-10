// require('fullcalendar');
// require('angular-ui-calendar');

import angular from 'angular';
import moment from 'moment';
window.$ = require('jquery');
import 'angular-ui-calendar';
import 'fullcalendar';

import CalendarController from './controllers/calendar.controller';
import UserController from './controllers/user.controller';
import GroupController from './controllers/group.controller';
import AddGroupController from './controllers/addGroup.controller';
import AddMemberController from './controllers/addMember.controller';
import AddEventController from './controllers/addEvent.controller';

import AddService from './services/add.service';
import UserService from './services/user.service';

import modalform from './directives/event.directive';


angular
  .module('app.calendar', ['ui.calendar'])
  .controller('CalendarController', CalendarController)
  .controller('UserController', UserController)
  .controller('GroupController', GroupController)
  .controller('AddGroupController', AddGroupController)
  .controller('AddMemberController', AddMemberController)
  .controller('AddEventController', AddEventController)
  .service('AddService', AddService)
  .service('UserService', UserService)
  .directive('modalform', modalform)
;
