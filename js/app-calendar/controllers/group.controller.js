let GroupController = function(GroupService, DeleteService, $stateParams, $state, $cookies, UserService, EditService, AddService, $scope) {

  let vm = this;

  vm.editGroup = editGroup;
  vm.deleteGroup = deleteGroup;

  vm.members = [];
  vm.groupName = [];
  vm.groupEvents = [];
  vm.joinGroup = joinGroup;
  vm.leaveGroup = leaveGroup;
  vm.toGroupEdit = toGroupEdit;
  vm.deleteEvent = deleteEvent;

  let id = $stateParams.id;

  // limit the number of event notes displayed
  // in html use <li ng-repeat ='event in vm.groupEvents | limitTo:quantity'>
  $scope.quantity = 5;

  //routes to add group event page
  $scope.routeToAdd = function () {
    $state.go('root.addGroupEvent', {id: $stateParams.id});
  };
  
  // edit group
  function editGroup (groupObj) {
    console.log('editing the group');
    EditService.editGroup(groupObj).then( (res) => {
      $state.go('root.group', { id: res.data.group.id});
    });
  }; 

  //deleteGroup Function
  function deleteGroup(obj) {
    DeleteService.deleteGroup(obj);
    $state.go('root.home');
  };



  // join an existing group
  function joinGroup(obj) {
    AddService.joinGroup(obj).then( (res) => {
      $state.go('root.group', {id: res.data.member.group_id});
    })
  }


  //leave an existing group
  function leaveGroup() {
    let user_id = $cookies.get('UserID');
    DeleteService.leaveGroup().then( (res) => {
      $state.go('root.home', {id: user_id});
    })
  }


  // reroute to the group edit page
  function toGroupEdit () {
    $state.go('root.editGroup', { id: $stateParams.id })
  }

  //Delete an event from the sidebar
  function deleteEvent(eventId) {
    DeleteService.deleteEvent(eventId).then((res) => {
      $state.reload($state.current);
    })
  }

  //getSingleGroup Function-- Waiting on route
  getSingleGroup();
  function getSingleGroup(obj){
    GroupService.getSingleGroup(obj).then((res) =>{
      vm.groupName = res.data.group.name;
    })
  } 

  //getMembers Function--- Waiting on route to work
  getMembers();
  function getMembers(obj){
    GroupService.getMembers(obj).then((res) => {
      vm.members = res.data.members;
    })
  }

  //get Group Events Function--- Waiting on route 
  getGroupEvents();
  function getGroupEvents(obj){
    GroupService.getGroupEvents(obj).then((res) => {
      vm.groupEvents = res.data;
      // console.log(vm.groupEvents);
    })
  }

};

GroupController.$inject = ['GroupService','DeleteService','$stateParams','$state', '$cookies', 'UserService', 'EditService', 'AddService', '$scope'];

export default GroupController;