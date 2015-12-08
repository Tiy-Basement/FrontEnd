let LoginController = function(LoginService, $scope, $cookies, $state, FILESERVER, UserService) {
  
  console.log('I am using my login controller!');

  $scope.login = function (userObj) {
    LoginService.reqLogin(userObj).then((res)=> {
      if (res.data.user.access_token) {  
        $cookies.put('Access-Token', res.data.user.access_token);
        $cookies.put('UserID', res.data.user.id);
        $state.go('root.home', { id: res.data.user.id} );
      } else {
        $state.go('root2.splash');
      }
    });
  };

  $scope.logmeout = function() {
    AuthService.logout();
  };

};

LoginController.$inject = ['LoginService', '$scope', '$cookies', '$state', 'FILESERVER', 'UserService'];

export default LoginController;

      //   alert('There was an error creating your account. Please try again');
