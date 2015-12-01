let config = function($stateProvider, $urlRouterProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('root', {
      abstract: true,
      templateUrl: 'templates/app-layout/layout.tpl.html'
    })
    .state('root.splash', {
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
  ;

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;