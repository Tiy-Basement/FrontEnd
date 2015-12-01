let LoginController = function(LoginService, $scope, $cookies) {
  
  $scope.login = function (userObj) {
    LoginService.reqLogin(userObj).then((res)=> {
      console.log(res);
      $cookies.put('Access-Token', res.data.user.access_token);
    });
  };

};

LoginController.$inject = ['LoginService', '$scope', '$cookies'];

export default LoginController;