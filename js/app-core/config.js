let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
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
    .state('root.signup', {
      url: '/signup',
      controller: 'SignupController as vm',
      templateUrl: 'templates/app-auth/signup.tpl.html'
    })
    .state('root.home', {
      url: '/users/:id',
      controller: 'HomeController as vm',
      templateUrl: 'templates/app-calendar/home.tpl.html'
    })
    .state('root.band', {
      url: '/goup/:id',
      controller: 'BandController as vm',
      templateUrl: 'templates/app-calendar/band.tpl.html'
    })
    .state('root.addBand', {
      url: '/add-group',
      controller: 'AddBandController as vm',
      templateUrl: 'templates/app-calendar/addBand.tpl.html'
    })
    .state('root.addMember', {
      url: '/add-member',
      controller: 'AddMemberController as vm',
      templateUrl: 'templates/app-calendar/addMember.tpl.html'
    })
    .state('root.addEvent', {
      url: '/add-event',
      controller: 'AddEventController as vm',
      templateUrl: 'templates/app-calendar/addEvent.tpl.html'
    })
  ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;