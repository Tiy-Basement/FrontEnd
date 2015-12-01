let SignupController = function(SignupService, $scope, $cookies) {
 
  console.log('I am using my signup controller!');

  // let vm = this;

  // vm.addUser = addUser;

  $scope.addUser = function (userObj) {
    SignupService.createUser(userObj).then( (res) => {
      console.log(res);
    });
  };



};

SignupController.$inject = ['SignupService', '$scope', '$cookies'];

export default SignupController;