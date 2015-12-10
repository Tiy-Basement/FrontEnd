
let UserController = function($scope, AuthService, $state, $cookies, $stateParams, FILESERVER, UserService) {
  
   // ASK
  // WHY ARE THREE REQUESTS SENT
 // HOW TO GET ID'S FROM USERS AND GROUPS

  let vm = this;


  $scope.eventSources = [];
  vm.groups = [];

  
  activateGroup();
  function activateGroup(obj){
    UserService.getGroups(obj).then((res) => {
      vm.groups = res.data.users;
      console.log(vm.groups);
    });
  }

  // activateUser();
  // function activateUser(obj){
  //   UserService.getUser($stateParams.user_id).then((res) => {
  //   console.log($stateParams.user_id);
  //   })
  // }

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


  // console.log($stateParams);
  // console.log($cookies.get);



  // HELP FROM TIM -- getting calendar data

  if ($stateParams) {
    // use $stateParams.id to access data from back end
  } else {
    // use $cookies.get(user_id) to access data from back end
  }

};

UserController.$inject = ['$scope','AuthService', '$state', '$cookies', '$stateParams','FILESERVER','UserService'];

export default UserController;