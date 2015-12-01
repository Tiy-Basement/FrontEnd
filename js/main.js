import angular from 'angular';

import './app-core/index';
import './app-layout/index';
import './app-auth/index';
// import './app-calendar/index';

angular
  .module('app', ['app.core', 'app.layout', 'app.auth'])
;

// , 'app.calendar'