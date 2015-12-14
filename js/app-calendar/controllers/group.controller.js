let GroupController = function(DeleteService, $stateParams, $state, $cookies, UserService, EditService, AddService) {

  // console.log($stateParams);

  let vm = this;

  vm.editGroup = editGroup;
  vm.deleteGroup = deleteGroup;
  vm.joinGroup = joinGroup;
  vm.leaveGroup = leaveGroup;
  vm.toGroupEdit = toGroupEdit;

  let id = $stateParams.id;
 
  // edit group
  function editGroup (groupObj) {
    console.log('editing the group');
    EditService.editGroup(groupObj).then( (res) => {
      console.log(res);
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
      console.log(res);
      console.log('join group function is working');
      // $state.go('root.group', {id: res.data.group.id});
    })
  }


  //leave an existing group
  function leaveGroup() {
    DeleteService.leaveGroup().then( (res) => {
      console.log('group deleted');
      // $state.go('root.home', {the users ID});
    })
  }


  // reroute to the group edit page
  function toGroupEdit () {
    console.log('things');
    $state.go('root.editGroup', { id: $stateParams.id })
  }



  // vm.groups = [];

  // activate();

  // function activate () {
  //   UserService.getGroups().then( (res) => {
  //     vm.groups = res.data.results;
  //   });
  // }

};

GroupController.$inject = ['DeleteService','$stateParams','$state', '$cookies', 'UserService', 'EditService', 'AddService'];

export default GroupController;