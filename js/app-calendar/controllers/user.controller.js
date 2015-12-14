
let UserController = function($scope, AuthService, $state, $cookies, $stateParams, FILESERVER, UserService) {

  let vm = this;


  $scope.eventSources = [];
  vm.groups = [];



  //getUserGroups Function
  activate();
  function activate(userObj){
    UserService.getUserGroups(userObj).then((res) =>{
      console.log(res);
    });
  }

  $scope.logmeout = function() {
    AuthService.logout();
  };

  let promise = AuthService.checkAuth();

  if(promise) {
    promise.then( (res) => {
      console.log(res);
      if (res.data.status === 'Authentication failed.') {
        console.log('auth failed');
        $state.go('root2.splash');
      } else {
        console.log('logged in');
      }
    });
  }


  // $scope.getGroups = function () {
  //   UserService.getGroups().then( (res) => {
  //     console.log(res);
  //   });
  // };

  // // let vm = this;

  // this.groups = [];

  // this.activate = activate;

  // // activate();

  // function activate () {
  //   UserService.getGroups().then( (res) => {
  //     console.log(res);
  //     // vm.groups = res.data.results;
  //   });
  // }





  // HELP FROM TIM -- getting calendar data

  if ($stateParams) {
    // use $stateParams.id to access data from back end
  } else {
    // use $cookies.get(user_id) to access data from back end
  }

};

UserController.$inject = ['$scope','AuthService', '$state', '$cookies', '$stateParams','FILESERVER','UserService'];

export default UserController;