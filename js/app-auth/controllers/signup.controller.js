let SignupController = function(SignupService, $scope, $cookies) {

  $scope.addUser = function (userObj) {
    SignupService.createUser(userObj).then( (res) => {
      console.log(res);
    });
  };



};

SignupController.$inject = ['SignupService', '$scope', '$cookies'];

export default SignupController;