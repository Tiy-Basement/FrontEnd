let SignupController = function(SignupService, $scope, $cookies, $state) {
 

  // let vm = this;

  // vm.addUser = addUser;

  $scope.addUser = function (userObj) {
    SignupService.createUser(userObj).then( (res) => {
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

SignupController.$inject = ['SignupService', '$scope', '$cookies','$state'];

export default SignupController;