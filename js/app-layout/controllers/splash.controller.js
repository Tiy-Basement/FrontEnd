let SplashController = function($state) {
  
  console.log('I am using my home controller.');

  let vm = this;

  vm.title = 'basement';
  vm.tagline = 'tagline here';
  vm.gotoLogin = gotoLogin;
  vm.gotoSignUp = gotoSignUp;

  function gotoLogin(){
    $state.go('root.login');
  }

  function gotoSignUp(){
    $state.go('root.signup');
  }

};

SplashController.$inject = ['$state'];

export default SplashController;