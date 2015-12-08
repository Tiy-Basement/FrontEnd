let UserController = function($scope, AuthService, $state, $cookies, $stateParams, FILESERVER, UserService) {
  
  var url = FILESERVER.SERVER.URL + 'users/' + $cookies.get('UserID');

  // $http.get(url).

  // console.log('Hey, home page!');

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

  // console.log($stateParams); // id is an empty string, until click on home button, then becomes ':id' ==> comes straight from url

  // activate();

  // function activate () {
  //   UserService.getUser($stateParams.id).then( (res) => {
  //     console.log(res.data);
  //   });
  // }

};

UserController.$inject = ['$scope', 'AuthService', '$state', '$cookies', '$stateParams', 'FILESERVER', 'UserService'];

export default UserController;