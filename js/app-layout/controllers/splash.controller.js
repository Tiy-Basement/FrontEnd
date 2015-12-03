let SplashController = function($state) {
  
  console.log('I am using my home controller.');

  let vm = this;

  vm.title = 'basement';
  vm.tagline = 'tagline here';
  vm.gotoLogin = gotoLogin;
  vm.gotoSignUp = gotoSignUp;
  vm.gotoHome = gotoHome;
  function gotoLogin(){
    $state.go('root.login');
  }

  function gotoSignUp(){
    $state.go('root.signup');
  }

  function gotoHome(){
    $state.go('root.home');
  }
};

SplashController.$inject = ['$state'];

export default SplashController;