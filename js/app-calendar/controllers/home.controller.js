let HomeController = function($scope, HomeService, AuthService, $state, $cookies) {

  console.log('Hey, home page!');
  
  let vm = this;

  vm.user = [];

  $scope.eventSources = [];

  let promise = AuthService.checkAuth();

  if(promise) {
    promise.then( (res) => {
      console.log(res);
      if (res.data.status === 'Authentication failed.') {
        $state.go('root2.splash');
      } else {
        $scope.message = 'I am logged in';
      }
    });
  }

  $scope.logmeout = function() {
    AuthService.logout();
  };

};

HomeController.$inject = ['$scope', 'HomeService', 'AuthService', '$state', '$cookies'];

export default HomeController;