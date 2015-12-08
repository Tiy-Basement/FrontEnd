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
import DeleteGroupController from './controllers/deleteGroup.controller';
import DeleteUserController from './controllers/deleteUser.controller';
import DeleteController from './controllers/delete.controller';

import AddService from './services/add.service';
import UserService from './services/user.service';
import DeleteService from './services/delete.service';

import userItem from './directives/user.directive';
import groupItem from './directives/group.directive';

angular
  .module('app.calendar', ['ui.calendar'])
  .controller('CalendarController', CalendarController)
  .controller('UserController', UserController)
  .controller('GroupController', GroupController)
  .controller('AddGroupController', AddGroupController)
  .controller('AddMemberController', AddMemberController)
  .controller('AddEventController', AddEventController)
  .controller('DeleteGroupController', DeleteGroupController)
  .controller('DeleteUserController', DeleteUserController)
  .controller('DeleteController', DeleteController)
  .service('AddService', AddService)
  .service('DeleteService', DeleteService)
  .service('UserService', UserService)
  .directive('userItem', userItem)
  .directive('groupItem', groupItem)
;
