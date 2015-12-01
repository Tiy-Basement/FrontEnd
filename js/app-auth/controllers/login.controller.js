let LoginController = function(LoginService, $scope, $cookies) {
  
  console.log('I am using my login controller!');

  $scope.login = function (userObj) {
    LoginService.reqLogin(userObj).then((res)=> {
      $cookies.put('Access-Token', res.data.user.access_token);
    });
  };

};

LoginController.$inject = ['LoginService', '$scope', '$cookies'];

export default LoginController;