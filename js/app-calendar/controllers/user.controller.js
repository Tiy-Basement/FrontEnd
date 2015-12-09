let UserController = function($scope, AuthService, $state, $cookies, $stateParams, FILESERVER, UserService) {
  
  let vm = this;

  
  $scope.eventSources = [];

  $scope.logmeout = function() {
    AuthService.logout();
  };

  let promise = AuthService.checkAuth();

  if(promise) {
    promise.then( (res) => {
      console.log(res);
      if (res.data.status === 'Authentication failed.') {
        console.log('auth failed');
        $state.go('root2.splash');
      } else {
        console.log('logged in');
      }
    });
  }

};

UserController.$inject = ['$scope', 'AuthService', '$state', '$cookies', '$stateParams', 'FILESERVER', 'UserService'];

export default UserController;