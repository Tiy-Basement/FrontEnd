let SignupController = function(SignupService, $scope, $cookies, $state) {
 
  console.log('I am using my signup controller!');

  // let vm = this;

  // vm.addUser = addUser;

  $scope.addUser = function (userObj) {
    SignupService.createUser(userObj).then( (res) => {
      if (res.data.user.access_token) {  
        $cookies.put('Access-Token', res.data.user.access_token).then(
        $state.go('root.home')
        );
      } else {
        alert('There was an error creating your account. Please try again');
        $state.go('root.splash');
      }
    });
  };



};

SignupController.$inject = ['SignupService', '$scope', '$cookies','$state'];

export default SignupController;