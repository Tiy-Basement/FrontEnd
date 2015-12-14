import angular from 'angular';
import moment from 'moment';
window.$ = require('jquery');
import 'angular-ui-calendar';
import 'fullcalendar';

import CalendarController from './controllers/calendar.controller';
import UserController from './controllers/user.controller';
import GroupController from './controllers/group.controller';
import AddGroupController from './controllers/add-controllers/addGroup.controller';
import AddMemberController from './controllers/add-controllers/addMember.controller';
import AddEventController from './controllers/add-controllers/addEvent.controller';
import DeleteController from './controllers/delete.controller';

import AddService from './services/add.service';
import DeleteService from './services/delete.service';
import EditService from './services/edit.service';
import UserService from './services/user.service';

import userName from './directives/user.directive';
import groupItem from './directives/group.directive';

import modalform from './directives/event.directive';


angular
  .module('app.calendar', ['ui.calendar'])
  .controller('CalendarController', CalendarController)
  .controller('UserController', UserController)
  .controller('GroupController', GroupController)
  .controller('AddGroupController', AddGroupController)
  .controller('AddMemberController', AddMemberController)
  .controller('AddEventController', AddEventController)
  .controller('DeleteController', DeleteController)
  .service('AddService', AddService)
  .service('DeleteService', DeleteService)
  .service('EditService', EditService)
  .service('UserService', UserService)
  .directive('modalform', modalform)
  .directive('userName', userName)
  .directive('groupItem', groupItem)
;
