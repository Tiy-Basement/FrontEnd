let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      // controller: 'NavController as vm',
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root2', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout2.tpl.html'
    })
    .state('root2.splash', {
      url: '/',
      controller: 'SplashController as vm',
      templateUrl: 'templates/app-layout/splash.tpl.html'
    })
    .state('root.login', {
      url: '/login',
      controller: 'LoginController as vm',
      templateUrl: 'templates/app-auth/login.tpl.html'
    })
    // .state('root.logout', {
    //   url: '/logout',
    //   controller: 'LoginController as vm',
    //   templateUrl: 'templates/app-auth/logout.tpl.html'
    // })
    .state('root.signup', {
      url: '/signup',
      controller: 'SignupController as vm',
      templateUrl: 'templates/app-auth/signup.tpl.html'
    })
    .state('root.home', {
      url: '/users/me',
      controller: 'UserController as vm',
      templateUrl: 'templates/app-calendar/user.tpl.html'
    })
    .state('root.user', {
      url: '/users/:id',
      controller: 'UserController as vm',
      templateUrl: 'templates/app-calendar/user.tpl.html'
    })
    .state('root.group', {
      url: '/group/:id',
      controller: 'GroupController as vm',
      templateUrl: 'templates/app-calendar/group.tpl.html'
    })
    .state('root.addGroup', {
      url: '/add-group',
      controller: 'AddGroupController as vm',
      templateUrl: 'templates/app-calendar/addGroup.tpl.html'
    })

    .state('root.addEvent', {
      url: '/add-event',
      controller: 'AddEventController as vm',
      templateUrl: 'templates/app-calendar/addEvent.tpl.html'
    })
    .state('root.joinGroup', {
      url: '/join-group',
      controller: 'GroupController as vm',
      templateUrl: 'templates/app-calendar/joinGroup.tpl.html'
    })
    .state('root.addMember', {
      url: '/add-member',
      controller: 'AddMemberController as vm',
      templateUrl: 'templates/app-calendar/addMember.tpl.html'
    })
     .state('root.deleteGroup', {
      url: '/delete-group',
      controller: 'DeleteController as vm',
      templateUrl: 'templates/app-calendar/deleteGroup.tpl.html'
    })
     .state('root.deleteUser', {
      url: '/delete-user',
      controller: 'DeleteController as vm',
      templateUrl: 'templates/app-calendar/deleteUser.tpl.html'
    })
    .state('root.deleteEvent', {
      url: '/delete-event',
      controller: 'DeleteController as vm',
      templateUrl: 'templates/app-calendar/deleteEvent.tpl.html'
    })

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;


