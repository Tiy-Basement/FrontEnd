let SignupController = function(SignupService) {
  
  console.log('I am using my signup controller!');

  let vm = this;

  vm.addUser = addUser;

  function addUser (userObj) {
    SignupService.addUser(userObj).then( (res) => {
      console.log(res);
    });
  }

};

SignupController.$inject = ['SignupService'];

export default SignupController;