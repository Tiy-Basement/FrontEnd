let SignupController = function(SignupService) {
  
  let vm = this;

  vm.newUser = addUser;

  function addUser (userObj) {
    SignupService.addUser(userObj).then( (res) => {
      console.log(res);
    });
  }

};

SignupController.$inject = ['SignupService'];

export default SignupController;