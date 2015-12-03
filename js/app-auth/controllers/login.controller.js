let LoginController = function(LoginService, $scope, $cookies, $state) {
  
  console.log('I am using my login controller!');

  $scope.login = function (userObj) {
    LoginService.reqLogin(userObj).then((res)=> {
      if (res.data.user.access_token) {  
        $cookies.put('Access-Token', res.data.user.access_token);
        $state.go('root.home');
      } else {
        alert('There was an error creating your account. Please try again');
        $state.go('root.splash');
      }
    });
  };

};

LoginController.$inject = ['LoginService', '$scope', '$cookies', '$state'];

export default LoginController;