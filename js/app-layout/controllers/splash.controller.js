let SplashController = function($state) {
  
  console.log('I am using my splash controller.');

  let vm = this;
  // vm.welcome = 'welcome to';
  vm.title = 'basement';
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