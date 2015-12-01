let SignupController = function(SignupService, $scope, $cookies) {

  $scope.addUser = function (userObj) {
    SignupService.createUser(userObj).then( (res) => {
      $cookies.put('Access-Token', res.data.user.access_token);
    });
  };



};

SignupController.$inject = ['SignupService', '$scope', '$cookies'];

export default SignupController;