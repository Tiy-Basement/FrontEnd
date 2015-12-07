// require('fullcalendar');
// require('angular-ui-calendar');

import angular from 'angular';
import moment from 'moment';
window.$ = require('jquery');
import 'angular-ui-calendar';
import 'fullcalendar';

import CalendarController from './controllers/calendar.controller';
import HomeController from './controllers/home.controller';
import GroupController from './controllers/group.controller';
import AddGroupController from './controllers/addGroup.controller';
import AddMemberController from './controllers/addMember.controller';
import AddEventController from './controllers/addEvent.controller';
import DeleteGroupController from './controllers/deleteGroup.controller';

import AddService from './services/add.service';


import DeleteService from './services/delete.service';


angular
  .module('app.calendar', ['ui.calendar'])
  .controller('CalendarController', CalendarController)
  .controller('HomeController', HomeController)
  .controller('GroupController', GroupController)
  .controller('AddGroupController', AddGroupController)
  .controller('AddMemberController', AddMemberController)
  .controller('AddEventController', AddEventController)
<<<<<<< HEAD
  .service('AddService', AddService)
=======
  .controller('DeleteGroupController', DeleteGroupController)
  .service('DeleteService', DeleteService)
  .directive('deleteItem', deleteItem)
>>>>>>> wes
;
