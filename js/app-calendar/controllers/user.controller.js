let UserController = function($scope, AuthService, $state, $cookies, $stateParams, FILESERVER, UserService) {

  let vm = this;


  $scope.eventSources = [];
  vm.groups = [];
  vm.user =[];
  vm.userEvents = [];
  vm.activate = activate;


  //getUserGroups Function
  activate();
  function activate(userObj){
    UserService.getUserGroups(userObj).then((res) =>{
      vm.groups = res.data.groups;
      vm.user = res.data.user;
    });
  }

  //getUserEvents function 
  getUserEvents();
  function getUserEvents(obj){
    UserService.getUserEvents(obj).then((res) =>{
      vm.userEvents = res.data;
      console.log(vm.userEvents);
    })
  }

  $scope.routeToJoinGroup = function () {
    $state.go('root.joinGroup');
  }

  $scope.routeToCreateGroup = function () {
    $state.go('root.addGroup');
  }

//Log Out function 
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

};

UserController.$inject = ['$scope','AuthService', '$state', '$cookies', '$stateParams','FILESERVER','UserService'];

export default UserController;