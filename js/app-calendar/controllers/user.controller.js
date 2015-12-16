let UserController = function($scope, AuthService, $state, $cookies, $stateParams, FILESERVER, UserService, DeleteService) {

  let vm = this;


  $scope.eventSources = [];
  vm.groups = [];
  vm.user =[];
  vm.userEvents = [];
  vm.activate = activate;
  vm.deleteEvent = deleteEvent;

  // limit the number of event notes displayed
  // in html use <li ng-repeat ='event in vm.userEvents | limitTo:quantity'>
  $scope.quantity = 5;

  //getUserGroups Function
  activate();
  function activate(userObj){
    UserService.getUserGroups(userObj).then((res) =>{
      vm.groups = res.data.groups;
      vm.user = res.data.user;
    });
  }

  // event note constructor
  // function EventNote (eventObj) {
  //   vm.endTime = moment(eventObj.end).format('llll');
  //   vm.id = eventObj.id;
  //   vm.location = eventObj.location;
  //   vm.note = eventObj.note;
  //   vm.startTime = moment(eventObj.start).format('llll');
  //   vm.title = eventObj.title;
  //   vm.user_id = eventObj.user_id;
  // }

  //getUserEvents function 
  getUserEvents();
  function getUserEvents(obj){
    UserService.getUserEvents(obj).then((res) =>{
      vm.userEvents = res.data;
      // let evNoObj = new EventNote(res.data[0]);
      // console.log(evNoObj);  

      // 2015-12-17T01:00:00.000Z
      // console.log(moment(res.data[0].start).format('llll'));

      // vm.userEvents.endTime = moment(res.data.end).format('llll');
      // vm.userEvents.id = res.data.id;
      // vm.userEvents.location = res.data.location;
      // vm.userEvents.note = res.data.note;
      // vm.userEvents.startTime = moment(res.data.start).format('llll');
      // vm.userEvents.user_id = res.data.user_id;
      // console.log(vm.userEvents[0]);
    })
  }

  function deleteEvent(eventId) {
    DeleteService.deleteEvent(eventId).then((res) => {
      $state.reload($state.current);
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
        $state.go('root2.splash');
      } else {
        console.log('logged in');
      }
    });
  }

};

UserController.$inject = ['$scope','AuthService', '$state', '$cookies', '$stateParams','FILESERVER','UserService', 'DeleteService'];

export default UserController;