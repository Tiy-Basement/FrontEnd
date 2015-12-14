let GroupController = function(DeleteService, $stateParams, $state, $cookies, UserService, EditService) {

  // console.log($stateParams);

  let vm = this;

  vm.deleteGroup = deleteGroup;
  vm.toGroupEdit = toGroupEdit;
  vm.editGroup = editGroup;

  let id = $stateParams.id;
  

  //deleteGroup Function
  function deleteGroup(obj) {
      DeleteService.deleteGroup(obj);
      $state.go('root.home');
  };

  function editGroup (groupObj) {
    console.log('editing the group');
    EditService.editGroup(groupObj).then( (res) => {
      console.log(res);
      $state.go('root.group', { id: res.data.group.id});
    });
  };

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

GroupController.$inject = ['DeleteService','$stateParams','$state', '$cookies', 'UserService', 'EditService'];

export default GroupController;