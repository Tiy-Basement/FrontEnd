let HomeController = function($scope, AuthService, $state, $cookies) {

  $scope.eventSources = [];

  $scope.logmeout = function() {
    AuthService.logout();
  };

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

HomeController.$inject = ['$scope', 'AuthService', '$state', '$cookies'];

export default HomeController;